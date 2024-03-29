import { useState } from 'react';
import './App.css';
import Table from './components/Table.jsx';
import Modal from './components/Modal.jsx';
import ModalConfirm from './components/ModalConfirm.jsx';

function App() {

  const [modalOpen, setModelOpen] = useState(false);

  const [modelConfirmOpen, setModelConfirmOpen] = useState(false);

  const [rows, setRows] = useState([
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
  ])

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex))
  }

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModelOpen(true);
  }

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(rows.map((currRow, idx) => {
        if (idx !== rowToEdit) return currRow;

        return newRow;
      })
      )
  }

  const openModalConfirm = (e) => {
    e.preventDefault();
    setModelConfirmOpen(true);
  }

  const closeModalConfirm = () => {
    setModelConfirmOpen(false);
  }

  const closeAllModal = () => {
    setModelOpen(false)
    setModelConfirmOpen(false);
  }



  return (
    <div className="App">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button className='btn' onClick={() => setModelOpen(true)}>Add</button>
      {
        modalOpen &&
        <Modal
          closeModal={() => {
            setModelOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
          openDialog={openModalConfirm}
        />
      }
      {
        modelConfirmOpen &&
        <ModalConfirm
          closeAllModal={closeAllModal}
          closeDialog={closeModalConfirm}
          title="Your changes will not save"
        />
      }
    </div>
  );
}

export default App;
