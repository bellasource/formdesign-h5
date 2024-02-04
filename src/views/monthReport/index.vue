<template>
  <div id="app">
    <a-form
      :form.async="form"
      :option="option"
      :detail="detail"
      @aFormMethods="aFormMethods"
    ></a-form>
  </div>
</template>

<script>
import AForm from "@/components/aform/form.vue";
export default {
  name: "App",
  components: {
    AForm,
  },
  data() {
    return {
      // 测试表单组件配置
      option: {
        column: [
          {
            type: "input",
            label: "单行文本",
            span: 24,
            // 是否显示
            display: true,
            // 单组件可用detail来处理不可编辑的展示状态
            detail: true,
            prop: "a166126914632983938",
            // required: true,
          },
          {
            type: "password",
            label: "密码",
            span: 24,
            display: true,
            prop: "a166126914632983939",
            // required: true,
          },
          {
            type: "textarea",
            label: "多行文本",
            span: 24,
            display: true,
            prop: "a166126914632983940",
            // required: true,
            maxlength: 100,
            minRows: 2,
            maxRows: 4,
            showWordLimit: true,
          },
          {
            type: "number",
            label: "计数器",
            controls: true,
            span: 24,
            display: true,
            prop: "a166126914632983941",
            // required: true,
          },
          {
            type: "map",
            label: "地图选择器",
            span: 24,
            display: true,
            prop: "a166126914632983942",
            // required: true,
          },
          {
            type: "radio",
            label: "单选框",
            dicData: [
              {
                label: "选项一",
                value: "0",
              },
              {
                label: "选项二",
                value: "1",
              },
            ],
            span: 24,
            display: true,
            props: {
              label: "label",
              value: "value",
              desc: "desc",
            },
            prop: "a166126914632983943",
            // required: true,
          },
          {
            type: "checkbox",
            label: "多选框",
            dicData: [
              {
                label: "选项一",
                value: "0",
              },
              {
                label: "选项二",
                value: "1",
              },
            ],
            span: 24,
            display: true,
            props: {
              label: "label",
              value: "value",
              desc: "desc",
            },
            prop: "a166126914632983944",
            // required: true,
          },
          {
            type: "select",
            label: "下拉选择器",
            dicData: [
              {
                label: "选项一",
                value: "0",
              },
              {
                label: "选项二",
                value: "1",
              },
              {
                label: "选项三",
                value: "2",
              },
            ],
            span: 24,
            display: true,
            props: {
              label: "label",
              value: "value",
              desc: "desc",
            },
            prop: "a166126914632983945",
            cascader: [],
            // required: true,
          },
          {
            type: "cascader",
            label: "级联选择器",
            dicData: [
              {
                label: "选项一",
                value: "0",
                children: [
                  {
                    label: "选项1-1",
                    value: 11,
                  },
                  {
                    label: "选项1-2",
                    value: 12,
                  },
                ],
              },
              {
                label: "选项二",
                value: "1",
              },
              {
                label: "选项三",
                value: "2",
              },
            ],
            span: 24,
            display: true,
            props: {
              label: "label",
              value: "value",
              desc: "desc",
            },
            prop: "a166126914632983946",
            cascader: [],
            // required: true,
          },
          {
            // 文件上传配置具体情况补充
            type: "upload",
            label: "上传",
            span: 24,
            display: true,
            prop: "a166126914632983947",
            // vant-form的必填校验有bug
            // required: true,
          },
          // 日期，时间，日期时间三个组件
          // 移动端一个组件通过:type="datetimeType"匹配
          {
            type: "date",
            label: "日期",
            span: 24,
            display: true,
            prop: "a166126914632983950",
            // required: true,
          },
          {
            type: "time",
            label: "时间",
            span: 24,
            display: true,
            prop: "a166126914632983951",
            // required: true,
          },
          {
            type: "datetime",
            label: "日期时间",
            span: 24,
            display: true,
            prop: "a166126914632983952",
            // required: true,
          },
          // 日期，时间，日期时间三个组件end
          {
            type: "switch",
            label: "开关",
            span: 24,
            display: true,
            prop: "a166126914632983953",
            // required: true,
          },
          {
            type: "rate",
            label: "评价",
            span: 24,
            display: true,
            prop: "a166126914632983954",
            // vant-form的必填校验有bug
            // required: true,
          },
          {
            type: "slider",
            label: "滑块",
            span: 24,
            display: true,
            prop: "a166126914632983955",
            min: 0,
            max: 10,
            step: 1,
            //
            // required: true,
          },

          {
            type: "dynamic",
            label: "子表单",
            span: 24,
            display: true,
            prop: "a166126914632983960",

            required: true,

            children: {
              align: "center",
              headerAlign: "center",
              index: false,
              addBtn: true,
              delBtn: true,
              column: [
                {
                  type: "datetime",
                  label: "日期时间",
                  span: 24,
                  display: true,
                  prop: "a166126914632983961",
                  required: true,
                },
                {
                  type: "switch",
                  label: "开关",
                  span: 24,
                  display: true,
                  prop: "a166126914632983962",
                  // required: true,
                },
                {
                  type: "rate",
                  label: "评价",
                  span: 24,
                  display: true,
                  prop: "a166126914632983963",
                  // vant-form的必填校验有bug
                  // required: true,
                },
              ],
            },
          },

          {
            type: "ueditor",
            label: "富文本",
            span: 24,
            display: true,
            prop: "a166126914632983956",
            //
            // required: true,
          },
        ],
        labelPosition: "left",
        labelSuffix: "：",
        labelWidth: 120,
        gutter: 0,
        menuBtn: true,
        submitBtn: true,
        submitText: "提交",
        emptyBtn: true,
        emptyText: "清空",
        menuPosition: "center",
        // option里的全局配置
        detail: true,
        group: [
          {
            label: "分组1",
            prop: "a166127124877024454",
            arrow: false,
            collapse: true,
            display: true,
            column: [
              {
                type: "input",
                label: "单行文本",
                span: 12,
                display: true,
                prop: "a166127125124516760",
              },
              {
                type: "input",
                label: "单行文本",
                span: 12,
                display: true,
                prop: "a166127125342541010",
              },
            ],
          },
          {
            label: "分组2",
            prop: "a1661271248770244541",
            arrow: false,
            collapse: true,
            display: true,
            column: [
              {
                type: "input",
                label: "单行文本",
                span: 12,
                display: true,
                prop: "a1661271251245167601",
              },
              {
                type: "input",
                label: "单行文本",
                span: 12,
                display: true,
                prop: "a1661271253425410101",
              },
            ],
          },
        ],
      },
      // 员工信息收集表配置
      // option: {
      //   column: [
      //     {
      //       type: "input",
      //       label: "员工编号",
      //       span: 24,
      //       display: true,
      //       prop: "ygbh",
      //       eformModel: ["ygbh"],
      //       modelType: "string",
      //     },
      //     {
      //       label: "姓名",
      //       params: { key: "nickName" },
      //       custom: "customInfo",
      //       type: "customInfo",
      //       component: "customInfo",
      //       span: 24,
      //       prop: "xm",
      //       eformModel: ["xm"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "radio",
      //       label: "性别",
      //       dicData: [
      //         { label: "男", value: "男" },
      //         { label: "女", value: "女" },
      //       ],
      //       span: 24,
      //       display: true,
      //       props: { label: "label", value: "value" },
      //       prop: "xb",
      //       eformModel: ["xb"],
      //       modelType: "string",
      //     },
      //     {
      //       label: "联系电话",
      //       params: { key: "mobile" },
      //       custom: "customInfo",
      //       type: "customInfo",
      //       component: "customInfo",
      //       span: 24,
      //       prop: "lxdh",
      //       eformModel: ["lxdh"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "input",
      //       label: "身份证号",
      //       span: 24,
      //       display: true,
      //       prop: "sfzh",
      //       eformModel: ["sfzh"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "input",
      //       label: "部门",
      //       span: 24,
      //       display: true,
      //       prop: "bm",
      //       eformModel: ["bm"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "input",
      //       label: "板块",
      //       span: 24,
      //       display: true,
      //       prop: "bk",
      //       eformModel: ["bk"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "input",
      //       label: "技术级别",
      //       span: 24,
      //       display: true,
      //       prop: "jsjb",
      //       eformModel: ["jsjb"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "input",
      //       label: "职位",
      //       span: 24,
      //       display: true,
      //       prop: "zw",
      //       eformModel: ["zw"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "date",
      //       label: "入职日期",
      //       span: 24,
      //       display: true,
      //       format: "yyyy-MM-dd",
      //       valueFormat: "yyyy-MM-dd",
      //       prop: "rzrq",
      //       eformModel: ["rzrq"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "date",
      //       label: "转正日期",
      //       span: 24,
      //       display: true,
      //       format: "yyyy-MM-dd",
      //       valueFormat: "yyyy-MM-dd",
      //       prop: "zzrq",
      //       eformModel: ["zzrq"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "date",
      //       label: "离职日期",
      //       span: 24,
      //       display: true,
      //       format: "yyyy-MM-dd",
      //       valueFormat: "yyyy-MM-dd",
      //       prop: "lzrq",
      //       eformModel: ["lzrq"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "date",
      //       label: "就业登记",
      //       span: 24,
      //       display: true,
      //       format: "yyyy-MM-dd",
      //       valueFormat: "yyyy-MM-dd",
      //       prop: "jydj",
      //       eformModel: ["jydj"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "date",
      //       label: "就业登记注销",
      //       span: 24,
      //       display: true,
      //       format: "yyyy-MM-dd",
      //       valueFormat: "yyyy-MM-dd",
      //       prop: "jydjzx",
      //       eformModel: ["jydjzx"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "select",
      //       label: "学历",
      //       dicData: [
      //         { label: "本科", value: "本科" },
      //         { label: "大专", value: "大专" },
      //         { label: "硕士", value: "硕士" },
      //         { label: "博士", value: "博士" },
      //       ],
      //       span: 24,
      //       display: true,
      //       props: { label: "label", value: "value", desc: "desc" },
      //       prop: "xl",
      //       eformModel: ["xl"],
      //       cascader: [],
      //       modelType: "string",
      //     },
      //     {
      //       type: "input",
      //       label: "毕业院校",
      //       span: 24,
      //       display: true,
      //       prop: "byyx",
      //       eformModel: ["byyx"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "input",
      //       label: "专业",
      //       span: 24,
      //       display: true,
      //       prop: "zy",
      //       eformModel: ["zy"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "date",
      //       label: "毕业时间",
      //       span: 24,
      //       display: true,
      //       format: "yyyy-MM-dd",
      //       valueFormat: "yyyy-MM-dd",
      //       prop: "bysj",
      //       eformModel: ["bysj"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "input",
      //       label: "户籍地址",
      //       span: 24,
      //       display: true,
      //       prop: "hjdz",
      //       eformModel: ["hjdz"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "select",
      //       label: "户籍属地",
      //       dicData: [{ label: "本市", value: "本市" }],
      //       span: 24,
      //       display: true,
      //       props: { label: "label", value: "value", desc: "desc" },
      //       prop: "hjsd",
      //       eformModel: ["hjsd"],
      //       cascader: [],
      //       modelType: "string",
      //     },
      //     {
      //       type: "input",
      //       label: "社保关系",
      //       span: 24,
      //       display: true,
      //       prop: "sbgx",
      //       eformModel: ["sbgx"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "input",
      //       label: "职业类型",
      //       span: 24,
      //       display: true,
      //       prop: "zylx",
      //       eformModel: ["zylx"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "input",
      //       label: "职业技能",
      //       span: 24,
      //       display: true,
      //       prop: "zyjn",
      //       eformModel: ["zyjn"],
      //       modelType: "string",
      //     },
      //     {
      //       type: "input",
      //       label: "职称资格",
      //       span: 24,
      //       display: true,
      //       prop: "zczg",
      //       eformModel: ["zczg"],
      //       modelType: "string",
      //     },
      //     {
      //       label: "个人照片",
      //       // params: { type: "image", fileType: "image/jpeg", fileSize: 2 },
      //       type: "upload",
      //       display: true,
      //       span: 24,
      //       prop: "grzp",
      //       eformModel: ["grzp"],
      //       modelType: "string",
      //     },
      //     {
      //       label: "银行卡照片（招行）",
      //       params: { type: "image", fileType: "image/jpeg", fileSize: 2 },
      //       type: "upload",
      //       display: true,
      //       span: 24,
      //       prop: "yhkzp",
      //       eformModel: ["yhkzp"],
      //       modelType: "string",
      //     },
      //     {
      //       label: "证件照正面",
      //       params: { type: "image", fileType: "image/jpeg", fileSize: 2 },
      //       custom: "upload",
      //       type: "upload",
      //       component: "upload",
      //       display: true,
      //       span: 24,
      //       prop: "zjzzm",
      //       eformModel: ["zjzzm"],
      //       modelType: "string",
      //     },
      //     {
      //       label: "证件照背面",
      //       params: { type: "image", fileType: "image/jpeg", fileSize: 2 },
      //       custom: "upload",
      //       type: "upload",
      //       component: "upload",
      //       display: true,
      //       span: 24,
      //       prop: "zjzbm",
      //       eformModel: ["zjzbm"],
      //       modelType: "string",
      //     },
      //     {
      //       label: "学位证照片",
      //       params: { type: "image", fileType: "image/jpeg", fileSize: 2 },
      //       custom: "upload",
      //       type: "upload",
      //       component: "upload",
      //       display: true,
      //       span: 24,
      //       prop: "xwzzp",
      //       eformModel: ["xwzzp"],
      //       modelType: "string",
      //     },
      //     {
      //       label: "毕业证照片",
      //       params: { type: "image", fileType: "image/jpeg", fileSize: 2 },
      //       custom: "upload",
      //       display: true,
      //       type: "upload",
      //       component: "upload",
      //       span: 24,
      //       prop: "byzzp",
      //       eformModel: ["byzzp"],
      //       modelType: "string",
      //     },
      //   ],
      //   labelPosition: "left",
      //   labelSuffix: "：",
      //   labelWidth: 120,
      //   gutter: 0,
      //   menuBtn: true,
      //   submitBtn: true,
      //   submitText: "提交",
      //   emptyBtn: true,
      //   emptyText: "清空",
      //   menuPosition: "center",
      // },

      // 自定义是否是详情展示不可编辑,全局配置
      detail: true,

      // 初始化填写数据
      // form: {},
      // 测试数据回显
      form: {
        a166126914632983938: "1",
        a166126914632983939: "2",
        a166126914632983940: "3",
        a166126914632983941: 4,
        a166126914632983942: "北京市/北京市/东城区",
        a166126914632983943: "1",
        a166126914632983944: ["0", "1"],
        a166126914632983945: "2",
        a166126914632983946: "选项1-2",
        a166126914632983947: [
          {
            file: {},
            status: "",
            message: "",
            content:
              "data:image/jpeg;base64,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",
          },
        ],
        a166126914632983950: "2022-09-01",
        a166126914632983951: "12:00",
        a166126914632983952: "2022-09-01 14:03",
        a166126914632983953: true,
        a166126914632983954: 4,
        a166126914632983955: 6,
        a166126914632983960: [
          {
            a166126914632983961: "",
            a166126914632983962: "",
            a166126914632983963: "",
          },
          {
            a166126914632983961: "2022-09-01 14:04",
            a166126914632983962: true,
            a166126914632983963: 4,
          },
        ],
        a166126914632983956: "<p>5555</p>",
        a166127125124516760: "",
        a166127125342541010: "",
        a1661271251245167601: "",
        a1661271253425410101: "",
      },
    };
  },
  mounted() {
    document.title = 'hello'
  },
  methods: {
    // AForm点击提交触发父组件自定义事件
    aFormMethods(data) {
      // console.log("a-form-data :>> ", data);
      // console.log("a-form-form :>> ", this.form);
    },
  },
};
</script>

<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>
