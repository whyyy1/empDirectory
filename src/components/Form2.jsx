// Uncontrolled Component/Form

import { useRef } from "react";

export default function Form2({ addEmployee }) {
  const nameRef = useRef();
  const titleRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    console.log(nameRef);

    /*
      nameRef -> {
        current: input
      }
    */

    let employee = {
      name: nameRef.current.value,
      title: titleRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      headshot: "../images/headshot4.jpeg",
      borderColor: "rgb(100,230,204)",
      id: crypto.randomUUID()
    };

    nameRef.current.value = "";
    titleRef.current.value = "";
    phoneRef.current.value = "";
    emailRef.current.value = "";

    addEmployee(employee);
  }

  return (
    <form onSubmit={handleSubmit} className="Form2">
      <label htmlFor="name">Name</label>
      <input id="name" ref={nameRef} />

      <label htmlFor="title">Title</label>
      <input id="title" ref={titleRef} />

      <label htmlFor="phone">Phone</label>
      <input id="phone" ref={phoneRef} />

      <label htmlFor="email">Email</label>
      <input id="email" ref={emailRef} />

      <button>Submit</button>
    </form>
  );
}
