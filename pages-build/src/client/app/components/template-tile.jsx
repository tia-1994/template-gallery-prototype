import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./template-tile.scss";
import Modal from "./modal.jsx";
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

  handleFocus(event) {
    event.target.select();
  }

  render() {

    return (
      <div className="template-tile card">
        <Modal isOpen={this.state.showModal} onClose={() => this.closeModal()}>
          <div className="template-tile__use-template-dialog">
            <h1>Use template</h1>
            Copy the following URL and import it into App Connect
            <div className="template-tile__use-template-url">
              <input className="template-tile__use-template-url-display" type="url" required="" name="sharedLinkUrl" value="https://hosie.github.io/template-gallery-prototype/templates/001.json" readOnly="" tabIndex="0" autoFocus onFocus={this.handleFocus}></input>
              <button className="template-tile__use-template-url-copy">Copy</button>
            </div>
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
          <button className="button button--flat template-tile__read-more">Read more</button>
          <button  onClick={() => this.useTemplate()} className="button button--secondary">Use this Template</button>
        </div>
        </div>);
  }
}
