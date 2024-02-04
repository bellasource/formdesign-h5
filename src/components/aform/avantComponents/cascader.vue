<!--
 * @Author: linZeJian
 * @Date: 2022-08-24 10:53:55
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-09-01 13:56:38
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
    <van-popup v-model="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        :title="
          option.placeholder ? option.placeholder : '请选择' + option.label
        "
        :options="options"
        :field-names="props"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "avant-cascader",
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
    options: {
      get() {
        return this.option.dicData;
      },
    },
  },
  data() {
    return {
      show: false,
      cascaderValue: "",

      props: {
        text: "label",
        value: "value",
        children: "children",
        // desc: 'desc'
      },
    };
  },
  created() {},
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      // this.show = false;
      // this.comValue = selectedOptions.map((option) => option.text).join("/");

      // 处理返回值，是否全部路径showAllLevels: true，路径拼接符separator: "/",
      console.log('selectedOptions', selectedOptions)
      this.show = false;
      // console.log('this.props', this.props);
      let text = this.props.text;
      let showAllLevels = this.option.showAllLevels;
      let separator = this.option.separator || "/";
      if (showAllLevels) {
        this.comValue = selectedOptions
          .map((option) => option[text])
          .join(separator);
      } else {
        this.comValue = selectedOptions.slice(-1)[0][text];
      }
      console.log('this.cascaderValue', this.cascaderValue)
    },
  },
};
</script>

<style scoped>
:deep(.van-field__control) {
  text-align: right;
}
</style>
