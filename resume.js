var navMenuAnchorTags=document.querySelectorAll('nav a');
for(let i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId=this.textContent.trim().toLowerCase();
        if(targetSectionId=='home'){
            return;
        }
        var targetSection=document.getElementById(targetSectionId);
        var interval=setInterval(function(){
            var targetCoordenate=targetSection.getBoundingClientRect();
            if(targetCoordenate.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },40);

    });
}