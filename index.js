// import {zingchart, ZC} from 'zingchart/es6';// to import the pareto chart module
// import 'zingchart/modules-es6/zingchart-pareto.min.js';

let myConfig = {
    type: 'ring',

    legend: {
      draggable: true,
    },
    series: [
      {
        "values":[5],
        "text": "Veggies"
      },
      {
        "values":[55],
        "text": "Proteins"
      },
      {
        "values":[30],
        "text": "Fruits"
      },
      {
        "values":[28],
        "text": "Carbs"
      },
      { 
        "values":[15],
        "text": "Water"
      }
    ]
  };

zingchart.render({
    id: 'myChart',
    data: myConfig,
    backgroundColor: "rgb(186, 226, 226)"
  });


window.onload = () => {
  const data = [{
      "Workout Name": "Bench Press",
      "Sets": "3",
      "Reps": "8"
    },
    {
      "Workout Name": "Dead Lift",
      "Sets": "5",
      "Reps": "4"
    },
    {
      "Workout Name": "Squat",
      "Sets": "5",
      "Reps": "3"
    },
    {
      "Workout Name": "Bicep Curl",
      "Sets": "2",
      "Reps": "9"
    },
    {
      "Workout Name": "Leg Press",
      "Sets": "3",
      "Reps": "8"
    },
    {
      "Workout Name": "Lateral Raise",
      "Sets": "3",
      "Reps": "10"
    }
  ]

  const zgRef = document.querySelector('zing-grid');

  zgRef.setData(data);
}