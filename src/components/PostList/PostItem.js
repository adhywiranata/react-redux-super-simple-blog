import React from 'react';
import { connect } from 'react-redux';

import { deletePost, editPost } from '../../actions';

const styles = {
  postItem: {
    margin: '15px 0',
    padding: 10,
    border: '1px solid rgba(0, 0, 0, .2)',
    borderRadius: 8,
  },
  editBtn: { margin: 5, backgroundColor: 'orange', color: 'white', border: 0, borderRadius: 10, padding: 10, },
  delBtn: { margin: 5, backgroundColor: 'red', color: 'white', border: 0, borderRadius: 10, padding: 10, }
};

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: {
        id: 0,
        title: '',
        description: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const val = {};
    val[e.target.name] = e.target.value;
    const newEditForm = Object.assign({}, this.state.editForm, val);
    this.setState({ editForm: newEditForm });
  }

  showEditForm(post) {
    this.setState({
      editForm: {...post},
    });
  }

  render() {
    const { editForm } = this.state;
    const { id, title, description, deletePost, editPost } = this.props;
    const post = { id, title, description };
    return (
      <div style={styles.postItem}>
        { editForm.id === id ? (
          <div>
            Title<br/>
          <input type="text" name="title" value={editForm.title} onChange={this.handleChange} /><br /><br />
            Description<br/>
            <input type="text" name="description" value={editForm.description} onChange={this.handleChange} />
          </div>) : (
            <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>) }
        <br />
        { editForm.id !== id ? (
          <button
            onClick={() => this.showEditForm(post)}
            style={styles.editBtn}
          >
            Edit
          </button>) : (
            <button
              onClick={() => {
                editPost(editForm);
                this.setState({ editForm: { id: 0, title: '', description: '' } });
              }}
              style={styles.editBtn}
            >
              Save
            </button>
          ) }
        <button onClick={() => deletePost(id)} style={styles.delBtn}>
          Delete
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deletePost: postId => dispatch(deletePost(postId)),
  editPost: post => dispatch(editPost(post)),
});

export default connect(null, mapDispatchToProps)(PostItem);
