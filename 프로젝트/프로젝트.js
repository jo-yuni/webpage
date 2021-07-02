document.getElementsByClassName('btn-open')[0].addEventListener('click', function() {
    document.getElementsByClassName('addheader')[0].classList.toggle('show')
})

document.getElementById('content1').addEventListener('click', function() {
    document.getElementsByClassName('add1')[0].classList.add('showanimation')
    document.getElementsByClassName('add1')[0].classList.remove('closeanimation')
    document.getElementsByClassName('add1')[0].classList.remove('hidden')
})

document.getElementById('content2').addEventListener('click', function() {
    document.getElementsByClassName('add2')[0].classList.add('showanimation')
    document.getElementsByClassName('add2')[0].classList.remove('closeanimation')
    document.getElementsByClassName('add2')[0].classList.remove('hidden')
})

document.getElementById('content3').addEventListener('click', function() {
    document.getElementsByClassName('add3')[0].classList.add('showanimation')
    document.getElementsByClassName('add3')[0].classList.remove('closeanimation')
    document.getElementsByClassName('add3')[0].classList.remove('hidden')
})

document.getElementById('content4').addEventListener('click', function() {
    document.getElementsByClassName('add4')[0].classList.add('showanimation')
    document.getElementsByClassName('add4')[0].classList.remove('closeanimation')
    document.getElementsByClassName('add4')[0].classList.remove('hidden')

})

document.getElementById('content5').addEventListener('click', function() {
    document.getElementsByClassName('add5')[0].classList.add('showanimation')
    document.getElementsByClassName('add5')[0].classList.remove('closeanimation')
    document.getElementsByClassName('add5')[0].classList.remove('hidden')

})

document.getElementById('content6').addEventListener('click', function() {
    document.getElementsByClassName('add6')[0].classList.add('showanimation')
    document.getElementsByClassName('add6')[0].classList.remove('closeanimation')
    document.getElementsByClassName('add6')[0].classList.remove('hidden')

})

document.getElementById('content7').addEventListener('click', function() {
    document.getElementsByClassName('add7')[0].classList.add('showanimation')
    document.getElementsByClassName('add7')[0].classList.remove('closeanimation')
    document.getElementsByClassName('add7')[0].classList.remove('hidden')

})

document.querySelector('.arrow1').addEventListener('click', function() {
    document.getElementsByClassName('add1')[0].classList.remove('showanimation')
    document.getElementsByClassName('add1')[0].classList.add('closeanimation')
    setTimeout(function() {
        document.getElementsByClassName('add1')[0].classList.add('hidden')
    }, 1000);
})

document.querySelector('.arrow2').addEventListener('click', function() {
    document.getElementsByClassName('add2')[0].classList.remove('showanimation')
    document.getElementsByClassName('add2')[0].classList.add('closeanimation')
    setTimeout(function() {
        document.getElementsByClassName('add2')[0].classList.add('hidden')
    }, 1000);
})

document.querySelector('.arrow3').addEventListener('click', function() {
    document.getElementsByClassName('add3')[0].classList.remove('showanimation')
    document.getElementsByClassName('add3')[0].classList.add('closeanimation')
    setTimeout(function() {
        document.getElementsByClassName('add3')[0].classList.add('hidden')
    }, 1000);
})

document.querySelector('.arrow4').addEventListener('click', function() {
    document.getElementsByClassName('add4')[0].classList.remove('showanimation')
    document.getElementsByClassName('add4')[0].classList.add('closeanimation')
    setTimeout(function() {
        document.getElementsByClassName('add4')[0].classList.add('hidden')
    }, 1000);
})

document.querySelector('.arrow5').addEventListener('click', function() {
    document.getElementsByClassName('add5')[0].classList.remove('showanimation')
    document.getElementsByClassName('add5')[0].classList.add('closeanimation')
    setTimeout(function() {
        document.getElementsByClassName('add5')[0].classList.add('hidden')
    }, 1000);
})

document.querySelector('.arrow6').addEventListener('click', function() {
    document.getElementsByClassName('add6')[0].classList.remove('showanimation')
    document.getElementsByClassName('add6')[0].classList.add('closeanimation')
    setTimeout(function() {
        document.getElementsByClassName('add6')[0].classList.add('hidden')
    }, 1000);
})

document.querySelector('.arrow7').addEventListener('click', function() {
    document.getElementsByClassName('add7')[0].classList.remove('showanimation')
    document.getElementsByClassName('add7')[0].classList.add('closeanimation')
    setTimeout(function() {
        document.getElementsByClassName('add7')[0].classList.add('hidden')
    }, 1000);
})

// document.querySelector('.arrow').addEventListener('click', function() {
//     setTimeout(function() {
//         document.getElementsByClassName('add2')[0].classList.add('hidden')
//     }, 1000);
// })

// $(function() {
//     $(".arrow").on("click", function() {
//         $(".add1").slideup();
//     });
// });

// $(document).ready(function() {
//     $('.arrow1').click(function() {
//         document.getElementsByClassName('add1')[0].classList.remove('showanimation')
//         $('.add1').slideup();
//     });
// });

