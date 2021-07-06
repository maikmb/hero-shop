import React from 'react'
import { Circle, Container } from './styles'

export default function Stories({ stories }) {
    return (
        <Container>
            {stories.map(opt =>
                <Circle>
                    <img alt={opt.title} src={opt.img}></img>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                        style={{ "enable-background": "new -580 439 577.9 194;" }}
                        xmlSpace="preserve">
                        <circle cx="50" cy="50" r="40" />
                    </svg>
                </Circle>)
            }
        </Container>
    )
}
