/** * @Description: * @author littlestone * @date $ */

<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-row type="flex">
      <a-col justify="start" flex="100px">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="toggleCollapsed"
        />
        <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed" />
      </a-col>
      <a-col flex="auto"></a-col>
      <a-col justify="end" flex="100px">
        <span>用户名</span>
        <a-button type="link" shape="circle">
          <template #icon>
            <PoweroffOutlined></PoweroffOutlined>
          </template>
        </a-button>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script setup lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined, PoweroffOutlined } from "@ant-design/icons-vue";
import { storeToRefs } from "pinia";
import { useAppStore } from "/src/stores/app";

const appStore = useAppStore();
const { count, collapsed, theme } = storeToRefs(appStore);
const { toggleCollapsed, changeCount, changeTheme } = appStore;
</script>

<style scoped></style>
