import React from 'react';

import './head.scss';

export default class Head extends React.Component {
  render() {
    return (
      <div className="m-head">
        <div className="container">
          <div className="u-icon">ICON HERE</div>
          <div className="u-menu">
            <div className="u-menu-link">About</div>
            <div className="u-menu-link">Pages</div>
            <div className="u-menu-link">Features</div>
            <div className="u-menu-link">Blog</div>
            <div className="u-menu-link">Contact</div>
          </div>
        </div>
      </div>
    );
  }
}
