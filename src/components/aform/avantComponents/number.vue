<!--
 * @Author: linZeJian
 * @Date: 2022-08-24 10:53:55
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-08-26 14:49:30
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
        <van-stepper
          v-model="comValue"
          :label="option.label"
          :placeholder="
            option.placeholder ? option.placeholder : '请输入' + option.label
          "
          :readonly="option.readonly"
          :disabled="option.disabled"
          :required="option.required"
          :style="option.detail ? 'pointer-events: none;' : ''"
          :step="option.step"
          :min="option.minRows"
          :max="option.maxRows"
          :disable-input="option.disabled"
          :theme="option.theme ? 'round' : ''"
          :rules="[{ required: option.required }]"
        />
      </template>
    </van-field>
  </div>
</template>

<script>
export default {
  name: "avant-number",
  props: {
    option: Object,
    value: [String, Number],
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
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
:deep(.van-field__body) {
  float: right;
}
</style>
