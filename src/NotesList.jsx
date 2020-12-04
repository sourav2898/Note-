import React from 'react';

const NotesList = (props) => {

    const removeNote = () => {
        props.delete(props.id);
    };

    return (
        <>
            <div className="list">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div className="delete">
                    <button onClick={removeNote}> - </button>
                </div>
            </div>
        </>
    );
}

export default NotesList;