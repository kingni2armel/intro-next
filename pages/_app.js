import { useState } from 'react'
import { UserContext } from '../Context/Usercontext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState({})
  const contextValue = {
    user,
    updateUser: setUser
  }

  return (
    <UserContext.Provider value={contextValue} >
        <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
