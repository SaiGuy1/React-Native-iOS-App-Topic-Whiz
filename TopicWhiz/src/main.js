import React from 'react';
import {
  Navigatior
} from 'react-native';

const routes = {
  //
}

module.exports = React.createClass({
  render() {
    <Navigatior
      initialRoute={{name: 'signIn'}}
      renderScene={this.renderScene}
    />
  },

  renderScene(route, navigator) {
    let Component = routes[route.name];

    return (
      <Component
        navigatior={navigator}
      />
    )
  }
})
