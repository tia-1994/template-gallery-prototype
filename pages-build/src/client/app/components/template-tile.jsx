import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./template-tile.scss";
import {Button, Modal, CodeSnippet, CopyButton, TextInput} from 'carbon-components-react';

export default class TemplateTile extends React.Component {

  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  useTemplate() {
    this.setState({showModal: true});
  }

  closeModal() {
    this.setState({showModal: false});
  }

  handleCopy() {
    console.log("copy to clipboard");
  }

  render() {

    return (
      <div className="template-tile card">
        <Modal
          open={this.state.showModal}
          onRequestClose={() => this.closeModal()}
          passiveModal
          modalLabel=""
          modalHeading="Use this template">
          <div className="bx--modal-content__text">
            <div className="template-tile__dialog-controls">
              <p>Order to cash with SAP</p>
              <CodeSnippet className="template-tile__url-field" type="code">https://asfordmatt.github.io/template-gallery-prototype/templates/001.json</CodeSnippet>
            </div>
            <br/>
            <p>How to use this URL:</p>
            <p>1. Open <a href="https://appconnect.ibmcloud.com/" target="_blank">App Connect</a></p>
            <p>2. Chose New Flow &gt; From a template</p>
            <p>3. Paste URL</p>
          </div>
        </Modal>

        <div className="template-tile__summary">
          <div className="template-tile__application">
            {
              this.props.metadata.summary &&
              this.props.metadata.summary.source &&
              <img src={"https://hosie.github.io/template-gallery-prototype/images/" + this.props.metadata.summary.source + ".svg"}></img>
            }

          </div>
          <div className="template-tile__wire"></div>
          <div className="template-tile__application">
            {
              this.props.metadata.summary &&
              this.props.metadata.summary.target &&
              <img src={"https://hosie.github.io/template-gallery-prototype/images/" + this.props.metadata.summary.target + ".svg"}></img>
            }
          </div>

        </div>
        <div className="template-tile__name">
          {this.props.metadata.name}
        </div>
        <div className="template-tile__description">
          {this.props.metadata.description}
        </div>
        <br></br>

        <br></br>
        <div className="template-tile__bottom-bar">
          <Button onClick={() => this.useTemplate()} kind="secondary">Use this Template</Button>
        </div>
        </div>);
  }
}
