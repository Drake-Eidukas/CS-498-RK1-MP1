var originalNavBarHeight = document.getElementById('nav-cloud-box').style.height;

var pictureArray = [
    'assets/rails.png',
    'assets/amazon.png',
    'assets/sodexo.png'
]

function changeCarouselPic(index, right) {
    let carousel = document.getElementById('carousel-pic')
    
    if (right) {
        carousel.classList.add('slideRight')
        setTimeout(() => {
            carousel.classList.remove('slideRight')
            carousel.src = pictureArray[index]
            carousel.classList.add('fromLeft')
            setTimeout(() => {
                carousel.classList.remove('fromLeft')
            }, 100)
        }, 100)

    } else {
        carousel.classList.add('slideLeft')
        setTimeout(() => {
            carousel.classList.remove('slideLeft')
            carousel.src = pictureArray[index]
            carousel.classList.add('fromRight')
            setTimeout(() => {
                carousel.classList.remove('fromRight')
            }, 100)
        }, 100)
    }
}

document.getElementById('left-carousel-button').onclick = function () {
    let temp = pictureArray[0]
    pictureArray.splice(0,1)
    pictureArray.splice(-1, 0, temp)
    changeCarouselPic(0, false)
}

document.getElementById('right-carousel-button').onclick = function () {
    console.log(pictureArray)
    pictureArray.splice(0,0,pictureArray[pictureArray.length - 1])
    pictureArray.splice(pictureArray.length - 1, 1)
    console.log(pictureArray)
    changeCarouselPic(0, true)
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

var cloudBottom = document.getElementById('cloud-bottom')
var reviews = document.getElementById('reviews-li')
var sponsors = document.getElementById('sponsors-li')
var video = document.getElementById('video-li')
var contact = document.getElementById('stay-in-contact-li')

var reviewsSection = document.getElementById('review-section')
var sponsorSection = document.getElementById('sponsor-footer')
var videoSection = document.getElementById('video-container-picture-box')
var contactSection = document.getElementById('social-media-div')

var distCloudBottom = 0;
var distReviews = reviewsSection.offsetTop
var distSponsors = sponsorSection.offsetTop
var distVideo = videoSection.offsetTop
var distContact = contactSection.offsetTop

function changeSelectedByScroll (scrolled) {
    let realScrolled = scrolled + 100

    if (realScrolled < distReviews) {
        highlightLi(cloudBottom)
    } else if (realScrolled < distSponsors) {
        highlightLi(reviews)
    } else if (realScrolled < distVideo) {
        highlightLi(sponsors)
    } else if (realScrolled < distContact) {
        highlightLi(video)
    } else {
        highlightLi(contact)
    }
}

function setOnclickNavBar () {
    cloudBottom.onclick = function () {
        scrollTo(distCloudBottom)
    }
    reviews.onclick = function () {
        scrollTo(distReviews)
    } 
    sponsors.onclick = function () {
        scrollTo(distSponsors)
    }
    video.onclick = function () {
        scrollTo(distVideo)
    }
    contact.onclick = function () {
        scrollTo(distContact)
    }
}
setOnclickNavBar()

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

        element.onmouseout = function (event) {
            changeSelectedByScroll(document.body.scrollTop)
        }
    })
}



setOnmouseoverNavBar()


var currentScrollY = 0;
var targetScrollY = 0;

// with help from https://stackoverflow.com/questions/10260666/animate-scrolling-with-css3
function scrollTo(yPosition, timeToScroll = 10, scrollSpeed = 50) {
    targetScrollY = yPosition - 100;
    
    let screenY = Math.floor(window.scrollY);

    //Scroll Down
    if (screenY < yPosition) {
        var scrolling = setInterval(function () {
            screenY = screenY + scrollSpeed;
            if (screenY >= targetScrollY) {
                clearInterval(scrolling);
                return;
            }
            window.scrollTo(0, screenY);
        }, timeToScroll);
    }

    //Scroll Up
    if (screenY > yPosition) {
        var scrolling = setInterval(function () {
            screenY = screenY - scrollSpeed;
            if (screenY <= targetScrollY) {
                clearInterval(scrolling);
                return;
            }
            window.scrollTo(0, screenY);
        }, timeToScroll);
    } 
}
