'use client';

import { useState } from 'react';
import { auth } from '../../src/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #ccc', padding: '40px', borderRadius: '8px', width: '300px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ padding: '10px', borderRadius: '4px', backgroundColor: '#000', color: '#fff', border: 'none' }}>
            Login
          </button>
        </form>
        {error && <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{error}</p>}
        <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px' }}>Don't have an account?</p>
        <p style={{ textAlign: 'center', fontSize: '14px' }}>
          <Link href="/register">
            <span style={{ color: 'blue', textDecoration: 'underline' }}>Register</span>
          </Link>
        </p>
        <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '10px' }}>
          <button style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>
            Forgot Password?
          </button>
        </p>
      </div>
    </main>
    );
  }