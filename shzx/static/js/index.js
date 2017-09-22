var optionDay = {
  backgroundColor: 'white',
  color: ['#3398DB'],
  tooltip : {
    show: false,
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '-5%',
    right: '4%',
    bottom: '14%',
    containLabel: true
  },
  xAxis : [
    {
      type : 'category',
      data : ['观光营业\n数据', '观光参观\n人数', '衍生品营\n业数据'],
      axisTick: {
        alignWithLabel: true
      },
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
    }
  ],
  yAxis : [
    {
      type : 'value',
      show : false
    }
  ],
  series : [
    {
      name:'观光部',
      type:'bar',
      barWidth: '40',
      barMinHeight: '20',
      data:[42.3085, 0.1845, 93.7900],
      label: {
            normal: {
                formatter: '{c}万'
            }
        },
      itemStyle: {
        normal: {
          color: function(params) {
            var colorList = [
              '#3474c4','#ffb359','#c35ded'
            ];
            return colorList[params.dataIndex]
          },　
          label: {
            show: true,
            position: 'top',
          }
        }
      }
    }
  ]
}
var optionMouthLine1 = {
  backgroundColor: 'white',
  color: ['#3398DB'],
  tooltip : {
    show: false,
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '-16%',
    right: '1%',
    bottom: '20%',
    containLabel: true
  },
  xAxis : [
    {
      type : 'category',
      data : ['观光营业\n数据','观光参观\n人数','衍生品营\n业数据'],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        show: true,
        interval:0,//横轴信息全部显示  
        rotate:0,//-30度角倾斜显示  
        textStyle: {
           color: '#777'
        }
      },
      axisLine:{
        lineStyle:{
            color:'#e6e9f0'
        }
      }
    }
  ],
  yAxis : [
    {
      type : 'value',
      show : false,
    }
  ],
  series : [
    {
      name:'月度实际',
      type:'bar',
      barWidth: '24',
      data:[1949.0304,12.741,24021.0933],
      barGap: '0',
      label: {
        normal: {
          formatter: '{c}万\n'
        }
        },
      itemStyle: {
        normal: {
          color:'#0f98e7',
          label: {
            show: true,
            position: 'top',
          }
        }
      }
    },
    {
      name:'月度预算',
      type:'bar',
      barWidth: '24',
      data:[1450,10,1441.41],
      label: {
        normal: {
          formatter: '{c}万'
        }
      },
      itemStyle: {
        normal: {
          color: '#afe5f8',
          label: {
            show: true,
            position: 'top',
          }
        }
      }
    }
  ]
}
// 月度完成柱状图右
var optionMouthLine2 = {
  backgroundColor: 'white',
  color: ['#3398DB'],
  tooltip : {
    show: false,
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '-25%',
    right: '1%',
    bottom: '20%',
    containLabel: true
  },
  xAxis : [
    {
      type : 'category',
      data : ['观光营业\n数据', '观光参观\n人数'],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        show: true,
        interval:0,
        textStyle: {
            color: '#777'
        }
      },
      axisLine:{
        lineStyle:{
            color:'#e6e9f0'
        }
      }
    }
  ],
  yAxis : [
    {
      type : 'value',
      show : false
    }
  ],
  series : [
    {
      name:'月度实际',
      type:'bar',
      barWidth: '24',
      data:[130, 240],
      barGap: '0',
      itemStyle: {
        normal: {
          color:'#0f98e7',
          label: {
            show: true,
            position: 'top',
          }
        }
      }
    },
    {
      name:'月度预算',
      type:'bar',
      barWidth: '24',
      data:[184, 999],
      itemStyle: {
        normal: {
          color: '#afe5f8',
          label: {
            show: true,
            position: 'top',
          }
        }
      }
    }
  ]
}
// 月度完成饼状图
var optionMouthPie1 = {
  tooltip: {
    show: false,
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  color: ['#3474c4', '#e6e9f0'],
  series: [
    {
      name:'访问来源',
      silent:true,
      type:'pie',
      hoverAnimation: false,
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
          normal: {
              show: true,
              position: 'center'
          },
          emphasis: {
              show: true,
              textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
              }
          }
      },
      labelLine: {
          normal: {
              show: false
          }
      },
      data:[
          {value:78, name:'78%'},
          {value:22, name:''}
      ]
    }
  ]
};
var optionMouthPie2 = {
  tooltip: {
    show: false,
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  color: ['#ffb359', '#e6e9f0'],
  series: [
    {
      name:'访问来源',
      silent:true,
      type:'pie',
      hoverAnimation: false,
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
          normal: {
              show: true,
              position: 'center'
          },
          emphasis: {
              show: true,
              textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
              }
          }
      },
      labelLine: {
          normal: {
              show: false
          }
      },
      data:[
          {value:85, name:'85%'},
          {value:15, name:''}
      ]
    }
  ]
};
var optionMouthPie3 = {
  tooltip: {
    show: false,
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  color: ['#c35ded', '#e6e9f0'],
  series: [
    {
      name:'访问来源',
      silent:true,
      type:'pie',
      hoverAnimation: false,
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
          normal: {
              show: true,
              position: 'center'
          },
          emphasis: {
              show: true,
              textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
              }
          }
      },
      labelLine: {
          normal: {
              show: false
          }
      },
      data:[
          {value:78, name:'78%'},
          {value:22, name:''}
      ]
    }
  ]
};
var optionMouthPie4 = {
  tooltip: {
    show: false,
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  color: ['#0db789', '#e6e9f0'],
  series: [
    {
      name:'访问来源',
      silent:true,
      type:'pie',
      hoverAnimation: false,
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
          normal: {
              show: true,
              position: 'center'
          },
          emphasis: {
              show: true,
              textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
              }
          }
      },
      labelLine: {
          normal: {
              show: false
          }
      },
      data:[
          {value:34, name:'34%'},
          {value:66, name:''}
      ]
    }
  ]
};
var optionMouthPie5 = {
  tooltip: {
    show: false,
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    top: 20
  },
  color: ['#1bb5ec', '#e6e9f0'],
  series: [
    {
      name:'访问来源',
      silent:true,
      type:'pie',
      hoverAnimation: false,
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
          normal: {
              show: true,
              position: 'center'
          },
          emphasis: {
              show: true,
              textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
              }
          }
      },
      labelLine: {
          normal: {
              show: false
          }
      },
      data:[
          {value:130, name:'130%'},
          {value:'', name:''}
      ]
    }
  ]
};
// 年度柱状图
var optionYearLine = {
  backgroundColor: 'white',
  color: ['#3398DB'],
  tooltip : {
    show: false,
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '-9%',
    right: '1%',
    bottom: '2%',
    containLabel: true
  },
  xAxis : [
    {
      type : 'category',
      data : ['观光营业\n数据', '观光参观\n人数', '衍生品\n营业数据','观光营业\n数据', '观光参观\n人数'],
      axisTick: {
        alignWithLabel: true
      },
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
    }
  ],
  yAxis : [
    {
      type : 'value',
      show : false
    }
  ],
  series : [
    {
      name:'年度实际',
      type:'bar',
      barWidth: '24',
      data:[1278, 789, 345, 130, 240],
      barGap: '0',
      itemStyle: {
        normal: {
          color:'#0f98e7',
          label: {
            show: true,
            position: 'top',
          }
        }
      }
    },
    {
      name:'年度预算',
      type:'bar',
      barWidth: '24',
      data:[1867, 254, 89, 184, 999],
      itemStyle: {
        normal: {
          color: '#afe5f8',
          label: {
            show: true,
            position: 'top',
          }
        }
      }
    }
  ]
}