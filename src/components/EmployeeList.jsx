import Employee from "./Employee";

function EmployeeList({ employees,handleDelete, setChosenEmployee}) {

    return (
        <div className="emp-list">
        {employees.map((employee) => (
          <Employee
            key={employee.id}
            employeeInfo={employee}
            handleDelete={handleDelete} 
            setChosenEmployee={setChosenEmployee}
          />
        ))}
      </div>
    )
}

export default EmployeeList;