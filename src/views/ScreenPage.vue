<template>
  <div class="screen-container">
    <header class="screen-header">
      <h1>数据可视化大屏</h1>
      <span class="showTime">当前时间: {{ time }}</span>
    </header>
    <section class="screen-main">
      <div class="column">
        <div class="panel">
          <BarOne/>
        </div>
        <div class="panel">
          <LineOne/>
        </div>
        <div class="panel">
          <PieOne/>
        </div>
      </div>
      <div class="column">
        <Number/>
        <Map/>
      </div>
      <div class="column">
        <div class="panel">
          <BarTwo/>
        </div>
        <div class="panel">
          <LineTwo/>
        </div>
        <div class="panel">
          <PieTwo/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BarOne from '@/components/BarOne'
import BarTwo from '@/components/BarTwo'
import LineOne from '@/components/LineOne'
import LineTwo from '@/components/LineTwo'
import PieOne from '@/components/PieOne'
import PieTwo from '@/components/PieTwo'
import Number from '@/components/Number'
import Map from '@/components/Map'

// 创建一个函数来增加月日时小于10在前面加0
const completeDate = function (value) {
  return value < 10 ? '0' + value : value
}

export default {
  name: 'ScreenPage',
  components: {
    BarOne,
    BarTwo,
    LineOne,
    LineTwo,
    PieOne,
    PieTwo,
    Number,
    Map
  },
  data () {
    return {
      time: '',
      timer: null
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      // 创建一个时间日期对象
      const date = new Date()
      // 返回格式化后的日期
      this.time = `${date.getFullYear()}-${completeDate(date.getMonth() + 1)}-${completeDate(date.getDate())}  ${completeDate(date.getHours())}:${completeDate(date.getMinutes())}:${completeDate(date.getSeconds())}`
    }, 100)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
