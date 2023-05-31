import styles from './EmptyTasks.module.css'
import docs from '../assets/docs.svg'


export function EmptyTasks() {
    return (
    <div className={styles.emptyTasks}>
        <img src={docs} />
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    </div>
    )
}