const buttons = document.querySelectorAll('[data-carousel-button]')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1        
        //here 'carousel-button' is converted to camelCase (i.e. carouselButton) while getting the 'data' attribute through the 'dataset' attribute...
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

        //.closest() method grabs the closest element with data attr. 'data-carousel' and grrabs its 'data-slides' attr.

    const activeSlide = slides.querySelector("[data-active]")

    //main logic
    let newIndex = [...slides.children].indexOf(activeSlide) + offset

    // ...slides.children = [img1, img2, img3]

    if(newIndex < 0) newIndex = slides.children.length - 1
    if(newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    })
})

//code for slideshow starts from here...
const modalContainer = document.querySelector('.container');
const slideShow = document.querySelector('.slide-show');
const imageElement = document.createElement('img');
const imgArray = ['https://images.unsplash.com/photo-1651419935058-30cfaf2fb05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80','https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80','https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80','https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80','https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'];

    let index = 0;
    let clickCount = "";

slideShow.addEventListener('click', () => {
    modalContainer.classList.add('active');
    changeImg();
})

const closeModal = document.querySelector('.cross');

closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('active');
    modalContainer.removeChild(imageElement);
    clearTimeout(clickCount)
    index = 0;
})

function changeImg() {
    imageElement.setAttribute('src', imgArray[index]);
    modalContainer.appendChild(imageElement);  //to create and set the <img> inside the <div> of class '.container'...
    index++;
    if(index == imgArray.length) {      //if the index of image is more than the length of array, index is reset to '0'
        index = 0;
    }
    clickCount = setTimeout(changeImg, 3000);       //calls itself(recursion) after every 3 sec...
}