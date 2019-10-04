import * as React from 'react';
import * as ReactDOM from "react-dom";
import "./styles.scss";



class App extends React.Component {
  render() {
    return <div>Hello Errors</div>;
  }
}

var elementToMount = document.getElementById("app");
ReactDOM.render(<App />, elementToMount);