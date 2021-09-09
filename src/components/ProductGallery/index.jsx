import React from 'react'
import { Gallery } from './style'

export default function ProductGallery({ images }) {
    return (
        <Gallery>                        
            {images.map((url, idx) => (<img key={`preview_${idx}`} src={url} alt="" />))}
        </Gallery>
    )
}
