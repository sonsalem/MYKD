

//menu

// $('.pagntion-number').click(function(){
//     $('.pagntion-number').addClass('active')
// });
$('.toggle-links.open').click(function(){
    $('.nav.bar').addClass('active')
    $('.body').addClass('active')
});
$('.toggle-links.close').click(function(){
    $('.nav.bar').removeClass('active')
    $('#aside').removeClass('active')
    $('.body').removeClass('active')
});
$('.toggle-switch.open').click(function(){
    $('#aside').addClass('active')
    $('.body').addClass('active')
});

//carousel

$(document).ready(function(){
    $(".owl-about").owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        center:true,
        autoplayTimeout:4000,
        autoplay: true,
        margin:20,
        items:3,
        responsive:{
            0:{
                items:1,
            },
            767:{
                items:3,
            },
        }
    }
    );
});


$(document).ready(function(){
    $(".owl-trend").owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        autoplayTimeout:4000,
        autoplay: true,
        margin:20,
        items:3,
        responsive:{
            0:{
                items:1,
            },
            767:{
                items:2,
            },
            992:{
                items:3,
            },
        }
    }
    );
});

$(document).ready(function(){
    $(".owl-serv").owlCarousel({
        loop:true,
        items: 1,
        dots:true,
        mouseDrag:false,
        touchDrage:false,
        autoplayTimeout:4000,
        autoplay: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items:1,
        }
    );
});

// pagination

(function($) {
    $.fn.custompagination = (function(opation){
        var paginationContainer = this;
        var itemsToPaginate;

        var defcult = {
            itemsperpage : 9
        };

        var settings = {};

        $.extend(settings , defcult , opation );

        var itemsperpage = settings.itemsperpage ; 

        itemsToPaginate = $(settings.itemsToPaginate);
        var numberOfPaginationLinks = Math.ceil(itemsToPaginate.length / itemsperpage);

        $('<ul class=\"pagntion-list\"><li class=\"pagntion-number active\">1</li></ul>').prependTo(paginationContainer);

        for ( var index = 1; index < numberOfPaginationLinks; index++) {
            paginationContainer.find("ul").append("<li class=\"pagntion-number\">"+ (index+1) +"</li>")
        }
        
        itemsToPaginate.filter(":gt("+  (itemsperpage - 1) +")").hide();

        paginationContainer.find("ul li").on("click", function(){
            $(document.querySelectorAll('*.pagntion-number')).removeClass('active')
            $(this).addClass('active')

        var linkNumbers = $(this).text(); 

           var itemsToHide = itemsToPaginate.filter(":lt("+  ((linkNumbers - 1) * itemsperpage ) +")");
           $.merge(itemsToHide , itemsToPaginate.filter(":gt("+  ((linkNumbers * itemsperpage) - 1 ) +")"));
        itemsToHide.hide();
        var itemsToShow = itemsToPaginate.not(itemsToHide);
        itemsToShow.show();
        });
    });
}(jQuery))

$(function(){

    $(document).ready(function(){
        $(".paginate").custompagination({
            itemsToPaginate : (".paginate > *"),
        })
    })

}(jQuery))

// Shop Produc
$('.image-nav.one').click(function(){
    $(document.querySelectorAll('.image-nav')).removeClass('active')
    $(this).addClass('active')
    $(".image-rev img").attr("src","img/shop_details01.jpg");
});
$('.image-nav.tow').click(function(){
    $(document.querySelectorAll('.image-nav')).removeClass('active')
    $(this).addClass('active')
    $(".image-rev img").attr("src","img/shop_details02.jpg");
});
$('.image-nav.three').click(function(){
    $(document.querySelectorAll('.image-nav')).removeClass('active')
    $(this).addClass('active')
    $(".image-rev img").attr("src","img/shop_details03.jpg");
});

// Open Text 

$('.text.one').click(function(){
    $(`.text.one .open-text`).toggleClass('active')
    $('.text.one .dec').toggleClass('active')
})
$('.text.tow').click(function(){
    $(`.text.tow .open-text`).toggleClass('active')
    $('.text.tow .dec').toggleClass('active')
})
$('.text.three').click(function(){
    $(`.text.three .open-text`).toggleClass('active')
    $('.text.three .dec').toggleClass('active')
})