// var users = [
//     {
//         title: "2020 M3 주제중심 프로젝트",
//         WHY: "WHY: 지구를 지키고 미래 사람들에게 피해를 끼치지 않기 위해 지구 파괴에 큰 영향을 미치는 기후변화를 줄여야만 했고 기후변화를 가속화시키는 많은 원인 중 육식을 하는 것이 다른 원인들에 비해 더 위험하고 치명적이라는 사실을 알게됐다. 또한 먹는 행위는 모든 사람의 삶과 아주 가까이 닿아있기 때문에 그 만큼 더 중요하고 변화가 일어날 수 있다고 생각했다.",
//         HOW: "HOW: ‘육식의 종말’, ‘아무튼 비건’등의 여러 책들을 읽고 ‘더 게임 체인저스’, ‘도미니언’등의 다큐멘터리를 시청하여 기본 지식을 쌓았다. 또한 비건을 일상에서 실천하고 계시는 분들을 만나 인터뷰를 진행했다. 그리고 팀원들 모두가 직접 1달 동안 채식을 실천해보고 그 과정을 글과 영상으로 담아 짧은 영상을 하나 제작했다.",
//         WHAT: "WHAT: 육식이 기후변화를 얼마나 가속화시키는지, 그 것의 정확한 수치는 어떤지, 비건이 무엇인지 등의 기초적인 지식들을 포함해서 비건의 실천이 얼마나 도움이 되는지, 더 나아가 그 것이 가지는 큰 의미는 무엇인지 등 까지 알아 볼 수 있었다.",
//         img: "images.jpeg"
//     },
//     {
//         title: "2020 M3 문제정의 프로젝트",
//         WHY: "WHY: 팀원들이 모두 비정규직 노동자의 대우에 대해 공통적으로 관심을 가지고 있었는데 비정규직 노동자를 모두 포함하기엔 종사하는 직업에 따라 다 상황이 다르고 그 상황이 너무 많기 때문에 고령 비정규직 노동자로 범위를 한정했다. 아주 오랫동안 이어져 내려온 문제로서 더 이상 방치돼지 말고 누구든 이 문제를 알아보려하고 바꾸려고 노력해야 한다고 생각했다.",
//         HOW: "HOW: ‘임계장 이야기’라는 책과 국가인권위원회에서 작성한 논문 등을 읽어보면서 비정규직 노동자들의 인권상황의 실태를 알아보았다. 또한 ‘임계장 이야기’의 저자이신 조정진님을 만나 인터뷰를 진행했다.",
//         WHAT: "WHAT: 정규직, 비정규직의 사전적 정의와 고령 비정규직 노동자들의 배경 그리고 우리나라의 구체적인 사례와 외국의 여러가지 사례들을 찾아 비교해보았고 이 문제를 둘러싼 이해관계자들을 나열해보았다. 학습한 걸 바탕으로 세부적인 문제 상황들을 파악하고 그 문제가 발생하게 된 근본적인 이유를 생각해보기도 했다.",
//         img: "images.jpeg"
//     },
//     {
//         title: "2020 M3 개인주제 프로젝트",
//         WHY: "WHY: 내가 이 주제를 선택한 이유는 일단 영화를 사랑하기 때문이다. 나는 머리 속에서만 하고 있는 생각이 너무 많았지만 이 것을 표현하는 방법을 몰랐다. 또한 표현해도 절대 이해받지 못 할 거라 생각했다. 이해를 바란 건 아니었지만 상대방이 완벽하게 이해하지 못할 거라면 말하고 싶지 않았다. 하지만 영화에선 그 어려운 것을 해내는 사람들이 있었다. 자신(연출자, 배우)이 느끼는 감정을 관객들에게 정확히 이해시키고 공감을 이끌어냈다. 나도 마찬가지로 거기서 감정의 공감이라는 것을 경험했다. 나는 그것이 너무 부럽고 멋져 보였다. 그리고 나도 그렇게 해보고 싶었다. 그래서 아직 공감받지 못한 나의 고유한 감정을 이해받길 기다리기 보단 내가 직접 영화로 표현하여 예전의 내가 경험했던 것처럼 다른 사람에게서 감정의 공감을 이끌어내보고 싶었다. 그래서 나에게 있어서 세상을 느끼게 해준 영화를 아주 아주 깊이 사랑하게 되었고 개인 프로젝트 주제를 '영화 시나리오 써보기'로 결정했다.",
//         HOW: "HOW: ‘사유 속의 영화’라는 영화 이론에 대한 책을 읽었다. 그리고 그 내용을 내 언어로 다시 옮겨 적었다. 그리고 내가 좋아하는 영화의 장면들을 분석해서 공책에 정리했다. 그리고 비슷하지만 극명한 차이점이 있는 연극에 대해서도 알아보기 위해 직접 연극 3편 정도를 보았다.",
//         WHAT: "WHAT: ‘사유 속의 영화’라는 책에서 배운 점이 참 많은데 이 책에서 본 내용들이 가끔씩 영화를 볼 때 떠오른다. 어떠한 연출이나 장면이나 뭐 그런 것을 보면 어! 이거 책에서 본 건데!라고 생각이 난다. 이처럼 영화의 기본적인 구성요소에 대해 학습을 많이 했다. 그리고 장면들이 의미하는 바와 연출의 의도를 장면 분석을 통해 알아보았다. 그리고 영화와 연극의 차이점과 내가 둘 다에 다 끌리는 이유, 그러니까 공통점에 대해서도 생각해보았다.",
//         img: "images.jpeg"
//     }
// ]

// for (var i in users) {
//     var project = users[i];
//     document.getElementById("addbox").innerHTML += `
//         <div id="addimagetext">
//             <img src="${project.img}" />
//             ${project.WHY} ${project.HOW} ${project.WHAT}
//         </div>
//     `;
// }