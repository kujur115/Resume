var progressBars = document.querySelectorAll(".skills-progress > div");
var skillsContainer = document.getElementsByClassName("skills-container");
window.addEventListener("scroll", checkScroll);
var animationDone = false;

function fillBars() {
  for (let bar of progressBars) {
    let targetWidth = bar.getAttribute("data-bar-width");
    let currentWidth = 0;
    let interval = setInterval(function () {
      if (currentWidth > targetWidth) {
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + "%";
    }, 5);
  }
}

function initialiseBars() {
  for (let bar of progressBars) {
    bar.style.width = 0 + "%";
  }
}
initialiseBars();
function checkScroll() {
  var coordinates = skillsContainer.getBoundingClientRect();
  if (!animationDone && coordinates.top < window.innerHeight) {
    animationDone = true;
    fillBars();
  } else if (coordinates.top > window.innerHeight) {
    animationDone = false;
    initialiseBars();
  }
}

// var progressBars = document.querySelectorAll('.skill-progress > div');
// var skillsContainer = document.getElementsByClassName('skill-progress');
// window.addEventListener('scroll',checkScroll);
// var animationDone =[];
// for(let i=0;i<skillsContainer.length;i++){
//     animationDone.add('false');
// }

// function fillBars(i){
//     // for(let bar of progressBars){
//         let targetWidth=progressBars[i].getAttribute('data-bar-width');
//         let currentWidth =0;
//         let interval =setInterval(function(){
//             if(currentWidth>targetWidth){
//                 clearInterval(interval);
//                 return;
//             }
//             currentWidth++;
//             progressBars[i].style.width=currentWidth+'%';
//         },5);

// }

// // function initialiseBars(){
// //     for(let bar of progressBars){
// //         progressBars[i].style.width=0+'%';
// //     }
// // }
// // initialiseBars();
// function checkScroll(){
//  for(let i=0;i<skillsContainer.length;i++){
//     let coordinates =skillsContainer[i].getBoundingClientRect();
//     if(!animationDone[i] && coordinates.top < window.innerHeight){
//         animationDone[i]=true;
//         fillBars(i);
//     }else if(coordinates.top > window.innerHeight){
//         animationDone[i]=false;
//         // initialiseBars(skillsContainer[i]);
//     }
//  }
// }
