let info =  document.getElementById("sizeInfo")
window.addEventListener('resize', function() {
  let x = window.innerWidth;
  let y = window.innerHeight;

	info.innerText = `Width : ${x} and Height: ${y}`
});