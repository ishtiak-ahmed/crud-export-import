import axios from 'axios'
import React, { useContext } from 'react'
import { ModifyContext } from '../App'
import moment from 'moment'

export const StudentItem = ({ item }) => {
  const [editing, setEditing] = React.useState(false)
  const [newData, setNewData] = React.useState({ ...item })
  const [modify, setModify] = useContext(ModifyContext)
  const updateStudent = () => {
    axios.put(`http://localhost:3001/students/${item.id}`, { ...newData, updatedAt: new Date() }).then(res => {
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

  // console.log(momento())

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
          !editing ? item.age :
            <input type="number" defaultValue={item.age} name='age' onChange={handleChange} />
        }
      </p>
      <p>
        {
          !editing ? item.class :
            <input type="number" defaultValue={item.class} name='class' onChange={handleChange} />
        }
      </p>
      <p>
        {
          !editing ? item.status :
            <select name="status" onChange={handleChange} defaultValue={item.status}>
              <option value="Current">Current</option>
              <option value="Expelled">Expelled</option>
              <option value="Passed">Passed</option>
            </select>
        }
      </p>
      <p>
        {moment(item.createdAt).format('hh:mm A, DD-MM-YY')}
      </p>
      <p>
        {item.updatedAt ? moment(item.updatedAt).format('hh:mm A, DD-MM-YY') : ''}
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
