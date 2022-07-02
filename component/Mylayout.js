import { useState } from "react";
import { UserContext } from "../Context/Usercontext";

function Mylayout ({children}) {

    const  [user,setUser] =  useState(null)
    return (

        <UserContext.Provider value={{user,setUser}}>
                      <div>
                               {children}
                    </div>
        </UserContext.Provider>
          
     );
}

export default Mylayout ;