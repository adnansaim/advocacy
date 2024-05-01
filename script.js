document.getElementById('stylebutton').addEventListener('mouseenter', function() {
    document.querySelector('.circle').classList.add('run-wheel');
});
document.getElementById('stylebutton').addEventListener('mouseleave', function() {
    document.querySelector('.circle').classList.remove('run-wheel');
});