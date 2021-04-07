<template>
  <div class="chart-container">
    <h2 class="chart-title">
      就业行业 —— <span @click="updateChart(2019)">2019</span>/<span @click="updateChart(2020)">2020</span>
    </h2>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import { Column } from '@antv/g2plot'
import data from '@/data/data1'

export default {
  name: 'BarOne',
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.initChart()
    window.addEventListener('resize', this.screenAdapter)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    // 初始化
    initChart () {
      const initData = data[2019]
      const initOption = {
        data: initData,
        autoFit: true,
        appendPadding: [8, 16, 8, 8],
        limitInPlot: false,
        maxColumnWidth: 20,
        xField: 'title',
        yField: 'num',
        color: '#3089cf',
        xAxis: {
          nice: true,
          label: {
            style: {
              fontSize: 10,
              fill: '#969dac'
            },
            autoHide: true
          },
          line: {
            style: {
              stroke: '#252d54'
            }
          },
          grid: {
            line: {
              style: {
                stroke: '#252d54'
              }
            }
          }
        },
        yAxis: {
          nice: true,
          tickInterval: 300,
          label: {
            style: {
              fontSize: 10,
              fill: '#969dac'
            },
            autoHide: true
          },
          line: {
            style: {
              stroke: '#252d54'
            }
          },
          grid: {
            line: {
              style: {
                stroke: '#252d54'
              }
            }
          }
        },
        meta: {
          num: {
            alias: '数量'
          }
        }
      }
      this.chart = new Column(this.$refs.chart, initOption)
      this.chart.render()
    },
    // 更新
    updateChart (type) {
      this.chart.changeData(data[type])
    },
    // 页面自适应
    screenAdapter () {
      this.chart.changeSize(document.getElementsByClassName('screen-main')[0].clientWidth * 3 / 11)
    }
  }
}
</script>

<style lang="scss" scoped></style>
