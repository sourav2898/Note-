import React, { useState } from 'react';
import Header from './Header';
import Notes from './Notes';
import NotesList from './NotesList';

const App = () => {
  const [note,setNote] = useState([]);

  const addNotes = (text) => {
      setNote((prevData) => {
        return [...prevData,text];
      });
  };

  const deleteNote = (id) => {
      setNote((prevData) =>
        prevData.filter((value,index) => {
          return index !== id;
        })
      );
  };

  return (
    <>
      <Header />
      <Notes  passNote={addNotes}/>
      <div className="notelist">
        {
          note.map((value,index) => {
            return <NotesList 
                key = {index}
                id = {index}
                title = {value.title}
                description = {value.description}
                delete = {deleteNote}
            />;
          })
        }
      </div>
      
    </>
  );
};

export default App;
