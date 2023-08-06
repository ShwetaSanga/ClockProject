document.addEventListener('DOMContentLoaded', function () {
    const timeElement = document.getElementById('time');
    const alarmHourInput = document.getElementById('alarm-hour');
    const alarmMinuteInput = document.getElementById('alarm-minute');
    const alarmSecondInput = document.getElementById('alarm-second');
    const alarmAmPmInput = document.getElementById('alarm-am-pm');
    const setAlarmButton = document.getElementById('set-alarm-btn');
    const alarmsList = document.getElementById('alarms-list');
  
    function updateClock() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const amPm = hours >= 12 ? 'PM' : 'AM';
  
      timeElement.textContent = `${hours % 12 || 12}:${padZero(minutes)}:${padZero(seconds)} ${amPm}`;
  
      setTimeout(updateClock, 1000);
    }
  
    function padZero(num) {
      return num.toString().padStart(2, '0');
    }
  
    function setAlarm() {
      const alarmHour = parseInt(alarmHourInput.value);
      const alarmMinute = parseInt(alarmMinuteInput.value);
      const alarmSecond = parseInt(alarmSecondInput.value);
      const amPm = alarmAmPmInput.value;
  
      if (isNaN(alarmHour) || isNaN(alarmMinute) || isNaN(alarmSecond)) {
        alert('Please enter valid alarm time!');
        return;
      }
  
    const alarmTime = `${padZero(alarmHour)}:${padZero(alarmMinute)}:${padZero(alarmSecond)} ${amPm}`;
    const alarmItem = document.createElement('li');
    alarmItem.className = 'alarm-item';
  
    const alarmContent = document.createElement('div'); 
    alarmContent.style.display = 'flex'; 
  
    const alarmIcon = document.createElement('i');
    alarmIcon.className = 'fas fa-bell';
    alarmIcon.style.color = 'blueviolet';
    alarmIcon.style.marginRight = '25px'; 
  
    const alarmTimeElement = document.createElement('span');
    alarmTimeElement.className = 'alarm-time'; 
    alarmTimeElement.textContent = alarmTime;
  
    alarmContent.appendChild(alarmIcon);
    alarmContent.appendChild(alarmTimeElement);
  
    alarmItem.appendChild(alarmContent);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

    deleteButton.addEventListener('click', function () {
      alarmsList.removeChild(alarmItem);
    });

    alarmItem.appendChild(deleteButton);
    alarmsList.appendChild(alarmItem);
  }

  setAlarmButton.addEventListener('click', setAlarm);

  updateClock();
});