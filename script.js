$(document).ready(function(){
	// opens random wiki article
	$('#random-article').on('click',function(){
		window.open('https://en.wikipedia.org/wiki/Special:Random');	
	})
	// reveals search bar and hides search icon
	$('.fa-search').on('click', function(){
		$('.search-bar').show('slow');
		$('.fa-search').hide('fast');
    })
	// hides search bar and shows search icon
    $('#btn-x').on('click', function(){
    	$('.search-bar').hide('slow');
    	$('.fa-search').show('fast');
    })

    $('#search-form').keypress(function(e){
    	var value = $('#search-form').val();
    	if (e.which === 13) {

    		return false;
    	}
    })


});