<template>
  <div>
    <el-button size="default" @click="addCategory">添加科目</el-button>
    <el-divider />

    <el-tree style="width: 100%" :data="data" :props="defaultProps" accordion>
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <div class="opt">
            <span>
              <a @click="appendCategory(data)"> 添加 </a>
            </span>
            <span>
              <a @click="deleteCategory(data)"> 删除 </a>
            </span>
          </div>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getCategoryService } from "./categoryService.js";

const data = ref();

const init = async () => {
  data.value = await getCategoryService();
};

const addCategory = () => {};

const appendCategory = (data) => {
  console.log(data);
};

onMounted(() => {
  init();
});

const defaultProps = {
  children: "children",
  label: "name",
};
</script>

<style lang="scss" scoped>
.custom-tree-node {
  width: 100% !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;

  .opt {
    color: #409eff;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
