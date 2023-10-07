import React,{useState} from "react";

export default function Note({note, deleteNote,updateNote , index}){

    const [isEdit, setIsEdit] = useState(false);
    const [updatedNote, setUpdatedNote] = useState(note);

    function showEditForm(){
        return(
            <>
                <input className="form-control mb-3" type="text" value={updatedNote.title} name="title" onChange={handleInputChange}/>
                <textarea className="form-control mb-3" type="text" value={updatedNote.content} name="content" onChange={handleInputChange}></textarea>
                <button onClick={handleSaveClick} className="btn btn-success">Save</button>
            </>
        )
    }

    function handleSaveClick(){
        updateNote(i, updatedNote);
        setIsEdit(false);
    }

    function handleInputChange(event){
        const {name, value} = event.target;
        setUpdatedNote({...updatedNote, [name]: value});
    }

    function showNoteInfo(){
        return(
            <>
            <h2>{updatedNote.title}</h2>
                <p>{updatedNote.content}</p>
            </>
        )
    }

    function handleEditClick(){
        setIsEdit(true);
    }

    return(
        <div className='row'>
            <div className='col-7'>
                {isEdit ? showEditForm() : showNoteInfo()}
                
            </div>
            <div className='col-5'>
                <button onClick={() => handleEditClick()} className="btn btn-warning text-white fw-bold me-3">
                <i className="fa fa-pencil"></i>&nbsp;    
                Edit
                </button>
                <button onClick={() => {setIsEdit(false);deleteNote(index)}} className="btn btn-danger text-white fw-bold">
                <i className="fa fa-times"></i>    &nbsp; 
                Delete</button>
            </div>
        </div>
    )
}