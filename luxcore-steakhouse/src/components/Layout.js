// components/Layout.js
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title = 'LuxCore Steakhouse' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* ... other head tags ... */}
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
