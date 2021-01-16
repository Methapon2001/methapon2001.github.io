const app = {
    ready: (handler) => {
        return document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', handler) : handler();
    },
    foreach: (obj, callback) => {
        for (var i = 0; i < obj.length; i++) {
            if (callback.call(obj[i], obj[i], i) === false) {
                break;
            }
        }
        return obj;
    }
}