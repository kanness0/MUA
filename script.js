$(".con__menu-item, .con__menu-item_bg").hover(
  function () {
    $(".con__menu-item > li > .sub-inner, .con__menu-item_bg").addClass("active");
    
  },
  function () {
    $(".con__menu-item > li > .sub-inner, .con__menu-item_bg").removeClass("active");
  }
);

const swiperSec1 = new Swiper('.mySwiperSec1', {
  spaceBetween: 48,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
  },
});

const swiperMain = new Swiper('.mySwiperMain', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  freeMode: true,
});

// 스크롤 트리거 플러그인 활성화
gsap.registerPlugin(ScrollTrigger);

// section 4 marquee
// 왼쪽 → 오른쪽
gsap.to(".slider-1 .tracker", {
  xPercent: 20, // 많이 움직이게
  ease: "none",
  scrollTrigger: {
    trigger: "#sec4",
    start: "top bottom",  // 섹션이 화면에 들어올 때부터
    end: "bottom top",    // 섹션이 사라질 때까지
    scrub: 1,             // 스크롤과 동기화
  }
});

// slider-2 (오른쪽 → 왼쪽)
gsap.to(".slider-2 .tracker", {
  xPercent: -30,
  ease: "none",
  scrollTrigger: {
    trigger: "#sec4",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  }
});

// section 5 svg
gsap.to("#maskRect", {
  attr: { width: 348 }, // 전체 너비로 확장
  duration: 1.5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".arrow-svg",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

gsap.to("#maskRect2", {
  attr: { width: 348 }, // 전체 너비로 확장
  duration: 1.5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".arrow-svg2",
    start: "top 70%",
    toggleActions: "play none none reverse"
  }
});

$(".section-group--horizontal-left").each(function (_, node) {
  var $group = $(node);
  var $section = $group.find(" > .sec11_item-wrap");

  gsap.to($section, {
    xPercent: -100 * ($section.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: $group,
        start: "top+=90 top",
        end: "+=" + ($section.length - 1) + "00%",
        pin: true,
        scrub: true
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const dropdown = document.querySelector(".dropdown");

  dropdown.querySelector(".dropdown-toggle").addEventListener("click", function(e) {
    e.preventDefault();
    dropdown.classList.toggle("open");
  });

  // 다른 곳 클릭 시 닫기
  document.addEventListener("click", function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
});

const arrow = document.querySelectorAll(".arrow");
const page_no = document.querySelectorAll(".page");

page_no.forEach(function(page){
    page.addEventListener("click",function(){
        const active_index = this.getAttribute("data-class");
        var active_element = document.querySelector(".page.active");
        active_element.classList.remove("active");
        var  active_page = document.querySelector(".profile.active")
        active_page.classList.remove("active");
        page_no.forEach(page => page.classList.remove("active"));
        this.classList.add("active");
        var current_pic = document.querySelector(".profile"+active_index);
        current_pic.classList.add("active") 
    });
});

arrow.forEach(function(arrow_btn){
    arrow_btn.addEventListener("click",function(){
        const pageno_length = page_no.length;
        var active_element = document.querySelector(".page.active");
        var active_index = active_element.getAttribute("data-class");
        var  active_page = document.querySelector(".profile.active")

        if(this.classList.contains("right")){
            active_index--;            
            if(active_index === 0){
                active_index = 3;  
            }
        }
        if(this.classList.contains("left")){
            active_index++;      
            if(active_index > pageno_length){
                active_index = 1;
            }
        }
        active_element.classList.remove("active");
        var current_arrow = document.querySelector(".page"+active_index);
        current_arrow.classList.add("active");
        active_page.classList.remove("active");
        var current_pic = document.querySelector(".profile"+active_index);
        current_pic.classList.add("active") 
    });
});