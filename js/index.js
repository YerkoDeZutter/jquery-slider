let imgCount = 1;

let imgChange = "";

let reset = false;

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
    clearTimeout(timeoutHandle)
    reset = false;
  } else {
    var timeoutHandle = setTimeout(nextImg, 5000);
  }
}

$("#right").click(function() {
  reset = true;
  nextImg()
});

$("#left").click(function() {
  imgCount -= 2
  reset = true;
  nextImg()
});

nextImg()
