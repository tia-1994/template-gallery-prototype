import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./appc-header.scss";
import {Link} from 'carbon-components-react';

export default class AppcHeader extends React.Component {
  render() {
    return (
      <div className="appc-header">
        <div className="appc-header__side-nav-toggle"></div>
        <div className="appc-header__main">
          <a className="appc-header__product-name-link" href="https://designer.appconnect.ibmcloud.com">
            <h1 className="appc-header__product-name">IBM App Connect</h1>
          </a>
          <Link className="appc-header__product-link" href="https://designer.appconnect.ibmcloud.com" target="_blank">Open App Connect</Link>
        </div>
      </div>
    )
  }
}
