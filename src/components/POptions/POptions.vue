<template>
  <div class="flex items-center">
    <div>{{ IndexMenu[index] }}</div>
    <el-select v-model="value" class="m-2" placeholder="Select" size="large">
      <el-option v-for="item in optionsType" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-input v-model="textarea" :autosize="autosize" placeholder="请输入内容" />
  </div>
</template>

<script setup>
import { ref,onMounted,defineProps } from "vue";


// 变量
const value = ref(0);
const autosize = { minRows: 2, maxRows: 4 };
const textarea = ref();
const index = ref(0);
const IndexMenu = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "S",
  "Y",
  "Z",
];





// Func


onMounted(()=>{
  
})



// 初始化options对象
const Options = ref({
  type: "",
  value: "",
  istrue: 0,
});

const optionsType = [
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
