// 项目的根组件
// App -> index.js -> public/index.html(root)

const count: number = 100

function getName (): string {
  return 'jack'
}

// 在JSX中可以通过 `大括号语法{}` 识别JavaScript中的表达式，比如常见的变量、函数调用、方法调用等等
function App () {
  return (
    <div className="App">
      this is a app
      {/* 使用引号传递字符串 */}
      {'this is a message'}
      {/* 识别js变量 */}
      {count}
      {/* 调用js函数 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().toLocaleDateString()}
      {/* 使用js对象 */}
      <div style={{color: 'red'}}>this is a div</div>
    </div>
  )
}

export default App
