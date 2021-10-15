let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
    //mexer com um dos elementos
    // sElement.style.transform = 'rotate(45deg)';

    //360 graus dividido por 60 segundos - 90 gaus, pois foi onde se incializou os ponteiros
    let sDeg = ((360/60) * second) - 90;
    sElement.style.transform = `rotate(${sDeg}deg)`;

    let mDeg = ((360/60) * minute) - 90;
    mElement.style.transform = `rotate(${mDeg}deg)`;

    let hDeg = ((360/12) * hour) - 90;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time){
  if(time < 10){
    return '0'+time;
  }else{
    return time;
  }

  //para simplificar o if 
  // return time < 10 ? `0${time}` : time
}

//setar um intervalo para funcionar
setInterval(updateClock, 1000);

//rodar a função para não dar delay no carregamento 
updateClock();