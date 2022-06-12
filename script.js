function toggleImage() {
  var x = document.getElementById('bigfoot');
  if (x.style.display === "none") {
    x.style.display = "inline";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById('forest');
  if (y.style.display === 'inline') {
    y.style.display = 'none';
  } else {
    y.style.display = 'inline';
  }
  var z = document.getElementById('button');
  if (z.innerHTML === 'click to hide me!') {
    z.innerHTML = 'click to reveal me!';
  } else {
    if (z.innerHTML === 'click to reveal me!')
      z.innerHTML = 'click to hide me!';
  }
}
}
    
