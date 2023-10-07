import React,{useState, useEffect} from "react";
import {API_URL} from '../constants/Constants';
import axios from 'axios';


export default function BookManagement(){
    const DEFAULT_BOOK = {title: '', author: '', id: -1, isbn: ''};
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState(DEFAULT_BOOK);
    const [view, setView] = useState('list');
    useEffect(() => {
        loadBooks();
    },[]);

    function loadBooks(){
        axios.get(API_URL + 'books')
        .then(response => {
            setBooks(response.data);
        }) 
    }

    function deleteBook(id){
        axios.delete(`${API_URL}books\\${id}`)
        .then(response =>{
            loadBooks();
        })
    }
    function edit(b){
        setBook(b);
        setView('form');
    }

    function submitForm(){
        //books -> Post
        //books/{id} -> Post
        const url = book.id == -1 ? `${API_URL}books` : `${API_URL}books\\${book.id}`;
        axios.post(url,book)
        .then(response => {
            loadBooks();
            setView('list');
        })
    }

    function handleInput(event){
        const {name, value} = event.target;
        setBook({...book,[name]:value});
    }

    function createForm(){
        setView('form');
        setBook(DEFAULT_BOOK);
    }

    function bookForm(){
        return(
            <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                <h1>Book form</h1>
                <input 
                    type="text"
                    name="title"
                    placeholder="title"
                    className="form-control"
                    onInput={e => handleInput(e)}
                    value={book.title}
                />
                <input 
                    type="text"
                    name="isbn"
                    placeholder="author"
                    className="form-control mt-3"
                    onInput={e => handleInput(e)}
                    value={book.isbn}
                />
                <input 
                    type="text"
                    name="author"
                    placeholder="author"
                    className="form-control mt-3"
                    onInput={e => handleInput(e)}
                    value={book.author}
                />
                <button className="btn btn-primary" onClick={() => submitForm()}>
                    {book.id == -1 ? 'Create' : 'Update'}
                </button>
            </div>
            </div>
            </div>
        )
    }


    function showList(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <button onClick={()=> createForm()} className="btn btn-success mb-3">Create</button>
                        <table className="table table-bordered">
                            <thead>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>ISBN</th>
                                <th>Options</th>
                            </thead>
                            <tbody>
                                {books.map(b =>(
                                    <tr>
                                        <td>{b.id}</td>
                                        <td>{b.title}</td>
                                        <td>{b.author}</td>
                                        <td>{b.isbn}</td>
                                        <td>
                                            <button onClick={() => edit(b)} className="btn btn-warning me-3 text-white">
                                                <i className="fa fa-pencil"></i>Edit
                                            </button>
                                            <button onClick={() => deleteBook(b.id)} className="btn btn-danger text-white">
                                                <i className="fa fa-times"></i>Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <>
            {view == 'list' ? showList(): bookForm()}
        </>
    )
}