

$("body").css("background-color", "#E9DCA5");
$("#question1").css("display", "flex");

let time = 0;
let interval = null;

function startTimer() {
    interval = setInterval(() => {
        time += 1
        $("#timer").html(time);
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

const response1 = $("#response1")
$("#button1").click(() => {
    const answer = $("#answer1").val();
    if (answer == "34") {
        response1.css("display", "block");
        response1.css("background-color", "#93FF95");
        response1.html("You may proceed to the next question!");
        $("#question2").css("display", "flex");
        $("body").css("background-color", "#DEDEDE");
        $("#timer-container").css("display", "block");
        startTimer();
    }
    else {
        response1.css("display", "block");
        response1.css("background-color", "#FF9393");
        response1.html("INCORRECT");
    }
});

const response2 = $("#response2")
$("#button2").click(() => {
    const answer = $("#answer2").val();
    if (answer == "E5") {
        response2.css("display", "block");
        response2.css("background-color", "#93FF95");
        response2.html("You may proceed to the next question!");
        $("#question3").css("display", "flex");
        $("body").css("background-color", "#00414D");
    }
    else {
        response2.css("display", "block");
        response2.css("background-color", "#FF9393");
        response2.html("INCORRECT");
    }
});

const response3 = $("#response3")
$("#button3").click(() => {
    const answer = $("#answer3").val();
    if (answer == "towel") {
        response3.css("display", "block");
        response3.css("background-color", "#93FF95");
        response3.html("You may proceed to the next question!");
        $("#question4").css("display", "flex");
        $("body").css("background-color", "#201F30");
    }
    else {
        response3.css("display", "block");
        response3.css("background-color", "#FF9393");
        response3.html("INCORRECT");
    }
});

const response4 = $("#response4")
$("#button4").click(() => {
    const answer = $("#answer4").val();
    if (answer == "30") {
        response4.css("display", "block");
        response4.css("background-color", "#93FF95");
        response4.html("You may proceed to the next question!");
        $("#question5").css("display", "flex");
        $("body").css("background-color", "#B1261A");
    }
    else {
        response4.css("display", "block");
        response4.css("background-color", "#FF9393");
        response4.html("INCORRECT");
    }
});

const response5 = $("#response5")
$("#button5").click(() => {
    const answer = $("#answer5").val();
    if (answer == "merryxmas") {
        response5.css("display", "block");
        response5.css("background-color", "#93FF95");
        response5.html("You may proceed to the next question!");
        $("#question6").css("display", "flex");
        $("body").css("background-color", "#DCDCDE");
    }
    else {
        response5.css("display", "block");
        response5.css("background-color", "#FF9393");
        response5.html("INCORRECT");
    }
});

const response6 = $("#response6")
$("#button6").click(() => {
    const answer = $("#answer6").val();
    if (answer == "P") {
        response6.css("display", "block");
        response6.css("background-color", "#93FF95");
        response6.html("You may proceed to the next question!");
        $("#question7").css("display", "flex");
        $("body").css("background-color", "#2C2A3F");
    }
    else {
        response6.css("display", "block");
        response6.css("background-color", "#E6D995");
        response6.html("INCORRECT");
    }
});

const response7 = $("#response7")
$("#button7").click(() => {
    const answer = $("#answer7").val();
    if (answer == "breathe") {
        response7.css("display", "block");
        response7.css("background-color", "#93FF95");
        response7.html("You may proceed to the next question!");
        $("#question8").css("display", "flex");
        $("body").css("background-color", "#15140D");
    }
    else {
        response7.css("display", "block");
        response7.css("background-color", "#FF9393");
        response7.html("INCORRECT");
    }
});

const response8 = $("#response8")
$("#button8").click(() => {
    const answer = $("#answer8").val();
    if (answer == "watermelon") {
        response8.css("display", "block");
        response8.css("background-color", "#93FF95");
        response8.html("You may proceed to the next question!");
        $("#question9").css("display", "flex");
        $("body").css("background-color", "#1C2541");
    }
    else {
        response8.css("display", "block");
        response8.css("background-color", "#FF9393");
        response8.html("INCORRECT");
    }
});

const response9 = $("#response9")
$("#button9").click(() => {
    const answer = $("#answer9").val();
    if (answer == "constitution") {
        response9.css("display", "block");
        response9.css("background-color", "#93FF95");
        response9.html("You may proceed to the next question!");
        $("#question10").css("display", "flex");
        $("body").css("background-color", "#F5C190");
    }
    else {
        response9.css("display", "block");
        response9.css("background-color", "#FF9393");
        response9.html("INCORRECT");
    }
});

const response10 = $("#response10")
$("#button10").click(() => {
    const answer = $("#answer10").val();
    if (answer == "31") {
        response10.css("display", "block");
        response10.css("background-color", "#93FF95");
        response10.html("You may proceed to the next question!");
        $("#question11").css("display", "flex");
        $("body").css("background-color", "#837B76");
    }
    else {
        response10.css("display", "block");
        response10.css("background-color", "#FF9393");
        response10.html("INCORRECT");
    }
});

const response11 = $("#response11")
$("#button11").click(() => {
    const answer = $("#answer11").val();
    if (answer == "6") {
        response11.css("display", "none");
        stopTimer();
        $("#timer-container").css("display", "none");
        $("#finish-time").html(time);
        $("#finish").css("display", "block");
        $("body").css("background-color", "#006199");
    }
    else {
        response11.css("display", "block");
        response11.css("background-color", "#FF9393");
        response11.html("INCORRECT");
    }
});