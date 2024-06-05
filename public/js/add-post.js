const newPostForm = document.getElementById('newPostForm')

function handleNewPostSubmit(e) {
  e.preventDefault()

  const {
    post_title: postTitleInput,
    post_content: postContentInput
  } = e.target.elements

  const postData = {
    post_title: postTitleInput.value,
    post_content: postContentInput.value,
  }

  fetch('/api/posts', {
    method: 'POST',
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
        // alert('Error creating post')
        console.log(err)
      }
    })
    .catch(err => alert('Error creating post!'))
}


newPostForm.addEventListener('submit', handleNewPostSubmit)