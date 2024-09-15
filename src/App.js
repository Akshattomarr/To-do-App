import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const TaskBoard = lazy(() => import('./components/TaskBoard'));
const TaskDetails = lazy(() => import('./components/TaskDetails'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="p-6">Loading...</div>}>
        <Routes>
          <Route path="/" element={<TaskBoard />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
