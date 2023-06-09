import styles from './App.module.css'
import './global.css'
import logoSvg from './assets/logo.svg'
import plus from './assets/plus.svg'
import { EmptyTasks } from './components/EmptyTasks'
import { InfoTasks } from './components/InfoTasks'
import { Task } from './components/Task'
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect, ChangeEvent, FormEvent, InvalidEvent } from 'react'
import { ArrowClockwise } from 'phosphor-react'
import { Modal } from './components/Modal'

export interface Tasks {
  id: string;
  content: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Tasks[] | []>([])

  const [inputValue, setInputValue] = useState('')

  const [modalOpen, setModalOpen] = useState(false)

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
    event.target.setCustomValidity('')
  }
  
  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    const newTask: Tasks = {
      id: uuidv4(),
      content: inputValue,
      completed: false
    }
    const newTasks = [newTask, ...tasks]

    setTasks(newTasks)
    saveTasks(newTasks)
    setInputValue('')
  }

  function handleCheckboxChange(id: string) {

    const previousTasks = tasks.map(task => {
      return task.id !== id ? task : {id: task.id, content: task.content, completed: !task.completed}
    })

    const newTasks = organizeTasks(previousTasks)
    setTasks(organizeTasks(newTasks))
    saveTasks(newTasks)
  }

  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter(task => {
      return task.id !== id
    })

    setTasks(newTasks)
    saveTasks(newTasks)
  }

  function hendleInvalidTask(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function saveTasks(tasks: Tasks[]) {
    localStorage.setItem('@tudo:tasks', JSON.stringify(tasks));
  }

  function getTasks() {
    return localStorage.getItem('@tudo:tasks');
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

  function countCompletedTasks() {
    return tasks.filter(task => task.completed === true).length
  }

  function hendleOpenModalRestart() {
    setModalOpen(true)
  }

  function handleCloseModalRestart() {
    setModalOpen(false)
  }

  function handleRestart() {
    setTasks([])
    saveTasks([])
  }

  useEffect(() => {
    const response = getTasks()
    const previousTasks = response ? JSON.parse(response) : [];
    setTasks(previousTasks)
  }, [])

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
        <form onSubmit={handleCreateTask} className={styles.taskFrom}>
          <input 
            placeholder="Adicione uma nova tarefa" 
            value={inputValue} 
            onChange={handleInputChange}
            onInvalid={hendleInvalidTask}
            required
          />
          
          <button type="submit">
            Criar
            <img src={plus}/>
          </button>
        </form>
        
        <section className={styles.sectionTasks}>
          <InfoTasks 
            tasksCreated={tasks.length}
            completedTasks={countCompletedTasks} 
          />
          {tasks.length === 0 ? <EmptyTasks /> : (
            tasks.map(task => {
              return (
                <Task 
                  key={task.id}
                  task={task}
                  onCheckboxChange={handleCheckboxChange}
                  onDeleteTask={handleDeleteTask}
                />
              )
            })
          )}

          {tasks.length === 0 ? null :
          <footer onClick={hendleOpenModalRestart}>
            <ArrowClockwise size={25} />
            <span>Recomeçar</span>
          </footer>}
        </section>

        <Modal 
          isOpen={modalOpen}
          onClose={handleCloseModalRestart}
          onConfirm={handleRestart}
        >
        <h2>Confirmação</h2>
        <p>Deseja realmente deletar todas as suas tarefas?</p>
        </Modal>

      </main>


    </div>
  )
}
