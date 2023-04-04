import React from 'react'
import DashboardUser from '../../components/DasboardUser/DashboardUser'
import DashboardCompany from '../../components/DashboardCompany/DashboardCompany'

const Dashboard = () => {
  const userType = 'user'
  return (
    <div>
      <h1>Dashboard</h1>
      {userType === 'user'
        ? <DashboardUser />
        : <DashboardCompany />}
    </div>
  )
}

export default Dashboard
