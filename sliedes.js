// Nākamais
document.getElementById('sliede1').addEventListener('click',
function() {
    document.querySelector('.bgSliede1').style.display = 'flex';
});
document.querySelector('.closeSliede1').addEventListener('click',
function(){
    document.querySelector('.bgSliede1').style.display = 'none';
});