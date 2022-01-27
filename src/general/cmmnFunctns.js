// 常用函数封装

export default {
  // 时间戳转换
  // 2022-01-27 10:10:59 格式
  timestampTransform(time) {
    let date = new Date(time);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    let completeTime = Y + M + D + h + m + s;
    let inCompleteTime = Y + M + D;
    return {
      completeTime,
      inCompleteTime
    };
  },
  // 时间戳转换
  // 2022年01月27日 10:10:59 格式
  timestampTransformZh(time) {
    let date = new Date(time);
    let Y = date.getFullYear() + '年';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月';
    let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + '日 ';
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    let completeTime = Y + M + D + h + m + s;
    let inCompleteTime = Y + M + D;
    return {
      completeTime,
      inCompleteTime
    };
  },
};