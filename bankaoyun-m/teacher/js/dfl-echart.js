$(function(){
    var myChart = echarts.init(document.getElementById('dfl_chart'));
    option = {
        color:  ['#F4DCBB','#C2EDEF','#FD8257','#7ACE00','#52C1EB','#C7B4E5','#CAECBA'],
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
            data:['2017年应届得分率','2012-2016得分率','班级整体得分率','班级前20%得分率','班级中50%得分率','班级后30%得分率'],
            itemGap: 10,
            selected: {
                '班级前20%得分率': false,
                '班级中50%得分率': false,
                '班级后30%得分率': false,
            }
        },
        grid: {
            left: '28px',
            right: '48px',
            top: '92px'
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
            },
            {
                type: 'category',
                data : [' ',' '],
                boundaryGap: false
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
                }
            },
            {
                name:'班级整体得分率',
                type:'line',
                xAxisIndex:1,
                data:[0.691, {
                    value: 0.691,
                    symbol: 'arrow',
                    symbolSize: 14,
                    symbolRotate: -90,
                    symbolOffset:[10, 0],
                    label:{
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '0.691',
                            offset: [0,-8]
                        }
                    }
                }],
                symbolSize: 0,
                tooltip: {
                    formatter: '班整体：0.691'
                }
            },
            {
                name:'班级前20%得分率',
                type:'line',
                xAxisIndex:1,
                data:[0.790, {
                    value: 0.790,
                    symbol: 'arrow',
                    symbolSize: 14,
                    symbolRotate: -90,
                    symbolOffset:[10, 0],
                    label:{
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '0.790',
                            offset: [0,-8]
                        }
                    }
                }],
                symbolSize: 0,
                tooltip: {
                    formatter: '班前20%：0.790'
                }
            },
            {
                name:'班级中50%得分率',
                type:'line',
                xAxisIndex:1,
                data:[0.612, {
                    value: 0.612,
                    symbol: 'arrow',
                    symbolSize: 14,
                    symbolRotate: -90,
                    symbolOffset:[10, 0],
                    label:{
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '0.612',
                            offset: [0,-8]
                        }
                    }
                }],
                symbolSize: 0,
                tooltip: {
                    formatter: '班中50%：0.612'
                }
            },
            {
                name:'班级后30%得分率',
                type:'line',
                xAxisIndex:1,
                data:[0.423, {
                    value: 0.423,
                    symbol: 'arrow',
                    symbolSize: 14,
                    symbolRotate: -90,
                    symbolOffset:[10, 0],
                    label:{
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '0.423',
                            offset: [0,-8]
                        }
                    }
                }],
                symbolSize: 0,
                tooltip: {
                    formatter: '班后30%：0.423'
                }
            }
        ]
    };
    myChart.setOption(option);
});