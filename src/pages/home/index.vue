<template>
  <div :class="prefixCls">
    <h1 :class="`${prefixCls}__title`">
      Home
      <span :class="`${prefixCls}__title--span`">Home2</span>
    </h1>
  </div>
</template>

<script setup lang="ts">
import { useDesign } from '@/hooks'
const { prefixCls } = useDesign('home')
// const { prefixCls } = useDesign('home','cmp')
</script>

<style scoped lang="scss">
$prefix-cls: '#{$namespace}-#{$pg}-home';

.#{ $prefix-cls } {
  &__title {
    font-size: 50px;
    font-weight: bold;
    text-align: center;

    &--span {
      color: $color-test;
    }
  }
}
</style>
