"use client"

import { useEffect, useState } from "react";
import Header from "../components/Header";
import PicsPresentation from "../components/PicsPresentation";
import Bouttons from "../components/Bouttons";
import "../styles/PicsPresentation.scss";
import SmallScreen from "@/components/SmallScreen";

export default function Home() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 1245);
        };

        checkScreenSize(); // Initial check

        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <main>
            <Header showName={true} subtitle={"Photographe amateur"} />
            {isSmallScreen ? <SmallScreen /> : <PicsPresentation />}
            <Bouttons />
        </main>
    );
}
