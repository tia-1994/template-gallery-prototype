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
            copy the following URL and import it into App Connect
            <input className="template-tile__use-template-url" type="url" required="" name="sharedLinkUrl" value="https://hosie.github.io/template-gallery-prototype/templates/001.json" readOnly="" tabIndex="0" autoFocus onFocus={this.handleFocus}></input>
          </div>
        </Modal>
        <div className="template-tile__summary">
          <div className="template-tile__application">
            <svg style={{fill: '#00A0E4'}}>
              <use xlinkHref="
    https://appconnect.ibmcloud.com/wp-content/themes/appconnect-new/img/sprites/svg/sprite.svg#sprite-crm"></use>
            </svg>
          </div>
          <div className="template-tile__wire"></div>
          <div className="template-tile__application"></div>

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
