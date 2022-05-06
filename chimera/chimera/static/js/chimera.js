const toArray = (list) => {
  return newList = Array.from(list)
}

const note1 = toArray(document.querySelectorAll('.cube1'))
const note2 = toArray(document.querySelectorAll('.cube2'))
const note3 = toArray(document.querySelectorAll('.cube3'))

window.addEventListener('mousemove', function (e) {
  let x = e.clientX
  let y = e.clientY


  note1.map(note => {
    const rect = note.getBoundingClientRect()

    // if (Math.abs(y - rect.top) > 1000) {
    //   note.style.transition = '500ms'
    // }
    // if (Math.abs(rect.top) < this.window.innerHeight){
    //   note.style.transform = `translate(${(x - rect.left)/120}px, ${(y - rect.top)/120}px)`
    // }
    note.style.transform = `translate(${(x - rect.left)/120}px, ${(y - rect.top)/120}px)`
  })

  note2.map(note => {
    const rect = note.getBoundingClientRect()
    note.style.transform = `translate(${(x - rect.left)/260}px, ${(y - rect.top)/120}px)`
  })

  note3.map(note => {
    const rect = note.getBoundingClientRect()
    note.style.transform = `translate(${(x - rect.left)/100}px, ${(y - rect.top)/120}px)`
  })
})