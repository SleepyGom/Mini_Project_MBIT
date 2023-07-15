const copyBtn = document.querySelector('.copy_btn');
const facebookShare = docuemnt.querySelector('.facebook_share');
const kakakoShare = documnet.querySelector('.kakao_share');
const API_KEY = config.apikey;

$(function(){
    let url = window.location.href;
    let img = $('.result_img img').attr('src');

    $("meth[property='og\\:url']").attr('content',url);
    $("meth[property='og\\:image']").attr('content',img);
});

function copyUrl(){
    let url = window.location.href;

    navigator.clipboard.writeText(url).then(()=>{
        alery("URL이 복사되었습니다.")
    });

}

function sharefacebook(){
    let url = window.location.href;
    let facebook = 'http://www.facebook.com/sharer/sharer.php?u=';
    let link = facebook + url;
    window.open(link);
}
KAkao.init(API_KEY)

function sendLink() {
    let result_url = window.location.href;
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '나의 개발 유형은?',
            description: '나에게 꼭 맞는 개발 유형을 알아보자!!',
            imageUrl: 'https://mbit.weniv.co.kr/static/img/mbit_thumbnail.png',
            link: {
            mobileWebUrl: 'https://mbit.weniv.co.kr',
            webUrl: 'https://mbit.weniv.co.kr',
            },
        },
        social: {
            likeCount: 286,
            commentCount: 45,
            sharedCount: 845,
        },
        buttons: [
            {
            title: '결과 보러가기',
            link: {
                webUrl: result_url,
                mobileWebUrl: result_url,
                },
            },
            {
            title: '테스트 하러가기',
            link: {
                webUrl: 'https://mbit.weniv.co.kr',
                mobileWebUrl: 'https://mbit.weniv.co.kr',
                },
            },
        ],
    });
}

copyBtn.addEventListener('click',copyUrl);
facebookShare.addEventListener('click', sharefacebook)
kakakoShare.addEventListener('click',sendLink)