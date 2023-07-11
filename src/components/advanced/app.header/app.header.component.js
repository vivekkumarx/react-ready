import { Link } from 'react-router-dom';
import * as PATH from 'constants/uiPaths.constants';
import AppHeaderNavItem from './app.header.nav.item.component';
import styles from './app.header.styles.module.css';

const navItems = [
  {
    label: 'Home',
    text: 'home',
    link: PATH.ROOT,
  },
  {
    label: 'Profile',
    text: 'profile',
    link: PATH.PROFILE,
  },
  {
    label: 'Users',
    text: 'users',
    link: PATH.USERS,
  },
];

const AppHeader = () => (
  <div className={styles.appHeaderContainer}>
    <ul className={styles.navList} data-test-id="nav-list">
      {navItems.map((item, idx) => (
        <AppHeaderNavItem key={idx} {...item} />
      ))}
    </ul>
  </div>
);

export default AppHeader;
