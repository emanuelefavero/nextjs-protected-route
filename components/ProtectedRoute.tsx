import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      // router.push('/login') // ! Redirect to login page
      router.push('/') // ! Redirect to home page
    }
  }, [router, user])

  return <>{user ? children : null}</>
}
