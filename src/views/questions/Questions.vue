<template>
  <div>
    <el-button @click="addQuestions">添加题目</el-button>

    <el-drawer
      title="我是标题"
      v-model="drawerVisible"
      direction="rtl"
      size="50%"
      :destroy-on-close="true"
      :show-close="true"
      :wrapperClosable="false"
    >
      <div>
        <el-form :model="questions" ref="ruleFormRef">
          <el-form-item label="标题" prop="title">
            <el-input v-model="questions.title"></el-input>
          </el-form-item>

          <el-form-item label="内容" prop="content">
            <div>
              <div style="border: 1px solid #ccc">
                <Toolbar
                  style="border-bottom: 1px solid #ccc"
                  :editor="editorRef"
                  :defaultConfig="toolbarConfig"
                  :mode="mode"
                />
                <Editor
                  style="height: 400px; overflow-y: hidden"
                  v-model="valueHtml"
                  :defaultConfig="editorConfig"
                  :mode="mode"
                  @onCreated="handleCreated"
                  @onChange="handleChange"
                />
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <el-button @click="drawerVisible = false">取消</el-button>
      <el-button type="primary" @click="subFrom">确认</el-button>
    </el-drawer>
  </div>
</template>

<script setup>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";

const drawerVisible = ref(false);

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
const toolbarConfig = {};
const editorConfig = {
  placeholder: "请输入内容...",
  MENU_CONF: {
    uploadImage: {
      fieldName: "file",
      server: "http://127.0.0.1:8080/upload",
    },
  },
};

// 内容 HTML
const valueHtml = ref("");

const mode = "default";

const options = ref({
  type: "",
  value: "",
});
const questions = ref({
  id: "",
  title: "",
  content: "",
  options: options,
  type: "",
  category: "",
  correct: "",
  issub: "",
});

const addQuestions = async () => {
  drawerVisible.value = true;
};
const subFrom = async () => {
  console.log(content2.value);
};

const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

const handleChange = (deitor) => {
  console.log(deitor.children);
};
</script>

<style lang="scss" scoped></style>
