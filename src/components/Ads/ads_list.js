import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

import AdItem from './ad_item';

class AdsList extends Component {
  render() {
    return (
      <div>
        <AdItem />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    translate: getTranslate(state.locale)
  }
};
export default connect(mapStateToProps)(AdsList);