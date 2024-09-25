import React from 'react';
import { Routes, Route } from 'react-router-dom';

import EventPage from './pages/event/eventPage';
import EventParticipants from './components/EventParticipants/EventParticipants';

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<EventPage />} />
        <Route path="/event/:id" element={<EventParticipants />} />
      </Routes>
    </div>
  );
};

export default App;
