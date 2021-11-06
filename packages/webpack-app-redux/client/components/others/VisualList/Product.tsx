export default function Product({
  index,
  data,
}: {
  index: number
  data: number
}) {
  return (
    <div className="product">
      <div className="main">{data}</div>
      <div style={{ display: 'flex' }}>
        <span className="footer">{index}</span>
      </div>
    </div>
  )
}
