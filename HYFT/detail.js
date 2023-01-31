'use strict'

// 마우스 커서 이모티콘 캐릭터로 변경
   let mouseCursor = document.querySelector(".cursor");
    let navLinks = document.querySelectorAll(".detail1_1 div div");
    window.addEventListener("scroll", cursor);
    window.addEventListener("mousemove", cursor);
    function cursor(e) {
        mouseCursor.style.left = e.pageX + "px";
        mouseCursor.style.top = e.pageY - scrollY + "px";
    }

// 반응형 리사이즈 사이즈 변경 태블릿 사이즈
function tabResize() {
    if (matchMedia("screen and (max-width: 834px)").matches) {
       //마우스 커서 삭제
        const $cursor = document.querySelector(".cursor");
        $cursor.classList.remove("cursor");
        
     
     
        // 834px 태블릿 사이즈 이하  AOS 애니메이션 삭제
        // const $div = document.querySelectorAll("div");

        // for (let i = 0; i < $div.length; i++) {
        //     $div[i].removeAttribute("data-aos");
        // }
    }
    window.onresize = function () {
    document.location.reload();
  };
}
tabResize();
 

//리본 텍스트 스크롤 애니메이션     

const pTag1 = document.querySelector('.first-parallel');
    const pTag2 = document.querySelector('.second-parallel');

const textArr1 = 'HYFT HOW YOU FEEL TODAY HYFT HOW YOU FEEL TODAY '.split(' ');
const textArr2 = 'CIRCUS BOY BAND HUG FIGURE CIRCUS BOY BAND HUG FIGURE'.split(' ');

    function initTexts(element, textArray) {
        textArray.push(...textArray);
        for (let i = 0; i < textArray.length; i++) {
            element.innerText += `${textArray[i]}\u00A0\u00A0`;
        }
    }
initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);

let count1 = 0;
let count2 = 0;

    function marqueeText(count, element, direction) {
        if (count > element.scrollWidth / 2) {
            element.style.transform = `translateX(0)`;
            count = 0;
        } element.style.transform = `translateX(${count * direction}px)`;
        return count;
    }
    function animate() {
        count1++;
        count2++;

        count1 = marqueeText(count1, pTag1, -1);
        count2 = marqueeText(count2, pTag2, 1);

        window.requestAnimationFrame(animate);
    }

animate();

    window.addEventListener('scroll', () => {
        count1 += 25;
        count2 += 25;
    })


