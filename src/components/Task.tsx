import styles from './Task.module.css'
import { Trash } from "phosphor-react";

export function Task() {
    return (
        <div className={styles.task}>
            <input type="checkbox" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur unde aut iste fuga similique adipisci velit saepe. Expedita quos in magnam impedit provident.</p>
            <button>
              <Trash size={20} />
            </button>
        </div>
    )
}