$(document).ready(function(){
	var desc = $('.blurb').text();
	var image = $('.image img').attr('src');
	var title = $('.title').text();
	var url = (window.location.href);

	$('.fb-like').attr("data-href", window.location.href);
  $('.fb-send').attr("data-href", window.location.href);
  $('#twitter').on('click',function(){
    $('#twitter').attr('href').remove();
    $('#twitter').attr.("href", "https://twitter.com/intent/tweet?button_hashtag=grassroots&text=Let&rsquo;s%20make%20a%20a%20difference%20...");
  });

	  window.fbAsyncInit = function() {
    FB.init({
      appId      : 622874237732350,
      channelUrl : '//WWW.LOCALHOST:3000/',
      status     : true,
      xfbml      : true
      });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
		 js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=622874237732350";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
});


