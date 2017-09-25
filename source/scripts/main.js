var originalNavBarHeight = document.getElementById('nav-cloud-box').style.height;

var currentPictureIndex = 0
var pictureArray = [
    'assets/rails.png',
    'assets/amazon.png',
    'assets/sodexo.png'
]

function changeCarouselPic(index) {
    let carousel = document.getElementById('carousel-pic')
    carousel.src = pictureArray[index]
}

document.getElementById('left-carousel-button').onclick = function () {
    if (currentPictureIndex === 0) {
        currentPictureIndex = pictureArray.length - 1
    } else {
        currentPictureIndex--;
    }
    changeCarouselPic(currentPictureIndex)
}

document.getElementById('right-carousel-button').onclick = function () {
    if (currentPictureIndex === pictureArray.length - 1) {
        currentPictureIndex = 0
    } else {
        currentPictureIndex++;
    }
    changeCarouselPic(currentPictureIndex)
}

var modal = document.getElementById('factory-modal-pic');
modal.style.display = 'none'
var factoryPic = document.getElementById('normal-factory-pic')

factoryPic.onclick = function () {
    modal.style.display = 'block'
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}

document.body.onscroll = function (event) {
    resizeNavBar(document.body.scrollTop > 50)
    changeSelectedByScroll(document.body.scrollTop)
}

function highlightLi (element) {
    let selectables = document.getElementsByClassName('selectable')
    Array.prototype.map.call(selectables, function (element) {
        element.classList.remove('active')
    })

    element.classList.add('active')
}

function changeSelectedByScroll (scrolled) {
    console.log(scrolled)
    if (scrolled < 1450) {
        highlightLi(document.getElementById('reviews-li'))
    } else if (scrolled < 2200) {
        highlightLi(document.getElementById('sponsors-li'))
    } else if (scrolled < 2750) {
        highlightLi(document.getElementById('video-li'))
    } else {
        highlightLi(document.getElementById('stay-in-contact-li'))
    }
}

function resizeNavBar(shrink) {
    if (shrink) {
        // Loop over all elements with class 'shrink', and hide them / make them shrink to 0 height.
        Array.prototype.map.call(document.getElementsByClassName('shrink'), function (element) {
            element.style.visibility = 'hidden'
            element.classList.add('gone')
        })          
        
        // Shrink the width of the elements on the bottom of the nav bar to make room for logo
        Array.prototype.map.call(document.getElementsByClassName('selectable'), function (element) {
            element.style.width = '22%'
        })

        // Insert logo on bottom of nav bar
        document.getElementById('cloud-bottom').style.width = '10%'
        document.getElementById('cloud-svg-small').style.fontSize = '48px'
        document.getElementById('nav-cloud-box').style.height = '0px'
    } else {
        // Loop over all elements with class'shrink' and unhide them / make them expand to original height.
        Array.prototype.map.call(document.getElementsByClassName('shrink'), function (element) {
            element.classList.remove('gone')
            element.style.visibility = 'visible'
        })

        // Expand the width of the elements on the bottom of the nav bar-- the logo is no longer present
        Array.prototype.map.call(document.getElementsByClassName('selectable'), function (element) {
            element.style.width = '25%'
        })
    
        // Remove logo on bottom of nav bar
        document.getElementById('cloud-bottom').style.width = '0%'
        document.getElementById('cloud-svg-small').style.fontSize = '0px'
        document.getElementById('nav-cloud-box').style.height = originalNavBarHeight
    }
}

function setOnmouseoverNavBar () {
    let selectables = document.getElementsByClassName('selectable')
    Array.prototype.map.call(selectables, function (element) {
        element.onmouseover = function (event) {
            Array.prototype.map.call(selectables, function (element) {
                element.classList.remove('active')
            })

            element.classList.add('active')
        }
    })
}

setOnmouseoverNavBar()
