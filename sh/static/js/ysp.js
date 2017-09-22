// 衍生品日
var optiondata1 = {
  title: {
    text: '营业额(元)',
    top: '6%',
    left:'16%',
     textStyle: {
      fontSize: '15',
      fontWeight: 'normal'
    }
  },
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
    left: '-40%',
    right: '4%',
    bottom: '14%',
    containLabel: true
  },
  xAxis : [
    {
      type : 'category',
      data : ['B2F\n零售店', '118F\n零售店'],
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
      name:'衍生品',
      type:'bar',
      barWidth: '20',
      data:[23787, 19345],
      itemStyle: {
        normal: {
          color: function(params) {
            var colorList = [
              '#ffb359','#0f98e7'
            ];
            return colorList[params.dataIndex]
          },
          label: {
            show: true,
            position: 'top',
          }
        }
      },
    }
  ]
};
// 横向柱状图
var optiondata2 = {
  title: {
    text: '每单商品数(个)',
    top: '6%',
    textStyle: {
      fontSize: '15',
      fontWeight: 'normal'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    show: false,
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['B2F零售店','118F零售店'],
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
      name: '商品个数',
      type: 'bar',
      barWidth: '15',
      data: [182,345],
      itemStyle: {
        normal: {
          color: function(params) {
            var colorList = [
              '#ffb359','#0f98e7'
            ];
            return colorList[params.dataIndex]
          },
          label: {
              show: true,
              position: '',
          }
        }
      }
    }
  ]
};
var optiondata3 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    show: false,
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['摩天VR40元','上海中心之水','雅壳照片6张\n8寸照片200元'],
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
      name: '',
      type: 'bar',
      barWidth: '15',
      data: [113,196,225],
      itemStyle: {
        normal: {
    　　　color: function(params) {
            var colorList = [
              '#f8a20f','#5faee3','#a9d86e'
            ];
            return colorList[params.dataIndex]
          },
          label: {
            show: true,
            position: '',
          }
        }
      }
    }
  ]
};
//衍生品横向柱状图
var option4 = {
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      }
  },
  grid: {
      left: '3%',
      right: '4%',
      top: '20%',
      bottom: '5%',
      containLabel: true
  },
  xAxis: {
      show: false,
      type: 'value',
      boundaryGap: [0, 0.01]
  },
  yAxis: {
      type: 'category',
      data: ['摩天VR40元','上海中心之水','雅壳照片6张\n8寸照片200元'],
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
        name: '',
        type: 'bar',
        barWidth: '15',
        data: [113,196,225],
        itemStyle: {
          normal: {
      　　　　　 color: function(params) {
              var colorList = [
                '#f8a20f','#5faee3','#a9d86e'
              ];
              return colorList[params.dataIndex]
            },
          label: {
              show: true,
              position: '',
          }
        }
      }
    }
  ]
};