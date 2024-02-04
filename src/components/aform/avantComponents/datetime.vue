<!--
 * @Author: linZeJian
 * @Date: 2022-08-24 10:53:55
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-08-26 14:49:02
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
      :style="
        option.readonly || option.disabled || option.detail
          ? 'pointer-events: none;'
          : ''
      "
      :rules="[{ required: option.required }]"
      @click="show = true"
      readonly
    />
    <van-popup :key="new Date().getDate()" v-model="show" position="bottom">
      <!-- :min-date="minDate"
      :max-date="maxDate"-->
      <van-datetime-picker
        v-model="datetimeValueObj"
        :type="datetimeType"
        :title="
          option.placeholder ? option.placeholder : '请选择' + option.label
        "
        @confirm="confirmDatetime"
        @cancel="cancelDatetime"
      ></van-datetime-picker>
    </van-popup>
  </div>
</template>

<script>
import { formatDateVant } from "../utils/methods";
export default {
  name: "avant-datetime",
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
      // datetimeValueObj: {
      //   date: new Date(),
      //   tiem: "12:00"
      // },
      datetimeValueObj: null,
      datetimeType: "date",
    };
  },
  created() {},
  mounted() {
    if (this.option.type == "date") {
      this.datetimeValueObj = new Date();
      this.datetimeType = "date";
    } else if (this.option.type == "time") {
      this.datetimeValueObj = "12:00";
      this.datetimeType = "time";
    } else {
      this.datetimeValueObj = new Date();
      this.datetimeType = "datetime";
    }
  },
  methods: {
    /**
     * @description: 选择时间弹窗
     * @param {*}
     * @return {*}
     */
    showDatetimeDialog() {
      this.show = true;
    },
    /**
     * @description: 关闭时间弹窗
     * @param {*}
     * @return {*}
     */
    cancelDatetime() {
      this.show = false;
    },

    /**
     * @description: 时间选择确认
     * @param {*} value
     * @return {*}
     */
    confirmDatetime(value) {
      // van-datetime-picker组件生成中国标准时间
      // value：中国标准时间 Mon Dec 27 2021 16:20:49 GMT+0800
      let valueFormat = new Date(value).getTime();
      // 默认时间戳转yyyy-MM-dd格式
      // let datetimeValueFormat = formatDateVant(valueFormat, 3);
      // 根据时间选择类型展示字符串
      let datetimeValueFormat = this.datetimeValueFormatFun(valueFormat);
      this.comValue = datetimeValueFormat;
      this.show = false;
    },

    // 时间戳转yyyy-MM-dd HH:mm:ss格式
    datetimeValueFormatFun(valueFormat) {
      // console.log('this.datetimeValueObj', this.datetimeValueObj)
      // console.log('valueFormat', valueFormat)
      let datetimeValueFormat = "";
      if (this.datetimeType == "date") {
        datetimeValueFormat = formatDateVant(valueFormat, 3);
      } else if (this.datetimeType == "datetime") {
        datetimeValueFormat = formatDateVant(valueFormat, 5);
      } else if (this.datetimeType == "time") {
        // datetimeValueFormat = formatDateVant(valueFormat, 1);
        datetimeValueFormat = this.datetimeValueObj;
      } else if (this.datetimeType == "datehour") {
        datetimeValueFormat = formatDateVant(valueFormat, 4);
      } else if (this.datetimeType == "year-month") {
        datetimeValueFormat = formatDateVant(valueFormat, 2);
      } else if (this.datetimeType == "month-day") {
        datetimeValueFormat = formatDateVant(valueFormat, 6);
      } else {
        datetimeValueFormat = formatDateVant(valueFormat);
      }
      return datetimeValueFormat;
    },
  },
};
</script>

<style scoped>
:deep(.van-field__control) {
  text-align: right;
}
</style>
