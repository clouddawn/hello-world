import qs from 'qs';
import {Dialog, Toast} from 'vant';

export default {
  data(){
    return {

    }
  },
  mounted() {

  },
  methods:{
    signIn(){
      let url = new URLSearchParams(window.location.search);
      let result = url.get('code');
      if (this.$route.query.code || result) {
        let params;
        params = qs.stringify({
          code: this.$route.query.code || result,
          certNo: this.$route.query.certNo,
          certName: this.$route.query.certName,
          mobile: this.$route.query.mobile,
        });
        Toast.loading({
          message: "加载中...",
          forbidClick: true,
        });
        this.$axios
            .post("/messageboard/userLogin", params)
            .then((res) => {
              Toast.clear();
              if (res.data.result !== 1) {
                Dialog.alert({
                  message: res.data.reason,
                }).then(() => {
                });
              }
            })
            .catch((err) => {
              Toast.clear();
              console.error(err);
              Dialog.alert({
                message: "接口调用失败",
              }).then(() => {
              });
            });
      } else {
        Toast.loading({
          message: "加载中...",
          forbidClick: true,
        });
        this.$axios.post("/messageboard/wap/isLogin")
            .then((res) => {
              Toast.clear();
              if (res.data === "") {
                Dialog.alert({
                  message: "未登录",
                }).then(() => {
                });
              }
            })
            .catch((err) => {
              Toast.clear();
              console.log(err);
              Toast('调用接口失败');
            });
      }
    },
  }
}