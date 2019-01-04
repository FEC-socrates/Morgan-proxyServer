import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Form = styled.form`
background-color: rgb(27, 27, 29);
border-bottom-color: rgb(14, 13, 13);
border-bottom-left-radius: 2px;
border-bottom-right-radius: 2px;
border-bottom-style: none;
border-bottom-width: 0px;
border-image-outset: 0px;
border-image-repeat: stretch;
border-image-slice: 100%;
border-image-source: none;
border-image-width: 1;
border-left-color: rgb(14, 13, 13);
border-left-style: none;
border-left-width: 0px;
border-right-color: rgb(14, 13, 13);
border-right-style: none;
border-right-width: 0px;
border-top-color: rgb(14, 13, 13);
border-top-left-radius: 2px;
border-top-right-radius: 2px;
border-top-style: none;
border-top-width: 0px;
box-shadow: rgba(0, 0, 0, 0.01) 0px 0px 4px 1px, rgba(0, 0, 0, 0.6) 0px 3px 24px 0px;
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 404px;
letter-spacing: 0.25px;
line-height: 19px;
margin-top: 0px;
padding-bottom: 0px;
padding-left: 24px;
padding-right: 24px;
padding-top: 0px;
position: relative;
text-align: left;
text-size-adjust: 100%;
width: 275.766px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Header = styled.header`
align-items: center;
border-bottom-color: rgb(14, 13, 13);
border-bottom-style: solid;
border-bottom-width: 1px;
border-left-color: rgb(14, 13, 13);
border-right-color: rgb(14, 13, 13);
border-top-color: rgb(14, 13, 13);
box-sizing: border-box;
color: rgb(255, 255, 255);
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 52px;
justify-content: space-between;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 0px;
margin-left: -24px;
margin-right: -24px;
margin-top: 0px;
padding-bottom: 0px;
padding-left: 24px;
padding-right: 24px;
padding-top: 4px;
text-align: left;
text-size-adjust: 100%;
width: 275.766px;
-webkit-box-align: center;
-webkit-box-direction: normal;
-webkit-box-pack: justify;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const TitleHeader = styled.div`
align-items: center;
box-sizing: border-box;
color: rgb(255, 255, 255);
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
position: relative;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s;
transition-duration: 0.25s;
transition-property: border-color;
transition-timing-function: ease;
width: 227.766px;
-webkit-box-align: center;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const BuySellDiv = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
width: 170px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const BuySellDiv2 = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
width: 170px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const BuyDiv = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
overflow-x: hidden;
overflow-y: hidden;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s, 0s;
transition-duration: 0.25s, 0.25s;
transition-property: margin-right, opacity;
transition-timing-function: ease, ease;
white-space: nowrap;
width: 82.2812px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const BuyDiv2 = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s;
transition-duration: 0.25s;
transition-property: width;
transition-timing-function: ease;
white-space: nowrap;
width: 82.2812px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const BuySellSelected = styled.h3`
border-bottom-color: rgb(33, 206, 153);
border-bottom-style: solid;
border-bottom-width: 2px;
border-left-color: rgb(33, 206, 153);
border-right-color: rgb(33, 206, 153);
border-top-color: rgb(33, 206, 153);
box-sizing: border-box;
color: rgb(33, 206, 153);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 16px;
font-weight: 500;
height: 47px;
letter-spacing: normal;
line-height: 22px;
margin-block-end: 0px;
margin-block-start: 0px;
margin-bottom: 0px;
margin-inline-end: 12px;
margin-inline-start: 0px;
margin-left: 0px;
margin-right: 12px;
margin-top: 0px;
padding-top: 12px;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s, 0s;
transition-duration: 0.25s, 0.25s;
transition-property: border-color, color;
transition-timing-function: ease, ease;
white-space: nowrap;
width: 80px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
&:hover {
  color: rgb(33, 206, 153);
}
`;

const SellDiv = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
overflow-x: hidden;
overflow-y: hidden;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s, 0s;
transition-duration: 0.25s, 0.25s;
transition-property: margin-right, opacity;
transition-timing-function: ease, ease;
white-space: nowrap;
width: 80px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const SellDiv2 = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s;
transition-duration: 0.25s;
transition-property: width;
transition-timing-function: ease;
white-space: nowrap;
width: 80px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const BuySellUnselected = styled.h3`
border-bottom-color: rgba(0, 0, 0, 0);
border-bottom-style: solid;
border-bottom-width: 2px;
box-sizing: border-box;
color: rgb(255, 255, 255);
cursor: pointer;
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 16px;
font-weight: 500;
height: 47px;
letter-spacing: normal;
line-height: 22px;
margin-block-end: 0px;
margin-block-start: 0px;
margin-bottom: 0px;
margin-inline-end: 0px;
margin-inline-start: 0px;
margin-left: 0px;
margin-right: 0px;
margin-top: 0px;
padding-top: 12px;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s, 0s;
transition-duration: 0.25s, 0.25s;
transition-property: border-color, color;
transition-timing-function: ease, ease;
white-space: nowrap;
width: 80px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
&:hover {
  color: rgb(33, 206, 153);
}
`;

const Body = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 352px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
width: 227.766px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const MainBodyDiv = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 169px;
letter-spacing: 0.25px;
line-height: 19px;
padding-bottom: 12px;
padding-top: 12px;
position: relative;
text-align: left;
text-size-adjust: 100%;
width: 227.766px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const ButtonDiv = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 85px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
width: 227.766px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const ButtonDiv2 = styled.div`
background-color: rgb(27, 27, 29);
border-top-color: rgba(0, 0, 0, 0);
border-top-style: solid;
border-top-width: 1px;
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 85px;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 0px;
margin-left: -24px;
margin-right: -24px;
margin-top: 0px;
padding-bottom: 24px;
padding-left: 24px;
padding-right: 24px;
padding-top: 12px;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s;
transition-duration: 0.25s;
transition-property: border-color;
transition-timing-function: ease;
width: 275.766px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const ButtonDiv3 = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 48px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
width: 227.766px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Button = styled.button`
align-items: center;
background-attachment: scroll;
background-clip: border-box;
background-color: rgb(33, 206, 153);
background-image: none;
background-origin: padding-box;
background-position-x: 0%;
background-position-y: 0%;
background-repeat-x:;
background-repeat-y:;
background-size: auto;
border-bottom-color: rgb(33, 206, 153);
border-bottom-left-radius: 4px;
border-bottom-right-radius: 4px;
border-bottom-style: solid;
border-bottom-width: 1px;
border-image-outset: 0px;
border-image-repeat: stretch;
border-image-slice: 100%;
border-image-source: none;
border-image-width: 1;
border-left-color: rgb(33, 206, 153);
border-left-style: solid;
border-left-width: 1px;
border-right-color: rgb(33, 206, 153);
border-right-style: solid;
border-right-width: 1px;
border-top-color: rgb(33, 206, 153);
border-top-left-radius: 4px;
border-top-right-radius: 4px;
border-top-style: solid;
border-top-width: 1px;
box-sizing: border-box;
color: rgb(27, 27, 29);
cursor: pointer;
display: inline-flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-stretch: 100%;
font-style: normal;
font-variant-caps: normal;
font-variant-east-asian: normal;
font-variant-ligatures: normal;
font-variant-numeric: normal;
font-weight: 500;
height: 48px;
justify-content: center;
letter-spacing: normal;
line-height: 14.95px;
margin-bottom: 0px;
margin-left: 0px;
margin-right: 0px;
margin-top: 0px;
overflow-x: visible;
overflow-y: visible;
padding-bottom: 0px;
padding-left: 32px;
padding-right: 32px;
padding-top: 0px;
text-align: center;
text-indent: 0px;
text-rendering: auto;
text-shadow: none;
text-size-adjust: 100%;
text-transform: none;
width: 227.766px;
word-spacing: 0px;
writing-mode: horizontal-tb;
-webkit-appearance: none;
-webkit-box-align: center;
-webkit-box-direction: normal;
-webkit-box-pack: center;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
-webkit-border-image: none;
`;

