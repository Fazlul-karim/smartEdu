function check() {
  var c = 0;
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;
  if (q1 == "correct") {
    c++;
  }
  if (q2 == "correct") {
    c++;
  }
  if (q3 == "correct") {
    c++;
  }
  if (q4 == "correct") {
    c++;
  }
  if (q5 == "correct") {
    c++;
  }

  document.getElementById("result").innerHTML = "your score is: " + c + "/5";
  result = c * 20;
  incorrect = 100 - result;
  var options = {
    title: {
      text: "Your score in percentage"
    },
    subtitles: [{
      text: "mark in 100"
    }],
    animationEnabled: true,
    data: [{
      type: "pie",
      startAngle: 40,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [{
        y: incorrect,
        label: "wrong"
      },
      {
        y: result,
        label: "Correct"
      },

      ]
    }]
  };
  $("#chartContainer").CanvasJSChart(options);
}
