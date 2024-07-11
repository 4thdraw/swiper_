window.onload = function(){

    const mainsliderobj = document.getElementById("mainslider");
    
	const bannerText = new Swiper('.mainTextbox', {
    	spaceBetween: 0,	//슬라이드 간격
        pagination: {	//페이징 사용자 설정
        	el: ".mainPagebox .numberui.swiper-pagination",	//페이징 태그 클래스 설정         	
			type : 'fraction',	//페이징 타입 설정(종류: bullets, fraction, progress, progressbar)	
        
		},
        navigation: {
            nextEl: ".mainPagebox .btn .button-next",
            prevEl: ".mainPagebox .btn .button-prev",
          },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
          },
		loop: true,	//슬라이드 반복
        on: {
            slideChange: function () {
                const activeSlide = this.slides[this.activeIndex];               
                const bgcolor = activeSlide.dataset.bgcolor;
                console.log(bgcolor,activeSlide, mainsliderobj)
               
                mainsliderobj.style.backgroundColor = bgcolor;
            }
        }

    });

    const bannerImg = new Swiper('.mainImgbox', {
    	spaceBetween: 30,	//슬라이드 간격
        loopAdditionalSlides : 2,
    	// navigation: {	//네비게이션 사용자 설정
    	// 	nextEl: '.swiper-button-next',	//다음 버튼 클래스 설정
        // 	prevEl: '.swiper-button-prev',	//이전 버튼 클래스 설정
    	// },
    	// centeredSlides: true,	//슬라이드 중앙 배치
        pagination: {	//페이징 사용자 설정
        	el: ".mainPagebox .swiper-progress-bar.swiper-pagination",	//페이징 태그 클래스 설정         	
			type: "progressbar",	//페이징 타입 설정(종류: bullets, fraction, progress, progressbar)	
        
		},
        slidesPerView: 1,	//한번에 보여지는 슬라이드 숫자 설정(auto 가능)
    	// touchRatio: 0.2,	//드래그 비율 설정(기본값: 1, 기본값을 0으로 설정할 경우 드래그 불가능)
    	// slideToClickedSlide: true,	//슬라이드가 여러개 나열되어 있을 경우, 클릭 시 해당 슬라이드 위치로 이동
		loop: true
        	//슬라이드 반복
       
    });

    bannerText.controller.control = bannerImg;
    bannerImg.controller.control = bannerText;
}