import { useState } from "react";

// Controlled Component/Form

export default function Form({ addEmployee }) {
  let [form, setForm] = useState({
    name: "",
    title: "",
    phone: "",
    email: ""
  });
  let [error,setError]=useState({
    name: false,
    title: false,
    phone: false,
    email: false,
    submit:true,
  })
  let [readyToClose,setClose]=useState(true)

  function handleSubmit(event) {
   if (form.name.length==0 || form.title.length==0 || form.phone.length==0 || form.email.length==0){
    event.preventDefault();
    setError({ ...error,
      submit: false
    })
   }else{
    
    event.preventDefault();

    
    let employee = {
      ...form,
      headshot: "../images/headshot4.jpeg",
      borderColor: "rgb(100,230,204)",
      id: crypto.randomUUID()
    };

    setForm({
      name: "",
      title: "",
      phone: "",
      email: ""
    });
    let ableToSubmit=false
    if (!error.name && !error.title && !error.phone && !error.email){
      ableToSubmit=true
    }
    if (ableToSubmit ){
      
      addEmployee(employee)
    }else{
      
      setError({ ...error,
        submit: false
      })
    }
  }
  }

  function handleChange(event) {
    
    error.submit= true;
    
    if (event.target.id=="name"){
      if (event.target.value.length<=3 && event.target.value.length!=0 ){
        setError({ ...error,
          [event.target.id]: true
        })
    }else if (event.target.value.length>8){
      setError({ ...error,
        [event.target.id]: true
      })
    }else{
      setError({ ...error,
        [event.target.id]: false
      })
      }
    }

    if (event.target.id=="phone"){
             if (event.target.value.length==10){
              setError({ ...error,
                [event.target.id]: false
              })
             }else{
              setError({ ...error,
                [event.target.id]: true
              })
             }
    }
    if (event.target.id=="title"){
      if (event.target.value.length>0){
       setError({ ...error,
         [event.target.id]: false
       })
      }else{
       setError({ ...error,
         [event.target.id]: true
       })
      }
    }
    
    
    setForm({
      ...form,
      [event.target.id]: event.target.value
    });
  }
  function close(){
     setClose((prevValue)=>!prevValue)
  }

  return (
    <>
    <form onSubmit={handleSubmit} style={{display:readyToClose? "none":"flex"}}>
      <label htmlFor="name" style={{color:error.name? "red":"black" }} >{error.name? "(you need to enter more than 3 char or less than 8 char)":"Name"}</label>
      <input id="name" value={form.name} onChange={handleChange} style={{border:error.name? "3px solid red":"" ,boxShadow:error? " box-shadow: 5px 2px 10px red":""}} placeholder="enter the name"/>

      <label htmlFor="title"style={{color:error.title? "red":"black" }} >{error.title? "(you have to put the title )":"Title"}</label>
      <input id="title" type="text" value={form.title} onChange={handleChange} style={{border:error.title? "3px solid red":"" ,boxShadow:error.title? " box-shadow: 5px 2px 10px red":""}} placeholder="enter the title" />

      <label htmlFor="phone" style={{color:error.phone? "red":"black" }} >{error.phone? "(The phone number should be 10 numbers)":"Phone"}</label>
      <input id="phone" type="number"  value={form.phone} onChange={handleChange} style={{border:error.phone? "3px solid red":"" ,boxShadow:error.phone? " box-shadow: 5px 2px 10px red":""}}  placeholder="enter the phone number"/>

      <label htmlFor="email">Email</label>
      <input id="email" value={form.email} onChange={handleChange}  placeholder="enter the email" />

      <button className="submit" style={{border:!error.submit? "3px solid red":"" ,boxShadow:!error.submit? " box-shadow: 5px 2px 10px red":"",backgroundColor:!error.submit? "red":"aquamarine",color:!error.submit?"white":"black"}}>{error.submit? "Submit" :"please make sure that there is no error and nothing is empty"}</button>
      
    </form>
    <button className="close" onClick={close}>{readyToClose?"+":"X"}</button>
    </>
  );
}
