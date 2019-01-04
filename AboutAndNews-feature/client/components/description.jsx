import React from 'react';
import styled from 'styled-components';
import DescriptionInfoList from './descriptionInfoList.jsx';
import axios from 'axios';

const Show = styled.a `
  color: #21ce99;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.25px;
  line-height: 19px;
  margin: 0;
`;


class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }



  render() {

    return (
      <div>
        <div>
          {this.state.open ?
            <div>
            <div className="about">
              {this.props.about.description}
              <Show onClick={this.handleClick}> Read Less</Show>
              </div>
            </div>  :
            <div>
            <div className="about">
              {this.props.minimized}
              <Show onClick={this.handleClick}> Read More</Show>
              </div>
            </div>
          }
        </div>
          <DescriptionInfoList
          open={this.props.open}
          handleClick={this.handleInfoClick}
          data={this.props.about}
          />
      </div>
    )
  }
}

export default Description;