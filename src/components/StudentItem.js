import axios from 'axios'
import React, { useContext } from 'react'
import { ModifyContext } from '../App'

export const StudentItem = ({ item }) => {
  const [editing, setEditing] = React.useState(false)
  const [newData, setNewData] = React.useState({ ...item })
  const [modify, setModify] = useContext(ModifyContext)
  const updateStudent = () => {
    // console.log('updateStudent', newData)
    // const data = { id: item.id, name: 'Ishtiak', grade: '15', shift: 'first' }
    axios.put(`http://localhost:3001/students/${item.id}`, newData).then(res => {
      setModify(modify + 1)
      setEditing(false)
    })

  }
  const deleteStudent = () => {
    console.log('deleteStudent', item.id)
    axios.delete(`http://localhost:3001/students/${item.id}`).then(res => setModify(modify + 1))
  }

  const handleChange = (e) => {
    e.preventDefault()
    const data = { ...newData, [e.target.name]: e.target.value }
    console.log(data)
    setNewData(data)
  }

  return (
    <div className='student'>
      <p><strong>{item.id} {!editing}</strong></p>
      <p>
        {
          !editing ? item.name :
            <input type="text" defaultValue={item.name} name='name' onChange={handleChange} />
        }
      </p>
      <p>
        {
          !editing ? item.grade :
            <input type="text" defaultValue={item.grade} name='grade' onChange={handleChange} />
        }
      </p>
      <p>
        {
          !editing ? item.shift :
            <input type="text" defaultValue={item.shift} name='shift' onChange={handleChange} />
        }
      </p>
      <p>
        {editing ?
          // save button
          <button className='primary' onClick={updateStudent}>Save</button> :
          <button className='secondary' onClick={() => setEditing(true)}>Edit</button>
        }
        {editing ? <button onClick={() => setEditing(false)}>Cancel</button> :
          <button className='danger' onClick={deleteStudent}>Delete</button>}
      </p>
    </div>
  )
}
