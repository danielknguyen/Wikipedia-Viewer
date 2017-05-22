$(document).ready(function(){
	// opens random wiki article
	$('#random-article').on('click',function(){
		window.open('https://en.wikipedia.org/wiki/Special:Random');	
	})
	// reveals search bar and hides search icon
	$('.fa-search').on('click', function(){
		$('.search-bar').show('fast');
		$('.fa-search').hide('fast');
    })
	// hides search bar and shows search icon
    $('#btn-x').on('click', function(){
    	$('.search-bar').hide('fast');
    	$('.fa-search').show('fast');
    })
    //create an ajax call to get wiki data on search value upon key press
    $('#search-form').keypress(function(e){
    	var searchVal = $('#search-form').val();
    	var wikiUrl = 'https://en.wikipedia.org/w/api.php?';
    	if (e.which === 13) {
    		$.ajax({
                url: wikiUrl,
                data: 
                {
                    "action": "query",
                    "format": "json",
                    "origin": "*",
                    "prop": "info|extracts",
                    "list": "search",
                    "titles": searchVal,
                    "generator": "search",
                    "inprop": "url",
                    "exsentences": "3",
                    "exlimit": "10",
                    "exintro": 1,
                    "srsearch": searchVal,
                    "srlimit": "10",
                    "gsrsearch": searchVal,
                    "gsrprop": "size|wordcount|timestamp|snippet"
                },
    			headers: 
                {
                    'Api-User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
                },
    			success: function(response){
    				console.log(response);

                    
                   
                    
                        
                    

                    $('#wiki-container').hide('slow');

                    $('.results-div').fadeIn('slow');

                    

    				// makes script responsive
    				var mq = window.matchMedia('(max-device-width:480px)');

    				$('.search-title')
    					.css('font-family', 'Francois One', 'sans-serif');
    				$('.search-description')
    					.css('font-family', 'Neuton', 'serif');

    				if (mq.matches) {
    					$('.search-title')
    						.css('font-size', '5em');
    					$('.search-description')
    						.css('font-size', '3em');			
    				} else {
    					$('.search-title')
    						.css('font-size', '2.5em');
    					$('.search-description')
    						.css('font-size', '1.5em');
    				}			

					$('#backButton').append('<button class="btn btn-md btn-danger btnBack">Go Back</button>');

					$('.btnBack').on('click', function(){
						$('.results-div').fadeOut('slow');
						$('#wiki-container').show('slow');
						$('#backButton').hide('fast');
						location.reload();
					});
    			}
    		})
    		return false;
    	}
    })


});