$(function(){
    var myChart = echarts.init(document.getElementById('scoring-average'));
    option = {
        dataZoom : [{
            type: 'slider',
            zoomLock: false,
            endValue: 3, // 最多放3+1个数据
            bottom: 0,
            height: 20,
            textStyle:{
                color: 'rgba(0,0,0,0)'
            },
            dataBackground: {
                areaStyle:{
                    color: '#BECACF'
                }
            },
            backgroundColor: '#F7F7F7',
            fillerColor: 'rgba(197,224,244,0.4)',
            borderColor: '#C5E0F4'
        }],
        color:  ['#CAECBA','#F4DCBB','#C2EDEF'],
        textStyle: {
            fontSize: 10
        },
        tooltip : {
            trigger: 'item',
            formatter: function(param){
                var str = param.seriesName + "<br/>";
                str += param.name + "：" + param.data;
                return str;
            }
        },
        legend: {
            data:['班级得分率','2017年应届得分率','2012-2016得分率']
        },
        grid: {
            left: '24px',
            right: '28px'
        },
        xAxis : [
            {
                type : 'category',
                data : ['全省平均','前20%学生层','中50%学生层','后30%学生层','全省一本','全省培优'],
                axisLabel:{
                    rotate : 25,
                    interval: 0,
                    textStyle :{
                        fontSize: 10
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel:{
                    textStyle :{
                        fontSize: 10
                    }
                }
            }
        ],
        series : [
            {
                name:'班级得分率',
                type:'bar',
                data:[0.48, 0.76, 0.58, 0.48, 0.72, 0.88],
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            textStyle: {
                                color: '#8CC21F',
                            }
                        }
                    }
                }
            },
            {
                name:'2017年应届得分率',
                type:'bar',
                data:[0.59, 0.78, 0.59, 0.40, 0.8, 0.95],
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            textStyle: {
                                color: '#F6AC2D',
                            }
                        }
                    }
                }
            },
            {
                name:'2012-2016得分率',
                type:'bar',
                data:[0.6, 0.84, 0.53, 0.47, 0.81, 0.97],
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            textStyle: {
                                color: '#74C9EA',
                            }
                        }
                    }
                },
                markLine: {
                    data: [{
                        yAxis: '0.42'
                    }],
                    tooltip: {
                        formatter:'该学生的得分率：{c}'
                    },
                    itemStyle: {
                        normal: {
                            color: '#FD8257',
                            lineStyle: {
                                type: 'solid',
                                width: 2
                            }
                        }
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
});