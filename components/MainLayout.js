import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';
import classes from './MainLayout.module.scss';

export default function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title> Recipe Viewer</title>
        <meta name="keywords" content="recipe, recipe viewer, meat, food" />
        <meta name="description" content="Recipe viewer by create next app" />
        <meta charSet="utf-8" />
      </Head>
      <NavBar />
      <main className={classes.container}>{children}</main>
      <Footer />
    </>
  );
}
