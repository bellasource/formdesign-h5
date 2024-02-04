<!--
 * @Author: linZeJian
 * @Date: 2022-08-24 10:53:55
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-09-02 14:11:03
 * @Description: 
-->
<template>
  <div v-if="option.display">
    <van-field
      clickable
      :value="comValue"
      :name="option.prop"
      :label="option.label"
      :placeholder="
        option.placeholder ? option.placeholder : '添加' + option.label
      "
      :disabled="option.disabled"
      :required="option.required"
      :style="
        option.readonly || option.disabled || option.detail
          ? 'pointer-events: none;'
          : ''
      "
      :rules="[{ required: option.required }]"
      readonly
    >
      <template #input>
        <!-- van-button会触发表单的onSubmit事件，van-button常见问题有说明 -->
        <!-- <van-button native-type="button">发送验证码</van-button> -->
        <!-- <van-button
          icon="plus"
          type="primary"
          size="mini"
          @click.stop="addColumn"
          >添加</van-button
        > -->
        <!-- 自定义添加按钮 -->
        <div
          style="
            color: #fff;
            background-color: #07c160;
            border: 1px solid #07c160;
            border-radius: 4px;
            font-size: 12px;
            padding: 0 10px;
          "
          @click.stop="addColumn"
        >
          添加
        </div>
      </template>
    </van-field>
    <div>
      <div v-if="childrenColumnCopy.columnObjArr.length > 0">
        <div
          v-for="(item, index) in childrenColumnCopy.columnObjArr"
          :key="index"
          class="item"
          @click="handleItemFunc(item, index)"
        >
          <div class="item-com">
            <div>{{ "表单子项 " + (index + 1) }}</div>
            <van-button
              icon="delete"
              type="default"
              size="small"
              @click.stop="deleteColumn(index)"
            />
          </div>
        </div>
      </div>
      <div
        v-else
        style="
          font-size: 14px;
          background: #ffffff;
          color: #a4a4a4;
          padding: 6px 20px;
        "
      >
        暂无相关数据
      </div>
    </div>

    <van-popup
      v-model="show"
      position="bottom"
      @closed="handleBeforeClose"
      :style="{ 'max-height': '70%' }"
    >
      <div style="padding: 20px 4px">
        <van-form @submit="onSubmit" @failed="onFailed" ref="itemForm">
          <component
            :is="getTypeExchange(column.type)"
            v-model="handleItemForm[column.prop]"
            v-for="column in handleItem.column"
            :key="column.prop"
            :option="column"
          ></component>
          <div style="margin: 30px 16px 10px">
            <van-button round block type="info" native-type="submit"
              >提交</van-button
            >
          </div>
        </van-form>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Notify } from "vant";
