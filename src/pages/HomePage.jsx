import EmployeeList from "../components/EmployeeList";
import Form from "../components/Form";
import Form2 from "../components/Form2";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

function HomePage({ employees, addEmployee,handleDelete, filterEmployee, setChosenEmployee }) {
  return (
    <div className="home">
      <Header header="Employee Directory" />
      <SearchBar filterEmployee={filterEmployee}/>
      <EmployeeList employees={employees} handleDelete={handleDelete} setChosenEmployee={setChosenEmployee} />
      {/* <Form addEmployee={addEmployee} /> */}
      <Form addEmployee={addEmployee} />
    </div>
  );
}

export default HomePage;
