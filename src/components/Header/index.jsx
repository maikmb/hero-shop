import { Grid } from '@material-ui/core'
import React from 'react'
import { useCallback } from 'react'
import { mock } from '../../config'
import { OPEN_STORY_BOARD } from '../../state/actions/app-actions'
import { useAppState } from '../../state/contexts/app-context'
import StoryList from '../StoryList'
import { Brand, LogoImage, Nav, GridNav } from './styles'

export default function Header() {
    const { dispatch } = useAppState()

    const showStory = (story) => {
        dispatch({ type: OPEN_STORY_BOARD, payload: story })
    }

    return (
        <Nav>
            <GridNav container spacing={3} >
                <Grid item xs={12} md={3} >
                    <Brand>
                        <a href="/">
                            {mock.logoUrl ? <LogoImage src={mock.logoUrl} alt={mock.storeName} /> : mock.storeName}
                        </a>
                    </Brand>
                </Grid>
                <Grid item xs={12} md={3} >
                    <StoryList stories={mock.lastStories} onStoryClick={showStory} />
                </Grid>
            </GridNav>
        </Nav>
    )
}
