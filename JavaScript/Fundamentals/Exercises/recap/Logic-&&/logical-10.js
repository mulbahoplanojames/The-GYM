// 1. Show admin panel only if user is admin.

function redirectToDashboard(user) {
  return (
    user.role === "admin" && `Welcome to your admin panel ${user.username}`
  );
}

const user = {
  username: "Jamesmulbah",
  age: 23,
  role: "admin",
  password: "12345",
};
console.log(
  "🚀 ~ logical-10.js ~ redirectToDashboard ~ redirectToDashboard:",
  redirectToDashboard(user)
);

// 2. Log a message if a form is submitted.

function isSubmitted(response) {
  setInterval(() => {
    response = true;
  }, 2000);

  return response && `Form submitted successfully`;
}

// 3. Update profile only if inputs are valid.
function updateProfile(userInfo) {
  return (
    userInfo.role === "admin" &&
    userInfo.password === "12345" && {
      ...userInfo,
      username: "peterjohn",
      age: 26,
      role: "user",
    }
  );
}

const userInfo = {
  username: "Jamesmulbah",
  age: 23,
  role: "admin",
  password: "12345",
};
console.log(
  "🚀 ~ logical-10.js ~ updateProfile ~ updateProfile:",
  updateProfile(userInfo)
);

// 4. Trigger alert only if checkbox is checked.

function triggerAlert(isChecked) {
  return isChecked && "Active ";
}
console.log(
  "🚀 ~ logical-10.js ~ triggerAlert ~ triggerAlert:",
  triggerAlert(false)
);
