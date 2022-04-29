import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ActivitiesPage from './pages/ActivitiesPage';
import ComplementaryActivityPage from './pages/ComplementaryActivityPage';

import HomePage from './pages/HomePage';
import NoMatchPage from './pages/NoMatchPage';
import ParentsPage from './pages/ParentsPage';
import ProfessorPage from './pages/ProfessorPage';
import StudentPage from './pages/StudentPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="professor" element={<ProfessorPage />} />
        <Route path="send-activity" element={<ActivitiesPage />} />
        <Route path="parent" element={<ParentsPage />} />
        <Route path="student" element={<StudentPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
