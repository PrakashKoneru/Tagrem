
products = {
    1: {
        id : 1,
        order: 1,
        'title' : 'Product Title 1',
        'price' : 'Staring at $500',
        'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br><br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.<br><br>'
        +'<ul class="sprite">'
        + '     <li class="leaf">Non porta dui euismod nec</li>'
        + '     <li class="leaf">Ut tristique ipsum velit</li>'
        + '     <li class="leaf">Quisque mollis justo</li>'
        +'</ul>',
        'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
        'src'        : 'images/cereal_b.jpg'
    },
    2: {
        id : 2,
        order: 2,
        'title' : 'Product Title 2',
        'price' : 'Staring at $1900',
        'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
        'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
        'src'        : 'images/flower_b.jpg'
    },
    3: {
        id : 3,
        order: 3,
        'title' : 'Product Title 3',
        'price' : 'Staring at $2730',
        'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
        'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
        'src'        : 'images/candy_b.jpg'
    },
    4: {
        id : 4,
        order: 4,
        'title' : 'Product Title 4',
        'price' : 'Staring at $731',
        'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
        'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
        'src'        : 'images/machine_b.jpg'
    }
};

$(document).ready(function() {
    $(".closex").click(function () {
        $(".pop-up").css("display","none");
        $(".blanket").css("display", "none");
        $(".product_detailsouter").css('display', 'none');
    });

    $("#one").click(function () {
        $(".product_detailsouter h3").text(products[1].title);
        $(".product_detailsouter h4").text(products[1].price);
        $(".product_description p").html(products[1].desc);
        $(".product_description img").attr("src", products[1].src);
        $(".product_detailsouter").css('display', 'block');
        var height = $(document).height();
        $(window).scrollTop(height);
    });
    $("#two").click(function () {
        $(".product_detailsouter h3").text(products[2].title);
        $(".product_detailsouter h4").text(products[2].price);
        $(".product_description p").text(products[2].desc);
        $(".product_description img").attr("src", products[2].src);
        $(".product_detailsouter").css('display', 'block');
        var height = $(document).height();
        $(window).scrollTop(height);
    });
    $("#three").click(function () {
        $(".product_detailsouter h3").text(products[3].title);
        $(".product_detailsouter h4").text(products[3].price);
        $(".product_description p").text(products[3].desc);
        $(".product_description img").attr("src", products[3].src);
        $(".product_detailsouter").css('display', 'block');
        var height = $(document).height();
        $(window).scrollTop(height);
    });
    $("#four").click(function () {
        $(".product_detailsouter h3").text(products[4].title);
        $(".product_detailsouter h4").text(products[4].price);
        $(".product_description p").text(products[4].desc);
        $(".product_description img").attr("src", products[4].src);
        $(".product_detailsouter").css('display', 'block');
        var height = $(document).height();
        $(window).scrollTop(height);
    });

    $("#search").click(function () {
        var city = $(".states").val();
        if (city === "") {
        } else {
            $(".blanket").css("display", "inherit");
            $(".pop-up").css("display", "inherit");
            $(".pop-up h2").html(city);
        }

    });

    //forFilter
    $("select").change(function(){
        var filter= "";
        $( "select option:selected" ).each(function() {
            filter += $( this ).text();
        });
        console.log(filter);
        console.log(filter=="Less Than $500");
        if(filter=="All"){
            $("#one").css("display","block");
            $("#two").css("display","block");
            $("#three").css("display","block");
            $("#four").css("display","block");

        }else if(filter=="Less Than $500"){
            $("#one").css("display","none");
            $("#two").css("display","none");
            $("#three").css("display","none");
            $("#four").css("display","none");

        }else if(filter=="From $500 to $1000"){
            console.log(filter=="From $500 to $1000");
            $("#one").css("display","block");
            $("#two").css("display","none");
            $("#three").css("display","none");
            $("#four").css("display","block");
            $(".product_list").css("justify-content","inherit");
            $(".each_product").css("margin","10px");


        }else if(filter=="From $1000 to $2000") {
            $("#one").css("display","none");
            $("#two").css("display","block");
            $("#three").css("display","none");
            $("#four").css("display","none");
        }else if(filter=="$2000 or more") {
            $("#one").css("display","none");
            $("#two").css("display","none");
            $("#three").css("display","block");
            $("#four").css("display","none");
        }
    });


});












