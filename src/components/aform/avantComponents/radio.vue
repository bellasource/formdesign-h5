<!--
 * @Author: linZeJian
 * @Date: 2022-08-24 10:53:55
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-08-26 14:49:43
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
        <van-radio-group
          v-model="comValue"
          :readonly="option.readonly"
          :disabled="option.disabled"
          :required="option.required"
          :style="option.detail ? 'pointer-events: none;' : ''"
        >
          <van-radio
            v-for="(item, index) of option.dicData"
            :key="index"
            :name="item.value"
            style="padding-bottom: 6px; padding-right: 6px"
            >{{ item.label }}</van-radio
          >
        </van-radio-group>
      </template>
    </van-field>
  </div>
</template>

<script>
export default {
  name: "avant-radio",
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

<style lang="scss" scoped>
:deep(.van-field__body) {
  float: right;
}
:deep(.van-field__control>div:first-child) {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}
</style>
