const note1 = document.querySelector('.cube1')
const note2 = document.querySelector('.cube2')
const note3 = document.querySelector('.cube3')

const rect1 = note1.getBoundingClientRect()
const rect2 = note2.getBoundingClientRect()
const rect3 = note3.getBoundingClientRect()

window.addEventListener('mousemove', function (e) {
  let x = e.clientX
  let y = e.clientY
  note1.style.transform = `translate(${(x - rect1.left)/120}px, ${(y - rect1.top)/120}px)`
  note2.style.transform = `translate(${(x - rect2.left)/260}px, ${(y - rect2.top)/120}px)`
  note3.style.transform = `translate(${(x - rect3.left)/100}px, ${(y - rect3.top)/120}px)`
})