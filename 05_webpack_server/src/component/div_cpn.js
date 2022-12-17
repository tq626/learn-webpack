
import "../css/div_cpn.css"
import "../css/title.less"

// 引入图片模块(每张图片就是一个模块)
import kobe from "../img/kobe01.jpg"

const divEl = document.createElement("div")
divEl.textContent = "Hello World"
divEl.classList.add("content")
document.body.append(divEl)


//创建h2元素
const titleEl = document.createElement("h2")
titleEl.textContent = "tianqiao"
titleEl.classList.add("title")
document.body.append(titleEl)

// 创建img元素
const imgEl = document.createElement("img")
imgEl.src = kobe
document.body.append(imgEl)

