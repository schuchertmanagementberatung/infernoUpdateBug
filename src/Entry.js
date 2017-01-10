import React from 'react';
import Pure from './Pure';
import Conditional from './Conditional';

export default class Entry extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };
  toggleConditional = () => {
    const { location } = this.props;
    const { p } = location.query;
    const { router } = this.context;
    router.replace({
      pathname: location.pathname,
      query: {
        p: p ? null : 'test',
      },
    });
  }
  render() {
    const { location, children } = this.props;
    const { p } = location.query;
    return (
      <div>
        <div>
          {children}
        </div>
        { p && (<Conditional/>)}
        <button onClick={this.toggleConditional}>
          Toggle
        </button>
      </div>
    )
  }
}