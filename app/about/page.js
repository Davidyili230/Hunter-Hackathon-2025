'use client';

import Link from 'next/link';
import Image from 'next/image';
import facebookIcon from '../../public/facebook1.png';
import instagramIcon from '../../public/instagram1.png';
import twitterIcon from '../../public/twitter.jpg';
import profileIcon from '../../public/profile.jpg';
import logo from '../../public/logo111.png';

export default function AboutPage() {
  return (
    <div>
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
              <Link href="/login">
                <button className="nav-bar-sign-in">Log In</button>
              </Link>
              <Link href="/register">
                <button className="nav-bar-sign-up">Sign Up</button>
              </Link>
              <Link className="profile" href="/profiles">
                <Image src={profileIcon} alt="profiles" width={30} height={30} />
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main id="about-main">
        <h1>About Us</h1>
        <h2>
          Welcome to <strong>Swaplt</strong> — a community-driven trading platform where collectors give new life to the items they no longer need. We believe that one person’s forgotten item can be another’s cherished find. Whether it’s vintage toys, trading cards, comics, collectibles, or rare memorabilia, our goal is to help these treasures find a new home instead of ending up in a landfill.
        </h2>
        <div style={{textAlign: 'center', margin: '40px 0'}}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mzEO8m_2R5Q?si=fuvhW1Ph9pqIKsgK"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h2>Join us in keeping collectibles circulating, reducing waste, and helping every item tell a new story.</h2>
        </div>

        <div className="about-grid-container">
          <div className="about-left-text">
            <h1>Why We Exist</h1>
            <h2>
              Every year, countless valuable and reusable items are thrown away, contributing to environmental waste. We created this platform to make a difference — not just by making it easy to trade and connect, but by promoting a sustainable and conscious approach to collecting.
            </h2>
          </div>
          <div className="about-right-text">
            <h1>What We Offer</h1>
            <ul>
              <li>A place to list your unwanted collectibles for trade or giveaway.</li>
              <li>A chance to discover unique items from other collectors.</li>
              <li>A platform built on the values of community, sustainability, and shared passion.</li>
            </ul>
          </div>
        </div>

        <div>
          <h1>Sources</h1>
          <h2><strong>🌍 Environmental Impact of Discarding Collectibles</strong></h2>
          <h2>
            <em><strong>Throwaway Culture Is Drowning Us in Waste:</strong></em><br />
            An in-depth look at how our society’s tendency to discard items after minimal use leads to significant environmental degradation.
            <a href="https://earth.org/throwaway-culture-is-drowning-us-in-waste/" target="_blank" rel="noopener noreferrer">Read more</a>
          </h2>

          <h2><strong>🔄 Benefits of Trading Collectibles</strong></h2>
          <h2>
            <em><strong>Any Collectors Focus on Trading Instead of Buying/Selling?</strong></em><br />
            A Reddit discussion where collectors share their experiences and the advantages of trading over buying or selling, emphasizing community and sustainability.
            <a href="https://www.reddit.com/r/mtgfinance/s/obPzaX8J4X" target="_blank" rel="noopener noreferrer">Read more</a>
          </h2>
        </div>
      </main>

      <footer>
        <div className="social-icons">
          <a href="#" target="_blank">
            <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          </a>
          <a href="#" target="_blank">
            <Image src={instagramIcon} alt="instagram" width={30} height={30} />
          </a>
          <a href="#" target="_blank">
            <Image src={twitterIcon} alt="twitter" width={30} height={30} />
          </a>
        </div>
        <h4>&copy;2025 Swaplt</h4>
      </footer>
    </div>
  );
}
