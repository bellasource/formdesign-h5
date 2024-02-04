<!--
 * @Author: linZeJian
 * @Date: 2022-08-24 10:53:55
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-09-01 11:03:29
 * @Description: 
-->
<template>
  <div v-if="option.display">
    <van-field
      :name="option.prop"
      v-model="comValue"
      :label="option.label"
      :rows="option.minRows || 2"
      :show-word-limit="option.showWordLimit"
      :maxlength="option.maxlength"
      :placeholder="
        option.placeholder ? option.placeholder : '请输入' + option.label
      "
      :value="value"
      @input="$emit('input', $event.trim())"
      :type="getType()"
      input-align="right"
      :readonly="option.readonly"
      :disabled="option.disabled"
      :required="option.required"
      :style="option.detail ? 'pointer-events: none;' : ''"
      :rules="[{ required: option.required }]"
    />
  </div>
</template>

<script>
export default {
  name: "avant-input",
  props: {
    option: Object,
    value: [String, Number],
  },
  data() {
    return {
      inputType: "",
    };
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
  created() {},
  methods: {
    getType() {
      switch (this.option.type) {
        case "password":
          return "password";
        // 多行文本
        case "textarea":
          return "textarea";
      }
      return "text";
    },
  },
};
</script>

<style></style>
