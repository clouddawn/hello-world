// 常用函数封装
import axios from 'axios';
import {Dialog, Toast} from 'vant';

export default {
  // 时间戳转换
  // 2022-01-27 10:10:59 格式
  timestampTransform(time) {
    let date = new Date(time);
    let Y = date.getFullYear() + "-";
    let M =
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) + "-";
    let D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
    let h =
      (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
    let m =
      (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
      ":";
    let s =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let completeTime = Y + M + D + h + m + s;
    let inCompleteTime = Y + M + D;
    return {
      completeTime,
      inCompleteTime,
    };
  },
  // 时间戳转换
  // 2022年01月27日 10:10:59 格式
  timestampTransformZh(time) {
    let date = new Date(time);
    let Y = date.getFullYear() + "年";
    let M =
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) + "月";
    let D =
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + "日 ";
    let h =
      (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
    let m =
      (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
      ":";
    let s =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let completeTime = Y + M + D + h + m + s;
    let inCompleteTime = Y + M + D;
    return {
      completeTime,
      inCompleteTime,
    };
  },
  // 获取高度实现滑轮监听
  setHeight(name) {
    // 接受一个CSS选择器字符串，用于匹配dom元素，在 mounted 里面调用这段代码
    let dom = document.querySelector(name);
    let a = window.screen.availHeight;
    let b = dom.offsetTop - document.documentElement.scrollTop;
    dom.style.height = a - b + "px";
  },
  // 判断是否开始开始加载下一组数据
  getNextData(event) {
    let scrollBottom =
      event.target.scrollHeight - // 页面内容区高度，包括溢出不可见部分
      event.target.scrollTop - // 顶部不可见部分高度
      event.target.clientHeight; //
    return scrollBottom < 100;
  },
  // 封装 axios post
  postAxios(url, params, successCallBack, failtureCallBack) {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
    });
    axios
      .post(url, params)
      .then((res) => {
        Toast.clear();
        if (res.data.success) {
          Dialog.alert({
            message: res.data.message,
          }).then(() => {
            successCallBack(res);
          });
        } else {
          Dialog.alert({
            message: res.data.message,
          }).then(() => {
            failtureCallBack(res);
          });
        }
      })
      .catch((err) => {
        Toast.clear();
        console.log(err);
        Dialog.alert({
          message: "调用接口失败",
        }).then(() => {});
      });
  },
  // 封装 axios get
  getAxios(url, params, successCallBack, failtureCallBack) {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
    });
    axios
      .get(url, params)
      .then((res) => {
        Toast.clear();
        if (res.data.success) {
          successCallBack(res);
        } else {
          Dialog.alert({
            message: res.data.message,
          }).then(() => {
            failtureCallBack(res);
          });
        }
      })
      .catch((err) => {
        Toast.clear();
        console.log(err);
        Dialog.alert({
          message: "调用接口失败",
        }).then(() => {});
      });
  },
  // 通过对象的 value 获取对象的 key
  findKey(obj, value, compare = (a, b) => a === b) {
    // obj 目标对象
    return Object.keys(obj).find(k => compare(obj[k], value));
  },
};
