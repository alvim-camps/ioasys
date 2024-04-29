import styles from './Insert.module.css';

export function Input({ children, type, id, label, setTaskItem, taskItem}) {
    const TYPE = (type == 'text')

    return (
        <>
            {TYPE && <label htmlFor={id}>{label}</label>}
            <input type={type} value={children} id={id} className={TYPE ? styles.input : styles.button} {...TYPE && { onChange: (event) => setTaskItem({ ...taskItem, name: event.target.value }) }} />
        </>
    );
}