const Dashboard = (props) => {
  const { purpose } = 'purpose' in props && props

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{purpose}</p>
    </div>
  )
}

export default Dashboard
