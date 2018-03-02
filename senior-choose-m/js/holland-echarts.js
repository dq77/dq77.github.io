var option = {
    color:['#FD8257'],
    tooltip: {},
    radar: {
        name:{
            textStyle: {
                color:'#000'
            }
        },
        nameGap: 5,
        indicator: [
           { name: '实际型(R)', max: 65},
           { name: '研究型(I)', max: 160},
           { name: '艺术型(A)', max: 300},
           { name: '社会型(s)', max: 380},
           { name: '企业型(E)', max: 520},
           { name: '常规型(C)', max: 250}
        ]
    },
    series: [{
        name: '123',
        type: 'radar',
        // areaStyle: {normal: {
        //     color: '#FD8257',
        //     opacity: 0.4
        // }},
        data : [
            {
                name: '121',
                symbol: 'roundRect',
                value : [43, 100, 280, 350, 500, 190]
            }
        ]
    }]
};

var myChart = echarts.init(document.getElementById("holland-echart"));
myChart.setOption(option); 