import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    newPostCreated: false,
    postDeleted: false,
}
const postMutationsSlice = createSlice({
    name: 'postMutations',
    initialState,
    reducers: {
        setNewPostCreated: (state, action) => {
            state.newPostCreated = action.payload
        },
        setPostDeleted: (state, action) => {
            state.postDeleted = action.payload
        }
    }
})

export const { setNewPostCreated, setPostDeleted } = postMutationsSlice.actions;
export default postMutationsSlice.reducer;

export const selectNewPostCreated = state => state.root.postMutations.newPostCreated;
export const selectPostDeleted = state => state.root.postMutations.postDeleted
