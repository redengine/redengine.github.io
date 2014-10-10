function getInterval() {
  return 3500;
}

function getOffset() {
  var date = new Date();
  var month = date.getMonth();
  var offset = month % 3;
  return offset;
}


function createSlider(imageSet, id) {
  var slider = "<div id='" + id + "' class='carousel slide'>";
  
  slider += "<ol class='carousel-indicators'>";
  for (var i = 0; i < imageSet.length; i++) {
    if (i === 0) {
      slider += "<li data-target='#" + id + "' data-slide-to='" + i + "' class='active'></li>";
    } else {
      slider += "<li data-target='#" + id + "' data-slide-to='" + i + "'></li>";
    }
  }
  slider += "</ol>";
  
  slider += "<div class='carousel-inner'>";
  for (var i = 0; i < imageSet.length; i++) {
    if (i === 0) {
      slider += "<div class='item active'>";      
    } else {
      slider += "<div class='item'>";      
    }
  
    slider += "<img src='" + imageSet[i] + "'>";
    slider += "</div>";
  }
    
  slider += "</div>";
  
  slider += "<a class='left carousel-control' href='#" + id + "' data-slide='prev'>";
  slider += "<i class='icon-angle-left'></i>";
  slider += "</a>";

  slider += "<a class='right carousel-control' href='#" + id + "' data-slide='next'>";
  slider += "<i class='icon-angle-right'></i>";
  slider += "</a>";

  slider += "</div>";
  slider += "<div class='image-over-wording-slider'></div>";
  
  return slider;
}


function createSwapperImages(imageSet) {
  var swapperImages = "";
  
  for (var i = 0; i < imageSet.length; i++) {
    if (i === 0) {
      swapperImages += "<img src='" + imageSet[i] + "' class='active img-responsive img-rounded'>";
    } else {
      swapperImages += "<img src='" + imageSet[i] + "' class='img-responsive img-rounded'>";
    }
  }
  
  return swapperImages;
}


function swapImages() {
  $(".swapper-image .active").each(function() {
    var next = null;
    if ($(this).next().length > 0) {
      next = $(this).next();
    } else {
      next = $(this).parent().children().first();
    }

    $(this).fadeOut(150, "swing", function() {
      next.fadeIn(150, "swing").addClass('active');
      $(this).removeClass('active');
    });
  });
}


function createMobileImage(image) {
  return "<img src='" + image + "' class='img-responsive img-rounded fadish'>";
}

