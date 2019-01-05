import React from 'react';
import NewsList from './newsList.jsx';
import axios from 'axios';


class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      hover: false,
      about_id: 1
    }

    this.handleNewsClick = this.handleNewsClick.bind(this);
    this.handleHover1 = this.handleHover1.bind(this);
    this.handleHover2 = this.handleHover2.bind(this);
  }

  componentDidMount() {
    axios.get(`http://fecmorgan-env-1.nwc3hnppvt.us-east-1.elasticbeanstalk.com/api/news`)
      .then(response => {
        console.log(response.data)
        this.setState({
          news: response.data
        });
      });
  }

  handleNewsClick(e) {
    var newNews = this.state.news;
    for (var i = 0; i < newNews.length; i++) {
      if (e.target.innerHTML === newNews[i].title || e.target.innerHTML === newNews[i].name || e.target.innerHTML === newNews[i].description) {
        newNews[i].views = Number(newNews[i].views) + 1;
        axios.put("http://fecmorgan-env-1.nwc3hnppvt.us-east-1.elasticbeanstalk.com/save", newNews[i])
          .then(response => {
            console.log('saved succesfully');
          });
      }
    }
    this.setState({
      news: newNews
    });
  }

  handleHover1() {
    this.setState({
      hover: true
    })
  }
  handleHover2() {
    this.setState({
      hover: false
    })
  }

  render() {
    console.log(this.props.about.id)

    var items = this.state.news.map((item, index) => {
      if (item.about_id === this.props.about.id) {
        return item;
      }
    })
    var items2 = []
    for (var i = 0; i < items.length; i++) {
      if (items[i] !== undefined) {
        items2.push(items[i]);
      }
    }

    return (
      <div className="news"
        onClick={this.handleNewsClick}
      >
        <div>
          {items2.map((item, index) => {
            return <NewsList data={item} key={index} handleHover1={this.handleHover1}
              handleHover2={this.handleHover2}
              hover={this.state.hover} />
          })}
        </div>
      </div>
    )
  }
}

export default News;
