
const time = document.createElement("span");
const par = document.getElementsByClassName("container")[0];
const startBtn = document.getElementById("start");
const endbtn = document.getElementById("stop");
const resetbtn = document.getElementById("reset");


const alarm = document.getElementById("icon1");
const clock = document.getElementById("icon2");
const stopw = document.getElementById("icon3");
const timerSet = document.getElementById('icon4');
const timecontainer = document.getElementsByClassName("timecontainer")[0];
const timebox = document.getElementById("timebox");
const alarmBox = document.getElementsByClassName("alarm")[0];
const s = document.getElementsByClassName("stopwatch")[0];
const timeline = document.getElementById("timeline");
const hero = document.getElementsByClassName("hero")[0];



const timmer = document.getElementsByClassName("timer")[0];
const timercontainer = document.getElementsByClassName("timercontainer")[0];
// const timerHr=document.getElementById("timer-hr");
// const timerMin=document.getElementById("timer-min");
// const timerSec=document.getElementById("timer-sec");
const tstartbtn = document.getElementById("tstart");
const tstopbtn = document.getElementById("tstop");
const tresetbtn = document.getElementById("treset");


const ahr = document.getElementById("ahr");
const amin = document.getElementById("amin");
const asec = document.getElementById("asec");
const ahrValue = Number(ahr.value);
const aminValue = Number(amin.value);
const asecvalue = Number(asec.value);
const SetAlaram = document.getElementById("SetAlaram");



// const currTime=new Date();
// const currentHr=currTime.getHours();
// const currentMin=currTime.getMinutes();
// const currentSec=currTime.getSeconds();

// console.log(currTime.getHours());
// console.log(currTime.getMinutes());
// console.log(currTime.getSeconds());

// const FinallHr=currentHr-ahrValue;
// const FinallSec=currentSec-asecvalue;
// const FinallMin=currentMin-aminValue;

// console.log(FinallHr,FinallMin,FinallSec);
// const alarmTime=((FinallHr*3600)+(FinallMin*60)+(FinallSec))*1000;
// console.log(alarmTime);


// ################## Clock time ####################

clock.addEventListener("click", () => {
    alarmBox.style.display = "none";
    timmer.style.display = "none";
    timecontainer.style.display = "block";
    s.style.display = "none";
    hero.style.background = `url(clocktheme1.jpg)`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
})
// const timecontainer = document.getElementsByClassName("timecontainer")[0];
// const timebox = document.getElementById("timebox");
// const timeline=document.getElementById("timeline");

const clockTimer = setInterval(() => {
    const currentClock = new Date();
    let currentClockHr = currentClock.getHours();
    let timeAMPM;
    if (currentClockHr > 12 || currentClockHr < 0) {
        timeAMPM = "PM";
    }
    else timeAMPM = "AM";
    let currentClockMin = currentClock.getMinutes();
    let currentClockSec = currentClock.getSeconds();
    currentClockHr = currentClockHr < 10 ? `0${currentClockHr}` : currentClockHr;
    currentClockMin = currentClockMin < 10 ? `0${currentClockMin}` : currentClockMin;
    currentClockSec = currentClockSec < 10 ? `0${currentClockSec}` : currentClockSec;
    let dateWeek = currentClock.toDateString();
    timebox.innerText = `${currentClockHr}:${currentClockMin}:${currentClockSec} ${timeAMPM}`;
    timeline.innerText = `${dateWeek}`;
}, 1000);


// console.log(currentClockSec);









// ####################  Alarm  Starts Here  ###################

alarm.addEventListener("click", () => {
    alarmBox.style.display = "block";
    timmer.style.display = "none";
    timecontainer.style.display = "none";
    s.style.display = "none";
    hero.style.background = `url(t3.jpg)`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';

    console.log(hero);


})
SetAlaram.addEventListener("click", () => {
    const ahrValue = Number(ahr.value);
    const aminValue = Number(amin.value);
    const asecvalue = Number(asec.value);
    // console.log('input time');
    // console.log(ahrValue);
    // console.log(aminValue);
    // console.log(asecvalue);



    const currTime = new Date();
    const currentHr = currTime.getHours();
    const currentMin = currTime.getMinutes();
    const currentSec = currTime.getSeconds();
    // console.log("Current time");
    // console.log(currTime.getHours());
    // console.log(currTime.getMinutes());
    // console.log(currTime.getSeconds());

    // const FinallHr=Math.abs(currentHr-ahrValue);
    // const FinallSec=Math.abs(currentSec-asecvalue);
    // const FinallMin=Math.abs(currentMin-aminValue);
    const alarmTimer = new Date();
    alarmTimer.setHours(ahrValue);
    // console.log("hii"+alarmTimer.setHours(ahrValue));
    alarmTimer.setMinutes(aminValue);
    alarmTimer.setSeconds(asecvalue);
    if (alarmTimer <= currTime) {
        alarmTimer.setDate(alarmTimer.getDate + 1);
    }
    const timeDifference = (alarmTimer - currTime);
    let TA = timeDifference;
    const spanTimer = document.createElement("span");
    spanTimer.className = "alarmListBox";
    spanTimer.innerText = `Alarm Set at ${ahrValue}:${aminValue}:${asecvalue}`
    alarmBox.append(spanTimer);
    setTimeout(() => {
        rington.play();
        setTimeout(()=>{
            alert("⏰ Time's up! Alarm ringing!");
        },0);

    }, timeDifference);

    // const alarmTime=((FinallHr*3600)+(FinallMin*60)+(FinallSec))*1000;

    console.log(timeDifference);






})



