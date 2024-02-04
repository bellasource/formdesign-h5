<!--
 * @Author: linZeJian
 * @Date: 2022-08-25 15:25:24
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-09-02 14:17:39
 * @Description: 
-->
<template>
  <div>
    <van-form @submit="onSubmit" @failed="onFailed">
      <component
        :is="getTypeExchange(column.type)"
        v-model="form[column.prop]"
        v-for="column in deepOption.column"
        :key="column.prop"
        :option="column"
      ></component>
      <!-- option里的group默认放在最后面 -->
      <div
        class="form-block"
        v-for="group in deepOption.group"
        :key="group.prop"
      >
        <h2 class="form-block__title">{{ group.label }}</h2>
        <component
          :is="getTypeExchange(column.type)"
          v-model="form[column.prop]"
          v-for="column in group.column"
          :key="column.prop"
          :option="column"
        ></component>
      </div>
      <div style="margin: 30px 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import cloneDeep from "lodash/cloneDeep";
import { Notify } from "vant";
import getTypeExchange from "./utils/typeExchange";
export default {
  name: "avant-form",
  props: {
    form: {
      type: Object,
      default: () => {},
    },
    option: {
      type: Object,
      default: () => {},
    },
    detail: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // 深拷贝配置
      deepOption: cloneDeep(this.option),
    };
  },
  created() {
    this.handleDeepOption();
  },
  methods: {
    /**
     * @description: 处理配置
     * @return {*}
     */
    handleDeepOption() {
      console.log("this.deepOption :>> ", this.deepOption);
      // 处理普通表单的column
      if (this.deepOption.column && this.deepOption.column.length > 0) {
        this.deepOption.column.forEach((item) => {
          item = this.handleOptionItem(item);
        });
      }
      // 处理分组group
      if (this.deepOption.group && this.deepOption.group.length > 0) {
        this.deepOption.group.forEach((item) => {
          item.column.forEach((item2) => {
            item2 = this.handleOptionItem(item2);
          });
        });
      }
    },
    /**
     * @description: 表单项多项处理时抽取
     * @param {*} item
     * @return {*}
     */
    handleOptionItem(item) {
      // 部分column项不存在display可见属性,手动添加
      item.display = true;
      // 自定义全局详情模式与option全局详情模式
      if (this.detail || this.deepOption.detail) {
        item.detail = true;
      }
      if (item.type == "dynamic") {
        // 子表单部分相关配置在子表单组件内适配
        let children = cloneDeep(item.children);
        children.column.forEach((dynamicItem) => {
          // 循环子表单项
          dynamicItem = this.handleOptionItem(dynamicItem);
        });
        this.$set(item, "children", children);
      }
      return item;
    },
    /**
     * @description: option里组件的type转换成AForm组件
     * @return {*}
     */
    getTypeExchange: getTypeExchange,
    /**
     * @description: van-form点击提交数据响应
     * @param {*} value
     * @return {*}
     */
    onSubmit(value) {
      console.log("van-form-onSubmit-value", value);
      console.log("this.form", this.form);
      // 合并数据，解决单组件数据绑定问题
      let allFinalData = Object.assign(value, this.form);
      console.log("allFinalData", allFinalData);
      // 触发父组件自定义事件
      this.$emit("aFormMethods", 11111);
    },
    /**
     * @description: van-form点击提交必填报错触发
     * @param {*} errorInfo
     * @return {*}
     */
    onFailed(errorInfo) {
      console.log("errorInfo", errorInfo);
      Notify({ type: "warning", message: "请完善必填选项" });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-block {
  .form-block__title {
    margin: 0;
    padding: 32px 16px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
