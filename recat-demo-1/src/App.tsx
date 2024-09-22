// 导入样式
import './9.样式控制.css'

const style: React.CSSProperties = {
  color: 'red',
  fontSize: '50px'
}

function App () {
  return (
    <div>
      {/* 行内样式控制 */}
      <span style={style}>this is span</span>
      <br />
      {/* 通过class类名控制 */}
      <span className="foo">this is class foo</span>
    </div>
  )
}

export default App
