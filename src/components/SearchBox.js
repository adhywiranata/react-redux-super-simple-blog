import React from 'react';
import { connect } from 'react-redux';

import { setSearchKeyword } from '../actions';

const styles = {
  searchBox: {
    width: '50%',
  },
  searchInput: {
    padding: 10,
    width: '100%',
    fontSize: '1.2em',
    outline: 'none',
    margin: 15,
  },
};

const SearchBox = props => (
  <div style={styles.searchBox}>
    <input
      type="text"
      value={props.searchKeyword}
      onChange={e => props.setSearchKeyword(e.target.value)}
      placeholder={'search here...'}
      style={styles.searchInput}
    />
  </div>
);

const mapStateToProps = state => ({
  searchKeyword: state.searchKeyword,
});

const mapDispatchToProps = dispatch => ({
  setSearchKeyword: searchKeyword => dispatch(setSearchKeyword(searchKeyword)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
