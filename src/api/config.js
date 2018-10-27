let urls;
let NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === 'development') {
    urls = 'http://xxxxxx'; // 开发环境
} else {
    urls = window.BASE_URL;
}

export default urls