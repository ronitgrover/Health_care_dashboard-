import React from 'react';
import DashboardOverview from './DashboardOverview/DashboardOverview';
import CalendarView from './CalendarView/CalendarView';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from './ActivityFeed/ActivityFeed';
import styles from './DashboardMainContent.module.css';

const DashboardMainContent = () => {
  return (
    <main className={styles.dashboardMain}>
      <DashboardOverview />
      <div className={styles.lowerSection}>
        <div className={styles.leftColumn}>
          <CalendarView />
        </div>
        <div className={styles.rightColumn}>
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;    