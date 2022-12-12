import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NoteItemList({ notes }) {
  if (!notes.length) {
    return (
      <section className="notes-list-empty">
        <p className="notes-list__empty">Catatan kosong</p>
      </section>
    );
  }

  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} title={note.title} createdAt={note.createdAt} body={note.body} />
      ))}
    </section>
  );
}

NoteItemList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default NoteItemList;
