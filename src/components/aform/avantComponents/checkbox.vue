<!--
 * @Author: linZeJian
 * @Date: 2022-08-24 10:53:55
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-08-26 14:48:58
 * @Description: 
-->
<template>
  <div v-if="option.display">
    <van-field
      :name="option.prop"
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
        <van-checkbox-group
          v-model="comValue"
          :readonly="option.readonly"
          :disabled="option.disabled"
          :required="option.required"
          :style="option.detail ? 'pointer-events: none;' : ''"
          :direction="option.direction ? 'horizontal' : ''"
        >
          <van-checkbox
            v-for="(item, index) of option.dicData"
            :key="index"
            :name="item.value"
            style="padding-bottom: 6px; padding-right: 6px"
            >{{ item.label }}</van-checkbox
          >
        </van-checkbox-group>
      </template>
    </van-field>
  </div>
</template>

<script>
export default {
  name: "avant-checkbox",
  props: {
    option: Object,
    value: [String, Array],
  },
  computed: {
    comValue: {
      get() {
        // console.log("this.option :>> ", this.option);
        // console.log("this.value :>> ", this.value);
        // 处理多选框绑定值字符串转数组
        if (this.value == "" || this.value == undefined) {
          let valueArray = [];
          return valueArray;
        } else if (
          Object.prototype.toString
            .call(this.value)
            .slice(8, -1)
            .toLowerCase() == "array"
        ) {
          return this.value;
        } else {
          let valueArray = [];
          let valueSplit = this.value.split(",");
          valueArray = [...valueSplit];
          return valueArray;
        }
        // return this.value;
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

<style lang="scss" scoped>
:deep(.van-field__body) {
  float: right;
}
:deep(.van-field__control > div:first-child) {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}
</style>
