
import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer  from './userSlice';
const appstore= configureStore({
reducer:{
user:userSliceReducer
}

});
export default appstore;