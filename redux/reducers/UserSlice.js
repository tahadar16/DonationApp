import { createSlice } from '@reduxjs/toolkit'

const initialUserState = {
    firstName : "Taha",
    lastName: "Dar",
    userId: 1
}

export const UserSlice = createSlice({
    name: "UserSlice",
    initialState: initialUserState,
    reducers: {
        updateFirstName: (state, action) => {
            state.firstName = action.payload.firstName
        }
    }
})

export const { updateFirstName } = UserSlice.actions;
export default UserSlice;