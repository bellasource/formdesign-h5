<!--
 * @Author: linZeJian
 * @Date: 2022-08-24 10:53:55
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-08-26 14:49:26
 * @Description: 
-->
<template>
  <div v-if="option.display">
    <van-field
      clickable
      :name="option.prop"
      input-align="right"
      right-icon="arrow"
      :value="comValue"
      :label="option.label"
      :placeholder="
        option.placeholder ? option.placeholder : '请选择' + option.label
      "
      :disabled="option.disabled"
      :required="option.required"
      :style="option.readonly || option.disabled || option.detail ? 'pointer-events: none;' : ''"
      :rules="[{ required: option.required }]"
      @click="show = true"
      readonly
    />
    <van-popup v-model="show" position="bottom">
      <van-area
        :area-list="areaList"
        @confirm="onConfirm"
        @cancel="show = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { areaList } from '@vant/area-data';
export default {
  name: "avant-map",
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
        // console.log('val :>> ', val);
        this.$emit("input", val);
        // this.$emit("value:update",val)
      },
    },
  },
  data() {
    return {
      show: false,
      areaList, // 数据格式见 Area 组件文档
    };
  },
  created() {},
  methods: {
    onConfirm(values) {
      this.comValue = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.show = false;
    },
  },
};
</script>

<style scoped>
:deep(.van-field__control) {
  text-align: right;
}
</style>
