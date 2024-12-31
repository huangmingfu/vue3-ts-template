<script setup lang="ts"></script>

<template>
  <div class="loader"></div>
</template>

<style scoped lang="scss">
.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1031;
  box-sizing: border-box;
  display: block;
  width: 45px;
  height: 45px;
  border: solid 2px transparent;
  border-color: #000 #efefef #efefef #000;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  -webkit-animation: loader 400ms linear infinite;
  animation: loader 400ms linear infinite;
}

@keyframes loader {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes loader {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
