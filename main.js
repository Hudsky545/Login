const containerMain = document.querySelector('.container')
const bx = document.querySelector('.box')
const msg = document.querySelector('.new__member')
const disAppear = document.querySelector('.box .contain__me i')

msg.addEventListener('click', () => {
    containerMain.style.display = "none"
    bx.style.display = "block"
    msg.style.display = "none"
})
disAppear.addEventListener('click', () => {
    containerMain.style.display = "block"
    bx.style.display = "none"
    msg.style.display = "flex"
})

/* document.querySelector('.container .new__member').addEventListener('click', () => {
    document.querySelector('.container').classList.add("active")
    document.querySelector('.container .new__member').style.display = "none";
    document.querySelector('main .box i').style.display = "block"
})
document.querySelector('.box i').addEventListener('click', () => {
    document.querySelector('.container').classList.remove("active")

}) */