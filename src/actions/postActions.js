import {FETCH_POSTS, NEW_POSTS} from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(posts => posts.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts ,
    })
  );
};

export const createPost = (postData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
        .then(data => data.json())
        .then(data => dispatch({
          type: NEW_POSTS,
          payload: postData
        }));
};