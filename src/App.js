import { useState } from 'react';
import './App.css';
import Table from './components/Table.jsx';
import Modal from './components/Modal.jsx';

function App() {

  const [modalOpen, setModelOpen] = useState(false);

  const [rows, setRows] = [
    {
      page: "Page 1",
      description: "This is the first page",
      status: "live"
    },
    {
      page: "Page 2",
      description: "This is the second page",
      status: "draft"
    },
    {
      page: "Page 3",
      description: "This is the third page",
      status: "error"
    }
  ]

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex))
  }

  return (
    <div className="App">
      <Table rows={rows} deleteRow={handleDeleteRow} />
      <button className='btn' onClick={() => setModelOpen(true)}>Add</button>
      {
        modalOpen && <Modal closeModal={() => {
          setModelOpen(false);
        }} />
      }
    </div>
  );
}

export default App;
