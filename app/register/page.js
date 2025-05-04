// 'use client';

// import { useState } from 'react';
// import { auth, db } from '../../src/firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { useRouter } from 'next/navigation';
// import { setDoc, doc } from 'firebase/firestore';
// import Link from 'next/link';

// export default function RegisterPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleRegister = async () => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
  
//       // ✅ 把用户资料存到 Firestore
//       await setDoc(doc(db, 'users', user.uid), {
//         uid: user.uid,
//         email: user.email,
//       });
  
//       // 注册成功后跳转页面
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       router.push('/login');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
//       <div style={{ backgroundColor: '#ffffff', border: '1px solid #ccc', padding: '40px', borderRadius: '8px', width: '300px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
//         <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h1>
//         <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
//           />
//           <button type="submit" style={{ padding: '10px', borderRadius: '4px', backgroundColor: '#000', color: '#fff', border: 'none' }}>
//             Register
//           </button>
//         </form>
//         {error && <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{error}</p>}
//         <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px' }}>Already have an account?</p>
//         <p style={{ textAlign: 'center', fontSize: '14px' }}>
//           <Link href="/login">
//             <span style={{ color: 'blue', textDecoration: 'underline' }}>Login</span>
//           </Link>
//         </p>
//       </div>
//     </main>
//   );
// }

'use client';

import { useState } from 'react';
import { auth, db } from '../../src/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { setDoc, doc } from 'firebase/firestore';
import Link from 'next/link';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ 把用户资料存到 Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
      });

      router.push('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #ccc', padding: '40px', borderRadius: '8px', width: '300px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h1>
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
            Register
          </button>
        </form>
        {error && <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{error}</p>}
        <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px' }}>Already have an account?</p>
        <p style={{ textAlign: 'center', fontSize: '14px' }}>
          <Link href="/login">
            <span style={{ color: 'blue', textDecoration: 'underline' }}>Login</span>
          </Link>
        </p>
      </div>
    </main>
  );
}
