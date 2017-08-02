import * as React from "react";
import * as ReactDOM from "react-dom";
import TemplateTile from "./template-tile.jsx";
import css from "./template-gallery.scss";

import 'whatwg-fetch';

class TemplateGallery extends React.Component {

  constructor() {
    super();
    this.state = {
      templates: [],
    };
  }

  componentDidMount() {
    console.log("fetching");
    fetch(`https://hosie.github.io/template-gallery-prototype/en/repo_metadata.json`)
    .then(response => {
      console.log("got response")
      return response.json();

    })
    .then(responseJson => {
      this.setState({templates: responseJson.templates});
    })
    .catch(err => {
      console.log("got error");
    });
  }


  render() {
    console.log("Render TemplateGallery");

    return (
      <div className="template-gallery">
        <h1 className="template-gallery__heading">Templates</h1>
        <div className="template-gallery__tile-container">
          {
            this.state.templates.filter(
              (templateMetadata) => {
                if(this.props.tag) {
                  return templateMetadata.tags.includes(this.props.tag);
                } else {
                  return true;
                }

              }
            ).map(
              (templateMetadata) => {
              return <TemplateTile metadata={templateMetadata}></TemplateTile>
            })
          }
        </div>

      </div>
    );
  }
}

export default TemplateGallery
