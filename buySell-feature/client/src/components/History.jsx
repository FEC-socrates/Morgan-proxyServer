import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Transaction from './Transaction.jsx';

const Section = styled.section`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 60px;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s;
transition-duration: 0.3s;
transition-property: background;
transition-timing-function: ease;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0)
`;

const Header = styled.header`
border-bottom-color: rgb(255, 255, 255);
border-bottom-style: none;
border-bottom-width: 0px;
border-image-outset: 0px;
border-image-repeat: stretch;
border-image-slice: 100%;
border-image-source: none;
border-image-width: 1;
border-left-color: rgb(255, 255, 255);
border-left-style: none;
border-left-width: 0px;
border-right-color: rgb(255, 255, 255);
border-right-style: none;
border-right-width: 0px;
border-top-color: rgb(255, 255, 255);
border-top-style: none;
border-top-width: 0px;
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 24px;
padding-bottom: 0px;
text-align: left;
text-size-adjust: 100%;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const HeaderDiv = styled.div`
align-items: baseline;
box-sizing: border-box;
color: rgb(255, 255, 255);
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
justify-content: space-between;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
-webkit-box-align: baseline;
-webkit-box-direction: normal;
-webkit-box-pack: justify;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const H2 = styled.h2`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 26px;
font-weight: 500;
letter-spacing: -0.14px;
line-height: 30px;
margin-block-end: 0px;
margin-block-start: 0px;
margin-bottom: 0px;
margin-inline-end: 0px;
margin-inline-start: 0px;
margin-left: 0px;
margin-right: 0px;
margin-top: 0px;
text-align: left;
text-size-adjust: 100%;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Div1 = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: this.props.transactions
    }
  }

  render() {
    return (
     <div>
       <Section>
        <Header><HeaderDiv><H2>History</H2></HeaderDiv></Header>
          <Div1>
            {this.props.transactions.map((tx, i) => {
              return <Transaction key={i} tx={tx} />
            })}
          </Div1>
       </Section>
     </div>
    )
  }
};

export default History;
