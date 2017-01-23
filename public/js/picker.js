/**
* Created with redengine2.github.io.
* User: rosalind-redengine
* Date: 2017-01-23
* Time: 11:19 PM
* To change this template use Tools | Templates.
*/

function setPickerElementSizes() {
  var blockHeight = $('#pickerImage').height();
  var blockWidth = $('#pickerImage').width();

  $('.picker-caption').height(blockHeight+1);
  $('.picker-caption').width(blockWidth+1);
  $('.picker-caption').css('line-height', blockHeight+'px');
};

$(window).load(function() {
  setPickerElementSizes();
});

$(window).resize(function() {
  setPickerElementSizes();
});

$(window).on("orientationchange",function(){
  setPickerElementSizes();
});