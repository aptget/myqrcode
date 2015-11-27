document.addEventListener('DOMContentLoaded', function () {
	$(function(){
		var 
		$output = $('#output'), 
		$make = $('.make'), 
		$url = $('#url');

		chrome.tabs.query({'active':true}, function( tabs ){ 
			$output.qrcode( tabs[0].url );
			$url.val( tabs[0].url );
		});
		$make.click(function(){
			if( $url.val() )
			{
				$output.empty().qrcode( $url.val() );
			}
		});
	})
});