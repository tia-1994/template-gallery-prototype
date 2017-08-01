import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./appc-header.scss";

export default class AppcHeader extends React.Component {
  render() {
    return (
      <div className="appc-header">
        <div className="appc-header__side-nav-toggle"></div>
        <a className="appc-header__product-name-link" href="https://designer.appconnect.ibmcloud.com">
          <h1 className="appc-header__product-name">IBM App Connect</h1>
        </a>
      </div>
    )
  }
}
