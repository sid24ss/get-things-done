var clock;

$(document).ready(function() {
    clock = $('.clock').FlipClock({
        clockFace: 'HourlyCounter',
        countdown: true,
        autoStart: false,
        callbacks: {"stop" : play_bell }
    });
});

$(".timer-btn").click(function() {
	clock.setTime($(this).data("timer")*60);
	clock.start();
	$(".timer-btn").removeClass("active");
	$(this).addClass("active");
});

$(".timer-add-btn").click(function() {
	var t = clock.getTime();
	t.addSeconds($(this).data("timer")*60);
});

$(".timer-reset").click(function() {
	clock.reset();
	$(".timer-btn").removeClass("active");
});

function play_bell() {
	a = document.getElementById("bell");
	a.play();
}