// ###########################  Alarm  Ends   ###########################






// ###########################  Timer Func  ##############################
//  bug when filed isempty but still starts

// let tflag=false;
timerSet.addEventListener("click", () => {
    timmer.style.display = "block";
    alarmBox.style.display = "none";
    timecontainer.style.display = "none";
    s.style.display = "none";
    hero.style.background = `url(timertheme3.jpg)`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
})

tstartbtn.addEventListener("click", () => {
    const timerHr = document.getElementById("timer-hr");
    const timerMin = document.getElementById("timer-min");
    const timerSec = document.getElementById("timer-sec");

    let hr = Number(timerHr.value) || 0;
    let min = Number(timerMin.value) || 0;
    let sec = Number(timerSec.value) || 0;

    if (hr < 0 || min < 0 || sec < 0 || hr >= 24 || min >= 60 || sec >= 60) {
        alert("Please enter a valid time.");
        return;
    }

    displayDecreaseTime(hr, min, sec);
});


let timerStarts;
let timerSpan=0;
let tflag=false;
const rington = new Audio("ring1.wav")
function displayDecreaseTime(hr, min, sec) {
    if (!timerSpan) {
        timerSpan = document.createElement("span");
        const div = document.createElement("div");
        div.className = "timercontainer";
        div.append(timerSpan);
        div.style.color="white";
        timmer.prepend(div);
        console.log(timercontainer);
   

    }

    if (!tflag) {

        tflag = true;

        timerStarts = setInterval(() => {

            if (sec == 0 && min == 0 && hr == 0) {
                tflag = true;
                clearInterval(timerStarts);
                timerSpan.innerText = "hello baby your times up";
                tstartbtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                hr = 0;
                min = 0;
                sec = 0;
                rington.play();
                // console.log(d);
                return;

            }

            if (sec == 0) {
                sec = 59;
                if (min == 0) {
                    min = 59;
                    if (hr > 0) {
                        hr--;
                    }
                }
                else {
                    min--;
                }
            }
            else {
                sec--;
            }
            timerSpan.innerText = `${(hr.toString().padStart(2, '0'))}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

            tflag = true;
        }, 1000);
    }

    else {

        tflag = false;
        clearInterval(timerStarts);
        tstartbtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

    }

}
tstopbtn.addEventListener("click", () => {
    tflag = false;
    tstartbtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(timerStarts);

})
tresetbtn.addEventListener("click", () => {
    tstartbtn.innerHTML = '<i class="fa-solid fa-play"></i>';

    clearInterval(timerStarts);
    tflag = false;
    timercontainer.className="timercontainer";
    timercontainer.style.display = "block";
    const child = document.querySelector(".timercontainer");
    console.log(child);
    // child.remove();
    // if (child) {

    //     child.innerText = "";
    // }
    timerSpan.remove();



})



// // ###########################  Timer  Ends  ##############################

// // ###########################  StopWatch Starts  ##############################

stopw.addEventListener("click", () => {
    timmer.style.display = "none";
    alarmBox.style.display = "none";
    timecontainer.style.display = "none";
    s.style.display = "block";
    // hero.style.background = `url(t4.jpg)`;
    hero.style.background = `url(timertheme2.jpg)`;

    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
    

})
stopw.addEventListener("click", () => {
    s.style.display = "block";

})
var stopwatch;
var flag = false;
time.innerText = '00 : 00 : 00';
time.className="container";
par.append(time);
startBtn.addEventListener("click", () => {

    if (!flag) {
        startBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        endbtn.innerHTML = '<i class="fa-solid fa-flag"></i>';
        flag = true;
        stimer();
    }
    else {
        flag = false;
        startBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        endbtn.innerText = "Stop";
        clearInterval(stopwatch);

    }

});


endbtn.addEventListener("click", () => {
    if (flag == true) {
        clearInterval(stopwatch);
        startBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        // addTimeline();
        flag = false;
    }


});
resetbtn.addEventListener("click", () => {
    startBtn.innerHTML = '<i class="fa-solid fa-play"></i>';

    clearInterval(stopwatch);
    let shr = 0;
    smin = 0;
    ssec = 0;
    smili = 0;
    time.innerText = `${shr.toString().padStart(2, '0')} : ${smin.toString().padStart(2, '0')} : ${ssec.toString().padStart(2, '0')}`;
});



let shr = 0;
let smin = 0;
let ssec = 0;
let smili = 0;
let stemp = 0;
function stimer() {
    stopwatch = setInterval(() => {

        if (stemp != 1) time.innerText = `${smin.toString().padStart(2, '0')}:${ssec.toString().padStart(2, '0')}:${smili.toString().padStart(2, '0')}`;
        else {
            // time.innerText = `${shr.toString().padStart(2, '0')}:${smin.toString().padStart(2, '0')}:${ssec.toString().padStart(2, '0')}`;
            time.innerHTML = `<span>${shr.toString().padStart(2, '0')}</span> 
                  <span class="gap">&nbsp&nbsp:</span> 
                  <span>${smin.toString().padStart(2, '0')}</span> 
                  <span class="gap">:</span> 
                  <span>${ssec.toString().padStart(2, '0')}</span>`;

        }

        smili += 1;
        if (smili >= 20) {
            smili = 0;
            ssec++;
            if (ssec == 60) {
                smin++;
                if (smin == 60) {
                    stemp = 1;
                    shr++;
                    smin = 0;
                }
                ssec = 0;
            }
        }
    }, 55);



}




// // ###########################  StopWatch Ends  ##############################

