'use client'; // Ensure this file is treated as a client component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // For client-side navigation
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Home() {
  
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/auth/login'); // Redirect to authentication page if not logged in
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [router]);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Event Management</h1>
      <p className="text-xl">Organize and manage your events with ease.</p>
    </div>
  );
}
