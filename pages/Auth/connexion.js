import Navbar from "../../component/header/Navbar";
import style from './Connexion.module.css'
import axios from "axios";
import { useState } from "react";
function Login() {

    const [email,setEmail] = useState('')
    const [password,setPassword] =useState('')
    const Connexion = async (e) => {
            e.preventDefault()
            const data = {email,password}
            const resp= await axios.post("http://127.0.0.1:8000/api/authentification",data)
            console.log(resp)
    }

    return (  
        <>
            <Navbar />
                            <h1>Connexion</h1>
                            < div className={style.content}>
                                <form onSubmit={Connexion}>
                                        <label for="fname">Email</label>
                                        <input 
                                            className={style.input} 
                                            type="email" 
                                            id="fname" 
                                            name="email"
                                            placeholder="Email.."
                                            onChange={(e)=>setEmail(e.target.value)}
                                        />
                                        
                                        <label for="fname">Pasword</label>
                                    <input 
                                            className={style.input} 
                                            type="password"
                                            id="lname" 
                                            name="password"
                                            placeholder="Password.."
                                            onChange={(e)=>setPassword(e.target.value)}

                                        />
                                        <input 
                                            className={style.but} 
                                            type="submit"
                                            value="Connecter"
                                        />

                            </form>
                            </div>

        </>
    );
}

export default Login;
    <h1>Connexion</h1>