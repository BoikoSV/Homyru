import moment from 'moment';
import momentDiff from 'moment-precise-range-plugin';

const stocks = document.querySelectorAll('.stock');


stocks.forEach(stock => {
    let timer = stock.querySelector('.stock__time-box');
    let dateStr = timer.dataset.timer;
    let objDiff = timeIsLeft(dateStr);
    let formatedObj = formatObj(objDiff);
    if(!objDiff.firstDateWasLater){
        createHtml(timer, formatedObj);
    }
})


function timeIsLeft(str){
    let dateToFinish = moment(str, 'DD-MM-YYYY');
    let today = moment();
    let diff = moment.preciseDiff(today, dateToFinish, true)
    console.log(diff);
    return diff;
}

function formatObj(objDiff){
    return {
        day: {
            firstNum: objDiff.days < 10 ? 0 : (objDiff.days + '').split('')[0],
            secondNum: objDiff.days < 10 ? 0 : (objDiff.days + '').split('')[1],
        },
        hour: {
            firstNum: objDiff.hours < 10 ? 0 : (objDiff.hours + '').split('')[0],
            secondNum: objDiff.hours < 10 ? 0 : (objDiff.hours + '').split('')[1],
        },
        minutes: {
            firstNum: objDiff.minutes < 10 ? 0 : (objDiff.minutes + '').split('')[0],
            secondNum: objDiff.minutes < 10 ? 0 : (objDiff.minutes + '').split('')[1],
        }
    }
}

function createHtml(timer, formatedObj){

    timer.querySelector('.timer__day-1').innerHTML = formatedObj.day.firstNum;
    timer.querySelector('.timer__day-2').innerHTML = formatedObj.day.secondNum;

    timer.querySelector('.timer__hour-1').innerHTML = formatedObj.hour.firstNum;
    timer.querySelector('.timer__hour-2').innerHTML = formatedObj.hour.secondNum;

    timer.querySelector('.timer__minut-1').innerHTML = formatedObj.minutes.firstNum;
    timer.querySelector('.timer__minut-2').innerHTML = formatedObj.minutes.secondNum;
}
