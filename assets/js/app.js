;(function($, window) {
	$(document).ready(function(){
	
		$('.toggle').click(function(e) {
			var $t = $(this);
			var id = $t.attr('href');
			var target = $(id);
			
			console.log(id);
			
			if(target.css('display') != 'none') {
				target.removeClass('show');
			}
			else {
				target.addClass('show');
			}
			
			e.preventDefault();
		});
	
		$('.bars').click(function(e){
			
			var $t = $(this);
			var $nav = $('.nav');
			
			if($t.hasClass('rotate')){
				$t.removeClass('rotate');
				$nav.hide();
			}
				else{
				$t.addClass('rotate');
				$nav.show();
			}
			e.preventDefault();
		});
	
	});
}(jQuery, this));