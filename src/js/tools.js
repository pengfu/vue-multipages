/**
 * @Author: le
 * @Date: 2016/11/2
 */

// image load
const preloadImg = function (path) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = path;
    })
}

export default{
    preloadImg
}