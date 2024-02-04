<!--
 * @Author: linZeJian
 * @Date: 2022-08-24 10:53:55
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-08-26 14:50:00
 * @Description: 
-->
<template>
  <div v-if="option.display">
    <van-field
      :name="option.prop"
      :label="option.label"
      :placeholder="  
        option.placeholder ? option.placeholder : '请选择' + option.label
      "
      :readonly="option.readonly"
      :disabled="option.disabled"
      :required="option.required"
      :style="option.detail ? 'pointer-events: none;' : ''"
      :rules="[{ required: option.required }]"
    >
      <template #input>
        <van-uploader
          class="cursor"
          :readonly="option.readonly"
          :disabled="option.disabled"
          :required="option.required"
          :style="option.detail ? 'pointer-events: none;' : ''"
          v-model="comValue"
          accept
          :after-read="afterRead"
        >
        </van-uploader>
      </template>
    </van-field>
  </div>
</template>

<script>
export default {
  name: "avant-upload",
  props: {
    option: Object,
    value: [String, Number, Array],
  },
  computed: {
    comValue: {
      get() {
        // console.log("this.option :>> ", this.option);
        // return this.value;
        if (this.value == "" || this.value == undefined) {
          let valueArray = [];
          return valueArray;
        } else {
          return this.value;
        }
      },
      set(val) {
        // 触发value绑定值的交互与更新
        // console.log('val', val)
        // 处理上传文件
        this.$emit("input", val);
      },
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    /**
     * @description: 附件上传
     * @param {*} file
     * @return {*}
     */
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log("file", file);
      // 处理上传文件
      //   let formData = new window.FormData();
      //   formData.append("file", file.file);
      //   let res = await FilebaseUrl.uploadFiles(formData);
      //   file.filebaseId = res.data;
      //   // 处理附件
      //   let files = {
      //     fileKey: file.filebaseId,
      //     fileName: file.file.name,
      //     fileType: file.file.type,
      //   };
      //   let filesArray = [];
      //   filesArray.push(files);
      //   await uploadTaskFiles(filesArray)
      //     .then((res) => {
      //       Notify({ type: "success", message: "上传成功" });
      //     })
      //     .catch((err) => {
      //       Notify({ type: "danger", message: "上传失败" });
      //       this.showSelectTypeDialogValue = false;
      //     });
    },
  },
};
</script>

<style scoped>
:deep(.van-field__body) {
  float: right;
}
</style>
