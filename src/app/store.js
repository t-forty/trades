import { configureStore } from '@reduxjs/toolkit';

import LocReducer from './locationSlice';

export default configureStore({
  reducer: {
    location: LocReducer,
  }
});
