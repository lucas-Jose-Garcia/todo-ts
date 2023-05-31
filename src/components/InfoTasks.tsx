import styles from './InfoTasks.module.css'

interface InfoTasksProps {
    tasksCreated: number;
    completedTasks: number;
}

export function InfoTasks({ tasksCreated, completedTasks }:InfoTasksProps) {
    return (
        <div className={styles.tasksInfo}>
            <div>
              <p>Tarefas criadas</p>
              <span>{tasksCreated}</span>
            </div>
            <div>
              <p className={styles.finished}>Concluídas</p>
              <span>{completedTasks}</span>
            </div>
        </div>
    )
}