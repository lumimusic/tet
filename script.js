const eventDates={tet:new Date("January 29, 2025 00:00:00").getTime(),"new-year":new Date("January 1, 2025 00:00:00").getTime(),christmas:new Date("December 25, 2024 00:00:00").getTime(),"mid-autumn":new Date("October 6, 2025 00:00:00").getTime(),valentine:new Date("February 14, 2025 00:00:00").getTime(),"thpt-exam":new Date("June 25, 2025 00:00:00").getTime()},eventMessages={tet:"Chúc Mừng Năm Mới! Vạn Sự Như Ý, An Khang Thịnh Vượng","new-year":"Happy New Year! Wishing You a Year Full of Success!",christmas:"Merry Christmas! Wishing You Peace and Joy!","mid-autumn":"Chúc Mừng Trung Thu! Mong Bạn Luôn Mạnh Khỏe!",valentine:"Happy Valentine! Wishing You Love and Happiness!","thpt-exam":"Chúc Bạn Thành Công Trong Kỳ Thi THPT!"},eventNames={tet:"Tết Ất Tỵ, 2025","new-year":"Tết Dương Lịch 2025",christmas:"Giáng Sinh 2024","mid-autumn":"Trung Thu 2025",valentine:"Valentine 2025","thpt-exam":"Ngày thi THPT 2025"},tetDates=[new Date("February 17, 2026 00:00:00").getTime(),new Date("February 6, 2027 00:00:00").getTime(),new Date("January 26, 2028 00:00:00").getTime(),new Date("February 13, 2029 00:00:00").getTime(),new Date("February 3, 2030 00:00:00").getTime()],newYearDates=[new Date("January 1, 2026 00:00:00").getTime(),new Date("January 1, 2027 00:00:00").getTime(),new Date("January 1, 2028 00:00:00").getTime(),new Date("January 1, 2029 00:00:00").getTime(),new Date("January 1, 2030 00:00:00").getTime()],christmasDates=[new Date("December 25, 2025 00:00:00").getTime(),new Date("December 25, 2026 00:00:00").getTime(),new Date("December 25, 2027 00:00:00").getTime(),new Date("December 25, 2028 00:00:00").getTime(),new Date("December 25, 2029 00:00:00").getTime()],midAutumnDates=[new Date("October 6, 2026 00:00:00").getTime(),new Date("September 25, 2027 00:00:00").getTime(),new Date("October 15, 2028 00:00:00").getTime(),new Date("October 5, 2029 00:00:00").getTime(),new Date("September 24, 2030 00:00:00").getTime()],valentineDates=[new Date("February 14, 2026 00:00:00").getTime(),new Date("February 14, 2027 00:00:00").getTime(),new Date("February 14, 2028 00:00:00").getTime(),new Date("February 14, 2029 00:00:00").getTime(),new Date("February 14, 2030 00:00:00").getTime()],thptExamDates=[new Date("June 25, 2026 00:00:00").getTime(),new Date("June 25, 2027 00:00:00").getTime(),new Date("June 25, 2028 00:00:00").getTime(),new Date("June 25, 2029 00:00:00").getTime(),new Date("June 25, 2030 00:00:00").getTime()];let nextTetIndex=0,currentEvent="tet",countdownInterval=null;function addHighlightEffect(e){e.classList.add("highlight"),setTimeout((()=>{e.classList.remove("highlight")}),500)}function updateCountdown(){const e=(new Date).getTime(),t=eventDates[currentEvent]-e,n=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),i=Math.floor(t%36e5/6e4),s=Math.floor(t%6e4/1e3),o=document.getElementById("days"),d=document.getElementById("hours"),r=document.getElementById("minutes"),u=document.getElementById("seconds");if(o.textContent!=n&&(o.textContent=n,addHighlightEffect(o.parentElement)),d.textContent!=a&&(d.textContent=a,addHighlightEffect(d.parentElement)),r.textContent!=i&&(r.textContent=i,addHighlightEffect(r.parentElement)),u.textContent!=s&&(u.textContent=s,addHighlightEffect(u.parentElement)),t<0){clearInterval(countdownInterval),document.querySelector(".countdown").style.visibility="hidden";const e=`\n            <div class="new-year-message fade-in">\n                <h1>${eventMessages[currentEvent]}</h1>\n            </div>`;document.querySelector(".container").insertAdjacentHTML("beforeend",e),setTimeout((()=>{document.querySelector(".new-year-message").classList.add("fade-out"),setTimeout((()=>{document.querySelector(".new-year-message").style.display="none",document.querySelector(".countdown").style.visibility="visible",nextTetIndex++,nextTetIndex<tetDates.length?(eventDates[currentEvent]=tetDates[nextTetIndex],resetCountdown()):document.querySelector(".countdown").innerHTML="<h2>Đã hết các sự kiện đếm ngược!</h2>"}),1e3)}),12e4)}}function resetCountdown(){const e=document.querySelector(".countdown");e.classList.add("fade-out"),setTimeout((()=>{e.innerHTML='\n            <div class="time-box">\n                <div class="number" id="days">00</div>\n                <div class="label">Ngày</div>\n            </div>\n            <div class="time-box">\n                <div class="number" id="hours">00</div>\n                <div class="label">Giờ</div>\n            </div>\n            <div class="time-box">\n                <div class="number" id="minutes">00</div>\n                <div class="label">Phút</div>\n            </div>\n            <div class="time-box">\n                <div class="number" id="seconds">00</div>\n                <div class="label">Giây</div>\n            </div>\n        ',e.classList.remove("fade-out"),e.classList.add("fade-in"),setTimeout((()=>e.classList.remove("fade-in")),500),updateCountdown(),countdownInterval=setInterval(updateCountdown,1e3)}),500)}function switchCountdown(){currentEvent=document.getElementById("event-selector").value,document.getElementById("event-name").textContent=eventNames[currentEvent],resetCountdown()}countdownInterval=setInterval(updateCountdown,1e3);const sliderImages=document.querySelectorAll(".slider-image");let currentImageIndex=0;const imageChangeInterval=5e3;function showNextImage(){sliderImages[currentImageIndex].classList.remove("active"),currentImageIndex=(currentImageIndex+1)%sliderImages.length,sliderImages[currentImageIndex].classList.add("active")}setInterval(showNextImage,5e3),sliderImages[currentImageIndex].classList.add("active");let isPlaying=!1;function playMusic(){const e=document.getElementById("music-menu"),t=document.getElementById("audio-player"),n=e.value;n&&(t.src=n,t.play(),isPlaying=!0,updatePlayPauseIcon())}function togglePlayPause(){const e=document.getElementById("audio-player");isPlaying?(e.pause(),isPlaying=!1):(e.play(),isPlaying=!0),updatePlayPauseIcon()}function updatePlayPauseIcon(){document.getElementById("play-pause-button").innerHTML=isPlaying?'<i class="fas fa-pause"></i>':'<i class="fas fa-play"></i>'}function displayPopup(){fetch("holidays.json").then((e=>e.json())).then((e=>{const t=new Date,n=t.toISOString().split("T")[0],a=Lunar.fromDate(t),i=`${a.getDay()}/${a.getMonth()}/${a.getYear()}`;let s=`Hôm nay là thứ ${t.toLocaleDateString("vi-VN",{weekday:"long"})}, ngày ${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()} (dương lịch).<br>`;s+=`Tức ngày ${i} (âm lịch).<br>`;const o=e.find((e=>e.date===n));s+=o?`Ngày lễ hôm nay: ${o.name}.<br> ${o.message}`:"Chúc bạn một ngày vui vẻ, tràn đầy năng lượng!",document.getElementById("popupMessage").innerHTML=s;const d=document.getElementById("holidayPopup");d.classList.remove("hidden"),setTimeout((()=>d.classList.add("visible")),10),setTimeout(closePopup,1e4)})).catch((e=>console.error("Lỗi khi tải danh sách ngày lễ:",e)))}function closePopup(){const e=document.getElementById("holidayPopup");e.classList.remove("visible"),setTimeout((()=>e.classList.add("hidden")),400)}function checkHoliday(e){const t=Object.keys(eventDates).find((t=>Math.abs(eventDates[t]-e)<864e5));return t?eventNames[t]:null}window.addEventListener("load",(()=>{displayPopup()}));