import {Link, useNavigate} from 'react-router-dom';

function Employee({ employeeInfo, handleDelete,setChosenEmployee}) {
  const navigate = useNavigate();
  function getData(e){
    if(e.target.className !== "delete"){
      navigate('/employee')
      setChosenEmployee(employeeInfo)
    }
    
  }
    return (
      <div
        onClick={(e)=>getData(e)}
        className="emp"
        style={{ border: `1px solid ${employeeInfo.borderColor}` }}
      >
        <img src={employeeInfo.headshot} alt="employeeInfo" />
        <h4>{employeeInfo.name}</h4>
        <p>{employeeInfo.title}</p>
        <button className="delete" onClick={() => handleDelete(employeeInfo.id)}>X</button> 
      </div>
    );
  }
  
  export default Employee;
  