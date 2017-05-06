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
    //create an ajax call to get wiki data on search value upon key press
    $('#search-form').keypress(function(e){
    	var searchVal = $('#search-form').val();
    	var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchVal + '&origin=*&format=json'
    	if (e.which === 13) {
    		$.ajax({
    			url: wikiUrl,
    			dataType: 'json',
    			type: 'GET',
    			headers: {'Api-User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'},
    			success: function(data){
    				console.log(data);
   
    				$('#wiki-container').hide('slow');

    				$('.results-div').fadeIn('slow');

    			

    				for (var counter = 0; counter <= 9; counter++) {
    					$('#results-' + counter)
    						.append('<h3>' + '<a target="_blank" href="' + data[3][counter] + '">' + data[1][counter] + '</a>' + '</h3>')
    						.append('<h5>' + data[2][counter] + '</h5>');
    				}
					
					$('#backButton').append('<button class="btn btn-md btn-danger btnBack">Go Back</button>');
					$('.btnBack').on('click', function(){
						$('.results-div').fadeOut('slow');
						$('#wiki-container').show('slow');
						$('#backButton').hide('fast');
					});
    		
    			}
    		})
    		return false;
    	}
    })


});