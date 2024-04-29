import { useState } from 'react'
import './App.css'

import { Form } from './components/Insert/Form'
import { List } from './components/List/List'

function App() {
  const [taskList, setTaskList] = useState([])

  return (
    <div className='card'>
      <Form setTaskList={setTaskList}/>
      <List taskList={taskList} setTaskList={setTaskList}/>
    </div>
  )
}

export default App
