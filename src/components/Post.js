import React, { Component } from 'react'
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PropTypes from 'prop-types';

class Post extends Component {

  componentWillMount(){
      this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps){
      if(nextProps.newPost){
          this.props.posts.unshift(nextProps.newPost);
      }
  }
  render() {
      const postItemsComp = this.props.posts.map(post => (
          <div key={uuidv4()}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
          </div>
      ));    
    return (
      <div>
        <h1>Post Comp</h1>
        {postItemsComp}
      </div>
    )
  }
}

Post.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Post);
 