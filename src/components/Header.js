import React from 'react';
import { Link } from 'react-router-dom';

import SearchBox from './SearchBox';

const styles = {
  header: {
    flex: 0.3,
    position: 'fixed',
    width: '100%',
    backgroundColor: 'teal',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    width: '40%',
    flexDirection: 'row',
  },
};

const Header = () => (
  <header style={styles.header}>
    <div style={styles.logo}>
      <Link to="/" style={{color: 'white'}}><h1>Simple Blog App</h1></Link>
      <Link to="/add" style={{color: 'white'}}>Add New Post</Link>
    </div>
    <SearchBox />
  </header>
);

export default Header;
