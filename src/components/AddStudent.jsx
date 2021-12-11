import axios from 'axios'
import React, { useContext, useState } from 'react'
import { ModifyContext } from '../App'
import { validation } from '../utils/validation'

export const AddStudent = () => {
  const [ newStudent, setNewStudent] = useState({})
  const [modify, setModify] = useContext(ModifyContext)
  const save = () => {
      const validateData = validation(newStudent)
      console.log('valid data -', validateData)
      if(!validateData){
        axios.post('http://localhost:3001/students', newStudent).then(res => {
        console.log(res)
        setModify(modify + 1)
        setNewStudent({})
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
      <div className='form'>
        <input type="text" name='name' defaultValue={newStudent.name || ''} onChange={handleChange} placeholder='student name' />
        <input type="text" name='grade' defaultValue={newStudent.grade || ''} onChange={handleChange} placeholder='student grade' />
        <input type="text" name='shift' defaultValue={newStudent.shift || ''} onChange={handleChange} placeholder='student shift' />
        <button className='primary' onClick={save}>save</button>
      </div>
    </div>
  )
}
