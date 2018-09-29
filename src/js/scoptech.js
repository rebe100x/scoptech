function randRange(data) {
      var newTime = data[Math.floor(data.length * Math.random())];
      return newTime;
}

function toggleBg() {
      var timeArray = new Array(7000, 10000, 15000);
      var colorArray = new Array(
        ["#ee5253","#feca57", "url('/Users/renaud/Projects/scoptech/scoptech/img/scoptech-1.jpg'"],
        ["#1dd1a1","#ee5253", "url('/Users/renaud/Projects/scoptech/scoptech/img/scoptech-2.jpg'"],
        ["#341f97","#feca57", "url('/Users/renaud/Projects/scoptech/scoptech/img/scoptech-3.jpg'"],
        ["#feca57","#ee5253", "url('/Users/renaud/Projects/scoptech/scoptech/img/scoptech-4.jpg'"],
        ["#0abde3","#ee5253", "url('/Users/renaud/Projects/scoptech/scoptech/img/scoptech-5.jpg'"]);

      var color = randRange(colorArray);
      jQuery('.masthead').css('backgroundColor',color[0])
      jQuery('#mainNav .navbar-brand').css('color',color[1]);
      jQuery('.masthead-layer').fadeOut(1000, function(){
        $(this).css('background-image',color[2]).fadeIn(1000);
      });



      clearInterval(timer);
      timer = setInterval(toggleBg, randRange(timeArray));
}

var timer = setInterval(toggleBg, 5000);

