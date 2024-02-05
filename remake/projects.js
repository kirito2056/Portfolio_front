let server = 'localhost:8080/';

document.addEventListener("DOMContentLoaded", (event) => {
    const circle = document.querySelector(".circle");

    const mojoAi = document.querySelector(".mojoAi");
    const physicalGuide = document.querySelector(".physicalGuide");
    const midasHackathon = document.querySelector(".midasHackathon");
    const numberClock = document.querySelector("numberClock");
    const somein = document.querySelector(".somein");
    const stepAssister = document.querySelector(".stepAssister");
    const petpong = document.querySelector("petpong");

    mojoAi.addEventListener("mousedown", (e) => {
        circle.style.transform = 'rotate(202.5deg)'
    })

    physicalGuide.addEventListener('mousedown',(e) => {
        circle.style.transform = 'rotate(0deg)'
    })

    midasHackathon.addEventListener('mousedown', (e) => {
        circle.style.transform = 'rotate(-90deg)'
    })

    numberClock.addEventListener('mousedownn', (e) => {
        circle.style.transform = 'rotate(-22.5deg)'
    })

    somein.addEventListener('mousedown', (e) => {
        circle.style.transform = 'rotate(335.5deg)'
    })

    stepAssister.addEventListener('mousedown', (e) => {
        circle.style.transform = 'rotate(22.5deg)'
    })

    petpong.addEventListener('mousedown', (e) => {
        circle.style.transform = 'rotate(45deg)'
    })
})

function physicalGuide() {
    /*
    alert('피지컬 가이드')
    $.get('send-ajax-data.php').done(function(data) {
        console.log(data); //  '반환된 텍스트'
    }).fail(function(data) {
        console.log('에러: ' + data);
    });
    */
}

function mojoAi() {
/*
    $.ajax({
		type: 'get',
		url : 'jQueryAjax01_data.jsp',
		dataType:'text', 
		success: function(data){
			alert(data);   
		},
		error:function(){ 
			alert('실패');
		}
	})
*/
    alert('모조로 만들려고 했지만 파이썬으로 만들게된 인공지능')
}

function midasHackathon() {
    alert('마이다스 해커톤')
}

function numberClock() {
    alert('시, 분, 초침을 숫자로 만든 시계')
}

function somein() {
    alert('소마고 4개교 커뮤니티')
}

function stepAssister() {
    alert('YOLO 인공지능을 활용한 사물인식 프로젝트')
}

function petpong() {
    alert('1학년 2학기 나르샤 프로젝트')
}

function notion() {
    location.href = 'https://daegu-software-meister-highschool-2022.notion.site/daegu-software-meister-highschool-2022/501d9b7882de494e92f004b8003daa42'
}