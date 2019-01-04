import React from 'react';
import styled from 'styled-components';

const CeoName = styled.div`
  color: #21ce99;
`;


const DescriptionInfoList = (props) => {
  return (
    <div>
    {props.open === false ?
      <div className="info">
          <div className="infoItem">
            <h3>CEO</h3>
            <CeoName onClick={() => (console.log('clicked'))}>{props.data.ceo}</CeoName>
          </div>
          <div className="infoItem">
            <h3>Employees</h3>
            <div>{props.data.employees}</div>
          </div>
          <div className="infoItem">
            <h3>Headquarters</h3>
            <div>{props.data.headquarters}</div>
          </div>
          <div className="infoItem">
            <h3>Founded</h3>
            <div>{props.data.founded}</div>
          </div>
          <div className="infoItem">
            <h3>Market Cap</h3>
            <div>{props.data.marketCap}</div>
          </div>
          <div className="infoItem">
            <h3>Price-Earnings Ratio</h3>
            <div>{props.data.priceEarnings}</div>
          </div>
          <div className="infoItem">
            <h3>Dividend Yield</h3>
            <div>{props.data.dividendYield}</div>
          </div>
          <div className="infoItem">
            <h3>Average Volume</h3>
            <div>{props.data.avgVolume}</div>
          </div>
        </div> :
        <div className="info">
          <div className="infoItem">
            <h3>CEO</h3>
            <CeoName>{props.data.ceo}</CeoName>
          </div>
          <div className="infoItem">
            <h3>Employees</h3>
            <div>{props.data.employees}</div>
          </div>
          <div className="infoItem">
            <h3>Headquarters</h3>
            <div>{props.data.headquarters}</div>
          </div>
          <div className="infoItem">
            <h3>Founded</h3>
            <div>{props.data.founded}</div>
          </div>
          <div className="infoItem">
            <h3>Market Cap</h3>
            <div>{props.data.marketCap}</div>
          </div>
          <div className="infoItem">
            <h3>Price-Earnings Ratio</h3>
            <div>{props.data.priceEarnings}</div>
          </div>
          <div className="infoItem">
            <h3>Dividend Yield</h3>
            <div>{props.data.dividendYield}</div>
          </div>
          <div className="infoItem">
            <h3>Average Volume</h3>
            <div>{props.data.avgVolume}</div>
          </div>
          <div className="infoItem">
            <h3>High Today</h3>
            <div>{props.data.highToday}</div>
          </div>
          <div className="infoItem">
            <h3>Low Today</h3>
            <div>{props.data.lowToday}</div>
          </div>
          <div className="infoItem">
            <h3>Open Price</h3>
            <div>{props.data.openPrice}</div>
          </div>
          <div className="infoItem">
            <h3>Volume</h3>
            <div>{props.data.volume}</div>
          </div>
          <div className="infoItem">
            <h3>52 Week High</h3>
            <div>{props.data.weekHigh}</div>
          </div>
          <div className="infoItem">
            <h3>52 Week Low</h3>
            <div>{props.data.weekLow}</div>
          </div>
        </div>
      }
    </div>
  )
}

export default DescriptionInfoList;
