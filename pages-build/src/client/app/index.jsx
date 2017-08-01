import * as React from "react";
import * as ReactDOM from "react-dom";
import css from './index.scss';
import TemplateGallery from "./components/template-gallery.jsx";
import AppcHeader from "./components/appc-header.jsx";


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}





const tag = getParameterByName('tags', window.location);

ReactDOM.render(
  <div>
    <AppcHeader></AppcHeader>
    <TemplateGallery tag={tag}></TemplateGallery>
  </div>,
  document.getElementById('root')
);
