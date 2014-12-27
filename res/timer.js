var clock;
            
$(document).ready(function() {
    clock = $('.clock').FlipClock({
        clockFace: 'HourlyCounter',
        countdown: true,
        autoStart: false,
    });
});

$(".timer-btn").click(function() {
	clock.stop();
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