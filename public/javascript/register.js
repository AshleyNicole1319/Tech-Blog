async function signupFormHandler(event) {
    event.preventDefault();
  const username = document.querySelector('#user-signup').value;
  const email = document.querySelector('#email-signup').value;
  const password = document.querySelector('#pw-signup').value;
  
  if (username && email && password) {
    const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
            username,
            email,
            password
        }),
        headers: {'Content-Type': 'application/json'}

    });
    console.log(username)
    if(response.ok){
        document.location.replace('/dashboard');
    } else { alert(response.statusText)}
   
  }

  }
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);