// 在React中，一个组件就是**首字母大写的函数**，内部存放了组件的逻辑和视图UI, 渲染组件只需要把组件当成标签书写即可


// 1. 定义组件
function Button1() {
  return <button>click me!</button>
}

const Button2 = () => {
  // 业务逻辑组件逻辑
  return <button>click me!</button>
}

function App() {
  return (
    <div className="App">
      {/* 2. 使用组件（渲染组件） */}
      {/* 自闭和 */}
      <Button1 />
      <br />
      {/* 成对标签 */}
      <Button2></Button2>
    </div>
  )
}

export default App
