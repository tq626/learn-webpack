// 如果只是单独引入一个文件并没有引用该文件里面的额东西就可以只是import
import "./component/div_cpn"

import { createApp } from 'vue'
import Hello from './vue/hello.vue'

createApp(Hello).mount("#app")