const BuyingPowerDiv = styled.div`
align-items: center;
border-bottom-color: rgb(14, 13, 13);
border-left-color: rgb(14, 13, 13);
border-right-color: rgb(14, 13, 13);
border-top-color: rgb(14, 13, 13);
border-top-style: solid;
border-top-width: 1px;
box-sizing: border-box;
color: rgb(255, 255, 255);
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 48px;
justify-content: center;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 0px;
margin-left: -24px;
margin-right: -24px;
margin-top: 0px;
text-align: left;
text-size-adjust: 100%;
width: 275.766px;
-webkit-box-align: center;
-webkit-box-direction: normal;
-webkit-box-pack: center;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const OrderTimeRow = styled.div`
align-items: center;
box-sizing: border-box;
color: rgb(255, 255, 255);
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 38px;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 12px;
text-align: left;
text-size-adjust: 100%;
width: 227.766px;
-webkit-box-align: center;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const CheckBoxDiv = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 20px;
letter-spacing: 0.25px;
line-height: 19px;
margin-right: 12px;
text-align: left;
text-size-adjust: 100%;
width: 20px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const CheckBoxDiv2 = styled.span`
background-attachment: scroll;
background-clip: border-box;
background-color: rgb(33, 206, 153);
background-image: none;
background-origin: padding-box;
background-position-x: 0%;
background-position-y: 0%;
background-repeat-x:;
background-repeat-y:;
background-size: auto;
border-bottom-color: rgb(33, 206, 153);
border-bottom-left-radius: 4px;
border-bottom-right-radius: 4px;
border-bottom-style: solid;
border-bottom-width: 2px;
border-image-outset: 0px;
border-image-repeat: stretch;
border-image-slice: 100%;
border-image-source: none;
border-image-width: 1;
border-left-color: rgb(33, 206, 153);
border-left-style: solid;
border-left-width: 2px;
border-right-color: rgb(33, 206, 153);
border-right-style: solid;
border-right-width: 2px;
border-top-color: rgb(33, 206, 153);
border-top-left-radius: 4px;
border-top-right-radius: 4px;
border-top-style: solid;
border-top-width: 2px;
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 20px;
letter-spacing: 0.25px;
line-height: 19px;
overflow-x: hidden;
overflow-y: hidden;
position: relative;
text-align: left;
text-size-adjust: 100%;
width: 20px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const SVG = styled.svg`
box-sizing: border-box;
color: rgb(27, 27, 29);
display: block;
fill: rgb(27, 27, 29);
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 20px;
left: -2px;
letter-spacing: 0.25px;
line-height: 19px;
opacity: 1;
overflow-x: visible;
overflow-y: visible;
padding-bottom: 4px;
padding-left: 4px;
padding-right: 4px;
padding-top: 4px;
position: absolute;
text-align: left;
text-size-adjust: 100%;
top: -2px;
transform: none;
transition-delay: 0s, 0s, 0s;
transition-duration: 0.3s, 0.2s, 0.3s;
transition-property: transform, opacity, -webkit-transform;
transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28), ease, cubic-bezier(0.18, 0.89, 0.32, 1.28);
width: 20px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const G = styled.g`
box-sizing: border-box;
color: rgb(27, 27, 29);
display: inline;
fill: rgb(27, 27, 29);
fill-rule: evenodd;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: auto;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 7.41392, -2.6568);
transform-origin: 0px 0px;
width: auto;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Rect1 = styled.rect`
box-sizing: border-box;
color: rgb(27, 27, 29);
display: inline;
fill: rgb(27, 27, 29);
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 10px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
transform-origin: 0px 0px;
width: 2px;
x: 4px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Rect2 = styled.rect`
box-sizing: border-box;
color: rgb(27, 27, 29);
display: inline;
fill: rgb(27, 27, 29);
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 2px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
transform-origin: 0px 0px;
width: 5px;
y: 8px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const OrderTimeSpan = styled.span`
box-sizing: border-box;
color: rgb(140, 140, 142);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 38px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
width: 195.766px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const FormGroup = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 48px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
width: 227.766px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Label = styled.label`
align-items: center;
box-sizing: border-box;
color: rgb(255, 255, 255);
cursor: default;
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 48px;
justify-content: space-between;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
white-space: nowrap;
width: 227.766px;
-webkit-box-align: center;
-webkit-box-direction: normal;
-webkit-box-pack: justify;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Shares = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
cursor: default;
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 19px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
white-space: nowrap;
width: 41.6719px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const SharesInputDiv = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
cursor: default;
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 36px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
white-space: nowrap;
width: 82px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const SharesInput = styled.input`
background-attachment: scroll;
background-clip: border-box;
background-color: rgb(23, 23, 24);
background-image: none;
background-origin: padding-box;
background-position-x: 0%;
background-position-y: 0%;
background-repeat-x:;
background-repeat-y:;
background-size: auto;
border-bottom-color: rgb(23, 23, 24);
border-bottom-left-radius: 4px;
border-bottom-right-radius: 4px;
border-bottom-style: solid;
border-bottom-width: 1px;
border-image-outset: 0px;
border-image-repeat: stretch;
border-image-slice: 100%;
border-image-source: none;
border-image-width: 1;
border-left-color: rgb(23, 23, 24);
border-left-style: solid;
border-left-width: 1px;
border-right-color: rgb(23, 23, 24);
border-right-style: solid;
border-right-width: 1px;
border-top-color: rgb(23, 23, 24);
border-top-left-radius: 4px;
border-top-right-radius: 4px;
border-top-style: solid;
border-top-width: 1px;
box-sizing: border-box;
color: rgb(255, 255, 255);
cursor: text;
display: inline-block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-stretch: 100%;
font-style: normal;
font-variant-caps: normal;
font-variant-east-asian: normal;
font-variant-ligatures: normal;
font-variant-numeric: normal;
font-weight: 400;
height: 36px;
letter-spacing: normal;
line-height: 19.5px;
margin-bottom: 0px;
margin-left: 0px;
margin-right: 0px;
margin-top: 0px;
outline-color: rgb(255, 255, 255);
outline-style: none;
outline-width: 0px;
overflow-x: visible;
overflow-y: visible;
padding-bottom: 0px;
padding-left: 13px;
padding-right: 13px;
padding-top: 0px;
text-align: right;
text-indent: 0px;
text-rendering: auto;
text-shadow: none;
text-size-adjust: 100%;
text-transform: none;
transition-delay: 0s;
transition-duration: 0.2s;
transition-property: border-color;
transition-timing-function: ease;
white-space: nowrap;
width: 82px;
word-spacing: 0px;
writing-mode: horizontal-tb;
-webkit-appearance: none;
-webkit-box-direction: normal;
-webkit-rtl-ordering: logical;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
-webkit-border-image: none;
&:hover {
  border-top-color: rgb(132, 132, 134);
  border-bottom-color: rgb(132, 132, 134);
  border-left-color: rgb(132, 132, 134);
  border-right-color: rgb(132, 132, 134);
}
`;

const MarketPriceRow = styled.div`
align-items: center;
box-sizing: border-box;
color: rgb(255, 255, 255);
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 48px;
justify-content: space-between;
letter-spacing: 0.25px;
line-height: 19px;
padding-right: 12px;
position: relative;
text-align: left;
text-size-adjust: 100%;
white-space: nowrap;
width: 227.766px;
-webkit-box-align: center;
-webkit-box-direction: normal;
-webkit-box-pack: justify;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const MarketPriceDiv1 = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 48px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
white-space: nowrap;
width: 78.1719px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const MarketPriceDiv2 = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 48px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
white-space: nowrap;
width: 78.1719px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const MarketPrice = styled.a`
align-items: center;
background-color: rgba(0, 0, 0, 0);
border-bottom-color: rgba(0, 0, 0, 0);
border-bottom-style: solid;
border-bottom-width: 2px;
box-sizing: border-box;
color: rgb(33, 206, 153);
cursor: pointer;
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 500;
height: 48px;
letter-spacing: 0.25px;
line-height: 19px;
padding-top: 2px;
text-align: left;
text-decoration-color: rgb(33, 206, 153);
text-decoration-line: none;
text-decoration-style: solid;
text-size-adjust: 100%;
white-space: nowrap;
width: 78.1719px;
-webkit-box-align: center;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const MarketPriceSpan = styled.span`
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 500;
height: 19px;
letter-spacing: 0.25px;
line-height: 19px;
overflow-x: hidden;
overflow-y: hidden;
text-align: right;
text-overflow: ellipsis;
text-size-adjust: 100%;
white-space: nowrap;
width: 47.9219px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const EstimatedCostRow = styled.div`
border-bottom-color: rgb(14, 13, 13);
border-left-color: rgb(14, 13, 13);
border-right-color: rgb(14, 13, 13);
border-top-color: rgb(14, 13, 13);
border-top-style: solid;
border-top-width: 1px;
box-sizing: border-box;
color: rgb(255, 255, 255);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 500;
height: 49px;
letter-spacing: 0.25px;
line-height: 19px;
padding-right: 12px;
text-align: left;
text-size-adjust: 100%;
width: 227.766px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const EstimatedCostLabel = styled.label`
align-items: center;
box-sizing: border-box;
color: rgb(255, 255, 255);
cursor: default;
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 500;
height: 48px;
justify-content: space-between;
letter-spacing: 0.25px;
line-height: 19px;
min-height: 48px;
text-align: left;
text-size-adjust: 100%;
white-space: nowrap;
width: 215.766px;
-webkit-box-align: center;
-webkit-box-direction: normal;
-webkit-box-pack: justify;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const ECDiv1 = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
cursor: default;
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 500;
height: 19px;
letter-spacing: 0.25px;
line-height: 19px;
margin-right: 12px;
min-width: 48px;
overflow-x: hidden;
overflow-y: hidden;
text-align: left;
text-overflow: ellipsis;
text-size-adjust: 100%;
white-space: nowrap;
width: 110px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const ECDiv2 = styled.div`
box-sizing: border-box;
color: rgb(255, 255, 255);
cursor: default;
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 500;
height: 19px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
white-space: nowrap;
width: 45px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const newOne = styled.div`

