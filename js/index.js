let imgCount = 1;
let reset = false;
let timeoutHandle;

function nextImg() {

  if (imgCount <= 5) {
    $("#slider").css("background-image", 'url("img/slider-' + imgCount + '.jpg")');
    imgCount++
  } else {
    $("#slider").css("background-image", 'url("img/slider-' + imgCount + '.jpg")');
    imgCount = 0;
  }

  console.log(imgCount);
  if (reset) {
    clearTimeout(timeoutHandle);
    reset = false;
    timeoutHandle = setTimeout(nextImg, 5000);
  } else {
    timeoutHandle = setTimeout(nextImg, 5000);
  }
}

$("#right").click(function() {
  reset = true;
  nextImg()
});

$("#left").click(function() {
  if(imgCount >= 2){
  imgCount -= 2
} else if(imgCount == 0) {
  imgCount = 5;
} else {
  imgCount = 6;
}
  reset = true;
  nextImg()
});

nextImg()
