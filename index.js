// import {zingchart, ZC} from 'zingchart/es6';// to import the pareto chart module
// import 'zingchart/modules-es6/zingchart-pareto.min.js';

let myConfig = {
    type: 'ring',

    title: {
      text: 'Calory Intake',
      fontSize: 24,
    },
    legend: {
      draggable: true,
    },
    series: [
      {
        "values":[5]
        },
    {
        "values":[55]
        },
    {
        "values":[30]
        },
    {
        "values":[28]
        },
    {
        "values":[15]
        }
    ]
  };

zingchart.render({
    id: 'myChart',
    data: myConfig,
  });

window.onload = () => {
  const data = [{
      "name": "Philip J. Fry",
      "origin": "Earth"
    },
    {
      "name": "Turanga Leela",
      "origin": "Earth"
    },
    {
      "name": "Bender Bending Rodriguez",
      "origin": "Earth"
    },
    {
      "name": "Amy Wong",
      "origin": "Mars"
    },
    {
      "name": "Doctor John Zoidberg",
      "origin": "Decapod 10"
    },
    {
      "name": "Lord Nibbler",
      "origin": "Earth"
    }
  ]

  const zgRef = document.querySelector('zing-grid');

  zgRef.setData(data);
}