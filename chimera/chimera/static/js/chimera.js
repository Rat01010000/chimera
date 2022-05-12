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

        if (window.scrollY > rect.top - 800){
            note.style.transform = `translate(${(x - rect.left)/120}px, ${(y - rect.top)/120}px)`
            setTimeout(() => {
                note.style.transition = `0ms`
            }, 1000)
        }else {
            note.style.transition = '500ms'
        }
    })

    note2.map(note => {
        const rect = note.getBoundingClientRect()
        if (window.scrollY > rect.top - 800){
            note.style.transform = `translate(${(x - rect.left)/120}px, ${(y - rect.top)/120}px)`
            setTimeout(() => {
                note.style.transition = `0ms`
            }, 1000)
        }else {
            note.style.transition = '500ms'
        }
    })

    note3.map(note => {
        const rect = note.getBoundingClientRect()
        if (window.scrollY > rect.top - 800){
            note.style.transform = `translate(${(x - rect.left)/120}px, ${(y - rect.top)/120}px)`
            setTimeout(() => {
                note.style.transition = `0ms`
            }, 1000)
        }else {
            note.style.transition = '500ms'
        }
    })
})
