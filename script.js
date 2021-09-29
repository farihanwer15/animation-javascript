var boxes = document.querySelectorAll('.box')

window.addEventListener('scroll' , checkBoxes)

checkBoxes()

function checkBoxes(){
    var trigger =  window.innerHeight / 5 * 4

    boxes.forEach(box => {
        var boxTop = box.getBoundingClientRect().top

        if(boxTop < trigger)
        {
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}