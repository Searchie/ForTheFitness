import React from 'react';

const arrow = {
  width: '0',
  height: '0',
  borderLeft: '50vw solid transparent',
  borderRight: '50vw solid transparent',
  // borderTop: '150px solid rgb(255, 221, 87, .6)',
  // borderTop: '70px solid rgb(255, 255, 255, .6)',
  borderTop: '70px solid #555A63',
  backgroundColor: 'hsl(0, 0%, 21%)',
  margin: '0px 0px 20px 0px',
  padding: '0',
  position: 'relative',
  top: '0',
  left: '0'
};

const spacer = {
  width: '100vw',
  height: '15px',
  // backgroundColor: 'hsl(48, 100%, 67%)',
  // opacity: '0.6'
  // backgroundColor: 'rgb(255, 255, 255, .6)',
  backgroundColor: '#555A63'
};

class DownArrow extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div style={spacer}></div>
        <div style={arrow}></div>
      </React.Fragment>
    );
  }
}

export default DownArrow;