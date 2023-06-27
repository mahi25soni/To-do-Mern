import React, {useContext, useEffect, useRef, useState} from 'react'
import { NoteContext } from '../context/notes/NoteContext'
import Noteitem from './Noteitem'
export default function ViewNote() {
    const {note , getAllNotes} = useContext(NoteContext)
    useEffect(() => {
      getAllNotes()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const updateNote = (note) => {
      refUpdate.current.click()
    }
    const refUpdate = useRef(null)

    const [notedata , setNotedata] = useState({id : "", title : "", description : ""})
   
    const inputOnChange = (event) => {
      // console.log(notedata)
      // console.log(event.target.value)
      setNotedata({...note , [event.target.id] : event.target.value})
      console.log(note)
    }

  return (
    <>
    <div className="container mt-3">
    <button type="button" ref={refUpdate} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="container  mt-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"> <strong>Note Title</strong></label>
                    <input type="text" className="form-control" id="title" onChange={inputOnChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"><strong>Note Description</strong></label>
                    <input type="text" className="form-control" id="description" onChange={inputOnChange}></input>
                </div>
            </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Edit Note</button>
            </div>
            </div>
        </div>
        </div>
        <h2 className='text-center'>Your Tasks</h2>
        <div className="row">

          
        {note.map((element, key)=> {
            return <div className="col col-sm-3 "> 
            <Noteitem  key={element._id}  note = {element} editButton={updateNote}></Noteitem>
            </div>
        })}
        </div>
    </div>
    </>
  )
}
