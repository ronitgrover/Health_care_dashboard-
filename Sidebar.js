import React from 'react';
import styles from './Sidebar.module.css';
import { navigationLinks } from '../../data/navigationLinks';
import { 
  FiHome, FiCalendar, FiClock, FiBarChart2, 
  FiActivity, FiMessageSquare, FiHelpCircle, FiSettings 
} from 'react-icons/fi';

const iconComponents = {
  dashboard: FiHome,
  history: FiClock,
  calendar: FiCalendar,
  appointments: FiClock,
  statistics: FiBarChart2,
  tests: FiActivity,
  chat: FiMessageSquare,
  support: FiHelpCircle,
  setting: FiSettings
};

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <h3 className={styles.sidebarTitle}>General</h3>
      <ul className={styles.navLinks}>
        {navigationLinks.map((link) => {
          const Icon = iconComponents[link.icon];
          return (
            <li key={link.id} className={styles.navItem}>
              <Icon className={styles.navIcon} />
              <span className={styles.navText}>{link.text}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;