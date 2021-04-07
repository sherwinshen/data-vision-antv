<template>
  <div class="chart-container">
    <h2 class="chart-title">
      饼形图
    </h2>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import data from '@/data/data4'
import { Pie } from '@antv/g2plot'

export default {
  name: 'PieOne',
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
      const initOption = {
        data,
        appendPadding: [16, 8, 8, 8],
        autoFit: true,
        statistic: {
          title: false,
          content: false
        },
        angleField: 'value',
        colorField: 'type',
        color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
        radius: 1,
        innerRadius: 0.64,
        pieStyle: {
          stroke: '',
          cursor: 'pointer'
        },
        label: false,
        tooltip: {
          showTitle: true,
          //   customContent: (type, item) => {
          //     console.log(item)
          //     if (item.length > 0) {
          //       return `分类占比<br>${item[0].name}: ${item[0].value}`
          //     }
          //   },
          title: '分类占比'
        },
        legend: {
          position: 'bottom',
          itemSpacing: 8,
          itemName: {
            style: {
              fill: '#969dac'
            }
          },
          marker: {
            symbol: 'square',
            spacing: 3
          }
        },
        interactions: [
          { type: 'element-selected' },
          { type: 'element-active' }
        ],
        state: {
          active: {
            style: ele => {
              const shape = ele.shape
              return {
                lineWidth: 10,
                stroke: shape.attr('fill'),
                strokeOpacity: 1
              }
            }
          }
        }
      }
      this.chart = new Pie(this.$refs.chart, initOption)
      this.chart.render()
    },
    // 页面自适应
    screenAdapter () {
      // this.chart.changeSize(document.getElementsByClassName('screen-main')[0].clientWidth * 3 / 11)
    }
  }
}
</script>

<style lang="scss" scoped></style>
