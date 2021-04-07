$(function(){
    var myChart = echarts.init(document.getElementById('option-rate-echart'));
    option = {
        backgroundColor: "#fff",
        color:['#9DC979','#FABF44', '#ED8583', '#89CFD5'],
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '85%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter:"{b}：{c}人 （占全班{d}%）",
                        fontSize:14
                    }
                },
                itemStyle:{
                    normal:{
                        borderColor: "#fff",
                        borderWidth: "2"
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length:10,
                        length2:10
                    }
                },
                data:[
                    {value:25, name:'A'},
                    {value:12, name:'B'},
                    {value:13, name:'C'},
                    {value:50, name:'D'}
                ]
            }
        ]
    };
    myChart.setOption(option);
});