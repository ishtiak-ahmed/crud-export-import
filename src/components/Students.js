import React, { useContext } from 'react'
import { StudentContext } from '../App'
import { StudentItem } from './StudentItem'

export const Students = () => {
  const [students] = useContext(StudentContext)
  return (
    <div>
      <h2 className='title'>Students List ({students.length})</h2>
      <div className='table_header'>
        <p>ID</p>
        <p>Name</p>
        <p>Age</p>
        <p>Class</p>
        <p>Status</p>
        <p>Created At</p>
        <p>Updated At</p>
        <p>Action</p>
      </div>
      {
        students.map(student => <StudentItem item={student} key={student.id} />)
      }
    </div>
  )
}
