import React from 'react'
import { Gallery, ImagesCarousel } from './style'

export default function ProductGallery({ images }) {
    return (
        <Gallery>
            <ImagesCarousel autoPlay={false} indicators={false}>
                {images.map((url, idx) => (
                    <div>                        
                        <img key={`preview_${idx}`} src={url} alt="" />
                    </div>
                ))}
            </ImagesCarousel>
        </Gallery>
    )
}
