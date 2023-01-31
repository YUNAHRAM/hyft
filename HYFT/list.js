'use strict'
// 마우스 커서 변경
let mouseCursor = document.
    querySelector(".cursor");
   let navLinks = document.querySelectorAll(".container div ul a");
      window.addEventListener("scroll", cursor);
      window.addEventListener("mousemove", cursor);
      function cursor(e) {
        mouseCursor.style.left = e.pageX + "px";
        mouseCursor.style.top = e.pageY - scrollY + "px";
    }
    
//NEW 상품이미지 스와이프
const img = document.querySelector(".newArr>img");
let imgArray = new Array();
imgArray[0] = "./img/cat1-5.jpg";
imgArray[1] = "./img/cat1-2.jpg";
imgArray[2] = "./img/cat1-3.jpg";
imgArray[3] = "./img/cat1-4.jpg";
imgArray[4] = "./img/cat1-1.jpg";

var imgCnt = 0;

function changeImage() {
  imgCnt++;
  if (imgCnt < imgArray.length) {
    img.src = imgArray[imgCnt];
    setTimeout("changeImage()", 800);
  } else {
    imgCnt = 0; // loop
    changeImage();
  }
}
function startAnimation() {
  window.setTimeout(changeImage, 100);
}

window.onload = startAnimation;

//BEST 상품이미지 스와이프
const img1 = document.querySelector(".bestImg1>img");
let imgArray1 = new Array();
imgArray1[0] = "./img/bear1-1.jpg";
imgArray1[1] = "./img/bear1-2.jpg";
imgArray1[2] = "./img/bear1-3.jpg";
imgArray1[3] = "./img/bear1-4.jpg";
imgArray1[4] = "./img/bear1-5.jpg";

var imgCnt1 = 0;

function changeImage1() {
  imgCnt1++;
  if (imgCnt1 < imgArray1.length) {
    img1.src = imgArray1[imgCnt1];
    setTimeout("changeImage1()", 800);
  } else {
    imgCnt1 = 0; // loop
    changeImage1();
  }
}
function startAnimation1() {
  window.setTimeout(changeImage1, 100);
}

// window.onload = startAnimation1;


//clk  클릭 이벤트
//토글 만들기
const $clk = document.querySelectorAll(".clickE");

$clk.forEach(function (click) {
  click.addEventListener("click", function () {
    click.classList.toggle("selected");
  });
});



    // 834px 태블릿 사이즈 이하  AOS 애니메이션 삭제 
function mobResize() {
    if (matchMedia("screen and (max-width: 834px)").matches) {
        const $ul = document.querySelectorAll("ul");
        for (let i = 0; i < $ul.length; i++) {
            $ul[i].removeAttribute("data-aos");
        }
    } window.onresize = function () {
    document.location.reload();
  };
}
mobResize();

// 리스트 제이슨 
let bestItem = null;
let listList = null;

 function getData() {
      fetch('./best.json')
      .then(res => res.json())
      .then(result2 => {
        bestItem = result2;
      });

      fetch('./list.json')
      .then(res => res.json())
      .then(result => {
        productList = result;
        console.log(result);
        makeList(result);
      });
}
    
 function makeList(items) {
      $bestContainer.innerHTML = null;
      items.forEach((item, idx) => {
        if(idx === 8) {
          const listResult = makeList(bestItem);
           $bestContainer.appendChild(listResult);
        }
        const result = makeItem(item);
        $bestContainer.appendChild(result);
      });
    }

    function makeBest(item) {
      const div = document.createElement('div');
      div.classList.add('best')
      div.innerHTML = `
          <a href="">
              <div class="best_img">
                  <img src="${item.img}" alt="">
              </div>
              <div class="best_text">
                  <p>${item.text_1}</p>
                  <p>${best.text_2}</p>
                  <p>${best.text_3}</p>
              </div>
          </a>
      `;
      return div;
    }
function makeItem(item) {      
      const div = document.createElement('div');
      div.classList.add('item');

      let divImageClass = 'image';
      let divProductClass = 'product';
      let imgClass = 'img_picture';
      let imgClassHover = 'img_overEffect';
     
      return div;
    }

    getData();

    const $bestContainer = document.querySelector('.bestList');