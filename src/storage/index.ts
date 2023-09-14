import { MMKV } from 'react-native-mmkv';

const mmkvInstance = new MMKV();

export const storage = {
  getItem: (key: Parameters<MMKV['getString']>[0]) => {
    return mmkvInstance.getString(key);
  },
  removeItem: (key: Parameters<MMKV['delete']>[0]) => {
    mmkvInstance.delete(key);

    const value = mmkvInstance.getString(key);

    return Promise.resolve(value);
  },
  setItem: (key: Parameters<MMKV['set']>[0], value: Parameters<MMKV['set']>[1]) => {
    mmkvInstance.set(key, value);

    return Promise.resolve(true);
  },
};
