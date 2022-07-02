import Link from "next/link"
import  style from './Nav.module.css'
export default function Navbar()
{
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
                                        <li  className={style.Litem}>
                                            <Link href="/Sing/inscription">
                                                <a>Add user</a>
                                            </Link>

                                        </li>  
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