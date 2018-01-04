import {
    ADD_RECIPE
} from './Actions'

export default function postsReducer (state = {}, action)
{
    switch (action.type) {
        case ADD_RECIPE :
            const {recipe} = action

            return {
                ...state,
                [recipe.label]: recipe,
            }
        default :
            return state
    }
}