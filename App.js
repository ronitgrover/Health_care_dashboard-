import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.mainContainer}>
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;