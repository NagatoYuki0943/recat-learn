// 定义文章类型
const articleType: number = 3  // 0 1 3


function getArticleList () {
  if (articleType === 0) {
    return <div>无图文章</div>
  } else if (articleType === 1) {
    return <div>1图文章</div>
  } else if (articleType === 3) {
    return <div>多图文章</div>
  }
}


function App () {
  return (
    <div className="App">
      {/* 调用函数渲染不同的模版 */}
      {getArticleList()}
    </div>
  )
}

export default App
