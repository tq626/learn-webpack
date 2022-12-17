
import "../css/div_cpn.css"
import "../css/title.less"

const divEl = document.createElement("div")
divEl.textContent = "Hello World"
divEl.classList.add("content")
document.body.append(divEl)


//创建h2元素
const titleEl = document.createElement("h2")
titleEl.textContent = "tianqiao"
titleEl.classList.add("title")
document.body.append(titleEl)