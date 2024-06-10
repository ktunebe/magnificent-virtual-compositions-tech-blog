const deletePostButton = document.getElementById('deletePostButton')
const deletePostIdEl = document.getElementById('postId')
const deletePostId = deletePostIdEl.value

console.log('Delete Post ID:', deletePostId)

// function handleDeletePost(e) {
//   e.preventDefault()


//   fetch(`/api/posts/${deletePostId}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   })
//     .then(response => {
//       if (response.status === 200) {
//         location.reload()
//       } else {
//         console.log(err)
//       }
//     })
//     .catch(err => alert('Error deleting post!'))
// }

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