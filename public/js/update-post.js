const updatePostForm = document.getElementById('updatePostForm')
const updatePostIdEl = document.getElementById('postId')
const updatePostId = updatePostIdEl.value

// Update post function
function handleUpdatePostSubmit(e) {
  e.preventDefault()

  const {
    post_title: postTitleInput,
    post_content: postContentInput
  } = e.target.elements

  const postData = {
    post_title: postTitleInput.value,
    post_content: postContentInput.value,
  }

  fetch(`/api/posts/${updatePostId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(response => {
      if (response.status === 200) {
        postTitleInput.value = ''
        postContentInput.value = ''
        location.reload()
      } else {
        console.log(err)
      }
    })
    .catch(err => alert('Error updating post!'))
}


updatePostForm.addEventListener('submit', handleUpdatePostSubmit)