Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持(一般只支持一个)多个slot，以不同的 name 来区分。
  },
  properties: {
    title: {
      type: String,
      value: ""
    },
    subTitle: {
      type: String,
      value: ""
    },
    desc: {
      type: String,
      value: ""
    },
    isLink: {
      type: Boolean,
      value: false
    },
    linkUrl: {
      type: String,
      value: null
    },
    showIcon: {
      type: Boolean,
      value: false
    },
    bgColor: {
      type: String,
      value: "#FFFFFF"
    }
  },
  data: {},
  methods: {}
});