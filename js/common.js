
// ------ HEADER AND FOOTER linked code


$(document).ready(function(){
    //$("지정한 대상의 선택자").load("가져올 외부파일", 콜백함수);
    //지정한 대상의 선택자에 가져올 외부파일을 넣고 그 이후에 콜백함수 내부의 실행문을 진행시켜라

    //외부 파일을 가져왔을 때는 이벤트를 걸기 위한 시점이 늦기 때문에 콜백함수를 활용
    $("header").load("./header.html", function(){
        var $hash = location.hash;
        console.log($hash);
        var $num_hash = $hash.replace("#", "");
        console.log($num_hash);

        $("header nav ul li").eq($num_hash).addClass("acitve")

        // var $href = location.href;
        // console.log($href)
    });
    $("footer").load("./footer.html")
});



//-------- SCROLL DOWN : HEADER 

// --- .option1) .active

    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });

//--- .option2) .sticky
    // var $header = document.querySelector("header");

    // var $headerTop = $header.offsetTop;  
    // console.log($headerTop);

    // window.addEventListener("scroll", function(){
    //     var $scrollTop = window.scrollY;
    //     console.log($scrollTop);
    //     if($scrollTop >= $headerTop){
    //         $header.classList.add("sticky");
    //     }else{
    //         $header.classList.remove("sticky");
    //     }
    // });


