
import './App.css';

import { NavLink, Routes, Route } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import logo from './octofitapp-small.png';


import React, { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {menuOpen && (
        <aside className="bg-dark text-light p-3" style={{ width: '240px', minHeight: '100vh', boxShadow: '2px 0 8px rgba(0,0,0,0.08)' }}>
          <NavLink className="navbar-brand d-flex flex-column align-items-center mb-4" to="/">
            <img src={logo} alt="Octofit Logo" className="octofit-logo" style={{ marginBottom: '56px' }} />
            <span>Octofit Tracker</span>
          </NavLink>
          <nav className="nav flex-column w-100">
            <NavLink className="nav-link text-light" to="/activities">Actividades</NavLink>
            <NavLink className="nav-link text-light" to="/leaderboard">Leaderboard</NavLink>
            <NavLink className="nav-link text-light" to="/teams">Equipos</NavLink>
            <NavLink className="nav-link text-light" to="/users">Usuarios</NavLink>
            <NavLink className="nav-link text-light" to="/workouts">Workouts</NavLink>
          </nav>
          <button className="btn btn-primary mt-4 w-100" onClick={() => setMenuOpen(false)}>Ocultar menú</button>
        </aside>
      )}
      <main className="flex-grow-1 p-4">
        {!menuOpen && (
          <button className="btn btn-primary mb-3" onClick={() => setMenuOpen(true)}>Mostrar menú</button>
        )}
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<h2>Bienvenido a Octofit Tracker</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
