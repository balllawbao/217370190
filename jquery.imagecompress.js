+function ($) {
  'use strict';

  var successCount = 0;
  
  var ImageCompress = function (evt, options) {
    var that = this;
   
    var originalImage = this.readFile(evt, options.onloadStart, function(){
      if(typeof options.onloadEnd === 'function'){
        options.onloadEnd(this);
      }

      if(typeof options.oncompressStart === 'function'){
        options.oncompressStart(this);
      }

  
      var compressImage = that.compress(this, options.quality, options.outputFormat);

      if(typeof options.oncompressEnd === 'function'){
        options.oncompressEnd(compressImage);
      }

      successCount++;

      if(typeof options.callback === 'function' && successCount == length){
          options.callback(compressImage);
          successCount = 0;
      }

      return compressImage;
    });


  }

 
  ImageCompress.prototype.compress = function(imageObj, quality, outputFormat){
    var mimeType = "image/jpeg";
    if(outputFormat!=undefined && outputFormat=="png"){
      mimeType = "image/png";
    }

    var cvs = document.createElement('canvas');
   

    cvs.width = imageObj.naturalWidth;
    cvs.height = imageObj.naturalHeight;
    var ctx = cvs.getContext("2d").drawImage(imageObj, 0, 0);
    var newImageData = cvs.toDataURL(mimeType, quality/100);
    var returnImageObj = new Image();
    returnImageObj.src = newImageData;

    return returnImageObj;
  }

 
  ImageCompress.prototype.readFile = function(evt, onloadStart, onloadCallback) {
    var files = evt.target.files;
    var length = files.length;

    for (var i = 0, file; file = files[i]; i++) {
     
      if (!file.type.match('image.*')) {
        continue;
      }
      if(typeof onloadStart === 'function'){
        onloadStart(file);
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile, index) {
        return function(e) {
          // Render thumbnail.
          var img = new Image();

        
          img.onload = onloadCallback
          img.src = e.target.result;

        };
      })(file);

        // Read in the image file as a data URL.
      reader.readAsDataURL(file);
    }

  }

 
  ImageCompress.DEFAULTS = {

  }


  
  $.extend({
    
  });

 
  $.fn.extend({
    imageCompress: function(options) {
      var $this = $(this);
      $this.on('change', function(evt){
        var model = new ImageCompress(evt, options);
      });
    }
  });


  $.fn.imageCompress.noConflict = function () {

  }
  
  
}(jQuery);