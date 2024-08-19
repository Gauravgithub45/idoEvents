'use client'

import Link from 'next/link'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { auth } from '../firebase';

export default function Navbar() {
//   const auth = getAuth()
  const user = auth.currentUser
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.push('/auth/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          EventManager
        </Link>
        <div className="space-x-4">
          {user ? (
            <>
              <Link href="/events" className="hover:underline">
                Events
              </Link>
              <button
                onClick={handleLogout}
                className="hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="hover:underline">
                Login
              </Link>
              <Link href="/auth/register" className="hover:underline">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
