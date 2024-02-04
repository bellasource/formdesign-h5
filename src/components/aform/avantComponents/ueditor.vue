<!--
 * @Author: linZeJian
 * @Date: 2022-08-24 10:53:55
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-08-26 16:18:46
 * @Description: 
-->
<template>
  <div v-if="option.display">
    <van-field
      :name="option.prop"
      :value="comValue"
      :label="option.label"
      :placeholder="
        option.placeholder ? option.placeholder : '请输入' + option.label
      "
      :readonly="option.readonly"
      :disabled="option.disabled"
      :required="option.required"
      :style="option.detail ? 'pointer-events: none;' : ''"
      :rules="[{ required: option.required }]"
    >
      <template #input>
        <div style="margin: 10px 0">
          <avue-ueditor
            v-model="comValue"
            v-bind="options"
            :readonly="option.readonly"
            :disabled="option.disabled"
            :required="option.required"
            :style="option.detail ? 'pointer-events: none;' : ''"
          ></avue-ueditor>
        </div>
      </template>
    </van-field>
  </div>
</template>

<script>
export default {
  name: "avant-ueditor",
  props: {
    option: Object,
    value: [String, Number, Boolean],
  },
  computed: {
    comValue: {
      get() {
        // console.log("this.option :>> ", this.option);
        return this.value;
      },
      set(val) {
        // 触发value绑定值的交互与更新
        this.$emit("input", val);
      },
    },
  },
  data() {
    return {
      options: {
        //wangEditor编辑的配置
        customConfig: {
          lineHeights: ["1", "1.15", "1.6", "2", "2.5", "3"],
        },
        propsHttp: {
          home: "",
          url: "",
          res: "",
        },
        //是否启用oss(qiniu/ali)
        oss: "",
        headers: {},
        data: {},
        //普通图片上传
        action: "",
        //七牛云oss配置
        qiniu: {
          AK: "",
          SK: "",
          scope: "",
          url: "",
          deadline: 1,
        },
        //阿里云oss配置
        ali: {
          region: "",
          endpoint: "",
          accessKeyId: "",
          accessKeySecret: "",
          bucket: "",
        },
      },
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
:deep(.van-cell) {
  // 富文本换行
  display: block;
}
</style>
