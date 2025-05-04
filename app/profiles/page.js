'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../src/firebase';

import logo from '../../public/logo111.png';
import facebookIcon from '../../public/facebook1.png';
import instagramIcon from '../../public/instagram1.png';
import twitterIcon from '../../public/twitter.jpg';
import profileIcon from '../../public/profile.jpg';

import classification1 from '../../public/poster.png';
import classification4 from '../../public/card2.avif';
import classification5 from '../../public/Cards.jpg';
import classification6 from '../../public/superhero.png';
import classification7 from '../../public/comic.avif';
import classification8 from '../../public/shouban.webp';
import classification9 from '../../public/vintage-toy.jpg';
import classification10 from '../../public/penny.png';
import classification11 from '../../public/pins.webp';

const imageMap = {
  'poster.png': classification1,
  'card2.avif': classification4,
  'Cards.jpg': classification5,
  'superhero.png': classification6,
  'comic.avif': classification7,
  'shouban.webp': classification8,
  'vintage-toy.jpg': classification9,
  'penny.png': classification10,
  'pins.webp': classification11,
};

const categories = ["Toys", "Trading Cards", "Comics", "Memorabilia", "Figurines", "Posters", "Coins"];

export default function Profile() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [items, setItems] = useState([
    { category: 'Figurines', img: 'shouban.webp', title: 'One Piece Figurine', desc: 'Limited edition One Piece set with all crew members', owner: 'zhang@gmail.com' },
    { category: 'Toys', img: 'vintage-toy.jpg', title: 'Vintage Toy', desc: 'Classic 80s toy in great condition.', owner: 'li@example.com' },
    { category: 'Trading Cards', img: 'Cards.jpg', title: 'Rare Card', desc: 'Mint condition limited edition card.', owner: 'alice@example.com' },
    { category: 'Memorabilia', img: 'pins.webp', title: "Collector's Pin", desc: 'Enamel pin from early 2000s.', owner: 'bob@example.com' },
    { category: 'Coins', img: 'penny.png', title: '1857 Penny', desc: 'Perfect condition, 1850s penny made in copper.', owner: 'cindy@example.com' },
    { category: 'Trading Cards', img: 'card2.avif', title: 'Rare Card', desc: 'Mint condition limited edition card.', owner: 'john@example.com' },
    { category: 'Comics', img: 'comic.avif', title: 'Comic Book', desc: "Superhero first edition from 1994.", owner: 'david@example.com' },
    { category: 'Posters', img: 'poster.png', title: 'Wanted Posters', desc: "Wanted posters of Luffy and all Luffy's crew members", owner: 'emma@example.com' },
    { category: 'Figurines', img: 'superhero.png', title: 'Marvels', desc: 'Deadpool legacy collection edition', owner: 'mike@example.com' },
  ]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const title = e.target["item-title"].value;
    const category = e.target["item-category"].value.toLowerCase();
    const description = e.target["item-description"].value;
    const image = e.target["item-image"].files[0]?.name;

    if (title && category && description && image) {
      const newItem = { img: image, title, desc: description, cat: category };
      try {
        await addDoc(collection(db, 'items'), newItem);
        console.log("Item uploaded!");
        setItems(prevItems => [...prevItems, newItem]);
      } catch (error) {
        console.error("Error uploading item:", error);
      }
    }

    e.target.reset();
  };

  const handleCheckboxChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const firestoreItems = querySnapshot.docs.map(doc => doc.data());
        setItems(prevItems => [...prevItems, ...firestoreItems]);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  const filteredItems = items.filter((item) => {
    return selectedCategories.length === 0 || selectedCategories.includes(item.cat || item.category?.toLowerCase());
  });

  return (
    <>
      <div className="header">
        <header>
          <nav className="nav-bar">
            <div className="grid-container">
              <div className="left-text">
                <Link href="/">
                  <Image src={logo} alt="business logo" width={100} height={100} />
                </Link>
              </div>
              <div className="right-text">
                <Link className="nav-bar-links" href="/about">About</Link>
                <Link className="nav-bar-links" href="/shop">Shop</Link>
                <Link className="nav-bar-links" href="/message">Message</Link>
                <Link href="/login"><button className="nav-bar-sign-in">Log In</button></Link>
                <Link href="/register"><button className="nav-bar-sign-up">Sign Up</button></Link>
                <Link className="profile" href="/profile">
                  <Image src={profileIcon} alt="profile" className="w-[5%]" width={30} height={30} />
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <main id="main-profile">
        <h1>Listing Overview</h1>
        <div className="profile-page">
          <h2><strong><center>Create New Listing</center></strong></h2>
          <section className="upload-section">
            <form id="item-form" onSubmit={handleFormSubmit}>
              <div className="form-layout-3col">
                <div className="form-col">
                  <label htmlFor="item-title">Title</label>
                  <input type="text" id="item-title" required placeholder="Enter item title" />
                  <label htmlFor="item-category">Category</label>
                  <select id="item-category" required>
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="form-col">
                  <label htmlFor="item-description">Description</label>
                  <textarea id="item-description" required placeholder="Enter item description"></textarea>
                </div>
                <div className="form-col">
                  <label htmlFor="item-image">Upload Image</label>
                  <input type="file" id="item-image" accept="image/*" required />
                </div>
              </div>
              <div className="form-button">
                <button type="submit">Upload Item</button>
              </div>
            </form>
          </section>

          <h2><strong><center>Listed Items</center></strong></h2>
          <div className="shop-layout">
            <aside className="filter-sidebar">
              <h2>Filter</h2>
              <div className="filter-checkbox">
                {categories.map(item => (
                  <label key={item}>
                    <input
                      type="checkbox"
                      value={item.toLowerCase()}
                      onChange={() => handleCheckboxChange(item.toLowerCase())}
                    /> {item}
                  </label>
                ))}
              </div>
            </aside>

            <section className="shop-grid">
              {filteredItems.map((item, idx) => (
                <div key={idx} className="shop-item" data-category={item.cat || item.category?.toLowerCase()}>
                  <a href="#">
                    {imageMap[item.img] ? (
                      <Image src={imageMap[item.img]} alt={item.title} width={150} height={150} />
                    ) : (
                      <img src={`/img/${item.img}`} alt={item.title} width={150} height={150} />
                    )}
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </a>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>

      <div className="footer">
        <footer>
          <div className="social-icons">
            <a href="#"><Image src={facebookIcon} alt="facebook" width={30} height={30} /></a>
            <a href="#"><Image src={instagramIcon} alt="instagram" width={30} height={30} /></a>
            <a href="#"><Image src={twitterIcon} alt="twitter" width={30} height={30} /></a>
          </div>
          <h4>&copy;2025 Swaplt</h4>
        </footer>
      </div>
    </>
  );
}
