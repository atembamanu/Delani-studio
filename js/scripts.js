//business logic

$(function(){
    $('#design').click(function(){
        $('#design-content').show(function(){
            $('#design').hide('fast');
        });
    });
    $('#design-content').click(function(){
        $('#design').show(function(){
            $('#design-content').hide('fast');
        });
    });

    $('#dev').click(function(){
        $('#dev-content').show(function(){
            $('#dev').hide('fast');
        });
    });
    $('#dev-content').click(function(){
        $('#dev').show(function(){
            $('#dev-content').hide('fast');
        });
    });

    $('#product').click(function(){
        $('#product-content').show(function(){
            $('#product').hide('fast');
        });
    });
    $('#product-content').click(function(){
        $('#product').show(function(){
            $('#product-content').hide('fast');
        });
    })  ;


    //portfolio
    $('#work1').mouseenter(function () {
        $('.work-heading').filter('#work1-title').show("slow");
    }).mouseleave(function () {
        $('#work1-title').hide("slow");
    });


});
//user Interface logic

