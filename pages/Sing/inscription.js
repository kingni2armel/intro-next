import React, {useState} from 'react'
import Navbar from "../../component/header/Navbar";
import style from './Sing.module.css'
import axios from 'axios';

function Inscription() {

    const [nom,setNom] = useState('') 
    const [prenom,setPrenom]=useState('')
    const [role,setRole] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState()

    const SaveUser =  async (e) => {
        e.preventDefault()
         const data = {nom,prenom,role,email,password}
         const resp= await axios.post("http://127.0.0.1:8000/api/adduser",data)
         console.log(resp)
    }
    return (
        <div>
            <Navbar/>
            <div className={style.content}>
                <h1>Create user</h1>
                <form  onSubmit={SaveUser}>
                    <label for="fname">Nom de famille</label>
                    <input 
                        className={style.input} 
                        type="text" 
                        id="fname" 
                        name="nom" 
                        onChange={(e)=>setNom(e.target.value)}
                    />
                            
                    <label for="lname">Prenom</label>
                    <input
                        className={style.input}  
                        type="text" 
                        id="lname" 
                        name="prenom"
                        onChange={(e)=>setPrenom(e.target.value)}

                    />
                    
                    <label for="country">Role</label>
                    <select 
                        className={style.input}
                        id="country"
                        name="pays"
                        onChange={(e)=>setRole(e.target.value)}
                    >
                        <option value="teacher">Enseignant</option>
                        <option value="etudiant">Etudiant</option>
                            
                    </select>
                    <label for="lname">Email</label>
                    <input
                        className={style.input} 
                        type="email" 
                        id="lname" 
                        name="email"
                        onChange={(e)=>setEmail(e.target.value)}
                    />                       
                    <label for="lname">password</label>
                    <input 
                        className={style.input}
                        type="password"
                        id="lname" 
                        name="password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <input 
                        className={style.but} 
                        type="submit"
                            value="Creer"
                    />
                </form>
            </div> 
        </div>     
    );
}

export default Inscription;