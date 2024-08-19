'use client'

import { useState } from 'react'
import {  createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase';
import Link from 'next/link';
export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  

  const handleRegister = async (e) => {
    e.preventDefault()
    setError(null)
    
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      window.location.href = '/events'
    } catch (error) {
      console.error('Registration failed:', error)
      setError(error.message)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:ring-indigo-500"
        >
          Register
        </button>
        <div>
          Dont have a account <Link href={"/auth/login"}>Log in</Link>
        </div>
      </form>
    </div>
  )
}
