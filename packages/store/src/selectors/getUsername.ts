import { selector } from 'recoil'
import { userState } from '../atoms/userState';

export const getUsername = selector({
  key: 'getUsername',
  get: ({get}) => {
    const name = get(userState);
    return name ;
  },
});