const birthDay = document.getElementById('birthday');
const button = document.getElementById('btn');
const message = document.getElementById('message');
const result = document.getElementById('result');


function check(){
    const birthDayStr = birthDay.value
    if(birthDayStr == ''){
        message.innerHTML = 'Введите дату рождения!<br>';
    } else{
        message.innerHTML = '';
        message.style.display = 'none';
        const birthDayTimestamp = Date.parse(birthDayStr);
        const currentDate = Date.now();
        const timeDifference = Math.floor((birthDayTimestamp - currentDate)/(1000*60*60*24));
        function days(){
            if (timeDifference > 10 && [11, 12, 13, 14].includes(timeDifference%100)) return 'дней';
            const last_num = timeDifference%10;
            if (last_num == 1) return 'день';
            if ([2,3,4].includes(last_num)) return 'дня';
            if ([5,6,7,8,9, 0].includes(last_num)) return 'дней';
        }
        result.textContent = `До Вашего дня рождения осталось ${timeDifference} ${days()}.`;
    }
}


