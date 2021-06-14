$(function(){
    let mesta = [];
    fetch('js/towns.json')
    .then(response => { return response.json() })
    .then(json => { mesta = json; })
    .catch(function (error) {
       console.error('Chyba: \n', error);
    });

    let puvodni = '';  

    $("path").on('mouseover', function(){
              puvodni = $(this).css('fill');  
            $(this).css('fill','red');
            $(this).popover({
                'trigger':'click',
                'placement': 'right',
                'offset': '10%, -100',
                'content': $(this).find('title').text()
            }); 
    });

    $("path").on('mouseout', function(){
        
        $(this).css('fill', puvodni);
    });
    
    $("rect").on('click', function(){
        let id = $(this).attr('id');
        $("rect").css('fill','black');
        $("circle").css('fill','red');
        $(this).css('fill','yellow');
        let mesto = mesta.find(item => {return item.id == id});
        $('#info').fadeOut(1000, function() {$('#info').html(`<div class="col-12"><h2 class="bg-primary p-2 text-white">${mesto.city} <small class="text-small">${new Intl.NumberFormat('cs-CS').format(mesto.peoples)} obv.</small></h2></div><div class="col-2"><img src="assets/img/${mesto.sign}" class="img-fluid"></div><div class="col-10 m-5">${mesto.text}</div>`)});
        $('#info').fadeIn(1000);
    });      

})
