import React from 'react';

import './foot.scss';

export default class Foot extends React.Component {
  render() {
    return (
      <div className="m-foot">
        <div className="container">
          <div className="links">链接</div>
          <div className="copyright">版权</div>
        </div>
      </div>
    );
  }
}
