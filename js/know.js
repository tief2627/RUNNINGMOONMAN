$(document).ready(function(){
	//fancybox
	$(".fancybox").fancybox({
	openEffect : 'none',
	closeEffect : 'none'
	});
	
	//fancybox single
	$("#s2").fancybox({
		openEffect : 'elastic',//W06TJ 
		closeEffect :'elastic',
		helpers: {
			title :{
				type:'inside'
			}
		}
	})
});
