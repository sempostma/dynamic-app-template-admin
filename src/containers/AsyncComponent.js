// https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html

import React, { Component } from "react";
import Loading from "../components/Loading/Loading";

export default function asyncComponent(importComponent, loadingComponent = Loading) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: loadingComponent
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}