var originalHeight = document.getElementById('nav-cloud-box').style.height = '0px'

function adjustNavBar (event) {
    if (document.body.scrollTop > 50) {
        Array.prototype.map.call(document.getElementsByClassName('shrink'), function (element) {
            element.style.visibility = 'hidden'
            element.classList.add('gone')
        })                  

        document.getElementById('nav-cloud-box').style.height = '0px'
    } else {
        Array.prototype.map.call(document.getElementsByClassName('shrink'), function (element) {
            element.classList.remove('gone')
            element.style.visibility = 'visible'
        })
                    

        
        document.getElementById('nav-cloud-box').style.height = originalHeight
    }
}

document.body.onscroll = function (event) {
    adjustNavBar(event)
}

console.log('mem')

