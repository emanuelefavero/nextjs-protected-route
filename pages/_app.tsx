import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

// * Import the router
import { useRouter } from 'next/router'

// * Import the context AuthProvider
import { AuthProvider } from '@/context/AuthContext'

// * Import the ProtectedRoute component
import ProtectedRoute from '@/components/ProtectedRoute'

// * Define routes that should be protected
// TIP: You can also use a regex to match multiple routes
// TIP: If you have more non-protected routes than protected routes, you can also use a whitelist approach (e.g. const publicRoutes = ['/login', '/signup'])
const protectedRoutes = ['/secret-page']

export default function App({ Component, pageProps }: AppProps) {
  // * Get the router
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* * Wrap the entire app in the AuthProvider */}
      <AuthProvider>
        {
          // * Check if the current route is in the protectedRoutes array
          protectedRoutes.includes(router.pathname) ? (
            // * If so, render the component inside the ProtectedRoute component
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          ) : (
            // * If not, render the component as normal
            <Component {...pageProps} />
          )
        }
      </AuthProvider>
    </>
  )
}
