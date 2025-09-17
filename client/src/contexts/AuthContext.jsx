import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState()
  
  return <AuthContext.Provider value={{
    user,
    setUser
  }}>
    {children}
  </AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext(AuthContext)
  
  if (context === undefined) {
    throw new Error('error using context')
  }

  return context
}

export { AuthProvider, useAuth }

// const {user, setUser} = useAuth()