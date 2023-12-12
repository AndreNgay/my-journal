import React from 'react';

const JournalEntry = ({ entry, onDeleteEntry }) => {
  return (
    <div className="entry border p-3 mb-3">
      <p><strong>Date:</strong> {new Date(entry.date).toLocaleDateString()}</p>
      <p><strong>Subject:</strong> {entry.subject}</p>
      <p><strong>Body:</strong> {entry.body}</p>
      <button className="btn btn-danger" onClick={onDeleteEntry}>Delete</button>
    </div>
  );
};

export default JournalEntry;
