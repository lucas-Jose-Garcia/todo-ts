import styles from './App.module.css'
import './global.css'
import logoSvg from './assets/logo.svg'
import plus from './assets/plus.svg'
import {Trash} from '@phosphor-icons/react'
import { EmptyTasks } from './components/EmptyTasks'
import { InfoTasks } from './components/InfoTasks'
import { Task } from './components/Task'

interface Tasks {
  id: string;
  content: string;
  completed: boolean;
}

const tasks: Tasks[] = [
  {
    id: "AB560594",
    content: "Estudar JavaScript",
    completed: false
  }
]

export function App() {
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

          {/* <EmptyTasks /> */}
          
          <Task />
        </section>
      </main>



    </div>
  )
}
