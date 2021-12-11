import { Students } from './components/Students';
import './App.scss';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { AddStudent } from './components/AddStudent';
import { Import } from './components/Import';
import { Export } from './components/Export';

export const StudentContext = createContext()
export const ModifyContext = createContext()

function App() {
  const [students, setStudents] = useState([])
  const [modify, setModify] = useState(0)
  useEffect(() => {
    axios('http://localhost:3001/students').then(res => {
      setStudents(res.data)
    })
  }, [modify])

  return (
    <StudentContext.Provider value={[students, setStudents]}>
      <ModifyContext.Provider value={[modify, setModify]} >
        <div className="app">
          <h2 className='title'>Simple CRUD and Export Import</h2>
          <AddStudent />
          <div className='export'>
            <Import />
            <Export />
          </div>
          <Students />
        </div>
      </ModifyContext.Provider>
    </StudentContext.Provider>
  );
}

export default App;
