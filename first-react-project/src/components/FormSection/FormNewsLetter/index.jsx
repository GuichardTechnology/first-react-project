import styles from"./style.module.css"
export const FormNewsLetter = () =>{
    return(
        <form className={`formulary ${styles.form}`}>
            <input type="email" required placeholder="Email"/>
            <button className="btn" type="submit"> Please Sign in</button>
        </form>
    )
}