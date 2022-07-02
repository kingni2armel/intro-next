import Link from "next/link"
import  style from './Nav.module.css'
import { useContext } from "react"
import { UserContext } from "../../Context/Usercontext"
 function Navbar()
{
        const userContext = useContext(UserContext)

        return(
                
                    <div className={style.container}>
                       
                            <div className={style.containerItem}>

                            </div>
                            <div className={style.containerItem}>
                                    <ul>
                                        <li className={style.Litem}>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>

                                        </li>
                                        {
                                            userContext.user.role == 'admin' &&
                                            <li  className={style.Litem}>
                                                <Link href="/Sing/inscription">
                                                    <a>Add user</a>
                                                </Link>
                                            </li> 
                                        } 
                                        <li  className={style.Litem}>
                                            <Link href="/List/list">
                                                <a>List User</a>
                                            </Link>

                                        </li>
                                        <li  className={style.Litem}>
                                            <Link href="/">
                                                <a>Contact</a>
                                            </Link>

                                        </li>
                                        <li  className={style.Litem}>
                                            <Link href="/Auth/connexion">
                                                <a>Connexion</a>
                                            </Link>

                                        </li>
                                          
                                    </ul>

                            </div>
                       
                    </div>
              
        )
}

export default Navbar;  