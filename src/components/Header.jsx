"use client"
import React from "react";
import "../styles/Header.scss";

export default function Header({ showName = true , subtitle}) {
    return (
        <header className="header">
            <div className="nameContainer">
                {showName && (
                    <>
                        <h1 className="name">Quentin</h1>
                        <h1 className="lastName">Lahousse</h1>
                    </>

                )}
            </div>

            <p className="subtitle">{subtitle}</p>
        </header>
    );
}