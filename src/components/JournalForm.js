import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const JournalForm = ({ onAddEntry }) => {
  const [date, setDate] = useState(new Date());
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const addEntry = () => {
    if (subject && body) {
      const newEntry = { date, subject, body };
      onAddEntry(newEntry);
      setSubject('');
      setBody('');
    }
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">Date:</label>
        <br />
        <DatePicker
          selected={date}
          onChange={(newDate) => setDate(newDate)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="subject" className="form-label">Subject:</label>
        <input type="text" className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Body:</label>
        <textarea className="form-control" value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={addEntry}>Add Entry</button>
    </div>
  );
};

export default JournalForm;
