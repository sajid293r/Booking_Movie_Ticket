import { configureStore } from "@reduxjs/toolkit";
import vipSlice from "./storeOne";
import premiumSlice from "./storeTwo";
import executiveSlice from "./storeThree";

const store = configureStore({
    reducer: {
        vip: vipSlice,
        premium: premiumSlice,
        executive: executiveSlice
    }
}
);

export default store;