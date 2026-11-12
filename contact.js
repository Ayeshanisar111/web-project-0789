document.getElementById('themeBtn')?.addEventListener('click', function(){
  document.body.classList.toggle('dark-theme');
});
document.getElementById('showBtn')?.addEventListener('click', function(){
  let t = document.getElementById('moreText');
  t.style.display = t.style.display === "none" ? "block" : "none";
});
document.getElementById('email')?.addEventListener('input', function(e){
  let msg = document.getElementById('emailMsg');
  if(!e.target.value.includes('@')){
    msg.textContent = "Invalid Email"; msg.style.color="red";
  } else {
    msg.textContent = "Valid Email"; msg.style.color="green";
  }
});