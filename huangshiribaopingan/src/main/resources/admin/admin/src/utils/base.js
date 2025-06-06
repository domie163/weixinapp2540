const base = {
    get() {
        return {
            url : "http://localhost:8080/huangshiribaopingan/",
            name: "huangshiribaopingan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/huangshiribaopingan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "“黄师日报”平安小程序"
        } 
    }
}
export default base
