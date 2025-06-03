import './App.css'
import AdminInfo from './components/AdminInfo'
import Button from './components/Button'
import User from './components/User'
import UserInfo from './components/UserInfo'
import type { AdminInfoList, Info } from './types'

function App() {
  const user : Info = {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com'
  }
  const admin : AdminInfoList = {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@gmail.com',
    role: 'admin',
    lastLogin: new Date(),
  }
  return (
    <div>
      <UserInfo user={user}/>
      <AdminInfo admin={admin}/>
    </div>
  )
}

export default App
