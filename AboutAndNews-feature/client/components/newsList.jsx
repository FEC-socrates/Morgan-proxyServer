import React from 'react';
import styled from 'styled-components';
import eye from "./eye.png";

const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 22px;
  margin: 0;
  margin-bottom: 2px;
`;

const Desc = styled.div`
  font-size: 16px;
  padding-bottom: 30px;
  letter-spacing: 0;
  line-height: 22px;
  margin: 0;
  font-weight: lighter;
`;

const Name = styled.div`
  margin-top: -4px;
  font-weight: 600;
`;

const View = styled.span`
  margin-top: auto;
  padding: 10px;

`;

const Hover = styled.div`
  background-color: #171718;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;



const NewsList = (props) => {

  return (
    <div>
    {props.hover === false ?
    <div className="media"
      onMouseEnter={props.handleHover1}
      onMouseLeave={props.handleHover2}>
      <div className="image">
        <img src={props.data.pictureUrl} width="200" height="135"/>
      </div>
      <div className="content">
      <Flex>
        <Name>{props.data.name}</Name>
        <div>{props.data.hour}</div>
      </Flex>
        <strong><Title>{props.data.title}</Title></strong>
        <Desc>{props.data.description}</Desc>
        <img src={eye}/><View>{props.data.views}</View>
      </div>
    </div> :
    <Hover className="media">
      <div className="image">
        <img src={props.data.pictureUrl} width="200" height="135"/>
      </div>
      <div className="content"
        onMouseEnter={props.handleHover1}
        onMouseLeave={props.handleHover2}
      >
      <Flex>
        <Name>{props.data.name}</Name>
        <div>{props.data.hour}</div>
      </Flex>
        <strong><Title>{props.data.title}</Title></strong>
        <Desc>{props.data.description}</Desc>
        <img src={eye}/><View>{props.data.views}</View>
      </div>
    </Hover>
    }
    </div>
  )
}

export default NewsList;
