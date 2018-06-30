import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';
import uuidv4 from 'uuid/v4';

class PostForm extends Component {
    state = {
        title: '',
        body: '',
    }
    handleOnchange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    handOnsubmit = (e) => {
        e.preventDefault();
        const post = {
            userId: uuidv4(),
            id: uuidv4(),
            title: this.state.title,
            body: this.state.body,
        }
        this.props.createPost(post);
    }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Add Post</h1>
        <form style={{background: '#1F1F1F', borderRadius: '5px'}} onSubmit={this.handOnsubmit}><br/><br/>
            <div>
                <label style={{fontWeight: 'bold', color: 'white'}}>Title</label><br/><br/>
                <input onChange={this.handleOnchange} style={{width: '500px', height: '25px', borderRadius: '5px'}} name="title" type="text" value={this.state.title} />
            </div>
            <br/>
            <div>
                <label style={{fontWeight: 'bold', color: 'white'}}>Message</label><br/><br/>
                <textarea onChange={this.handleOnchange} name="body" type="text" style={{width: '500px', height: '300px', borderRadius: '5px'}} value={this.state.body} />
            </div>
            <br/>
            <button style={{width: '500px', height: '50px', fontSize: '20px', color: 'white', background: '#035818', border: '1px solid black', fontWeight: 'bold', borderRadius: '5px'}} type="submit">Submit</button><br/><br/><br/>
        </form>
      </div>
    )
  }
}

PostForm.propType = {
    createPost: PropTypes.func.isRequired,
}

export default connect(null, { createPost })(PostForm);