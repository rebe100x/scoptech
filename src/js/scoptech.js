function randRange(data) {
      var newTime = data[Math.floor(data.length * Math.random())];
      return newTime;
}

function toggleSomething() {
      var timeArray = new Array(4000, 3500, 5000, 2500, 2000, 3000, 1000, 1500);
      var colorArray = new Array(["#ee5253","#feca57"],["#1dd1a1","#ee5253"],["#341f97","#feca57"],["#feca57","#ee5253"],["#0abde3","#ee5253"],["#54a0ff","#ee5253"]);

      var color = randRange(colorArray);
      jQuery('.masthead').css('backgroundColor',color[0])
      jQuery('#mainNav .navbar-brand').css('color',color[1])

      clearInterval(timer);
      timer = setInterval(toggleSomething, randRange(timeArray));
}

var timer = setInterval(toggleSomething, 1000);

