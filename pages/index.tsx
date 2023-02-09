import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'

export default function Home() {
  const { user, setUser } = useAuth()

  const login = () => setUser({ id: '1', email: 'pam@paper.com' })
  const logout = () => setUser(null)

  return (
    <>
      <h1>Hello {user && user.email}</h1>

      {!user && <button onClick={login}>Login</button>}
      {user && <button onClick={logout}>Logout</button>}
      <Link href='/secret-page'>Go To Secret Page</Link>
    </>
  )
}
