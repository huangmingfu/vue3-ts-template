<template>
  <!-- transition：仅支持单个元素，需要组件内需要用根标签包裹，不如会有警告 -->
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <keep-alive>
        <component :is="Component" v-if="route.meta.keepAlive" :key="route.name" />
      </keep-alive>
    </transition>
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" v-if="!route.meta.keepAlive" :key="route.name" />
    </transition>
  </router-view>
</template>

<script setup ts></script>

<style lang="scss" scoped></style>
