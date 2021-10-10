import { OPEN_STORY_BOARD, CLOSE_STORY_BOARD, ADD_CART_ITEM } from '../actions/app-actions'

export const defaultAppState = {
  storiesOpen: false,
  cartItems: [],
  storyId: null
}

export function appReducer (state, { type, payload }) {
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
    case ADD_CART_ITEM: {
      debugger
      return {
        ...state,
        cartItems:  [ ...state.cartItems, payload ]
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`)
    }
  }
}
