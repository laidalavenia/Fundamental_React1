import React from 'react';
import InputNote from '../components/InputNote';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate('/');
  }

  return (
    <InputNote addNote={onAddNoteHandler} />
  )
}

export default AddPage