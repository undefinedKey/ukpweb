<template>
  <div class="flex items-center w-full">
    <div>{{ IndexMenu[index] }}</div>
    <div>
      <el-select v-model="value" class="m-2 w-24" placeholder="Select" @change="optionsChange">
        <el-option v-for="item in optionsType" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <!-- <el-input v-model="textarea"  type="textarea" :autosize="autosize" placeholder="请输入内容" /> -->
    <!-- 文字输入框 -->
    <el-input v-model="textarea" v-if="value == 0" type="textarea" autosize placeholder="请输入内容" />


    <!-- 图片 -->
    <div v-if="value == 1">
      <el-upload class="upload-demo " drag action="http://127.0.0.1:8080/upload" multiple>
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
          Drop file here or <em>click to upload</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500kb
          </div>
        </template>
      </el-upload>
    </div>

  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { ref, onMounted, defineProps } from "vue";

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
// 图片上传
const imageUrl = ref('')



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

const optionsChange = () => {
  console.log('值改变了', value.value);
}


</script>

<style lang="scss" scoped></style>
