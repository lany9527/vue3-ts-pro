/** * @Description: * @author littlestone * @date $ */

<template>
  <a-layout-sider
    v-model:collapsed="collapsed"
    :trigger="null"
    collapsible
    :theme="theme"
  >
    <div class="logo">
      <img alt="logo" src="https://www.antdv.com/assets/logo.1ef800a8.svg" />
      <h1>{{ title }}</h1>
    </div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :theme="theme"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <template #icon>
          <UploadOutlined />
        </template>
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <VideoCameraOutlined />
        </template>
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <LikeTwoTone />
        </template>
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #icon>
          <MenuFoldOutlined />
        </template>
        <template #title>Navigation One</template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <UserOutlined />
        </template>
        <template #title>Navigation Two</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuFoldOutlined,
  LikeTwoTone,
} from "@ant-design/icons-vue";
import { defineProps, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useAppStore } from "../stores/app";
const appStore = useAppStore();
const { collapsed, theme } = storeToRefs(appStore);

const selectedKeys: string[] = reactive(["1"]);
const openKeys: string[] = reactive(["sub1"]);
interface Props {
  title?: string;
  logo?: string;
}
const props = defineProps<Props>();
</script>

<style scoped lang="less">
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
  img {
    height: 32px;
  }
}
.side-menu {
  h1 {
    color: #fff;
  }
}
</style>
