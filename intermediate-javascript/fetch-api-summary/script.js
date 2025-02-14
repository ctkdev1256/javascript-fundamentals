// const newUser = {
//    name: 'Maria',
//    job: 'trainer'
// };

// //POST
// fetch('https://reqres.in/api/users/55', {
//    method: 'POST',
//    headers: {
//       'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(newUser)
// }).then(res => {
//    if (!res.ok) {
//       console.log('Problem.');
//       return;
//    }

//    return res.json();
// })
//    .then(data => {
//       console.log('Success');
//    })
//    .catch(error => {
//       console.log(error);
//    });

   // DELETE
   const newUser = {
      name: 'Maria',
      job: 'Principal'
   };
   
   fetch('https://reqres.in/api/users/55', {
      method: 'DELETE'
   }).then(res => {
      if (!res.ok) {
         console.log('Problem.');
         return;
      }
   
      return res.json();
   })
      .then(data => {
         console.log('Success');
      })
      .catch(error => {
         console.log(error);
      });
  