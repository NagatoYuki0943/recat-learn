import { useState } from 'react'

function App () {
  let [count, setCount] = useState(0)

  const handleClick = () => {
    // 直接修改, 值会修改, 但是无法引发视图更新
    // count++
    console.log(count)
    setCount(count + 1)
  }

  // 修改对象状态
  const [form, setForm] = useState({ name: 'jack', age: 20 })

  const changeForm = () => {
    // 错误写法：直接修改
    // form.name = 'john'
    // 正确写法：setFrom 传入一个全新的对象
    setForm({
      // 拆开原对象
      ...form,
      // 更新部分属性
      name: 'tom',
      age: 25
    })
  }

  // 修改列表状态
  const [list, setList] = useState([1, 2, 3])

  const changeList = () => {
    // 错误写法：直接修改
    // list[0] = 4
    // 正确写法：setList 传入一个全新的数组
    // setList([4, 5, 6])
    setList(list.map(item => item + 1))
  }

  return (
    <div>
      <button onClick={handleClick}>click me {count}</button>
      <br />
      <button onClick={changeForm}>change form {form.name} {form.age}</button>
      <br />
      <button onClick={changeList}>change list {list.join(',')}</button>
    </div>
  )
}

export default App
