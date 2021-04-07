<template>
  <div class="chart-container">
    <h2 class="chart-title">
      折线图
    </h2>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import data from '@/data/data3'
import { Line } from '@antv/g2plot'

export default {
  name: 'LineOne',
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.initChart()
  },
  beforeDestroy () {
  },
  methods: {
    initChart () {
      const initData = []
      data.forEach(item => {
        initData.push({
          year: item.year,
          value: item.value,
          type: 'value'
        })
        initData.push({
          year: item.year,
          value: item.count,
          type: 'count'
        })
      })
      const initOption = {
        data: initData,
        autoFit: true,
        xField: 'year',
        yField: 'value',
        seriesField: 'type',
        smooth: true,
        appendPadding: [-5, 16, 8, 16],
        colorField: 'type',
        color: ['#00f2f1', '#ed3f35'],
        point: {
          shape: 'circle',
          size: 3
        },
        legend: {
          position: 'top-right',
          offsetX: -20,
          itemName: {
            formatter: (text) => {
              if (text === 'value') {
                return '新增粉丝'
              } else {
                return '新增游客'
              }
            },
            style: {
              fill: '#4c9bfd'
            }
          }
        },
        yAxis: {
          line: {
            style: {
              stroke: '#012f4a'
            }
          },
          grid: {
            line: {
              style: {
                stroke: '#012f4a'
              }
            }
          }
        },
        xAxis: {
          tickLine: null,
          line: {
            style: {
              stroke: '#012f4a'
            }
          },
          grid: {
            line: {
              style: {
                stroke: '#012f4a',
                lineWidth: 1
              }
            }
          }
        }
      }
      this.chart = new Line(this.$refs.chart, initOption)
      this.chart.render()
    }
  }
}
</script>

<style lang="scss" scoped></style>
