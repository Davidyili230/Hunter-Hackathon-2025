'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo111.png';
import whateverpic1 from '../public/knight.png';
import whateverpic2 from '../public/exchange.png';
import whateverpic3 from '../public/change.png';
import displaypic1 from '../public/shouban.webp';
import displaypic2 from '../public/penny.png';
import displaypic3 from '../public/comic.avif';
import facebookIcon from '../public/facebook1.png';
import instagramIcon from '../public/instagram1.png';
import twitterIcon from '../public/twitter.jpg';
import profileIcon from '../public/profile.jpg';
import classification1 from '../public/poster.png';
import classification2 from '../public/Guitar.png';
import classification3 from '../public/ipad.jpg';
import classification4 from '../public/Cards.jpg';
import classification5 from '../public/bed.png';
import classification6 from '../public/superhero.png';
import classification7 from '../public/comic.avif';

export default function HomePage() {
  return (
    <div>
      <header>
        <nav className="nav-bar">
          <div className="grid-container">
            <div className="left-text">
              <Link href="/">
                <Image className="nav-bar-logo-img" src={logo} alt="business logo"/>
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
                <Image className="nav-bar-profile "src={profileIcon} alt="Profile" width={35} height={35}/>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Section One */}
      <section id="section-one" className="home-title">
        <h1>Welcome to Swaplt</h1>
        <h2>Add, swap, and no waste. Give your preloved item a second life.</h2>
      </section>

      <section id="section-two" className="home-three-items">
        <Image src={whateverpic1} alt="wpic1" width={300} height={300} />
        <Image src={whateverpic2} alt="wpic2" width={300} height={300} />
        <Image src={whateverpic3} alt="wpic3" width={300} height={300} />
      </section>

      <section id="section-three">
        <h1>Most Popular</h1>
        <h2>The 3 Most In-Demand Items on Our Marketplace.</h2>
        <div className="home-listing-column">
          {[
            {
              img: displaypic1,
              title: 'One Piece Figurine',
              detail: 'Limited edition One Piece set with all crew members.'
            },
            {
              img: displaypic2,
              title: '1857 Penny',
              detail: 'Perfect condition, 1850s penny made in copper.'
            },
            {
              img: displaypic3,
              title: 'Comic Book',
              detail: 'Superhero first edition from 1994.'
            }
          ].map((item, idx) => (
            <div key={idx} className="home-listing-grid-two-column">
              <div className="home-listing-left-content">
                <Image src={item.img} alt={item.title} width={200} height={200} />
              </div>
              <div className="home-listing-right-content">
                <h1>{item.title}</h1>
                <h3>{item.detail}</h3>
                <button>Click Here</button>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section id="section-four">
        <h1>Browse by Category</h1>
        <h2>We've highlighted some of the most popular categories to help you get started.</h2>
        <div className="home-listing-scroll-wrapper">
          <div className="home-listing-scroll">
            {[
              { img: classification1, title: 'Poster' },
              { img: classification2, title: 'Guitar' },
              { img: classification3, title: 'IPad' },
              { img: classification4, title: 'Card' },
              { img: classification5, title: 'Bed' },
              { img: classification6, title: 'Figurines' },
              { img: classification7, title: 'Comics' },
            ].map((item, idx) => (
              <div key={idx} className="home-listing-content">
                <div className="home-listing-top-content">
                  <Image src={item.img} alt={item.title} width={200} height={200} />
                </div>
                <div className="home-listing-bottom-content">
                  <h1>{item.title}</h1>
                  <button>Click Here</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



    <footer>
      <div className="social-icons">
        <a href="#" target="_blank">
          <Image src={facebookIcon} alt="facebook" width={30} height={30}/>
        </a>  
        <a href="#" target="_blank">
          <Image src={instagramIcon} alt="instagram" width={30} height={30}/>
        </a>
        <a href="#" target="_blank">
          <Image src={twitterIcon} alt="twitter" width={30} height={30}/>
        </a>
      </div>
      <h4>&copy;2025 Swaplt</h4>
    </footer>
  </div>
  );
}
