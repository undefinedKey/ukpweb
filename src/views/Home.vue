<template>
  <div>
    <div class="common-layout">
      <el-container style="height: 100%">
        <el-header>
          <PHeader />
        </el-header>
        <el-container>
          <el-aside width="200px">
            <!-- Menu导航 -->
            <el-menu
              :default-active="'/'"
              :router="true"
              mode="vertical"
              @select="handleSelect"
            >
              <el-menu-item
                :index="v.index"
                v-for="(v, i) in menuList"
                :key="i"
                >{{ v.title }}</el-menu-item
              >
            </el-menu>
          </el-aside>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import PHeader from "../components/PHeader.vue";

const menuList = [
  {
    title: "首页",
    index: "/",
  },
  {
    title: "用户管理",
    index: "/user",
  },
  {
    title: "科目管理",
    index: "/category",
  },
  {
    title: "题目管理",
    index: "/questions",
  },
];

const handleSelect = (index, indexPath, routeResult) => {
  // console.log("按下了", index, indexPath, routeResult);
};
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
  width: 100%;
}
</style>
