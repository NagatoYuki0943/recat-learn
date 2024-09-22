// React中的事件绑定，通过语法 `on + 事件名称 = { 事件处理程序 }`，整体上遵循驼峰命名法


function App () {
  // 基础绑定
  const handleClick1 = () => {
    console.log('button被点击了')
  }

  // 事件参数e
  const handleClick2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('button被点击了', e)
  }

  // 传递自定义参数
  const handleClick3 = (name: string) => {
    console.log('button被点击了', name)
  }

  // 既要传递自定义参数 而且还要事件对象e
  const handleClick4 = (name: string, e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('button被点击了', name, e)
  }

  return (
    <div className="App">
      <button onClick={handleClick1}>click me</button>
      <br />
      <button onClick={(e) => handleClick2(e)}>click me 事件参数e</button>
      <br />
      <button onClick={() => handleClick3('jack')}>click me 传递自定义参数</button>
      <br />
      <button onClick={(e) => handleClick4('jack', e)}>click me 既要传递自定义参数 而且还要事件对象e</button>
    </div>
  )
}

export default App
