import React, { useState } from 'react';

const Notes = (props) => {

    const [text,setText] = useState({
        title:"",
        description: "",
    });

    const inputEvent = (event) => {
        const {name,value} = event.target;

        setText((oldVal) => {
            return{
                ...oldVal,
                [name] : value,
            }
        });
    };

    const addNote = () => {
        props.passNote(text);

        setText({
            title:"",
            description: "",
        });
    };

    return (
        <>
            <div className="notes">
                <input type="text" 
                placeholder="Title" 
                autoComplete="off" 
                name="title" 
                value={text.title} 
                onChange={inputEvent} />

                <textarea rows="7" 
                cols="" 
                placeholder="Wrtie your notes" 
                name="description" 
                value={text.description} 
                onChange={inputEvent} />

                <button onClick={addNote}> + </button>
            </div>
        </>
    );   
}

export default Notes;