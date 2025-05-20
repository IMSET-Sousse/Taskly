'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('token');

    // Notify other components (like Header) that auth status has changed
    window.dispatchEvent(new Event('authChange'));

    router.push('/login');
  }, [router]);

  return null;
}
