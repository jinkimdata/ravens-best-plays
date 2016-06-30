var ravensBest = {
	init: function(){
		//ravensBest.share();

		$('.expandButton').on('click touchend', function(){
			  console.log($('.expandButton').data());
			if ($('.expandButton').data().status === 0) {
				$('.landscape').fadeOut(100, function(){
					$('.expandable').addClass('expanded');
				});
				$('.expandButton').text('- Collapse -');
				$('.expandButton').data('status',1);
			} else {
				$('.landscape').fadeIn()
				$('.expandable').removeClass('expanded');
				$('.expandButton').text('- Expand -');
				$('.expandButton').data('status',0);
			};
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
