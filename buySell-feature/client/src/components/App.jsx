import React from 'react';
import BuySell from './BuySell.jsx';
import History from './History.jsx';
import axios from 'axios';
import styled from 'styled-components';

const Body = styled.div`
background-attachment: scroll;
background-clip: border-box;
background-color: rgb(27, 27, 29);
background-image: none;
background-origin: padding-box;
background-position-x: 0%;
background-position-y: 0%;
background-repeat-x:;
background-repeat-y:;
background-size: auto;
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 0px;
margin-left: 0px;
margin-right: 0px;
margin-top: 0px;
padding-bottom: 0px;
padding-left: 0px;
padding-right: 0px;
padding-top: 0px;
text-size-adjust: 100%;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const RootDiv = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 0px;
margin-left: 0px;
margin-right: 0px;
margin-top: 0px;
padding-bottom: 0px;
padding-left: 0px;
padding-right: 0px;
padding-top: 0px;
text-size-adjust: 100%;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Div = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 0px;
margin-left: 0px;
margin-right: 0px;
margin-top: 0px;
padding-bottom: 0px;
padding-left: 0px;
padding-right: 0px;
padding-top: 0px;
text-size-adjust: 100%;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Main = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
min-width: 1036px;
text-size-adjust: 100%;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const MainContainer = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 0px;
margin-left: 6px;
margin-right: 6px;
margin-top: 0px;
padding-top: 36px;
text-align: left;
text-size-adjust: 100%;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Row = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
justify-content: space-between;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 0px;
margin-left: -6px;
margin-right: -6px;
margin-top: 0px;
text-align: left;
text-size-adjust: 100%;
-webkit-box-direction: normal;
-webkit-box-pack: justify;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const ColL = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
flex-basis: 66.6667%;
flex-grow: 0;
flex-shrink: 0;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
padding-left: 6px;
padding-right: 6px;
text-align: left;
text-size-adjust: 100%;
-webkit-box-direction: normal;
-webkit-box-flex: 0;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const ColR = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
flex-basis: 27.7778%;
flex-grow: 0;
flex-shrink: 0;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
margin-right: 0px;
padding-left: 6px;
padding-right: 6px;
text-align: left;
text-size-adjust: 100%;
-webkit-box-direction: normal;
-webkit-box-flex: 0;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const SideBarDiv = styled.div`
align-items: center;
box-sizing: border-box;
color: rgb(255, 255, 255);
display: flex;
flex-direction: column;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 0px;
position: fixed;
text-align: left;
text-size-adjust: 100%;
top: 95px;
-webkit-box-align: center;
-webkit-box-direction: normal;
-webkit-box-orient: vertical;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    }
  }

  componentWillMount() {
    axios.get('http://localhost:3333/transactions').then(res => {
      this.setState({
        transactions: res.data
      })
    })
  }

  render() {
    return (
      <Body>
      <RootDiv>
        <Div>
          <Main>
            <MainContainer>
              <Row>
                <ColL>
                <History transactions={this.state.transactions}/>
                </ColL>
                <ColR>
                <SideBarDiv>
                <BuySell />
                </SideBarDiv>
                </ColR>
              </Row>
            </MainContainer>
        </Main>
        </Div>
      </RootDiv>
      </Body>
    )
  }
};

export default App;