`;

class BuySell extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        stockName: '',
        stockTicker: '',
        currentPrice: 0,
        shares: 0,
        estimatedCost: 0,
        orderDescription: 'Estimated Cost',
        userShares: 103,
        userBalance: 246.42,
        sharesBalance: ``,
        borderTopColor: '',
        borderBottomColor: '',
        borderLeftColor: '',
        borderRightColor: '',
        clickBorderBottomColor: '',
        color: '',
        marginInlineEnd: '',
        marginRight: '',
        width: '',
        isSelectedBuy: true,
        isSelectedSell: false
      }
      this.buyStock = this.buyStock.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.buySellClick = this.buySellClick.bind(this);
      this.sharesClick = this.sharesClick.bind(this);
      this.sharesBlur = this.sharesBlur.bind(this);
      this.sharesHover = this.sharesHover.bind(this);
      this.sharesLeaveHover = this.sharesLeaveHover.bind(this);
      this.changeStock = this.changeStock.bind(this);
  }

  componentWillMount() {
    this.changeStock();
  }

  componentDidMount() {
    this.setState({
      sharesBalance: `${this.state.userBalance} Buying Power Available`,
      isSelectedBuy: true,
      isSelectedSell: false
    })
  }

  changeStock() {
    axios.get('http://localhost:3333/stocks').then(res => {
      const stocks = res.data;
      const id = parseInt(window.location.pathname.slice(1, window.location.pathname.length-1))
      var urlStock = {}
      for (var i=0; i < stocks.length; i++) {
        if (stocks[i]._id === id) {
            urlStock = stocks[i];
        }
      }
      console.log('STOCCCCCCKK', urlStock, id)
      this.setState({
        stockName: urlStock.stockName,
        stockTicker: urlStock.stockTicker,
        currentPrice: urlStock.currentPrice,
      })
    })
  }

  sharesHover() {
    if (this.state.borderBottomColor !== 'rgb(33, 206, 153)'){
      this.setState({
        borderTopColor: 'rgb(132, 132, 134)',
        borderBottomColor: 'rgb(132, 132, 134)',
        borderLeftColor: 'rgb(132, 132, 134)',
        borderRightColor: 'rgb(132, 132, 134)'
      })
    }
  }

  sharesLeaveHover() {
    if (this.state.borderBottomColor !== 'rgb(33, 206, 153)'){
      this.setState({
        borderTopColor: 'rgb(23, 23, 24)',
        borderBottomColor: 'rgb(23, 23, 24)',
        borderLeftColor: 'rgb(23, 23, 24)',
        borderRightColor: 'rgb(23, 23, 24)'
      })
    }
  }

  sharesClick(e) {
    this.setState({
      borderTopColor: 'rgb(33, 206, 153)',
      borderBottomColor: 'rgb(33, 206, 153)',
      borderLeftColor: 'rgb(33, 206, 153)',
      borderRightColor: 'rgb(33, 206, 153)'
    })
  }

  sharesBlur() {
    this.setState({
      borderTopColor: 'rgb(23, 23, 24)',
      borderBottomColor: 'rgb(23, 23, 24)',
      borderLeftColor: 'rgb(23, 23, 24)',
      borderRightColor: 'rgb(23, 23, 24)'
    })
  }

  buySellClick(e) {
    console.log('CLICK!!!!', e.target.id, 'BUY', this.state.isSelectedBuy, 'SELL', this.state.isSelectedSell)
    if (e.target.id === 'sell') {
      this.setState({
        orderDescription: 'Estimated Credit',
        sharesBalance: `${this.state.userShares} Shares Available`,
        isSelectedBuy: false,
        isSelectedSell: true
      })
    } else {
      this.setState({
        orderDescription: 'Estimated Cost',
        sharesBalance: `${this.state.userBalance} Buying Power Available`,
        isSelectedBuy: true,
        isSelectedSell: false
      })
    }
  }

  handleChange(e) {
    e.preventDefault();
    var cost = (e.target.value * this.state.currentPrice)
    this.setState({
      shares: e.target.value,
      estimatedCost: cost.toFixed(2)
    })
  }

  buyStock(e) {

    const orderType = this.state.isSelectedBuy ? 'Market Buy' : 'Market Sell'
    console.log('ORDER TYPE', orderType);
    const transaction = {
      stockName: this.state.stockName,
      stockTicker: this.state.stockTicker,
      currentPrice: this.state.currentPrice,
      quantity: this.state.shares,
      orderType: orderType
    };
    if (this.state.shares !== 0){
      axios.post('http://localhost:3333/transactions', transaction)
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }

  render() {
      const highlightedBuy = this.state.isSelectedBuy ?
        <BuySellSelected style={{borderBottomColor: this.state.clickBorderBottomColor, color: this.state.color, marginInlineEnd: this.state.marginInlineEnd, marginRight: this.state.marginRight, width: this.state.width}} id='buy' onClick={this.buySellClick}>
        Buy {this.state.stockTicker}
        </BuySellSelected> :
        <BuySellUnselected style={{borderBottomColor: this.state.clickBorderBottomColor, color: this.state.color, marginInlineEnd: this.state.marginInlineEnd, marginRight: this.state.marginRight, width: this.state.width}} id='buy' onClick={this.buySellClick}>
        Buy {this.state.stockTicker}
        </BuySellUnselected>
      const highlightedSell = this.state.isSelectedSell ?
        <BuySellSelected style={{borderBottomColor: this.state.clickBorderBottomColor, color: this.state.color, marginInlineEnd: this.state.marginInlineEnd, marginRight: this.state.marginRight, width: this.state.width}} id='sell' onClick={this.buySellClick}>
        Sell {this.state.stockTicker}
        </BuySellSelected> :
        <BuySellUnselected style={{borderBottomColor: this.state.clickBorderBottomColor, color: this.state.color, marginInlineEnd: this.state.marginInlineEnd, marginRight: this.state.marginRight, width: this.state.width}} id='sell' onClick={this.buySellClick}>
        Sell {this.state.stockTicker}
        </BuySellUnselected>
    return (
    <Form>
      <Header>
        <TitleHeader>
          <BuySellDiv>
            <BuySellDiv2 onClick={this.parentClick}>
              <BuyDiv>
                <BuyDiv2>
                  {highlightedBuy}
                </BuyDiv2>
              </BuyDiv>
              <SellDiv>
                <SellDiv2>
                  {highlightedSell}
                </SellDiv2>
              </SellDiv>
            </BuySellDiv2>
          </BuySellDiv>
        </TitleHeader>
      </Header>
      <Body>
        <MainBodyDiv>
        <FormGroup>
          <Label>
            <Shares>Shares</Shares>
            <SharesInputDiv>
              <SharesInput style={{borderTopColor: this.state.borderTopColor, borderBottomColor: this.state.borderBottomColor, borderLeftColor: this.state.borderLeftColor, borderRightColor: this.state.borderRightColor}} placeholder='0' onChange={this.handleChange} onClick={this.sharesClick} onBlur={this.sharesBlur} onMouseOver={this.sharesHover} onMouseLeave={this.sharesLeaveHover}></SharesInput>
            </SharesInputDiv>
          </Label>
        </FormGroup>
        <MarketPriceRow>
          <MarketPriceDiv1>
            <MarketPriceDiv2>
              <MarketPrice>Market Price</MarketPrice>
            </MarketPriceDiv2>
          </MarketPriceDiv1>
          <MarketPriceSpan>{this.state.currentPrice}</MarketPriceSpan>
        </MarketPriceRow>
        <EstimatedCostRow>
          <EstimatedCostLabel>
            <ECDiv1>{this.state.orderDescription}</ECDiv1>
            <ECDiv2>{this.state.estimatedCost}</ECDiv2>
          </EstimatedCostLabel>
        </EstimatedCostRow>
        </MainBodyDiv>
        <OrderTimeRow>
          <CheckBoxDiv>
            <CheckBoxDiv2>
              <SVG>
                <G>
                  <Rect1></Rect1>
                  <Rect2></Rect2>
                </G>
              </SVG>
            </CheckBoxDiv2>
          </CheckBoxDiv>
          <OrderTimeSpan>This order should only execute during normal market hours.</OrderTimeSpan>
        </OrderTimeRow>
        <ButtonDiv>
          <ButtonDiv2>
            <ButtonDiv3>
            <Button onClick={this.buyStock}>Review Order</Button>
            </ButtonDiv3>
          </ButtonDiv2>
        </ButtonDiv>
        <BuyingPowerDiv>{this.state.sharesBalance}
        </BuyingPowerDiv>
      </Body>
    </Form>
    );
  }
};

export default BuySell;
