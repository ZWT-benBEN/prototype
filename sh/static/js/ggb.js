// 日完成

var optiondata = {
  grid: {
    left: '-20%',
    right: '30%',
    tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c}"+"万元"+" ({d}%)"
  }
},
color: ['#3474c4', '#0db789', '#ffb359'],
legend: {
    orient: 'vertical',
    x: 'left',
    left: '63%',
    y: 'middle',
    data:['包场','观光门票','VIP客户']
},
series: [
    {
        name:'营业数据',
        type:'pie',
        radius: ['50%', '70%'],
        center: ['30%', '50%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            formatter:function(a,b,c){
                return c+"%";
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data:[
            {value:335, name:'包场'},
            {value:310, name:'观光门票'},
            {value:234, name:'VIP客户'}
        ]
    }
  ]
};
var optionNum = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
      top: '10%',
      bottom: '40%'
    },
    xAxis:  {
        splitLine: {
            show: false
        },
        axisLabel:{
          textStyle: {
            color: '#777'
          }
        },
        axisLine: {
          onZero: true,
          lineStyle: {
            color: '#eaeaea'
          }
        },
        type: 'category',
        boundaryGap: false,
        data: ['9\n点\n之\n前','9\n|\n10\n点','10\n|\n11\n点','11\n|\n12\n点','12\n|\n13\n点','13\n|\n14\n点','14\n|\n15\n点','15\n|\n16\n点','16\n|\n17\n点','17\n|\n18\n点','18\n|\n19\n点','19\n|\n20\n点','20\n|\n21\n点','21\n点\n之\n后']
    },
    yAxis: {
        type: 'value',
        axisLine: {
          onZero: true,
          lineStyle: {
            color: '#eaeaea'
          }
        },
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#777'
          }
        }
    },
    series: [
        {
            name:'参观人数',
            type:'line',
            smooth:true,
            symbol: 'circle',
            itemStyle : {    
                normal : {    
                    color: '#5aceb1',
                    lineStyle:{    
                        color:'#5aceb1'    
                    }   
                }    
            },
            data:[21, 150, 297, 424, 301, 386,421,389,406,305,223,283,145,30]
        }
    ]
};