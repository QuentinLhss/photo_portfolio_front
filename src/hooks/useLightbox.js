"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Lightbox.scss";

export default function useLightbox() {
    const [imageSrc, setImageSrc] = useState(null);

    const openLightbox = (src, id) => {
        setImageSrc(src);
    };

    const closeLightbox = () => {
        setImageSrc(null);
    };

    const Lightbox = () => (
        <AnimatePresence>
            {imageSrc && (
                <motion.div
                    className="lightbox"
                    onClick={closeLightbox}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.img
                        src={imageSrc}
                        alt="image full"
                        className="lightbox-image"
                        transition={{ duration: 0.5 }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );

    return { openLightbox, Lightbox };
}
