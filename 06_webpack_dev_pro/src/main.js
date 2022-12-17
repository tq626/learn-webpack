// 如果只是单独引入一个文件并没有引用该文件里面的额东西就可以只是import
import "./component/div_cpn"
import { add } from "./utils/math"
import "./utils/demo"
import { createApp } from 'vue'
import Hello from './vue/hello.vue'
add(20, 40)
createApp(Hello).mount("#app")


// 指定哪一个模块需要HMR(热模块加载) 但是该模块不能在main.js中使用,如果在main.js中被使用了则都会更新
if (module.hot) {
  module.hot.accept("./utils/demo.js")
}