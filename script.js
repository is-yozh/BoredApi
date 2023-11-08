$('#activity').hide();

$('#rnd-act-btn').click(function(){
    $('#rnd-act-btn').attr('disabled', true);
    $.ajax('http://www.boredapi.com/api/activity/',{
        success: function(result){
            $('#activity').show();
            $('#activity').html(`
                <p>Activity: ${result.activity}</p>
                <p>Price: ${result.price}$</p>
                <p>Type: ${result.type}</p>
            `);
$('#rnd-act-btn').attr('disabled', false);
            $('#rnd-act-btn').html('Randomize Again');

        },
        error: function(xhr){
            console.log(xhr.statusText);
            $('#rnd-act-btn').attr('disabled', false);
        }
        
    });
});
