import React from 'react';
import logo from './logo.svg';
import { Router } from '@reach/router'
import Home from './pages/Home.jsx'
import ResponsiveNavigation from './components/ResponsiveNavigation'
import Dashboard from './components/Dashboard.jsx'
import './assets/scss/base.scss'
import './App.css';

function App() {
  const navLinks = [
    {
      text: 'Home',
      path: '/',
      icon: 'ion-ios-home'
    },
    {
      text: 'Analytics',
      path: '/analytics',
      icon: 'ion-ios-analytics'
    }
  ]
  return (
    <div className="App">
      <ResponsiveNavigation
        navLinks={ navLinks }
        logo={ logo }
        background="#fff"
        hoverBackground="#ddd"
        linkColor="#777"
      />
			<Router>
				<Home path="/" />
				<Dashboard path="/dashboard" />
			</Router>
    </div>
  );
}

export default App;
