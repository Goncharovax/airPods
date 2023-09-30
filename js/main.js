const chooseColor=document.querySelectorAll('.choose-btn')
const contentItem=document.querySelectorAll('.content-item')


chooseColor.forEach(function(element){
    element.addEventListener('click', open)
})

function open(evt) {
    const target=evt.currentTarget;
    const button=target.dataset.button;
    const contentActive=document.querySelectorAll(`.${button}`)

    chooseColor.forEach(function(item){
        item.classList.remove('choose-btn--active')
    })

    target.classList.add('choose-btn--active')


    contentItem.forEach(function(item){
        item.classList.remove('content-item--active')
    })

    contentActive.forEach(function(item){
        item.classList.add('content-item--active')
    })

        




}