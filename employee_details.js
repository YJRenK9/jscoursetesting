const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
      { id: 4, name: 'Josh Dole', age: 32, department: 'IT', salary: 55000, specialization: 'C#' },
      { id: 5, name: 'Wallace Smith', age: 38, department: 'HR', salary: 48000, specialization: 'Python' },
      { id: 6, name: 'Robert Mallard', age: 37, department: 'Finance', salary: 66000, specialization: 'SQL' },
    ];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
    
    document.getElementById('employeesDetails').innerHTML = totalEmployees;   
    console.log(totalEmployees); 
}


// Function to calculate the total salary
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// get dropdown reference
var departmentsDropdown = document.getElementById('departments');
// variable used to toggle the dropdown's visibility
var isVisible = false;
// filters the employees by department then displays them on the webpage
departmentsDropdown.addEventListener('change', () => {
    filterEmployeesByDepartment(departmentsDropdown.value);
});

// function to filter employees by department
function filterEmployeesByDepartment(department) {
    const filteredEmployees = employees.filter(employee => employee.department === department);
    const displayFilteredEmployees = filteredEmployees.map((employee) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = displayFilteredEmployees;

    console.log("ran");
}

// helper function used to toggle the dropdown's visibility
function showFilterOptions() {
    isVisible = !isVisible;

    if (isVisible) {
        departmentsDropdown.style.display = "block";
    } else {
        departmentsDropdown.style.display = "none";
    }
    
}

// function to find employee by id
function findEmployeeById() {
    // get user input then convert the input from string to int
    let idInput = parseInt(prompt("Please enter an id number: "));
    // find the employee with the id the user chose
    const foundEmployee = employees.find(employee => employee.id === idInput);
    
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`
    } else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID'
    }
}