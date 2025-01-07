import { createSlice } from '@reduxjs/toolkit'

const initialUserState = {
    isLoggedIn : false,
    profileImage: "https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top"
}

export const UserSlice = createSlice({
    name: "UserSlice",
    initialState: initialUserState,
    reducers: {
        userLoggedIn: (state, action) => {
            return {...state, ...{isLoggedIn : true}, ...action.payload}
        },
        resetToInitialState: (state, action) => {
            return initialUserState
        },
        updateToken: (state, action) => {
            state.token = action.payload;
          },
    }
})

export const { userLoggedIn, resetToInitialState, updateToken } = UserSlice.actions;
export default UserSlice;