"use client"
import React from "react";
import "../styles/Header.scss";
import { useRouter } from "next/navigation";
import * as motion from "motion/react-client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'




export default function Header({ showName = true , subtitle}) {
    const router = useRouter();
    return (
        <header className="header">
            <div className="nameContainer">
                {showName ? (
                    <div onClick={() => router.push("/")} style={{cursor:"pointer"}}>
                        <h1 className="name">Quentin</h1>
                        <h1 className="lastName">Lahousse</h1>
                    </div>

                ):
                    (<motion.div whileHover={{ scale: 1.2 }}
                                 whileTap={{ scale: 0.8 }}>
                        <a onClick={() => router.push("/")}><p><FontAwesomeIcon icon={faChevronLeft} /></p></a>
                    </motion.div>)
                }
            </div>

            <p className="subtitle">{subtitle}</p>
        </header>
    );
}