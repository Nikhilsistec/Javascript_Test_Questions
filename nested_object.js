const company = {
    name: 'ABC Inc.',
    location: 'Cityville',
    employees: [
      {
        id: 1,
        name: 'John Doe',
        position: 'Software Engineer',
        salary: 75000,
      },
      {
        id: 2,
        name: 'Jane Smith',
        position: 'Marketing Manager',
        salary: 60000,
      },
      {
        id: 3,
        name: 'Bob Johnson',
        position: 'Sales Representative',
        salary: 55000,
      },
    ],
  };
  
  // Program to access and display employee data
  function displayEmployeeInfo(employeeId) {
    const employee = company.employees.find((emp) => emp.id === employeeId);
  
    if (employee) {
      console.log(`Employee ID: ${employee.id}`);
      console.log(`Name: ${employee.name}`);
      console.log(`Position: ${employee.position}`);
      console.log(`Salary: $${employee.salary}`);
    } else {
      console.log('Employee not found.');
    }
  }
  
  // Example usage:
  displayEmployeeInfo(2); // Display information for employee with ID 2 (Jane Smith)
  