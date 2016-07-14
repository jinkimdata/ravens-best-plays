var ravensBest = {
	init: function(){
		//ravensBest.share();

		$('.expandButton').on('click touchend', function(){
			var thisButton = $(this);
			var slideNum = thisButton.attr('data-slideNum');
			if (thisButton.data().status === 0) {
				$('.landscape--'+slideNum).fadeOut(100, function(){
					$('.expandable--'+slideNum).addClass('expanded');
					thisButton.text('- Collapse -');
					thisButton.data('status',1);
				});
			} else {
				$('.landscape--'+slideNum).fadeIn(100, function() {
					$('.expandable--'+slideNum).removeClass('expanded');
					thisButton.text('- Expand -');
					thisButton.data('status',0);
				});
			};
		});
		$('.downButton').on('click touchend', function(){
			var nextSlide = Number($(this).attr('data-slideNum')) + 1;
			console.log(nextSlide);
			$('body').animate({
				scrollTop: $('#anchor'+nextSlide).offset().top
			}, 500);
			return false;
		});
	},
	share: function(){
		$(".icon-twitter").on("click", function(){
			var tweet = ""; //Tweet text
			var url = ""; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".icon-facebook").on("click", function(){
			var picture = ""; //Picture URL
			var title = ""; //Post title
			var description = ""; //Post description
			var url = ""; //Interactive URL
	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
	}
}
$(document).ready(function(){
	ravensBest.init();
	console.log("connected");
});
