"use client"
import React from "react";
import { useRouter } from "next/navigation";
import "../styles/Bouttons.scss";

export default function Bouttons() {
    const router = useRouter();

    return (
        <div className="buttons-container">
            <button onClick={() => router.push("/plus")}>En voir plus</button>
            <button onClick={() => router.push("/contact")}>Me contacter</button>
        </div>
    );
}
