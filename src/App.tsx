import styles from './App.module.css'
import './global.css'
import logoSvg from './assets/logo.svg'
import plus from './assets/plus.svg'

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
        
        <section>
          <div className={styles.tasksInfo}>
            <div>
              <p>Tarefas criadas</p>
              <span>0</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>0</span>
            </div>
          </div>

          <div className={styles.separator}/>
          
          <div>
            {/* tasks */}
          </div>
        </section>
      </main>



    </div>
  )
}
