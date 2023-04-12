import { useAlertStore } from '@/stores/alert';
import { storeToRefs } from 'pinia';

//함수범위가 아닌 모듈 범위로 뺴줌, 함수 호출하기 전에 모듈스코프에서
export const useAlert = () => {
  const { alerts } = storeToRefs(useAlertStore);
  const { vAlert, vSuccess } = useAlertStore();
  return {
    alerts,
    vAlert,
    vSuccess,
  };
};
