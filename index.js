/// employee.js

// Initial employee object
const employee = {
  name: "John Doe",
  streetAddress: "123 Main St"
};

// Function: Non-destructively update an employee
function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Spread operator creates a copy, then we override/add the key
  return {
    ...employee,
    [key]: value
  };
}

// Function: Destructively update an employee (mutates original)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value; // directly change the original object
  return employee;
}

// Function: Non-destructively delete a key from employee
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee }; // copy original object
  delete newEmployee[key];             // remove key from copy
  return newEmployee;
}

// Function: Destructively delete a key from employee (mutates original)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]; // remove key directly from original object
  return employee;
}

// Exporting for npm tests
module.exports = {
  employee,
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey
};

