<template>
  <div>
    <el-button @click="addUser">添加用户</el-button>
    <el-table :data="data" stripe style="width: 100%" width="200">
      <el-table-column prop="username" label="姓名" />
      <el-table-column label="操作"
        ><template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template></el-table-column
      >
    </el-table>

    <el-dialog v-model="dialogVisible" title="用户管理" width="30%">
      <el-form :model="user" :rules="rules" ref="ruleFormRef">
        <el-form-item label="姓名" prop="username">
          <el-input v-model="user.username" />
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitForm()"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import {
  getUserService,
  addUserService,
  updateUserService,
  deleteUserService,
} from "./userService";
import { ref, reactive, onMounted } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";

const dialogVisible = ref(false);
const ruleFormRef = ref(null);
const data = ref([]);

// 校验规则
const rules = reactive({
  username: [
    { required: true, message: "请输入姓名", trigger: "blur" },
    {
      min: 2,
      max: 6,
      message: "请输入为2-6个字符",
      trigger: "blur",
    },
  ],
});

// 0 = 编辑，1 = 添加
const fromtype = ref(0);
const user = ref({
  id: "",
  username: "",
});
const userInit = ref({
  id: "",
  username: "",
});

onMounted(() => {
  init();
});

// 初始化
const init = async () => {
  let res = await getUserService();
  data.value = res;
};

// 编辑用户
const handleEdit = async (_, row) => {
  fromtype.value = 0;
  user.value.id = row.id;
  user.value.username = row.username;
  dialogVisible.value = true;
};

const handleDelete = async (_, row) => {
  ElMessageBox.confirm(`确定删除：${row.username}吗？`, "警告", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(async () => {
    try {
      let res = await deleteUserService(row.id);
      if (res.code == 200) {
        init();
        ElMessage({
          type: "success",
          message: "删除成功！",
        });
      } else {
        ElMessage({
          type: "error",
          message: "删除失败！",
        });
      }
    } catch (error) {
      ElMessage({
        type: "error",
        message: `删除失败！${error}`,
      });
    }
  });
};

// 添加用户
const addUser = async () => {
  fromtype.value = 1;
  user.value.id = userInit.value.id;
  user.value.username = userInit.value.username;
  dialogVisible.value = true;
};
// 提交表单
const submitForm = async () => {
  try {
    const valid = await ruleFormRef.value.validate();
    if (valid) {
      if (fromtype.value == 0) {
        // 执行编辑操作
        let res = await updateUserService(user.value);
        console.log(res, "更新用户操作");
      } else if (fromtype.value == 1) {
        let res = await addUserService(user.value);
        console.log(res);
      }
      dialogVisible.value = false;
    }
  } catch (error) {
    console.error(error);
  }
  init();
};
</script>

<style lang="scss" scoped></style>
