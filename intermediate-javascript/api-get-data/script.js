const data = fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => {
    return res.json();
   })
   .then(data => {
      data.forEach(user => {
         const markup = `<li>${user.name}</li>`;

         document.querySelector('ul').insertAdjacentHTML('beforebegin', markup);
      });
   })
   .catch(error => console.log(error));