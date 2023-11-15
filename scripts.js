function myFunction() {
    const names = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (names.length < 4) {
      document.getElementById('namesError').innerText = "YAMATE";
      return false;
    } else {
      document.getElementById('namesError').innerText = "";
    }
  }
  
  document.getElementById('button').addEventListener('click', () => {
    myFunction();
  });

