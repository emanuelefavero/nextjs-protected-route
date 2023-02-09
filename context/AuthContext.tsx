import React, { createContext, useContext, useState } from 'react'

interface IUser {
  id: string
  email: string
}

const AuthContext = createContext({
  user: null as null | IUser,
  setUser: (user: null | IUser) => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null as null | IUser)

  // TIP: ... HERE YOU CAN ADD ANY FETCH REQUESTS OR AUTHENTICATION LOGIC AND ASSIGN THE RESULT TO THE USER STATE

  return (
    // TIP: We also pass the setUser function to the context so that we can update the user state from anywhere in the app, it is not necessary to do it this way, you can just do it here
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
