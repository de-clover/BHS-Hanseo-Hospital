$(document).ready(function(){

    // MAIN BANNER - 
    
            function counting(){
    
                var $show = $("#main_banner #slider .slide_img.show").index()
                $("#main_banner ul li").removeClass("active");
                $("#main_banner ul li").eq($show).addClass("active");
    
                var $cur_page = $("#main_banner ul li").eq($show).attr("rel");
                console.log("현재 슬라이드의 번호 : " + $cur_page); 
                $("#main_banner .rel_num").text($cur_page);
    
                $("#main_banner .progress_bar").css("width", "0%");
                $("#main_banner .progress_bar").stop().animate({"width":"100%"}, 3000);
            }
    
        //auto slide function
            var $lastSlide = $("#main_banner ul li").last();
            $("#main_banner ul").prepend($lastSlide);
    
            counting();
    
            setInterval(function(){
                    var $first = $("#main_banner ul li").first();
                    $("#main_banner ul").stop().animate({"margin-left":"-200%"}, 1000, function(){
                        $("#main_banner ul").append($first).css("margin-left", "-100%");
    
                        setTimeout(function(){
                            counting(); 
                        }, 10)
                    });
            }, 4000);
    
    
        //pause $ play button
    
            $("#main_banner .slider_play").click(function(){
                var $state = $(this).hasClass("stop");
                console.log($state);
    
                if($state == false){
                    $(this).addClass("stop");
                    $(this).find("img").attr({"src":"./img/icons/play.svg", "title":"재생"});//현재 상태는 "멈춤" 상태: 정지하기 위함을 보여주기 위한 거라
                }else{
                    $(this).removeClass("stop");
                    $(this).find("img").attr({"src":"./img/icons/pause.svg", "title":"정지"}); //현재 상태는 "재생" 상태: 정지하기 위함을 보여주기 위한 거라
                }
            });
    
        // current page / entire page num
            var $total = $("#main_banner ul li").length; //3
            console.log("전체 슬라이드 개수: " + $total); //total pages: 3
            $("#main_banner .total").text($total);
    

    
    
    
    //----------------#7 map --------------------
    
    function initMap() {
        var uluru = {
            lat: 51.519987, lng: -0.156517
        }; //lat(latitude, 위도), lng(longitude, 경도)
        var map = new google
            .maps
            .Map(document.getElementById('map_space'), {
                zoom: 17,
                center: uluru
            });
        var marker = new google
            .maps
            .Marker({position: uluru, map: map});
    }
    
    
    });
    
    
    // ----------------scrollTop button
    
            //상단으로 이동시키는 버튼
            $("#topBtn").click(function(){
                $("html, body").animate({scrollTop:0}, 1000);
                return false;
            });
            //사용자가 어느 곳을 클릭하면
            //전체 페이지 ($("html, body"))를 이동시켜라 (animate) / 스크롤바의 상단(scrollTop)을 해당하는 목적지($("타켁지역").offset().top)까지 옮겨라.
            //return false; ==> 거짓을 돌려준다. (작동되지 않도록 구성된다.))
    
    
    