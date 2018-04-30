'use strict';
const $ = require('jquery');
const global = Function('return this;')();
global.jQuery = $;
const bootstrap = require('bootstrap');

$(function(){
  $('.btn-lengthen').on('click', function(){
    const pattern = new RegExp('https?://.+');
    const url = $('#url-field').val();
    const result = pattern.test(url);
    if(result){
      $.ajax({
        url: '/api/lengthen',
        type: 'POST',
        dataType: 'JSON',
        data: {url: url},
        success: function(data){
          let resultHTML = '<a class="result" href="' + data.longUrl + '">'
              + data.longUrl + '</a>';
          $('.row h5').fadeOut();
          $('.main-container').css('margin-top', '10px');
          $('.quote').fadeOut(function(){
            $('#link').html(resultHTML);
            $('#link').hide().fadeIn();
          });
        }
      });
    } else {
      alert('It is not a valid url.');
    }
  });
});