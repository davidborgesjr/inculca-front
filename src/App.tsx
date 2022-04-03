import { Routes, Route, Link } from 'react-router-dom';
import ActivitiesPage from './pages/ActivitiesPage';

import HomePage from './pages/HomePage';
import NoMatchPage from './pages/NoMatchPage';
import ParentsPage from './pages/ParentsPage';
import ProfessorPage from './pages/ProfessorPage';
import StudentPage from './pages/StudentPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="professor" element={<ProfessorPage />} />
          <Route path="send-activity" element={<ActivitiesPage />} />
          <Route path="parent" element={<ParentsPage />} />
          <Route path="student" element={<StudentPage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
