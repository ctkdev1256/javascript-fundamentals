const data = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data[2].title);
  })
  .catch((error) => {
    console.log(error);
  });
