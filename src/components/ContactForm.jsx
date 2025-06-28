import '../styles/ContactForm.scss';
import * as motion from "motion/react-client"

export default function ContactForm() {
    return (
        <div className="formContainer">
            <form className="form">
                <div className="inputGroup">
                    <input type="text" name="nom" placeholder="Nom"/>
                    <input type="text" name="prenom" placeholder="Prénom"/>
                </div>
                <input type="email" name="email" placeholder="Adresse email"/>
                <textarea name="message" placeholder="Votre demande"/>
                <motion.div whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            >
                    <button type="submit">Envoyer</button>
                </motion.div>
            </form>
        </div>
);
}
