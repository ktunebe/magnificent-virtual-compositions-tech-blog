const deletePostButton = document.getElementById('deletePostButton')
const deletePostIdEl = document.getElementById('postId')
const deletePostId = deletePostIdEl.value

// Delete post function
function handleDeletePost(e) {
  e.preventDefault();

  fetch(`/api/posts/${deletePostId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => {
      if (response.ok) {
        location.href = '/dashboard';
      } else {
        response.json().then(err => console.error('Error:', err));
      }
    })
    .catch(err => alert('Error deleting post!'));
}


deletePostButton.addEventListener('click', handleDeletePost)