import getTypeExchange from "../utils/typeExchange";
export default {
  name: "avant-dynamic",
  props: {
    option: Object,
    value: [String, Number, Array],
  },
  data() {
    return {
      show: false,

      childrenOrigin: {
        align: "center",
        column: [],
        emptyBtn: true,
        emptyText: "清空",
        gutter: 0,
        labelPosition: "left",
        labelSuffix: "：",
        labelWidth: 120,
        menuBtn: true,
        menuPosition: "center",
        submitBtn: true,
        submitText: "确定",
      },
      childrenOriginColumn: [],
      childrenOriginColumnLen: null,
      childrenColumnCopy: {
        align: "center",
        // 单项
        column: [],
        // 对象--展示使用
        columnObjArr: [],
        menuBtn: false,
      },

      handleItem: {
        align: "center",
        column: [],
        emptyBtn: false,
        emptyText: "清空",
        gutter: 0,
        labelPosition: "left",
        labelSuffix: "：",
        labelWidth: 120,
        menuBtn: true,
        menuPosition: "center",
        submitBtn: true,
        submitText: "确定",
      },

      // 子表单填写数据
      itemForm: [],
      handleItemForm: {},
      handleItemFormIndex: null,
    };
  },
  created() {},
  computed: {
    comValue: {
      get() {
        // console.log("this.option :>> ", this.option);
        // console.log("this.value111 :>> ", this.value);
        // 解决van-field的value绑定数据类型问题
        // 但是改变了van-form返回值
        if (this.value == "" || this.value == undefined) {
          let valueArray = "";
          return valueArray;
        }
        if (
          Object.prototype.toString
            .call(this.value)
            .slice(8, -1)
            .toLowerCase() == "array"
        ) {
          if (this.value.length == 0) {
            return 1;
          } else {
            return 0;
          }
        }
        // return this.value
      },
      set(val) {
        // 触发value绑定值的交互与更新
        this.$emit("input", val);
        // this.$emit("value:update",val)
      },
    },
  },
  watch: {
    // 这个不能省
    itemForm: {
      deep: true,
      handler(newV) {
        this.$emit("input", newV);
      },
    },
    value: {
      deep: true,
      immediate: true,
      handler(newV) {
        // console.log("222222222 :>> ", newV);
      },
    },
  },
  mounted() {
    console.log("this.option", this.option);
    // 初始化，处理普通表单的column
    let columuCopy = this.option.children.column;
    // 同AvueFormMobile组件移动端转换表单项
    // if (columuCopy && columuCopy.length > 0) {
    //   columuCopy.forEach((item) => {
    //     item = this.handleMobileOption(item);
    //   });
    // }
    this.childrenOrigin.column = columuCopy;
    this.childrenOriginColumn = columuCopy;
    this.childrenOriginColumnLen = columuCopy.length || 0;
    // console.log("this.childrenOrigin :>> ", this.childrenOrigin);

    // 数据回显
    if (
      Object.prototype.toString.call(this.value).slice(8, -1).toLowerCase() ==
      "array"
    ) {
      // console.log("columuCopy", columuCopy);
      let columnObj = [...columuCopy];
      // console.log('this.value :>> ', this.value);
      this.itemForm = [...this.value];
      // console.log("this.itemForm", this.itemForm);
      // 数据回显显示结构
      this.itemForm.forEach((item, index) => {
        this.childrenColumnCopy.columnObjArr.push(columnObj);
      });
    }
  },
  methods: {
    getTypeExchange: getTypeExchange,
    /**
     * @description: 添加子项
     * @return {*}
     */
    addColumn() {
      console.log("this.comValue", this.comValue);
      // this.childrenColumnCopy.column.push(...this.childrenOrigin.column);
      // 这里的es6对象解构低版本企业微信不能用
      // this.childrenColumnCopy.columnObjArr.push({
      //   ...this.childrenOrigin.column,
      // });
      let columnObj = [];
      this.childrenOrigin.column.forEach((item, index) => {
        columnObj.push(item);
      });
      this.childrenColumnCopy.columnObjArr.push(columnObj);

      // 初始生成数据
      let dataPropOrigin = {};
      this.childrenOrigin.column.forEach((item) => {
        dataPropOrigin[item.prop] = "";
      });
      this.itemForm.push(dataPropOrigin);
      // console.log("this.itemForm", this.itemForm);
    },
    /**
     * @description: 删除子项
     * @return {*}
     */
    deleteColumn(index) {
      this.childrenColumnCopy.columnObjArr.splice(index, 1);
      this.itemForm.splice(index, 1);
    },
    /**
     * @description: 点击子项打开抽屉
     * @param {*} itemObj
     * @return {*}
     */
    handleItemFunc(itemObj, index) {
      this.handleItem.column = [];
      this.show = true;
      // console.log("itemObj", itemObj);
      for (var i in itemObj) {
        this.handleItem.column.push(itemObj[i]);
      }
      this.handleItemForm = this.itemForm[index]; //不生效
      this.handleItemFormIndex = index;
      // console.log("this.handleItemForm :>> ", this.handleItemForm);
    },

    /**
     * @description: 抽屉关闭数据处理
     * @param {*} done
     * @return {*}
     */
    handleClose(done) {
      this.handleItem.column = [];
      this.handleItemFormIndex = null;
      this.handleBeforeClose();
      this.show = false;
    },

    /**
     * @description: 子表单填写弹窗提交按钮
     * @param {*} value
     * @return {*}
     */
    onSubmit(value) {
      // console.log("value", value);
      // 处理子表单数据
      this.itemForm[this.handleItemFormIndex] = Object.assign(
        this.itemForm[this.handleItemFormIndex],
        value
      );
      this.show = false;
      console.log("333333", this.handleItemForm);
    },
    onFailed(errorInfo) {
      console.log("errorInfo", errorInfo);
      Notify({ type: "warning", message: "请完善必填选项" });
    },

    // 子表单项预览 - 弹窗 - 关闭前
    handleBeforeClose() {
      // this.$refs.itemForm.resetForm();
      this.handleItem.column = [];
      this.handleItemFormIndex = null;
      this.show = false;
    },
  },
};
</script>

<style scoped>
:deep(.van-field__control) {
  text-align: right;
}
:deep(.van-field__body) {
  float: right;
}

.item {
  background: #ffffff;
  font-size: 14px;
  color: #808080;
}
.item-com {
  display: flex;
  justify-content: space-between;
  padding: 2px 20px;
}
/* // hover 电脑端可行，移动端不行 */
.item-com .item-hover {
  display: none;
}
.item-com:hover .item-hover {
  display: block;
}
</style>
