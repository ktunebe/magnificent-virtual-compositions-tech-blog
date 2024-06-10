const loginForm = document.getElementById('login-form')
const signupForm = document.getElementById('signup-form')

// login

function handleLoginFormSubmit(e) {
  e.preventDefault()
  const { email: emailInput, password: passwordInput } = e.target.elements

  const userData = {
    email: emailInput.value,
    password: passwordInput.value
  }

  fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => {
      if (response.status === 200) {
        location.href = '/dashboard'
      } else {
        alert('Error logging in')
      }
    })
    .catch(err => alert('Error logging in!'))
}

loginForm.addEventListener('submit', handleLoginFormSubmit)


// Sign up

function handleSignupFormSubmit(e) {
  e.preventDefault()
  const { username: nameInput, email: emailInput, password: passwordInput } = e.target.elements

  const userData = {
    username: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  }

  fetch('/api/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => {
      if (response.status === 200) {
        location.href = '/dashboard'
      } else {
        alert('Error logging in')
      }
    })
    .catch(err => alert('Error logging in!'))
}

signupForm.addEventListener('submit', handleSignupFormSubmit)