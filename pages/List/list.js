import Navbar from "../../component/header/Navbar";
import style from './List.module.css'
import axios from "axios";
import Link from "next/link";
import React,{ useEffect, useState } from "react";

function List() {
    const [student,setStudent] = useState([])
      const Alluser  = async (e) => {
      const responce  =  await  axios.get('http://127.0.0.1:8000/api/alluser');
      console.log(responce)
      if(responce.data.status===200)
      {
            setStudent(
                    responce.data.alluser
            )
      }
   }

   useEffect(()=>{
        Alluser()
   },[])

   const DELETE  = async (id) => {
      console.log(id)
            const responce =  await axios.post('http://127.0.0.1:8000/api/deleteuser/'+id)
            console.log(responce)
   }
  
    return(
        <div>
            <Navbar/>
            <h1>Liste des users</h1>
 
                <table className={style.customers}>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Operation 1</th>
                        <th>Operation 2</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            student.length!=0 ?
                            student.map(((student,index)=>
                                <tr key={student.id}>
                                    <td>{index+1}</td>
                                    <td>{student.nom}</td>
                                    <td>{student.prenom}</td>
                                    <td>{student.email}</td>
                                    <td>{student.role}</td>
                                    <td>
                                            <Link 
                                                href={{
                                                    pathname:"/Update/update",
                                                    query:{id:student.id}
                                                }}
                                            >
                                                    <a>
                                                            Modifier
                                                    </a>
                                            </Link>
                                    </td>
                                    <td>
                                          
                                                    <button 
                                                         onClick={()=>DELETE(student.id)}
                                                    >
                                                                Supprimer
                                                    </button>
                                          
                                    </td>
                                </tr>
                            ))
                            :
                            <tr>
                                
                            </tr>
                        }
                    </tbody>
                </table>
      </div>
    );
}
export default List;