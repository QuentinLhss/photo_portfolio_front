'use client';

import { useState } from 'react';
import '../styles/ContactForm.scss';
import * as motion from "motion/react-client";

export default function ContactForm() {

    const handleSubmit = async (e) => {
    };

    return (
        <div className="formContainer">
            <form className="form" onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <input type="text" name="nom" placeholder="Nom" required />
                    <input type="text" name="prenom" placeholder="Prénom" required />
                </div>
                <input type="email" name="email" placeholder="Adresse email" required />
                <textarea name="message" placeholder="Votre demande" required />

                <motion.div whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                >
                    <button type="submit">Envoyer</button>
                </motion.div>
            </form>
        </div>
    );
}
