/* ===================== script.js ===================== */
AOS.init();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Typing Effect
const text = "Hi, I'm Pankaj Kumar";
let i = 0;
function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();

// Skill Animation
const skills = document.querySelectorAll('.bar span');
window.addEventListener('scroll', ()=>{
  skills.forEach(skill=>{
    let rect = skill.getBoundingClientRect().top;
    if(rect < window.innerHeight){
      skill.style.width = skill.getAttribute('data-width');
    }
  });
});
