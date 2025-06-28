"use client"
import React from "react";
import { useRouter } from "next/navigation";
import "../styles/Bouttons.scss";
import * as motion from "motion/react-client"

export default function Bouttons() {
    const router = useRouter();

    return (
        <div className="buttons-container">
            <motion.div whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}>
                <button onClick={() => router.push("/plus")}>En voir plus</button>
            </motion.div>
            <motion.div whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}>
                <button onClick={() => router.push("/contact")}>Me contacter</button>
            </motion.div>
        </div>
);
}
