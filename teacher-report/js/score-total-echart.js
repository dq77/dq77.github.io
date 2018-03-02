



$(function(){
    var myChart = echarts.init(document.getElementById('scorebyclass'));
    
            // 指定图表的配置项和数据
            var option = {
                title: {
                },
                tooltip: {
                    trigger: 'axis',
                    type: "value"
                },
                xAxis: {
                    boundaryGap : false,
                    name: '分数段',
                    axisLabel:{
                        interval:0,
                        rotate:35,//倾斜度 -90 至 90 默认为0
                        margin:10,
                        textStyle:{
                            color:"#000000"
                        }
                    }, 	
                    data: ["[0,50]","[50,100]","[100,150]","[150,200]","[200,250]","[250,300]","[300,350]","[350,400]","[400,450]","[450,500]","[500,550]","[550,600]","[600,650]","[650,700]","[700,720]"]
                },
                yAxis: {
                    type: 'value',
                    name: '占比',
                    min: 0,
                    max: 100,
                    interval: 10,
                },
                series: [{
                    name: '分段',
                    type: 'bar',
                    barWidth : 40,
                    itemStyle:{
                        normal:{
                            color:'#99cc82'
                        }
                    },
                    data: [ 0, 1, 1, 1, 0, 0, 0,4, 7, 26, 45, 28, 7, 1, 0]
                }]
            };
    
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
});

