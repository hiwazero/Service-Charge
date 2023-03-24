import axios from "axios";
import { useState } from "react";
import { serverURL } from "../server/serverURL";

const Testing = () => {

  const [formInfo, setForminfo] = useState({
    ticketId: '',
    description: '',
    userId: '',
    status: '',
    priority: '',
    dateGenerated: ''
  });

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
      `${serverURL()}/ticket/createTicket`,formInfo,{headers: {"Content-Type": "application/json"}}
    );

    // const res = await axios.get("http://localhost:8080/spring-hibernate-jpa/ticket/getAll")
    // console.log(res)

    // submit();
    // setForminfo({})
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col">
      <label>Ticket id: </label>
      <input type="number" value={formInfo.ticketId} onChange={onChangeHandler} name="ticketId" />
      <label>Description: </label>
      <input type="text" value={formInfo.description} onChange={onChangeHandler} name="description" />
      <label>User id: </label>
      <input type="number" value={formInfo.userId} onChange={onChangeHandler} name="userId" />
      <label>Status: </label>
      <input type="text" value={formInfo.status} onChange={onChangeHandler} name="status" />
      <label>Priority: </label>
      <input type="text" value={formInfo.priority} onChange={onChangeHandler} name="priority" />
      <label>Date Generated: </label>
      <input type="text" value={formInfo.dateGenerated} onChange={onChangeHandler} name="dateGenerated" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Testing;
