import { MMKV } from 'react-native-mmkv';

const mmkvInstance = new MMKV();

export const storage = {
  getItem: (key: Parameters<MMKV['getString']>[0]) => {
    return mmkvInstance.getString(key);
  },
  setItem: (key: Parameters<MMKV['set']>[0], value: Parameters<MMKV['set']>[1]) => {
    mmkvInstance.set(key, value);

    return Promise.resolve(true);
  },
};
