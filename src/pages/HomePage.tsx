import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="professor">
          <h1>Professor</h1>
        </Link>
        <Link to="parent">
          <h1>Pais</h1>
        </Link>
        <Link to="student">
          <h1>Estudante</h1>
        </Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
