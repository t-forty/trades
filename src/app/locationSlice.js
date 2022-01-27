import { createSlice } from '@reduxjs/toolkit'

export const stateLocSlice = createSlice ({
    name: 'location',
    initialState: { state: 'DC', zip: '20500' },
    reducers: {
        changeLocation: (state, action) => {
            const location = action.payload
            return state = {...state, state: location.state, zip: location.zip}
        } 
    }
})

export const { changeLocation } = stateLocSlice.actions
export const selectLocState = state => state.location.state
export const selectLocZip = state => state.location.zip

export default stateLocSlice.reducer