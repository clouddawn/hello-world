import Vue from "vue";
import {RadioGroup, Radio} from "vant";
import {DatetimePicker} from "vant";
import commonFunction from "@/general/commonFunction.js";
import dayjs from "dayjs";
import qs from "qs";

Vue.use(DatetimePicker);
Vue.use(Radio);
Vue.use(RadioGroup);

export default {
  data() {
    return {
      certificateColumns: [], // 证件类型选项
      certificatePicker: false, // 证件类型选择器
      showCertificate: "", // 页面展示证件类型
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(2000, 0, 1),
      birthDatePicker: false, // 出生日期选择器
      townPicker: false, // 区镇选择器
      townColumns: [],
      form: { // 表单提交参数
        name: "",
        certificate: "",
        certificateNumber: "",
        gender: "",
        birthDate: "",
        age: "",
        phone: "",
        town: "",
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // console.log( new Date(1900, 0, 1));
      // console.log(dayjs().subtract(100,'year'));
      // this.minDate = new Date(dayjs().subtract(100,'year'));
      // let date = dayjs().add(3,'day').format("YY-MM-DD HH:mm");
      // console.log(date);
      // let timestamp3 = new Date().getTime();
      // let now = dayjs(timestamp3);
      // let timestamp = +dayjs().valueOf();
      // let timestamp = +dayjs('2021-1-1').valueOf();
      // console.log(timestamp);
      // console.log(commonFunction.timestampTransform(timestamp).completeTime);
      // console.log(now);
      // console.log(now.format("YYYY-MM-DD HH:mm:ss")); // 2022-04-06 16:59:44
      // alert(now.format('YY年MM月DD日 HH:mm:ss'));
      // return;
      let certificates = [
        {
          key: 1,
          value: "身份证",
        },
        {
          key: 2,
          value: "护照",
        },
        {
          key: 3,
          value: "港澳通行证",
        },
        {
          key: 4,
          value: "台胞证",
        }
      ];
      console.log(qs.stringify(certificates));
      return
      certificates.forEach((item) => {
        this.certificateColumns.push(item.value);
      });
      this.townColumns = ["关帝庙镇", "砀城镇", "李庄镇"];
    },
    // 证件类型选择器确认
    certificateConfirm(value) {
      this.showCertificate = value;
      this.certificatePicker = false;
    },
    // 出生日期选择器确认
    birthDateConfirm(value) {
      this.form.birthDate = commonFunction.timestampTransform(value).inCompleteTime;
      this.birthDatePicker = false;
    },
    // 区镇选择器确认
    townConfirm(value) {
      this.form.town = value;
      this.townPicker = false;
    }
  }
};