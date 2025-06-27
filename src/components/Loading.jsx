"use client"
import {motion} from "motion/react";
import "../styles/Loading.scss"
export default function Loading (){
    return (
        <div className="container">
            <motion.div
                className="spinner"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    )
}