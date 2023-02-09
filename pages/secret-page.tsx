import { useAuth } from '@/context/AuthContext'

export default function SecretPage() {
  const { user } = useAuth()
  return <h1>{user && user.email} secret page!</h1>
}
