import React from 'react';

export default class Pure extends React.PureComponent {
  render() {
    return (
      <div>
        Pure! {(new Date()).toISOString()}
      </div>
    );
  }
}
