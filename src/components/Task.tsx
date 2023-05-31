import type { Tasks } from '../App';
import styles from './Task.module.css'
import { Trash } from "phosphor-react";

interface TasksProps {
    task: Tasks;
    onCheckboxChange: (id: string) => void;
    onDeleteTask: (id: string) => void;
  }

export function Task({task, onCheckboxChange, onDeleteTask}: TasksProps) {
    return (
        <div key={task.id} className={task.completed ? `${styles.task} ${styles.completed}` : styles.task}>
            <div>
                <input type="checkbox" defaultChecked={task.completed} onClick={() => onCheckboxChange(task.id)}/>
                <p>{task.content}</p>   
            </div>
            <button>
              <Trash size={20} onClick={() => onDeleteTask(task.id)}/>
            </button>
        </div>
    )
}