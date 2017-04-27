import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addPost } from '../actions';

const styles = {
  postForm: {
    padding: 20,
    paddingTop: 100,
    display: 'flex',
    flexDirection: 'column',
  },
  postInput: {
    width: '100%',
    padding: 20,
    outline: 'none',
  },
  formLabel: {
    margin: 10,
    width: '100%',
  },
  btn: {
    backgroundColor: 'teal',
    color: 'white',
    padding: 20,
    border: 0,
  },
};

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      isSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const updateState = {};
    updateState[e.target.name] = e.target.value;
    this.setState(updateState);
  }

  render() {
    const { title, description, isSubmitted } = this.state;
    return (
      <div>
        { isSubmitted && <Redirect to={{ pathname: '/'}} /> }
        <h3>Add New Post</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addPost(this.state);
            this.setState({ title: '', description: '', isSubmitted: true });
          }}
          style={styles.postForm}>
          <label style={styles.formLabel}>
            Post Title
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
              style={styles.postInput}
            />
          </label>
          <label style={styles.formLabel}>
            Post Description
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.handleChange}
              style={styles.postInput}
            />
          </label>
          <input type="submit" value="Add Post" style={styles.btn} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPost: newPost => dispatch(addPost(newPost)),
});

export default connect(null, mapDispatchToProps)(AddPost);
