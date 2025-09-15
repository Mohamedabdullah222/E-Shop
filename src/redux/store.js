import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // LocalStorage
import Shop from './appSlice';
import { combineReducers } from 'redux';

// 1. إعداد config الخاص بالحفظ
const persistConfig = {
  key: 'root',
  storage,
};

// 2. لو عندك أكثر من Slice، ضيفهم هنا
const rootReducer = combineReducers({
  Shop,
});

// 3. نغلف الـ rootReducer بـ persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. إنشاء store بالـ persistedReducer
export const store = configureStore({
  reducer: persistedReducer,
});

// 5. إنشاء persistor
export const persistor = persistStore(store);
