export const initialState = null
export {reducer}
const reducer = (state,action)=>{
    if(action.type === 'USER'){
        return action.payload
    }
    return state
}