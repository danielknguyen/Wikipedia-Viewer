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
                data: {
                    "action": "query",
                    "format": "json",
                    "origin": "*",
                    "prop": "revisions",
                    "list": "search",
                    "continue": "-||revisions",
                    "srsearch": searchVal,
                    "srnamespace": "0",
                    "srlimit": "10",
                    "sroffset": "10"
                },
    			headers: {'Api-User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'},
    			success: function(data){
    				console.log(data);

                    $('#wiki-container').hide('slow');

                    $('.results-div').fadeIn('slow');

                        for (var counter = 0; counter <= 9; counter++) {
                            $('#results-' + counter)
                              .append('<p class="search-title">' + data.query.search[counter].title + '</p>')
                              .append('<p class="search-description">' + data.query.search[counter].snippet + '</p>');


    				    }
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