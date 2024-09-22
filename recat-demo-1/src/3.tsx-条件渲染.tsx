const isLogin: boolean = new Date().getTime() % 2 === 0


function App () {
  return (
    <div className="App">
      {isLogin}
      {/* 逻辑与 &&, 如果前面为true，则渲染后面, 否则不渲染 */}
      {isLogin && <h1>Welcome to React App</h1>}
      {/* 三元运算 */}
      {isLogin? <h1>Welcome to React App</h1> : <h1>Please login first</h1>}
    </div>
  )
}

export default App
