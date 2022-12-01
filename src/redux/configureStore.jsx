import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        //tao state so luong thuc an moi loai
        saladReducer: (state = 0, action) => {
            if (action.type == 'TANG_SALAD'){
                state = state + action.payload;
            } 
            if (action.type == 'GIAM_SALAD') {
                state = state - action.payload;
            }
            return state;
        },
        cheeseReducer: (state = 0, action) => {
            if (action.type == 'TANG_CHEESE'){
                state = state + action.payload;
            }
            if (action.type == 'GIAM_CHEESE'){
                state = state - action.payload;
            }
            return state;
        },
        beefReducer: (state = 0, action) => {
            if (action.type == 'TANG_BEEF'){
                state = state + action.payload;
            }
            if (action.type == 'GIAM_BEEF'){
                state = state - action.payload;
            }
            return state;
        }
    }
})