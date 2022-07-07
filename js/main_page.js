$(document).ready(function(){
    


// -------------------------
const mainBanner = [
    ["1", "심장혈관조영술 및 중재시술 100,000례 달성","우수한 의료진 및 장비 보유로 부산, 경남 지역내 선두적 심장혈관 시술병원"],
    ["2", "환자와 가족에게 건강한 웃음과 행복을 선사하는 병원","BHS한서병원의 온라인 페이지를 통해서 다양하고 새로운 필요한 정보를 제공하도록 노력하고 있습니다. "],
    ["3", "신장이식 기술", "HLA 항체양성환자 이식, 혈액형 부적합 이식, B형 간염보균 공여자 이식 등 고난이도 신장이식 시행"],
    ["4","환자를 위한 병원, 믿을 수 있는 부산의 대표 종합 병원", "이시래 기념 BHS한서병원 질병으로 고통 받는 사람들을 최상의 진료와 사랑으로 믿음을 주는 편안한 병원으로서 보살피는 환자 중심 병원입니다."],
]


const $slider = document.querySelector("#main_banner .mainImg_cont #slider");
let $bannerCont = ``;

for(v of mainBanner){
    $bannerCont +=`
        <li class="slide_img slide${v[0]}" rel="${v[0]}">
            <div class="dark">
                <div class="wrap">
                    <div class="txt_space">
                        <h2>${v[1]}</h2>
                        <p>${v[2]}</p>
                    </div>
                </div>
            </div>
        </li>
    `;
    console.log(v[0])
};

$slider.innerHTML = $bannerCont;
// ----------------------

// MAIN BANNER - 

    // horizontal slider
        function counting(){

            // const $show = $("#main_banner #slider .slide_img.show").index()
            $("#main_banner ul li").removeClass("active");
            $("#main_banner ul li").eq(1).addClass("active");

            const $cur_page = $("#main_banner ul li").eq(1).attr("rel");
            console.log("현재 슬라이드의 번호 : " + $cur_page); 
            $("#main_banner .rel_num").text($cur_page);

            $("#main_banner .progress_bar").css("width", "0%");
            $("#main_banner .progress_bar").stop().animate({"width":"100%"}, 5000);
            
        }


    //auto slide function
        const $lastSlide = $("#main_banner ul li").last();
        $("#main_banner ul").prepend($lastSlide);

        counting();

        setInterval(function(){

                const $stop = $("#main_banner .slider_play").hasClass("stop");
                console.log($stop);

                if($stop == true){

                }else{ 
                    const $first = $("#main_banner ul li").first();
                    $("#main_banner ul").stop().animate({"margin-left":"-100%"}, 1000, function(){
                        $("#main_banner ul").append($first).css("margin-left", "0%");

                        setTimeout(function(){
                            counting(); 
                        }, 10)
                    });
                }
            }, 6000);

$("#main_banner").hover(function(){  //마우스가 선택자 영역 내부로 진입시
    $(this).addClass("hover");
}, function(){  //마우스가 선택자 영역 외부로 이탈시
    $(this).removeClass("hover");
});


    //pause $ play button

        $("#main_banner .slider_play").click(function(){
            const $state = $(this).hasClass("stop");
            console.log($state);
                    //false : 재생상태
                    //true : 정지상태

            if($state == false){
                $(this).addClass("stop");
                $(this).find("img").attr({"src":"./img/icons/play.svg", "title":"재생"});//현재 상태는 "멈춤" 상태: 정지하기 위함을 보여주기 위한 거라
            }else{
                $(this).removeClass("stop");
                $(this).find("img").attr({"src":"./img/icons/pause.svg", "title":"정지"}); //현재 상태는 "재생" 상태: 정지하기 위함을 보여주기 위한 거라
            }
        });

    // current page / entire page num
        const $total = $("#main_banner ul li").length; //4
        console.log("전체 슬라이드 개수: " + $total); //total pages: 4
        $("#main_banner .total").text($total);


        


//----------------#3 department --------------------     
// const $department = [
//     {nameEng: "Open heart surgery", nameKor : "심장 수술 센터", describ: "흉부외과 전문의와 간호사로 구성된 심장 전담팀에 의하여 이루어지고 있으며 수술 후에는 장비와 모니터를 갖추고 전담 간호팀이 담당하는 흉부외과 심장 중환자실에거 체계적인 치료가 시행되고 있습니다."},
//     {nameEng: "Cardiovascular", nameKor : "심장혈관 센터", describ: "우수한 의료진과 최신 의료장비를 갖추고 순환기 질환인 고혈압, 관상동맥질환, 심장판막증, 심부전, 부정맥 등을 다루며, 이러한 질환을 진단하고 치료하기 위해서 심장 초음파 검사, 24시간 생활 심전도검사, 운동부하 심전도 검사를 시행하여, 심도자술 혈관 조영술, 풍선 확장술, 혈관성형술, 심박 조율기 시술, 부정맥의 전극도자 절제술 등의 시술을 시행하고 있습니다."},
//     {nameEng: "Kidney", nameKor : "신장센터", describ: "신장병과 관련된 여러 의료 전문가들이 유기적으로 협엽하여 최적의 해결책을 찾는 것을 목표로 하는 신장병 치료 센터 입니다."},
//     {nameEng: "Spine/ Joint", nameKor : "척추/ 관절센터", describ: "어깨에서 발생할 수 있는 여러 가지 질환 및 손상을 관절경을 이용하여 0.5cm 정도의 작은 절개를 통하여 수술 시 상처가 적고 회복도 빠른 치료를 하고 있습니다."},
//     {nameEng: "Thyroid hormone", nameKor : "내시경 센터", describ: "대장내시경을 위한 넓고 꺠끗한 시설과 최신장비 등을 갖추고 경험많은 소화기 내과 전문의가 내시경 검사를 이끄는 가운데 수면내시경 검사후 주문실 수 있는 아늑한 수면실이 준비되어 있어 편안한 검사를 받으실 수 있습니다."},
//     {nameEng: "Rehability", nameKor : "재활치료 센터", describ: "--http://www.hanseohospital.or.kr/content/content.asp?FolderName=center&filename=center_07_01-"},
//     {nameEng: "Healthcare", nameKor : "헬스케어 센터", describ: "본원은 종합병원으로서 각종 질병의 조기 발견과 즉시치료를 가능할 수 있게 하는 시설을 갖춤과 동시에 다양한 개인별 맟춤 건강진단 프로그램을 마련하여 건강을 지키려는 고객들의 다양한 요구를 수응하고 있습니다."},
//     {nameEng: "Endoscope", nameKor : "갑상선/ 유방센터", describ: "One-stop system을 통해 한번의 방문으로 대부분의 검사와 시술이 가능한 환자 중심의 서비스를 갖춘 최상의 센터가 되고자 끊임없이 노력을 다하고 있습니다."},
//     {nameEng: "A cranial", nameKor : "뇌신경 센터", describ: "뇌혈류 초음파 검사와 근전도 검사를 통해 뇌혈관의 협착, 폐쇄 유무를 알아보거나, 신경이나 근육질환의 진단을 정확하게 츨정합니다."},
//     {nameEng: "Emergency", nameKor : "응급의료 센터", describ: "지역응급의료센터는 기존의 응급실이나 응급의료기관과는 질적으로 다른 엄격한 시설과 장비 및 인력기준을 충족되어야 지정합니다. 저희 센터는 응급진료에 필요한 첨단장비와 가장 중요한 응급의학과 전문의 등의 의료인력이 언제 어느 때 발생할 지 모르는 응급상황이라 즉시 대처할 수 있도록 만반의 준비를 하고 기다리고 있습니다."},
// ]

// const dep_section = ``;
//     dep_section += `
//     <section id="department">
//         <div class="wrap">
//             <div class="title">
//                 <h3>Departments</h3>
//                 <h2>센터안내</h2>
//         </div>
//         <div class="contents">
//             <div class="description">`;
//     for(i=0; i< $department.length; i++){
//         dep_section += `
//             <div class="big_box">
//                 <div class="img_space">
//                 </div>
//                 <div class="txt_space">
//                     <h4>Open heart surgery</h4>
//                     <h2>${$department.}</h2>
//                     <p>흉부외과 전문의와 간호사로 구성된 심장 전담팀에 의하여 이루어지고 있으며 수술 후에는 장비와 모니터를 갖추고 전담 간호팀이 담당하는 흉부외과 심장 중환자실에거 체계적인 치료가 시행되고 있습니다.</p>
//                 </div>
//                 <a href="">바로가기&nbsp;&nbsp;<i class="fa-solid fa-chevron-right"></i></a>
//             </div>
//         </div>
//     };`
//     dep_section += `</div>`






//----------------#7 map --------------------

function initMap() {
    const uluru = {
        lat: 51.519987, lng: -0.156517
    }; //lat(latitude, 위도), lng(longitude, 경도)
    const map = new google
        .maps
        .Map(document.getElementById('map_space'), {
            zoom: 17,
            center: uluru
        });
    const marker = new google
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


