'use client'
import React, { useEffect, useState } from 'react'
import "../styles/PhotoList.scss"
import Image from "next/image";
import config from '@/config'
import useLightbox from "@/hooks/useLightbox";
import Navigation from "@/components/Navigation";
import Tilt from 'react-parallax-tilt';
import Masonry from 'react-masonry-css';

export default function PhotoList({ pictures }) {
    if (pictures === null){
        pictures=[]
    }

    const { openLightbox, Lightbox } = useLightbox();

    const flatPictures = pictures.flatMap(entry => entry.Pictures || []);

    const breakpointColumnsObj = {
        default: 4,
        1024: 3,
        768: 2,
        480: 1
    };

    return (
        <div className="gallery-wrapper">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-column"
            >
                {flatPictures.map((img, index) => (
                    <Tilt
                        key={index}
                        tiltReverse={true}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        style={{ width: "100%" }}
                    >
                        <div className="masonry-item" onClick={() => openLightbox(`${config.api}${img.url}`)}>
                            <Tilt glareEnable={true} tiltEnable={false} glarePosition={"all"} glareMaxOpacity={0.2}>
                                <Image
                                    src={`${config.api}${img.url}`}
                                    width={img.width}
                                    height={img.height}
                                    alt={`thumbnail-${index}`}
                                    className="image-cover"
                                />
                            </Tilt>
                        </div>
                    </Tilt>
                ))}
            </Masonry>

            {Lightbox()}
        </div>
    );
}
