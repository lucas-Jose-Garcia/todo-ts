import styles from './Modal.module.css'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    children: React.ReactNode;
}


export function Modal({isOpen, onClose, onConfirm, children}: ModalProps) {
    if (!isOpen) return null;

    function handleConfirm() {
        onConfirm()
        onClose()
    }

    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {children}

                <div className={styles.buttons}>
                    <button className={styles.cancel} onClick={onClose}>
                        Cancelar
                    </button>
    
                    <button className={styles.confirm} onClick={handleConfirm}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}