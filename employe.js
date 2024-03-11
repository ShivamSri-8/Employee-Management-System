const employees = []; // Array to store employee objects

// Display employees on the page
function displayEmployees() {
  const employeeList = document.getElementById('employeeList');
  employeeList.innerHTML = '';

  if (employees.length > 0) {
    employees.forEach((employee, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${index + 1}. ${employee.name} - ${employee.department} - ${employee.salary}`;
      employeeList.appendChild(listItem);
    });
  } else {
    const listItem = document.createElement('li');
    listItem.textContent = 'No employees added yet.';
    employeeList.appendChild(listItem);
  }
}

function addEmployee() {
  const name = document.getElementById('name').value.trim();
  const age = validateAge(parseInt(document.getElementById('age').value));
  const department = document.getElementById('department').value.trim();
  const salary = validateSalary(parseFloat(document.getElementById('salary').value));

  if (name && age && department && salary) {
    const employee = { name, age, department, salary };
    employees.push(employee);
    clearInputFields();
    displayEmployees();
  } else {
    alert('Please provide valid inputs.');
  }
}

// Validate and format age
function validateAge(age) {
  if (age && age > 0 && age < 150) {
    return age;
  } else {
    return null;
  }
}

// Validate and format salary
function validateSalary(salary) {
  if (salary && salary > 0 && salary < 10000000) {
    return salary.toFixed(2);
  } else {
    return null;
  }
}

function clearInputFields() {
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('department').value = '';
  document.getElementById('salary').value = '';
}

// Example usage:
function runExamples() {
  addEmployee(); // Add sample employees
  increaseSalary(10); // Increase salary by 10%
  console.log('Average Salary:', calculateAverageSalary());
  console.log('Employees in IT:', findEmployeesByDepartment('IT'));
  sortEmployeesByAge();
}

// Call other functions as needed
runExamples();