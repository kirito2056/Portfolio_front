let server = 'localhost:8080/';

function physicalGuide() {
    alert('피지컬 가이드')
    $(function() {
        $("#requestBtn").on("click", function() {
            $.post(server + 'physicalguide'),
                function(data, status) {
                    $("#text").html(data + "<br>" + status);
                }
        })
    })
}

function mojoAi() {
    alert('모조로 만들려고 했지만 파이썬으로 만들게된 인공지능')
}

function midasHachathon() {
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