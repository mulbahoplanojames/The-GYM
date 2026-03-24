// console.log("first");

// // solutions
// function fetchUserTodos() {
//   return Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/users"),
//     fetch("https://jsonplaceholder.typicode.com/todos"),
//   ])
//     .then(async (responses) => {
//       const [users, todos] = await Promise.all([
//         responses[0].json(),
//         responses[1].json(),
//       ]);
//       return [users, todos];
//     })
//     .then(([users, todos]) => {
//       return users.map((user) => {
//         return {
//           userID: user.id,
//           name: user.name,
//           todos: todos.filter((todo) => todo.userId === user.id),
//         };
//       });
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

// fetchUserTodos().then((data) => console.log(data));

const fetchUsersTodosAsync = async () => {
  const [users, todos] = await Promise.all([
    await fetch("https://jsonplaceholder.typicode.com/users"),
    await fetch("https://jsonplaceholder.typicode.com/todos"),
  ]);

  const allUsers = await users.json();
  const allTodos = await todos.json();

  // console.log("Users", allUsers);
  // console.log("Todos", allTodos);

  return allUsers.map((user) => {
    return {
      userId: user.id,
      name: user.name,
      todos: allTodos.filter((todo) => todo.userId === user.id),
    };
  });
};

const displayOutput = async () => {
  const result = await fetchUsersTodosAsync();
  console.log(result);
};

displayOutput();
