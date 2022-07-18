import Link from 'next/link';
import classes from './NavBar.module.scss';
import { useEffect, useState } from 'react';
import useWindowSize from '../helpers/useWindowSize';

export default function NavBar() {
  const { width } = useWindowSize();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(width);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);
    changeWidth();
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Recipe Viewer</div>
      <nav>
        {(toggleMenu || screenWidth > 576) && (
          <ul className={classes.list}>
            <li className={classes.item}>
              <Link href="/categories">
                <a>Home</a>
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/favorites">
                <a>Favorite</a>
              </Link>
            </li>
          </ul>
        )}
      </nav>
      <button onClick={toggleNav} className={classes.button}>
        Menu
      </button>
    </header>
  );
}
