import axios from "axios";
import { useState } from "react";
import { serverURL } from "../server/serverURL";

const Testing = () => {

  const [formInfo, setForminfo] = useState({

    // description: '',
    // userId: '',
    // status: '',
    // priority: '',
    // dateGenerated: ''
  });

  console.log(formInfo)

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setForminfo((prevState) => {
      if (name === "ticket_id" || name === "user_id") {
        return { ...prevState, [name]: parseInt(value) };
      }
      return { ...prevState, [name]: value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // const submit = async () => {
    //   await fetch("https://test-533fd-default-rtdb.firebaseio.com/ticket.json",{
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formInfo)
    //  })
    // }

    // const submit = async () => {
    //   await axios.post("/ticket/createTicket", formInfo)
    // }
    // const res = await axios.post("/ticket/createTicket", formInfo);
    // console.log(res)

    // let service = axios.create()
    // let params = new FormData()

    // params.append("ticketId", parseInt(7))
    // params.append("description", "This is test via react")
    // params.append("userId", parseInt(1))
    // params.append("status", "new")
    // params.append("priority", "normal")
    // params.append("dateGenerated", "3/17/2023")

    // service.request({
    //   method: 'POST',
    //   url: 'http://localhost:8080/spring-hibernate-jpa/ticket/createTicket',
    //   responseType: 'json',
    //   params:params
    // })

    // const res = axios.post(
    //   "http://localhost:8080/spring-hibernate-jpa/ticket/createTicket",params,{headers: {"Content-Type": "multipart/form-data"}}
    // );

    // let data = {
    //   ticketId: parseInt(7),
    //   description: "This is test via react",
    //   userId: parseInt(1),
    //   status: "new",
    //   priority: "normal",
    //   dateGenerated: "3/17/2023"
    // }

    // let params = new FormData()
    // params.append("ticketModel", {...formInfo})

    

    axios.post(
      `${serverURL()}/ticket/create`,formInfo,{headers: {"Content-Type": "application/json"}}
    );

    // const res = await axios.get("http://localhost:8080/spring-hibernate-jpa/ticket/getAll")
    // console.log(res)

    // submit();
    // setForminfo({})
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col">
      <label>Assignee Id</label>
      <input type="text" onChange={onChangeHandler} name="assignee_id" />
      <label>Status: </label>
      <input type="text" onChange={onChangeHandler} name="status_id" />
      <label>User id: </label>
      <input type="text" onChange={onChangeHandler} name="user_id" />
      <label>Description: </label>
      <input type="text" onChange={onChangeHandler} name="description" />
      <label>Ticket Start: </label>
      <input type="text" onChange={onChangeHandler} name="ticketstart" />
      <label>Ticket End: </label>
      <input type="text" onChange={onChangeHandler} name="ticketend" />
      <label>File: </label>
      <input type="text" onChange={onChangeHandler} name="file" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Testing;
