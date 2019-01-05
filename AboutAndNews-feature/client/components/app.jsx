import React from 'react';
import axios from 'axios';
import News from './news.jsx';
import styled from 'styled-components';
import Description from './description.jsx';


const Heading = styled.h2`
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.14px;
  line-height: 30px;
  margin: 0;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #f5f5dc;
`;

const Show = styled.a`
  color: #21ce99;
`

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      clicked: false,
      about: [],
      minimized: ''
    }
    this.handleInfoClick = this.handleInfoClick.bind(this);
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  componentDidMount() {
    let id = parseInt(window.location.pathname.slice(1, window.location.pathname.length - 1))
    if (isNaN(id)) {
      id = this.getRandomNumber(1, 100);
    }

    axios
      .get(`http://fecmorgan-env-1.nwc3hnppvt.us-east-1.elasticbeanstalk.com/api/about:${id}`)
      .then(response => {
        var split = response.data.description.split('.');
        var min = split[0] + '. ' + split[1] + '.';
        this.setState({
          about: response.data,
          minimized: min
        });
      });
  }

  handleInfoClick() {
    this.setState({
      open: !this.state.open
    });
  }


  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return (
      <div>
        <div className="aboutShow">
          <Heading >About</Heading>
          {this.state.open ?
            <Show onClick={this.handleInfoClick}>Show Less</Show> :
            <Show onClick={this.handleInfoClick}>Show More</Show>}
        </div>
        <div className="description">
          <Description about={this.state.about} minimized={this.state.minimized} open={this.state.open} />
        </div>
        <Heading>News</Heading>
        <div className="news">
          <News about={this.state.about} />
        </div>
      </div>
    )
  }
}

export default App;