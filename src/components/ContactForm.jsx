import '../styles/ContactForm.scss';

export default function ContactForm() {
    return (
        <div className="formContainer">
            <form className="form">
                <div className="inputGroup">
                    <input type="text" name="nom" placeholder="Nom" />
                    <input type="text" name="prenom" placeholder="Prénom" />
                </div>
                <input type="email" name="email" placeholder="Adresse email" />
                <textarea name="message" placeholder="Votre demande" />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}
