import styles from './App.module.css'
import './global.css'
import logoSvg from './assets/logo.svg'
import plus from './assets/plus.svg'
import { EmptyTasks } from './components/EmptyTasks'
import { InfoTasks } from './components/InfoTasks'
import { Task } from './components/Task'
import { useState } from 'react'

export interface Tasks {
  id: string;
  content: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: "AB560594",
      content: "Criar um aplicativo de ToDo",
      completed: false
    },
    {
      id: "AB560556948i5484",
      content: "Estudar JavaScript",
      completed: true
    }
  ])

  function handleCheckboxChange(id: string) {

    const newTasks = tasks.map(task => {
      return task.id !== id ? task : {id: task.id, content: task.content, completed: !task.completed}
    })

    setTasks(organizeTasks(newTasks))
  }

  function organizeTasks(tasks: Tasks[]) {
    const newTasks: Tasks[] = []
    tasks.forEach(task => {
      if(!task.completed) newTasks.push(task)
    })
    tasks.forEach(task => {
        if(task.completed) newTasks.push(task)
    })
    return newTasks
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
            <img src={logoSvg} />
            <span>to</span>
            <span>do</span>
        </div>
      </header>

      <main className={styles.content}>
        <form className={styles.taskFrom}>
          <input placeholder="Adicione uma nova tarefa"/>
          <button>
            Criar
            <img src={plus}/>
          </button>
        </form>
        
        <section className={styles.sectionTasks}>
          <InfoTasks 
            tasksCreated={0}
            completedTasks={0} 
          />
          {tasks.length === 0 ? <EmptyTasks /> : (
            tasks.map(task => {
              return (
                <Task key={task.id} task={task} onCheckboxChange={handleCheckboxChange} />
              )
            })
          )}
        </section>
      </main>



    </div>
  )
}
