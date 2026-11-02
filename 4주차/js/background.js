const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
//이 명령어로 javascript로 HTML에 무언가를 만들어

bgImage.src=`img/${chosenImage}`;
//랜덤으로 골라진 chosenImage 숫자가 img의 랜덤함을 결정해줌
//이제 사진을 실제 HTML으로 추가해줘야함
//그래야지 사진이 보임!

document.body.appendChild(bgImage)
//HTML에 tag 추가함 
//그래서 랜덤한 값을 바탕으로 추가함
