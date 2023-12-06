// pages/index.js
import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'; // Assume you have a corresponding CSS module

export default function Home() {
  return (
    <Layout>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          {/* Logo and navigation links */}
          <div className={styles.logo}>LuxCore</div>
          <ul className={styles.navList}>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
          </ul>
        </nav>
      </header>

      <section className={styles.hero}>
        {/* Hero image or carousel */}
        <h1>LuxCore Steakhouse</h1>
        <p>"Experience world-class dining in the heart of downtown."</p>
      </section>

      <section className={styles.menuHighlights}>
        <h2>Discover Our Menu</h2>
        <p>World-class steak</p>
        {/* Include images and descriptions of your dishes */}
      </section>

      <section className={styles.wineSelection}>
        <h2>Our Wine Collection</h2>
        <p>Elevate your dining experience with our curated wine selection.</p>
        {/* Display wine bottles or a wine list */}
      </section>

      <section className={styles.reservationForm}>
        <h2>Book a Table</h2>
        <form>
          {/* Example input for date */}
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" />

          {/* Example input for time */}
          <label htmlFor="time">Time</label>
          <input type="time" id="time" name="time" />

          {/* Example input for number of people */}
          <label htmlFor="people">People</label>
          <select id="people" name="people">
            <option value="1">1 Person</option>
            {/* Add more options as needed */}
          </select>

          <button type="submit">Reserve Now</button>
        </form>
      </section>

      <footer className={styles.footer}>
        {/* Footer content such as address, contact info, and social links */}
        <p>&copy; {new Date().getFullYear()} LuxCore Steakhouse</p>
      </footer>
    </Layout>
  );
}
