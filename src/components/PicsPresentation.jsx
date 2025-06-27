'use client'
import React from 'react'
import '../styles/PicsPresentation.scss'
import useLightbox from '../hooks/useLightbox'
import Image from 'next/image'

const PicsPresentation = () => {
    const { openLightbox, Lightbox } = useLightbox()

    return (
        <div className="pics-presentation">
            <div className="row">
                <div className="hugePic" onClick={() => openLightbox("/homePics/M4.jpg")}>
                    <Image src="/homePics/M4.jpg" fill objectFit="cover" alt="M4" />
                </div>

                <div className="col">
                    <div className="row">
                        <div className="smallPicHorizon" onClick={() => openLightbox("/homePics/Poulain.jpg")}>
                            <Image src="/homePics/Poulain.jpg" width={231} height={153} style={{ objectFit: 'cover' }} alt="Spa 1"/>

                        </div>
                        <div className="smallPicHorizon" onClick={() => openLightbox("/homePics/Porsche.jpg")}>
                            <Image src="/homePics/Porsche.jpg" fill objectFit="cover" alt="Spa 2" />
                        </div>
                        <div className="smallPicVertical" onClick={() => openLightbox("/homePics/PorscheAutoroute.jpg")}>
                            <Image src="/homePics/PorscheAutoroute.jpg" fill objectFit="cover" alt="M4 vertical" />
                        </div>
                        <div className="smallPicHorizon" onClick={() => openLightbox("/homePics/GreyPorsche.jpg")}>
                            <Image src="/homePics/GreyPorsche.jpg" fill objectFit="cover" alt="Spa 3" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="rowHorizontal" onClick={() => openLightbox("/homePics/Lambo.jpg")}>
                            <Image src="/homePics/Lambo.jpg" fill objectFit="cover" alt="Spa wide" />
                        </div>
                        <div className="rowVertical" onClick={() => openLightbox("/homePics/Ferrari.jpg")}>
                            <Image src="/homePics/Ferrari.jpg" width={264} height={396} style={{ objectFit: 'cover' }} alt="Ferrari"/>

                        </div>
                    </div>
                </div>
            </div>

            {Lightbox()}
        </div>
    )
}

export default PicsPresentation
