import { useState } from "react";
import Base from "../BasePage/Base";

export default function AddStudents({studentData, setData}) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [qualification, setQualification] = useState("");
    //setId(value) => id

    function addnewStudent(){
      const newStudentObj = {
        id, 
        name, 
        batch, 
        email, 
        phone,
        qualification
      }
      console.log(newStudentObj)
      // add new data
    setData([...studentData,newStudentObj]);
    setId("");
    setName("");
    setBatch("");
    setQualification("");
    setPhone("");
    setEmail("");
    }
    return (
        <Base>
            <div className="p-5">Please Fill the form to add new Student</div>
            <div className="form-control">
                <label className="input-group input-group-md  m-2">
                    <span>ID </span>
                    <input
                        type="number"
                        placeholder="Enter Student ID"
                        className="input input-bordered input-md w-96" 
                        value={id}
                        onChange={(e)=>setId(e.target.value)}
                        />
                </label>

                <label className="input-group input-group-md m-2">
                    <span>Name</span>
                    <input 
                    type="text" 
                    placeholder="Enter Student Name" 
                    className="input input-bordered input-md w-96"
                    value ={name}
                    onChange={(e)=>setName(e.target.value)}
                     />
                </label>
                <label className="input-group input-group-md  m-2">
                    <span>Batch</span>
                    <input type="text"
                     placeholder="Enter Student Batch" 
                     className="input input-bordered input-md w-96" 
                     value={batch}
                     onChange={(e)=>setBatch(e.target.value)}
                     />
                </label>
                <label className="input-group input-group-md  m-2">
                    <span>Email</span>
                    <input 
                    type="text" 
                    placeholder="Enter Student Email" 
                    className="input input-bordered input-md w-96" 
                    value ={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </label>
                <label className="input-group input-group-md m-2">
                    <span>Phone</span>
                    <input
                     type="text"
                      placeholder="Enter Student Phone"
                       className="input input-bordered input-md w-96" 
                       value={phone}
                       onChange={(e)=>setPhone(e.target.value)}
                       />
                </label>
                <label className="input-group input-group-md  m-2">
                    <span>Education</span>
                    <input 
                    type="text" 
                    placeholder="Enter Student Education" 
                    className="input input-bordered input-md w-96"
                    value={qualification}
                    onChange={(e)=>setQualification(e.target.value)}
                     />
                </label>

                <button className="rounded-full bg-base-200 p-2 m-5"
                onClick={addnewStudent}
                >
                    Add Student
                </button>
            </div>
        </Base>
    )
}