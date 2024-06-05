const newCommentForm = document.getElementById('newCommentForm')
const postIdEl = document.getElementById('postId')
const postId = postIdEl.value

function handleNewCommentSubmit(e) {
  e.preventDefault()

  const {
    comment_content: commentContentInput,
  } = e.target.elements

  const commentData = {
    comment_content: commentContentInput.value,
  }

  fetch(`/api/posts/${postId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commentData)
  })
    .then(response => {
      if (response.status === 200) {
        commentContentInput.value = ''
        location.reload()
      } else {
        alert('Error creating comment')
      }
    })
    .catch(err => alert('Error creating comment!'))
}


newCommentForm.addEventListener('submit', handleNewCommentSubmit)