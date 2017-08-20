$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    singleItem: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//переназначаем кнопки по умолчанию

var owl = $(".owl-carousel");
    owl.owlCarousel();
    $(".burger-content__next").click(function(){
        owl.trigger("next.owl.carousel");
    });
    $(".burger-content__prev").click(function(){
        owl.trigger("prev.owl.carousel");
    });