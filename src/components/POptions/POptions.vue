<template>
  <div>
    <el-select v-model="value" class="m-2" placeholder="Select" size="large">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script setup>
import { ref } from "vue";
const value = ref(0);

const options = [
  {
    value: 0,
    label: "选项",
  },
  {
    value: 1,
    label: "图片",
  },
  {
    value: 2,
    label: "图文",
  },
];
</script>

<style lang="scss" scoped></style>
