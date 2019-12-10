import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      'data': {
        'id': "whatever",
        'tag': "div",
        'style': {
          'width': "100%",
          'height': "100%"
        },
        'children': [
          {
            'id': "asfasf13rff",
            'tag': "font",
            'inner': "Whatever",
            'style': {
              'width': "100%",
              'height': "9vh",
              'display': "block",
              'text-align': "center",
              'padding': 0
            }
          },
          {
            'id': "d32f23f232",
            'tag': "object",
            'url': "https://juanmsl.github.io/ReactJS-TodoList/",
            'urlstyle': {
              'width': "50%",
              'height': "90vh"
            },
            'style': {
              'overflow': "auto",
              'border': "none",
              'width': "50%",
              'height': "90vh",
              'display': "inline-block"
            }
          },
          {
            'id': "d32f23f232",
            'tag': "object",
            'url': "http://angular-cli-ghpages.angular.schule/",
            'urlstyle': {
              'width': "50%",
              'height': "90vh"
            },
            'style': {
              'overflow': "auto",
              'border': "none",
              'width': "50%",
              'height': "90vh",
              'display': "inline-block"
            }
          }
        ]
      }
    }
  } // constructor()

  render() {
    return (
      <div style={{width: "100%", height: "100%"}}>
        <div dangerouslySetInnerHTML={{ __html: this.renderElement(this.state.data) }}/>
      </div>
    )
  } // render()

  renderElement(element) {
    let html= "<" + element.tag + " key=" + element.id + " style='";
    Object.keys(element.style).forEach(key => {
      html+= key + ": " + element.style[key] + ";";
    });
    if(element.tag === "object") {
      html+="' type='text/html' data='" + element.url + "' width='" + element.urlstyle.width + "' height='" + element.urlstyle.height;
    }
    html+="'>";

    if(element.hasOwnProperty('inner')) html+= element.inner;
    else if(element.hasOwnProperty('children')) {
      for(let i=0; i<element.children.length; i++) {
        html += this.renderElement(element.children[i]); // rekursivno
      }
    }

    html+= "</" + element.tag + ">";
    
    return html;
  } // renderElement()

} // App()