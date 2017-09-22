var option11 = {
  grid: {
        left: '-20%',
        rtooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c}"+"万元"+" ({d}%)"
    },ight: '30%',
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
}
// 完成情况option
var option3 = {
  title: {
      text: '本年预算1050',
      top: '25%',
      left: '55%',
    },
    grid: {
        left: '-20%',
        right: '30%',
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c}"+"万元"+" ({d}%)"
      },
    },
    color: ['#0f98e7', '#afe5f8'],
    legend: {
        orient: 'vertical',
        x: 'left',
        left: '55%',
        y: 'middle',
        top: '45%',
        data:['本年实际','距离预算']
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
                {value:450, name:'本年实际'},
                {value:600, name:'距离预算'}
            ]
        }
    ]
}
// 数据占比
var option1 = {
     grid: {
           left: '-20%',
           rtooltip: {
           trigger: 'item',
           formatter: "{a} <br/>{b}: {c}"+"万元"+" ({d}%)"
       },ight: '30%',
       },
       color: ['#3474c4', '#0db789', '#ffb359'],
       legend: {
           orient: 'vertical',
           x: 'left',
           left: '55%',
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
   }
var option2 = {
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
}

// echarts
// 数据趋势折线图
var optionDataLineY = {
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    top: '10%',
    bottom: '30%'
  },
  legend: {
    data:['B2F零售店','118F零售店'],
    bottom: '8%'
  },
  xAxis:  {
    type: 'category',
    boundaryGap: false,
    data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14'],
    axisLabel: {
      show: true,
      textStyle: {
        color: '#777'
      }
    },
    axisLine:{
      lineStyle:{
        color:'#e6e9f0'
      }
    }
  },
  yAxis: {
    type: 'value',
    data: [0, 10, 20, 30, 40, 50],
    axisLabel: {
      show: true,
      textStyle: {
        color: '#777'
      }
    },
    axisLine:{
      lineStyle:{
        color:'#e6e9f0'
      }
    }
  },
  series: [
    {
      name:'实际',
      type:'line',
      smooth: true,
      symbol: 'circle',
      itemStyle : {    
        normal : {    
          color: '#0f98e7',
          lineStyle:{    
            color:'#0f98e7'    
          }
        }    
      },
      data:[22, 15, 29, 42, 30, 38, 41, 12, 15, 29, 42, 30, 38, 41]
    },
    {
      name:'预算',
      type:'line',
      smooth: true,
      symbol: 'circle',
      itemStyle : {    
        normal : {    
          color: '#afe5f8',
          lineStyle:{    
            color:'#afe5f8'    
          }
        }    
      },
      data:[28, 15, 22, 26, 21, 16, 21,28, 15, 22, 26, 21, 16, 21]    
    }
  ]
}
// 完成率趋势图
var optionPercentLineY = {
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    top: '10%',
    bottom: '40%',
    show: false
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
      show:false,
      onZero: false,
      lineStyle: {
        color: '#eaeaea'
      }
    },
    type: 'category',
    boundaryGap: false,
    data: ['1月','2月','3月','4月','5月','6月','7月']
  },
  yAxis: {
    type: 'value',
    min: '0',
    max: '150',
    axisLine: {
      show: true,
      onZero: true,
      lineStyle: {
        color: '#eaeaea'
      }
    },
    splitLine:{
      show: true
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
      name:'完成率',
      type:'line',
      smooth:true,
      symbol: 'circle',
      symbolSize: 5,
      itemStyle : {    
        normal : {    
          color: '#5aceb1',
          lineStyle:{    
            color:'#5aceb1',
          },
          label: {
            show: true
          }
        }    
      },
      data:['68','106','70','81','110','120','73']
    }
  ]
}
//衍生品营业数据柱状图
var optionyspLineY = {
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    top: '10%',
    bottom: '30%'
  },
  legend: {
    data:['B2F零售店','118F零售店'],
    bottom: '8%'
  },
  xAxis:  {
    type: 'category',
    boundaryGap: false,
    data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14'],
    axisLabel: {
      show: true,
      textStyle: {
        color: '#777'
      }
    },
    axisLine:{
      lineStyle:{
        color:'#e6e9f0'
      }
    }
  },
  yAxis: {
    type: 'value',
    data: [0, 10, 20, 30, 40, 50],
    axisLabel: {
      show: true,
      textStyle: {
        color: '#777'
      }
    },
    axisLine:{
      lineStyle:{
        color:'#e6e9f0'
      }
    }
  },
  series: [
    {
      name:'B2F零售店',
      type:'line',
      smooth: true,
      symbol: 'circle',
      itemStyle : {    
        normal : {    
          color: '#1bb5ec',
          lineStyle:{    
            color:'#1bb5ec'    
          },
          label: {
            show: true,
            position: [-5,-26]
          }
        }    
      },
      data:[22, 15, 29, 42, 30, 38, 41, 12, 15, 29, 42, 30, 38, 41]
    },
    {
      name:'118F零售店',
      type:'line',
      smooth: true,
      symbol: 'circle',
      itemStyle : {    
        normal : {    
          color: '#ffb359',
          lineStyle:{    
            color:'#ffb359'    
          },
          label: {
            show: true,
            position: [-5,-26]
          }
        }    
      },
      data:[28, 15, 22, 26, 21, 16, 21,28, 15, 22, 26, 21, 16, 21]    
    }
  ]
}
