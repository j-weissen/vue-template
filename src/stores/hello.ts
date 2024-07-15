import { defineStore } from "pinia";
import { ref } from "vue";

export const useHelloStore = defineStore("hello", () => {
  const hello = ref("hello");
  return { hello };
});
