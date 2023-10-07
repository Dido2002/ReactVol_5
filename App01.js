import React, {useState} from 'react';
import Note from './Note';

export default function App01(){

    const [notes, setNotes] = useState([])

    function addNote(){
        var note = {title: "Enter text ", content: "Enter content"};
        setNotes([note, ...notes]);
    }

    function deleteNote(index){
        const newNotes = [...notes];
        newNotes.splice(index,1);
        setNotes(newNotes);
    }

    function updateNote(index, updateNote){
        const updatedNotes = notes.map((note, i) => {
            if(i == index){
                return updatedNotel
            }
            return note;
        })

        setNotes(updatedNotes);
    }

    return(
        <div className='container'>
            <div className="row mt-3">
                <div className='col-12'>
                    <button onClick={addNote} className='btn btn-primary'>Enter text</button>
                </div>
                <div className='col-12'>
                    {notes.map((note,i) => (
                        <Note 
                            key={i}
                            note={note} 
                            deleteNote = {deleteNote}
                            updateNote = {updateNote}
                            index = {i}

                        />
                    ))}
                </div>
            </div>
        </div>
    );
}