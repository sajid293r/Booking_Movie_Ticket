import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "DIAMOND",
    amount: 0,
    seat: 0,
}
const executiveSlice = createSlice({
    name: "vip",
    initialState,
    reducers: {
        executiveTicket(state, action) {
            state.seat = state.seat + " " + state.name + "-" + action.payload + ","
            state.amount = (state.amount + 260)
            state.isPressed = true;
        }
    }
})
export const executiveActions = executiveSlice.actions;
export default executiveSlice.reducer;