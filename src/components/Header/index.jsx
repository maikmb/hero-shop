import { Grid } from '@material-ui/core'
import React from 'react'
import { mock } from '../../config'
import Stories from '../Stories'
import { Brand, LogoImage, Nav , GridNav} from './styles'

export default function Header() {

    return (
        <Nav>
            <GridNav container spacing={3} >
                <Grid item xs={12} md={3} >
                    <Brand>{mock.logoUrl ? <LogoImage src={mock.logoUrl} alt={mock.storeName} /> : mock.storeName}</Brand>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Stories stories={mock.lastStories} />
                </Grid>
            </GridNav>
        </Nav>
    )
}
