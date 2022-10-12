import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("appMain", () => {
  const collapsed = ref<boolean>(false);
  const count = ref<number>(999);
  const theme = ref<string>("light");
  function toggleCollapsed() {
    collapsed.value = !collapsed.value;
  }
  function changeCount() {
    count.value++;
  };
  function changeTheme(themeStr: string) {
    console.log("changeTheme", themeStr);
    theme.value = themeStr;
  };
  return { count, collapsed, toggleCollapsed, changeCount, theme, changeTheme };
});
