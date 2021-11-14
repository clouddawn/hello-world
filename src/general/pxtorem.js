const WIDTH = 375;  //如果是尺寸的设计稿在这里修改
const setView = () => {
    //设置html标签的fontSize
    document.documentElement.style.fontSize = (100 * screen.width / WIDTH) + 'px';
};
screen.orientation.onchange = setView;
window.onresize = setView;
setView();