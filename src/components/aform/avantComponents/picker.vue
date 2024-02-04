<!--
 * @Author: linZeJian
 * @Date: 2022-08-25 15:34:32
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-09-01 14:07:48
 * @Description: 
-->
<template>
  <div v-if="option.display">
    <van-field
      clickable
      :name="option.prop"
      input-align="right"
      right-icon="arrow"
      :value="comValueTextObj[comValue]"
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
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '50%' }"
    >
      <van-picker
        show-toolbar
        :columns="option.dicData"
        @cancel="show = false"
        @confirm="onConfirm"
        value-key="label"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "avant-picker",
  props: {
    option: Object,
    value: [String, Array],
  },
  data() {
    return {
      show: false,
      comValueTextObj: {},
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
        console.log("val :>> ", val);
        // :value="comValueTextObj[comValue]"数据绑定到van-form的返回里
        // 这里返回到单个的this.form绑定里
        this.$emit("input", val);
        // this.$emit("value:update",val)
      },
    },
  },
  created() {
    this.option.dicData.forEach((item) => {
      this.comValueTextObj[item.value] = item.label;
    });
    // console.log('this.comValueTextObj', this.comValueTextObj)
  },
  methods: {
    onConfirm(data) {
      // console.log("data :>> ", data);
      this.comValue = data.value;
      this.show = false;
    },
  },
};
</script>

<style></style>
