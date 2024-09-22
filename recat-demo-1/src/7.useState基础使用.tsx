// useState实现一个计数器按钮
import { useState } from 'react'

// useState 是一个 React Hook（函数），它允许我们向组件添加一个`状态变量`, 从而控制影响组件的渲染结果
//和普通JS变量不同的是，状态变量一旦发生变化组件的视图UI也会跟着变化（数据驱动视图）

function App () {
  // 1. 调用 useState 添加一个状态变量
  // useState 返回一个数组，数组的第一个元素是状态变量，第二个元素是修改状态变量的方法
  // count 状态变量
  // setCount 修改状态变量的方法
  // 0 作为 count 的初始值
  let [count, setCount] = useState(0)

  // 2. 点击事件回调
  const handleClick1 = () => {
    // 作用:
    // 1. 用传入的新值修改count
    // 2. 重新使用新的count渲染UI
    setCount(count + 1)
  }

  const handleClick2 = () => {
    function setCount1(count: number) {
      return count + 2
    }
    // 作用:
    // 1. 用传入的新值修改count
    // 2. 重新使用新的count渲染UI
    setCount(setCount1(count))
  }
  return (
    <div>
      <button onClick={handleClick1}>click me {count}</button>
      <br />
      <button onClick={handleClick2}>click me {count}</button>
    </div>
  )
}

export default App
