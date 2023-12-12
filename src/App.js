import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import JournalForm from './components/JournalForm';
import JournalEntry from './components/JournalEntry';

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch('http://localhost:8000/entries');
      const data = await response.json();
      setEntries(data);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const addEntry = async (newEntry) => {
    try {
      const response = await fetch('http://localhost:8000/entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry),
      });

      if (response.ok) {
        await fetchEntries();
      } else {
        console.error('Failed to add entry');
      }
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

  const deleteEntry = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/entries/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchEntries();
      } else {
        console.error('Failed to delete entry');
      }
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">My Journal</h1>
      <JournalForm onAddEntry={addEntry} />
      <div className="mt-4">
        <h2>Entries</h2>
        {entries.map((entry) => (
          <JournalEntry key={entry.id} entry={entry} onDeleteEntry={() => deleteEntry(entry.id)} />
        ))}
      </div>
    </div>
  );
}

export default App;
