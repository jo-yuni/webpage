document.getElementById('content1').addEventListener('click', function() {
    document.getElementsByClassName('add')[0].classList.add('show')
    // document.getElementsByClassName('content')[0].classList.add('hidden')
})
document.getElementById('content2').addEventListener('click', function() {
    document.getElementsByClassName('add')[0].classList.add('show')
})
document.getElementById('content3').addEventListener('click', function() {
    document.getElementsByClassName('add')[0].classList.add('show')
})
document.getElementById('arrow').addEventListener('click', function() {
    document.getElementsByClassName('add')[0].classList.remove('show')
})