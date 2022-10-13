// 文章相关的API接口，都封装到这个模块中
import request from '@/utils/request.js'

// 向外按需导出一个API函数
export const getArticleListAPI = function (_page, _limit) {
  // 返回的是promise形式的
  return request.get('/articles', {
    // 请求参数
    params: {
      _page: _page,
      _limit: _limit
    }
  })
}
