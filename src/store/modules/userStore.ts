import { defineStore } from 'pinia';
import { ref } from 'vue';

type TUserInfo = {
  name: string;
  avatar: string;
  token: string;
};

function storeSetup() {
  const userInfo = ref<TUserInfo>();

  const setUserInfo = (info: TUserInfo) => {
    userInfo.value = info;
  };
  const clearUserInfo = () => {
    userInfo.value = undefined;
  };

  return { userInfo, clearUserInfo, setUserInfo };
}
export const useUserStore = defineStore('app-user', storeSetup, { persist: true });
