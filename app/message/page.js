'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { auth, db } from '../../src/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  getDocs,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp
} from 'firebase/firestore';
import Link from 'next/link';
import Image from 'next/image';

import profileIcon from '../../public/profile.jpg';
import facebookIcon from '../../public/facebook1.png';
import instagramIcon from '../../public/instagram1.png';
import twitterIcon from '../../public/twitter.jpg';
import logo from '../../public/logo111.png';

export default function MessagePage() {
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const searchParams = useSearchParams();
  const initialEmail = searchParams.get('email');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const users = querySnapshot.docs
        .map((doc) => doc.data())
        .filter((u) => u.uid !== user?.uid);
      setAllUsers(users);
    };

    if (user) fetchUsers();
  }, [user]);

  useEffect(() => {
    if (initialEmail && allUsers.length > 0) {
      const matched = allUsers.find((u) => u.email === initialEmail);
      if (matched) {
        setSelectedUser(matched);
      }
    }
  }, [initialEmail, allUsers]);

  useEffect(() => {
    if (!user || !selectedUser) return;

    const conversationId = [user.uid, selectedUser.uid].sort().join('_');
    const q = query(
      collection(db, 'conversations', conversationId, 'messages'),
      orderBy('timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [user, selectedUser]);

  const sendMessage = async () => {
    if (!input.trim() || !user || !selectedUser) return;

    const conversationId = [user.uid, selectedUser.uid].sort().join('_');

    await addDoc(collection(db, 'conversations', conversationId, 'messages'), {
      sender: user.uid,
      text: input,
      timestamp: serverTimestamp()
    });

    setInput('');
  };

  return (
    <div>
      {/* Header */}
      <header>
        <nav className="nav-bar">
          <div className="grid-container">
            <div className="left-text">
              <Link href="/">
                <Image className="nav-bar-logo-img" src={logo} alt="business logo" width={50} height={50} />
              </Link>
            </div>
            <div className="right-text">
              <Link className="nav-bar-links" href="/about">About</Link>
              <Link className="nav-bar-links" href="/shop">Shop</Link>
              <Link className="nav-bar-links" href="/message">Messages</Link>
              <Link href="/login"><button className="nav-bar-sign-in">Sign In</button></Link>
              <Link href="/register"><button className="nav-bar-sign-up">Sign Up</button></Link>
              <Link className="profile" href="/profile">
                <Image src={profileIcon} alt="profile" width={30} height={30} />
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main chat layout */}
      <main className="message-layout" style={{ display: 'flex', minHeight: '80vh', marginTop:'120px' }}>
        <aside className="conversation-list" style={{ width: '30%', borderRight: '1px solid #ccc', padding: '20px' }}>
          <h1>All Users</h1>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {allUsers.map((u) => (
              <li
                key={u.uid}
                onClick={() => setSelectedUser(u)}
                style={{
                  cursor: 'pointer',
                  backgroundColor: selectedUser?.uid === u.uid ? '#eee' : '#fff',
                  padding: '10px',
                  borderBottom: '1px solid #ddd',
                  borderRadius: '6px',
                  marginBottom: '10px'
                }}
              >
                <h3>{u.email}</h3>
              </li>
            ))}
          </ul>
        </aside>

        {/* Chat Window */}
        <section className="chat-window" style={{ flex: 1, padding: '20px' }}>
          {selectedUser ? (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h2>Chat with {selectedUser.email}</h2>
              <div style={{ flex: 1, marginTop: '10px', padding: '10px', border: '1px solid #ccc', overflowY: 'auto', borderRadius: '6px', height: '300px' }}>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    style={{
                      textAlign: msg.sender === user.uid ? 'right' : 'left',
                      marginBottom: '10px'
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: msg.sender === user.uid ? '#d0f0ff' : '#e0ffe0',
                        padding: '8px 12px',
                        borderRadius: '12px',
                        display: 'inline-block'
                      }}
                    >
                      {msg.text}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', marginTop: '10px', gap: '10px' }}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                />
                <button
                  onClick={sendMessage}
                  style={{ padding: '10px 20px', borderRadius: '6px', backgroundColor: '#000', color: '#fff', border: 'none' }}
                >
                  Send
                </button>
              </div>
            </div>
          ) : (
            <h2 style={{ color: '#888' }}>Please select a user to start chatting.</h2>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer style={{ padding: '20px', backgroundColor: '#f5f5f5', textAlign: 'start' }}>
        <div className="social-icons" style={{ display: 'flex', justifyContent: 'start', gap: '20px', marginBottom: '10px' }}>
          <a href="#"><Image src={facebookIcon} alt="facebook" width={30} height={30} /></a>
          <a href="#"><Image src={instagramIcon} alt="instagram" width={30} height={30} /></a>
          <a href="#"><Image src={twitterIcon} alt="twitter" width={30} height={30} /></a>
        </div>
        <div style={{marginTop:'10px'}}>
          <h4 style={{margin : 0}}>&copy;2025 Swaplt</h4>
        </div>
      </footer>
    </div>
  );
}

