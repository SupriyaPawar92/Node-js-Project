import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Notification from './Notification';
import Help from './Help';
import TeamManagement from './TeamManagement';
import ProjectOverview from './ProjectOverview';
import Reports from './Reports';
import UserManagement from './UserManagement';
import RoleManagement from './RoleManagement';
import SystemSettings from './SystemSettings';
import { useSelector } from 'react-redux';

function App() {
  const menuItems = useSelector((state) => state.menu.items);

  return (
    <Router>
      <div className="app">
        <Sidebar menuItems={menuItems} />
        <div className="content">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/notifications" component={Notification} />
            <Route path="/help" component={Help} />
            <Route path="/team-management" component={TeamManagement} />
            <Route path="/project-overview" component={ProjectOverview} />
            <Route path="/reports" component={Reports} />
            <Route path="/user-management" component={UserManagement} />
            <Route path="/role-management" component={RoleManagement} />
            <Route path="/system-settings" component={SystemSettings} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
