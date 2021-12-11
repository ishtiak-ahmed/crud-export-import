import axios from 'axios'
import React, { useContext, useRef, useState } from 'react'
import { ModifyContext } from '../App'
import { validation } from '../utils/validation'

export const AddStudent = () => {
  const [ newStudent, setNewStudent] = useState({})
  const [modify, setModify] = useContext(ModifyContext)
  const name = useRef('')
  const save = (e) => {
      e.preventDefault()
      const validateData = validation(newStudent)
      console.log('valid data -', validateData)
      if(!validateData){
        axios.post('http://localhost:3001/students', {...newStudent, createdAt: new Date(), status: 'Current'}).then(res => {
        console.log(res)
        setModify(modify + 1)
        setNewStudent({})
        name.current.select()
        e.target.reset()
    })
      }else{
        alert(validateData)
      }
  }
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    const update = {...newStudent, [e.target.name]: e.target.value}
    setNewStudent(update)
  }
  return (
    <div>
      <h2 className='title'>Add a student</h2>
      <div className='form_area'>
        <form onSubmit={save} className='form'>
          <input type="text" name='name' ref={name} onChange={handleChange} placeholder='Full name' />
          <input type="number" name='age' onChange={handleChange} placeholder='Age' />
          <input type="number" name='class' onChange={handleChange} placeholder='Class' />
          {/* <select name="status" id="" defaultValue='pending'>
            <option value="pending"></option>
          </select> */}
          <button className='primary' type='submit'>save</button>
        </form>
      </div>
    </div>
  )
}
