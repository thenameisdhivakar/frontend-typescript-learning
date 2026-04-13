import React from 'react';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>Task management</h1>
      <FilterBar />
      <TaskList />
    </div>
  );
}

export default App;
