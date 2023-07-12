export default function TeacherCard({teacher, teacherData, setData}){

    const removeTeacher = (id)=>{
        //api operations
     const newTeacherData = teacherData.filter((teac)=>teac.id !== id);
     setData((newTeacherData))
    }
    return (
        <div>
    
    <div className="card w-96 bg-base-100 shadow-xl border 1px">
    <div className="card-body">
          
    <h2 className="card-title">{teacher.name}</h2>
           <p>Subject: {teacher.sub}</p>
            <p>Email: {teacher.email}</p>
            <p>Phone: {teacher.phone}</p>
            <p>EDU  : {teacher.qualification}</p>
            <div className="card-actions justify-end">
        <button className="btn btn-danger"
        onClick={()=>removeTeacher(teacher.id)}
        >Delete</button>

<button className="btn btn-primary"
        onClick={()=>console.log("edit clicked")}
        >Edit</button>
         </div>
       </div>
       </div>
        </div>
    )

}
