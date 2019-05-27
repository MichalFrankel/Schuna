$(document).ready(function () {
  $.getJSON("data/GAMES_DATA.json" , function (data) {
  console.log(data)
    json_data = data
    for (var row of data) {
      var divToADD=0;
      var id="game"+row.id;
      console.log(id);
    divToADD = 
    $(
      '<div id='+id+'>'+
      '<span class="Top">'+row.date +'&nbsp;&nbsp;'+ row.hour+'</span>'+
      '<p></p>'+
      '<span class="ftshirt"><i class="fas fa-tshirt" aria-hidden="true"></i></span>'+
      '<span class="BottomVS">VS</span>'+
      '<span class="stshirt"><i class="fas fa-tshirt" aria-hidden="true"></i></span>'+
      '<p></p>'+
      '<span class=Bottom>'+
      '<span class="BottomRight">'+row.first+ '</span>'+row.second+'</span>'
    )


    $(divToADD).css({'padding':'30px','width':'380px','text-align': 'center','border-bottom':'1px solid white','background-color':'#606060'});
    $(".AllGames").append(divToADD)
    $(".ftshirt").css({'font-size':'36px', 'margin':'20px','color':row.firstcolor });
    $(".stshirt").css({'font-size':'36px', 'margin':'20px','color':row.secondcolor});
    }

   });
  });


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  window.onload = function() {
  // Month Day, Year Hour:Minute:Second, id-of-element-container
  countDownToTime("June 21, 2019 15:00:00", 'countdown1'); // ****** Change this line!
}


function countDownToTime(countTo, id) {
  countTo = new Date(countTo).getTime();
  var now = new Date(),
      countTo = new Date(countTo),
      timeDifference = (countTo - now);
      
  var secondsInADay = 60 * 60 * 1000 * 24,
      secondsInAHour = 60 * 60 * 1000;

  days = Math.floor(timeDifference / (secondsInADay) * 1);
  hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
  mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
  secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

  var idEl = document.getElementById(id);
  idEl.getElementsByClassName('days')[0].innerHTML = ":"+days;
  idEl.getElementsByClassName('hours')[0].innerHTML = ":"+hours;
  idEl.getElementsByClassName('minutes')[0].innerHTML = ":"+mins;
  idEl.getElementsByClassName('seconds')[0].innerHTML = +secs;

  clearTimeout(countDownToTime.interval);
  countDownToTime.interval = setTimeout(function(){ countDownToTime(countTo, id); },1000);
}

$(".iconList" ).click(function() {
  var color = $( this ).css( "color" );
  console.log(color);
  if(color==="rgb(170, 170, 170)")
  {
  $(this).css({'color':'orange'});
  var Players=0;
  Players=('<ul>'+
    '<li><div class="colored">.1</div>שגיא שושן</li>'+
    '<li><div class="colored">.2</div>אלון זמר</li>'+
    '<li><div class="colored">.3</div>רון ציפרסון</li>'+
    '<li><div class="colored">.4</div>גיל בר הדס</li>'+
    '<li><div class="colored">.5</div>קורן כץ</li>'+
    '<li><div class="colored">.6</div>אלון אבוטבול</li>'+
    '<li><div class="colored">.7</div>חיים כהן</li>'+
    '<li><div class="colored">.8</div>רועי לוי</li>'+
    '<li><div class="colored">.9</div>ניר יצחק</li>'+
    '<li><div class="colored">.10</div>עומרי לוי</li>'+
    '<li><div class="colored">.11</div>נמרוד חיים</li>'+
'</ul>');
  $(".players_list").append(Players); 
  }

  else
  {
    $(this).css({'color':'#aaaaaa'});
    $(".players_list").empty(); 
  }
});