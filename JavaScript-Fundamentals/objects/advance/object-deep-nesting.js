/*
Create a deeply nested object representing a company with departments, employees, and their addresses.
Access a nested property using chaining.
*/
const Company = {
  name: "AMOA",
  departments: [
    {
      deptName: "Markerting",
      deptHead: "Abda",
      activities: {
        activity: "marketingProducts",
      },
    },
    {
      deptName: "Finance",
      deptHead: "Odecious",
      activities: {
        activity: "Keeping track of financial records",
      },
    },
    {
      deptName: "Sales",
      deptHead: "Puju",
      activities: {
        activity: "Making sales daily",
      },
    },
  ],
  employees: [
    {
      name: "Peterson",
      age: 20,
      address: {
        country: "Liberia",
        state: "Monrovia",
        community: "Fandell",
      },
    },
  ],
};

Company.departments.map((department) =>
  console.log(department.activities.activity),
);
