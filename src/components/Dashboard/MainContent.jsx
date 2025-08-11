// MainContent.jsx
import { Routes, Route } from 'react-router-dom';
import DashboardContent from './DashboardContent';
import UsersContent from './UsersContent';
import PageList from './PageList';
import MonitorContent from './MonitorContent';
import AnalyticsContent from './AnalyticsContent';
import MessagesContent from './MessagesContent';
import SettingsContent from './SettingsContent';
import EditPage from './EditPage';
import { Navigate } from 'react-router-dom';

const MainContent = () => {
  return (
    <main className="flex-1 bg-gray-100 overflow-auto">
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardContent />} />
        <Route path="pages" element={<PageList />} />
        <Route path="pages/edit/:index" element={<EditPage />} />
        <Route path="blog" element={<MonitorContent />} />
        <Route path="users" element={<UsersContent />} />
        <Route path="analytics" element={<AnalyticsContent />} />
        <Route path="messages" element={<MessagesContent />} />
        <Route path="settings" element={<SettingsContent />} />
        <Route path="*" element={<div>Error: Page Not Found</div>} />
      </Routes>
    </main>
  );
};

export default MainContent;