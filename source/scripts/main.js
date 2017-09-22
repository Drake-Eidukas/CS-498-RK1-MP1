var originalNavBarHeight = document.getElementById('nav-cloud-box').style.height = '0px'

document.body.onscroll = function (event) {
    resizeNavBar(document.body.scrollTop > 50)
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
            element.style.width = '30%'
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
            element.style.width = '33%'
        })
    
        // Remove logo on bottom of nav bar
        document.getElementById('cloud-bottom').style.width = '0%'
        document.getElementById('cloud-svg-small').style.fontSize = '0px'
        document.getElementById('nav-cloud-box').style.height = originalNavBarHeight
    
    }
}


Array.prototype.map.call(document.getElementsByClassName('selectable'), function (element) {
    element.onmouseover = function (event) {
        Array.prototype.map.call(document.getElementsByClassName('selectable'), function (element) {
            element.classList.remove('active')
        })

        element.classList.add('active')
    }
})

console.log('mem')

