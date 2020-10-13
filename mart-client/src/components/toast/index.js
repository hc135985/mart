import Vue from 'vue'
import toast from './toast.vue'
//使用vue构造器创建一个子类，参数是组件
const ToastConstructor = Vue.extend(toast)

function showToast({ text, type = true, duration = 1000, onOk, del }) {

    this.toastDom = new ToastConstructor({
        el: document.createElement("div"),
        data() {
            return {
                isShow: type, // 是否显示
                text: text, // 文本内容
            };
        },
        methods: {
            del() {
                //调用取消
                del()
                document.body.removeChild(this.$el)
            },
            onOk() {
                //调用ok
                onOk()
                document.body.removeChild(this.$el)
            }
        }
    })
    // 挂载节点
    document.body.appendChild(this.toastDom.$el);
    // 过渡时间
    setTimeout(() => {
        // this.toastDom.isShow = false;
        //删除节点
        // document.body.removeChild(this.toastDom.$el)
    }, duration);
}
// 全局注册
function registryToast() {
    Vue.prototype.$toast = showToast;
}
export default registryToast;