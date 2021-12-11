import React, { useContext } from 'react'
import Papa from 'papaparse'
import axios from 'axios'
import { ModifyContext, StudentContext } from '../App'

const saveStudent = async (student) => {
  console.log('saving student - ', student)
  try {
    const res = await axios.post(`http://localhost:3001/students/`, student)
    return res;
  } catch (error) {
    throw error
  }
}
const updateStudent = async (student) => {
  console.log('updating student - ', student)
  try {
    const res = await axios.put(`http://localhost:3001/students/${student.id}`, student)
    return res;
  } catch (error) {
    console.log(error)
  }
}

export const Import = () => {
  const [students, setStudents] = useContext(StudentContext)
  const [modify, setModify] = useContext(ModifyContext)

  const addToDb = async (data = []) => {
    const fixedData = data.map(item => ({ ...item, id: Number(item.id) }))
    if (data.length <= 0) {
      return;
    }
    const existingID = students.map(s => s.id)
    for (let i = 0; i < fixedData.length; i++) {
      const item = fixedData[i]
      if (existingID.includes(item.id)) {
        console.log('existing..');
        const res = await updateStudent(item)
        console.log(res)
      } else {
        const res = await saveStudent(item)
        console.log(res)
      }
    }
    setModify(modify + 1)
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      Papa.parse(file, {
        complete: function (results) {
          let data = [];
          results.data.filter((row, i) => {
            if (i > 0) {
              data.push({ [results.data[0][0]]: row[0], [results.data[0][1]]: row[1], [results.data[0][2]]: row[2], [results.data[0][3]]: row[3] })
            }
          })
          addToDb(data)
        }
      })
    }
  }

  return (
    <div>
      <strong>Import Data (csv) : </strong>
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={handleFileUpload}
      />
    </div>
  )
}
