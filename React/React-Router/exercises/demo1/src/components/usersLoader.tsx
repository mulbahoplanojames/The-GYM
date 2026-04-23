import { useLoaderData, Form, useNavigation } from "react-router-dom";

// 1. THE LOADER: Fetches data from DummyJSON
export async function usersLoader() {
  const response = await fetch("https://dummyjson.com/users?limit=5");
  if (!response.ok) {
    throw new Error("Could not fetch users");
  }
  return response.json(); // Returns { users: [...] }
}

// 2. THE ACTION: Handles the Form POST request
export async function addUserAction({ request }) {
  const formData = await request.formData();
  const newUser = {
    firstName: formData.get("firstName"),
    email: formData.get("email"),
  };

  const response = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });

  return response.json(); // Return the new user object
}

// 3. THE COMPONENT
export default function UsersPage() {
  const data = useLoaderData(); // Access loader data directly
  const navigation = useNavigation(); // Check if the app is "submitting"

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            {user.firstName} - {user.email}
          </li>
        ))}
      </ul>

      <hr />

      <h3>Add New User</h3>
      {/* Use the Router Form, NOT the HTML form */}
      <Form method="post">
        <input type="text" name="firstName" placeholder="First Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <button type="submit" disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Adding..." : "Add User"}
        </button>
      </Form>
    </div>
  );
}
