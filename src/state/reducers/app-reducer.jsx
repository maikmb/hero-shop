import { OPEN_STORY_BOARD, CLOSE_STORY_BOARD } from "../actions/app-actions"

export const defaultAppState = {
    storiesOpen: false,
    storyId: null
}

export function appReducer(state, { type, payload }) {
    switch (type) {
        case OPEN_STORY_BOARD: {
            return {
                ...state,
                storiesOpen: true,
                storyId: payload.storyId
            }
        }
        case CLOSE_STORY_BOARD: {
            return {
                ...state,
                storiesOpen: false,
                storyId: null
            }
        }
        default: {
            throw new Error(`Unsupported action type: ${type}`)
        }
    }
}