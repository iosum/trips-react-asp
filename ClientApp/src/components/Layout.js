import React, { Component } from 'react';
import { Container } from 'reactstrap';
// remove the {} as NavMenu is not a class based component
import  NavMenu  from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
