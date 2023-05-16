
const labels = [
    '2018-19',
    '2019-20',
    '2020-21',
    '2021-22'
];
const data = {
    labels: labels,
    datasets: [{
    label: 'Les inscrits à l’UT2J en L2 MIASHS',
    backgroundColor: 'rgb(0, 199, 193)',
    borderColor: 'rgb(0, 199, 193)',
    data: [79, 70, 134, 149]
    }]
};
const config = {
    type: 'line',
    data: data,
    options: {}
};
const myChart = new Chart(
    document.querySelector('#canvas'),
    config
);

const labels2 = [
    '2018-19',
    '2019-20',
    '2020-21',
    '2021-22'
];
const data2 = {
    labels: labels2,
    datasets: [{
    label: 'Les inscrits en L2 MIASHS hommes',
    backgroundColor: 'rgb(0, 199, 193)',
    borderColor: 'rgb(0, 199, 193)',
    data: [37, 37, 85, 90]
    },{
    label:'Les inscrits en L2 MIASHS femmes',
    data: [40,32,49,58],
    backgroundColor: 'rgb(100, 1, 193)',
    borderColor: 'rgb(85, 1, 100)',
}]
};
const config2 ={
    type: 'line',
    data: data2,
    options:{},
};
const myChart2 = new Chart(
    document.querySelector('#canvas2'),
    config2);
