'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import facebookIcon from '../../public/facebook1.png';
import instagramIcon from '../../public/instagram1.png';
import twitterIcon from '../../public/twitter.jpg';
import profileIcon from '../../public/profile.jpg';
import logo from '../../public/logo111.png';

import classification1 from '../../public/poster.png';
import classification4 from '../../public/card2.avif';
import classification5 from '../../public/Cards.jpg';
import classification6 from '../../public/superhero.png';
import classification7 from '../../public/comic.avif';
import classification8 from '../../public/shouban.webp';
import classification9 from '../../public/vintage-toy.jpg';
import classification10 from '../../public/penny.png';
import classification11 from '../../public/pins.webp';

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const router = useRouter();

  const categories = ['Toys', 'Trading Cards', 'Comics', 'Memorabilia', 'Figurines', 'Posters', 'Coins'];

  const items = [
    { category: 'Figurines', img: classification8, title: 'One Piece Figurine', desc: 'Limited edition One Piece set with all crew members', owner: 'zhang@gmail.com' },
    { category: 'Toys', img: classification9, title: 'Vintage Toy', desc: 'Classic 80s toy in great condition.', owner: 'li@example.com' },
    { category: 'Trading Cards', img: classification5, title: 'Rare Card', desc: 'Mint condition limited edition card.', owner: 'alice@example.com' },
    { category: 'Memorabilia', img: classification11, title: "Collector's Pin", desc: 'Enamel pin from early 2000s.', owner: 'bob@example.com' },
    { category: 'Coins', img: classification10, title: '1857 Penny', desc: 'Perfect condition, 1850s penny made in copper.', owner: 'cindy@example.com' },
    { category: 'Trading Cards', img: classification4, title: 'Rare Card', desc: 'Mint condition limited edition card.', owner: 'john@example.com' },
    { category: 'Comics', img: classification7, title: 'Comic Book', desc: "Superhero first edition from 1994.", owner: 'david@example.com' },
    { category: 'Posters', img: classification1, title: 'Wanted Posters', desc: "Wanted posters of Luffy and all Luffy's crew members", owner: 'emma@example.com' },
    { category: 'Figurines', img: classification6, title: 'Marvels', desc: 'Deadpool legacy collection edition', owner: 'mike@example.com' },
  ];

  const filteredItems = selectedCategories.length === 0
    ? items
    : items.filter(item => selectedCategories.includes(item.category));

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedCategories(prev =>
      prev.includes(value)
        ? prev.filter(cat => cat !== value)
        : [...prev, value]
    );
  };

  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="grid-container">
            <div className="left-text">
              <Link href="/">
                <Image className="nav-bar-logo-img" src={logo} alt="business logo" width={60} height={60} />
              </Link>
            </div>
            <div className="right-text">
              <Link className="nav-bar-links" href="/about">About</Link>
              <Link className="nav-bar-links" href="/shop">Shop</Link>
              <Link className="nav-bar-links" href="/message">Message</Link>
              <Link href="/login">
                <button className="nav-bar-sign-in">Log In</button>
              </Link>
              <Link href="/register">
                <button className="nav-bar-sign-up">Sign Up</button>
              </Link>
              <Link className="nav-bar-links" href="/profiles">
                <Image className="nav-bar-profile" src={profileIcon} alt="Profile" width={35} height={35} />
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main id="main-shop" style={{ marginTop: '120px' }}>
        <div className="shop-layout">
          <aside className="filter-sidebar">
            <h2>Filter</h2>
            <div className="filter-checkbox">
              {categories.map((label, idx) => (
                <label key={idx}>
                  <input
                    type="checkbox"
                    value={label}
                    onChange={handleCheckboxChange}
                    checked={selectedCategories.includes(label)}
                  />
                  {' '}{label}
                </label>
              ))}
            </div>
          </aside>

          <section className="shop-grid">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="shop-item"
                data-category={item.category}
                onClick={() => router.push(`/message?owner=${encodeURIComponent(item.owner)}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="img-square">
                  <Image src={item.img} alt={`Item ${idx + 1}`} fill className="next-image" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </section>
        </div>
      </main>

      <footer style={{ padding: '40px' }}>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src={instagramIcon} alt="instagram" width={30} height={30} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src={twitterIcon} alt="twitter" width={30} height={30} />
          </a>
        </div>
        <h4>&copy;2025 Swaplt</h4>
      </footer>
    </>
  );
}
