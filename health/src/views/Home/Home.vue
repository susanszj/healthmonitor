<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <van-cell title="下午好" value="" fixed/>

    <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad">

    <!-- 饮酒状况 -->
    <van-cell-group inset>
      <DrinkInfo></DrinkInfo>
    </van-cell-group>

    <!-- 可穿戴设备健康指标 -->
    <div style="font-size:10px;margin-top:10px;margin-left:18px">可穿戴设备</div>
    <HealthInfo
    class="health_fact"
    ></HealthInfo>

    <!-- 行为状态 -->
    <div style="font-size:10px;margin-top:10px;margin-left:18px">行为状态</div>
    <BehaviorInfo></BehaviorInfo>

    </van-list>
</div>

</template>

<script>
import { getArticleListAPI } from '@/API/articleAPI.js'
import HealthInfo from '@/components/article/HealthInfo.vue'
import BehaviorInfo from '@/components/article/BeHavior'
import DrinkInfo from '@/components/article/DrinkInfo.vue'

export default {
  name: 'HomeCom',
  data () {
    return {
      // 页码值
      page: 1,
      // 每页显示多少数据
      limit: 10,
      artlist: [],
      // 是否在加载下一页数据，如果loading为true，则不会反复触发load事件
      // 每当该页数据返回回来之后，一定要把loading改为true
      loading: true,
      // 所有数据是否加载完毕了，如果没有更多数据了，一定要把finished改成true
      finished: false,
      // 是否正在下拉刷新
      isLoading: false
    }
  },
  // 在created中调用接口获取的方法
  created () {
    this.initArticleList()
  },
  // 封装获取文章列表数据的方法
  methods: {
    async initArticleList (isRefresh) {
    // 发起get请求，获取文章的列表数据
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // 如果上拉加载更多，那么应该是合成新数组
      // this。artlist = [旧数据，新数据]
      if (isRefresh) {
        this.artlist = [...res, ...this.artlist]
        this.isLoading = false
      } else {
        this.artlist = [...this.artlist, ...res]
        this.loading = false
      }

      if (res.length === 0) {
        // 证明没有数据了，直接把finished改为true，表示加载完了
        this.finished = true
      }
    },
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      console.log('触发load')
      // 1.让页码值+1
      this.page++
      // 2.重新请求接口数据
      this.initArticleList()
    },
    onRefresh () {
      console.log('触发下拉刷新')
      // 1.让页码值+1
      this.page++
      // 2.重新请求接口数据
      this.initArticleList(true)
    }
  },
  // 注册组件
  components: {
    HealthInfo,
    BehaviorInfo,
    DrinkInfo
  }
}
</script>

<style lang="less" scoped>
  .van-cell-group{
    // border: 0.2px solid #E5E5E5;
    box-shadow: 0 0 8px rgb(50, 229, 217);
    height:120px;
  }
  .home-container{
    padding:46px 0 50px 0;
    background-color: black;
    color:white;
  // border: 0.2px solid #E5E5E5;

  }
  .van-cell{
    margin-top: -45px;
    height: 40px;
    border-color:aqua;
  }
  // /deep/.van-nav-bar__left-text{
  //     color:#fff
  //   }
  /deep/.van-cell__title{
      color:#fff
    }

</style>
