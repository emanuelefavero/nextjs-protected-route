import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = useAuth() // user from context
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      // router.push('/login') // ! Redirect to login page
      router.push('/') // ! Redirect to home page
    }
  }, [router, user])

  // * If the user is logged in, render the children, otherwise, render null
  return <>{user ? children : null}</>
}
