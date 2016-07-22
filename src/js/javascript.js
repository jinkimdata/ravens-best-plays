var ravensBest = {
	init: function(){
		window.onload = function() {
			var hash = window.location.hash.substring(1);
			if (hash) {
				$('html, body').animate({
					scrollTop: $('#anchor'+hash).offset().top
				}, 500);
			};
		};
		$('.splash').one('click touchend', function(){
			$(this).fadeOut();
			return false;
		});
		$('.downButton').on('click touchend', function(){
			var nextSlide = Number($(this).attr('data-slideNum')) + 1;
			$('html, body').animate({
				scrollTop: $('#anchor'+nextSlide).offset().top
			}, 500);
			return false;
		});
		$('.upButton').on('click touchend', function(){
			var prevSlide = Number($(this).attr('data-slideNum')) - 1;
			$('html, body').animate({
				scrollTop: $('#anchor'+prevSlide).offset().top
			}, 500);
			return false;
		});
		ravensBest.share();
	},
	share: function(){
		$(".icon-twitter").on("click", function(){
			var tweet = $(this).attr('data-shareText') + 
				" - remember this play? Vote for the top Ravens moments at "; //Tweet text
			var url = "http://data.baltimoresun.com/sports/ravens-best-plays/%23" + 
				$(this).attr('data-slideNum'); //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); 
			return false;
		});
		$(".icon-facebook").on("click", function(){
			var picture = "http://data.baltimoresun.com/sports/ravens-best-plays/images/thumbnail.png"; //Picture URL
			var title = "Readers Vote: Ravens' Best Plays"; //Post title
			var description = "We chose 10 of the top plays in Ravens history. Relive them, then scroll to the bottom to rank them based on your favorites."; //Post description
			var url = "http://data.baltimoresun.com/sports/ravens-best-plays/"; //Interactive URL
	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); 
			return false;
		});
	}
}
$(document).ready(function(){
	ravensBest.init();
	console.log("connected");
});
