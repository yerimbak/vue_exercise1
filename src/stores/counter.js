import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 1,
  }), // component의 상태 역할
  getters: {
    doubleCount: state => state.counter * 2,
    doubleCountPlusOne() {
      return this.doubleCount + 1;
    },
  }, // component의 computed 역할
  actions: {
    increment() {
      this.counter++; // 화살표 함수를 쓰게 되면 this에 접근할 수 없음(상위 스코프의 this의 영향을 받음, 다른 this)
    },
  }, // component에서 method 역할
});
