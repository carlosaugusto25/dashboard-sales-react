import { configureStore } from "@reduxjs/toolkit";
import createProfileReducer from "./slices/createProfile";

export const store = configureStore({
    reducer: {
        createProfile: createProfileReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch