import "./index.css";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import { data } from "./data";
import {Routes, Route} from 'react-router-dom'
import EmployeePage from './Pages/EmployeePage'

export default function App() {
  const [chosenEmployee, setChosenEmployee] = useState({});
  let [employees, setEmployees] = useState(data);
  function handleDelete(id) {
    let newEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(newEmployees);}
  function addEmployee(emp) {
    setEmployees([...employees, emp]);
  }
  function filterEmployee(searchInput) {
    const filterEmp = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchInput) ||
        employee.title.toLowerCase().includes(searchInput)
    );

    if (searchInput.length < 2) {
      setEmployees(data);
    } else {
      setEmployees(filterEmp);
    }
  }
  return (
    <div className="App">
      <Routes>
      <Route path= '/' element = {<HomePage employees={employees} addEmployee={addEmployee} filterEmployee={filterEmployee} setChosenEmployee={setChosenEmployee} handleDelete={handleDelete} />} />
      <Route path = '/employee' element ={<EmployeePage employee={chosenEmployee}/>} />
      </Routes>
      
    </div>
  );
}
