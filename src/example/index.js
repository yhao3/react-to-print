import React from "react";
import ReactToPrint from "react-to-print";
import "../example/index.css";

const data = [
  {
    name: "AAA",
    lastname: "BBB",
    mobile: "123"
  }
];

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div class="book">
        <div class="page">
          <div class="subpage">Page 1/2</div>
        </div>
        <div class="page">
          <div class="subpage">Page 2/2</div>
        </div>
      </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;
