<template>
  <a-configprovider>
    <a-layout>
      <SideMenu title="vue3-ts-pinia"></SideMenu>
      <a-layout>
        <HeaderNav></HeaderNav>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
          }"
        >
          <div
            class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:(py-4 flex items-center space-y-0 space-x-6)"
          >
            <img
              class="block mx-auto h-24 rounded-full sm:(mx-0 flex-shrink-0)"
              src="https://www.antdv.com/assets/logo.1ef800a8.svg"
              alt="Woman's Face"
            />
            <div class="text-center space-y-2 sm:text-left">
              <div class="space-y-0.5">
                <p class="text-lg text-black font-semibold">Erin Lindford</p>
                <p class="text-gray-500 font-medium">产品经理</p>
              </div>
              <button
                class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:(text-white bg-purple-600 border-transparent) focus:(outline-none ring-2 ring-purple-600 ring-offset-2)"
              >
                消息
              </button>
            </div>
          </div>
          <a-tag color="#108ee9">count: {{ count }}</a-tag>
          <a-tag color="#87d068">collapsed: {{ collapsed }}</a-tag>
          <br />
          <br />
          <a-button type="primary" @click="changeCount">修改数字</a-button>
          <br />
          <br />
          <h1>修改antd颜色主题</h1>
          <a-switch
            :checked="theme === 'dark'"
            @change="changeTheme(theme === 'dark' ? 'light' : 'dark')"
          />
          <br />
          <br />
          <h1>修改主题颜色</h1>
          <a-tag color="#f50" @click="switchTheme('#f50')">#f50</a-tag>
          <a-tag color="#2db7f5" @click="switchTheme('#2db7f5')">#2db7f5</a-tag>
          <a-tag color="#87d068" @click="switchTheme('#87d068')">#87d068</a-tag>
          <a-tag color="#108ee9" @click="switchTheme('#108ee9')">#108ee9</a-tag>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-configprovider>
</template>
<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";
import SideMenu from "/src/layouts/SideMenu.vue";
import HeaderNav from "/src/layouts/HeaderNav.vue";
import { storeToRefs } from "pinia";
import { useAppStore } from "/src/stores/app";

const appStore = useAppStore();
const { count, collapsed, theme } = storeToRefs(appStore);
const { toggleCollapsed, changeCount, changeTheme } = appStore;

const switchTheme = (color: string) => {
  ConfigProvider.config({
    theme: {
      primaryColor: color,
    },
  });
};
</script>
<style lang="less">
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>
