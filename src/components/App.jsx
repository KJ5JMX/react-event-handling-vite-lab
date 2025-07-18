import { useState } from 'react'
import '../App.css'
import PasswordInput from './PasswordInput'
import SubmitButton from './SubmitButton'

function App() {
  const [password, setPassword] = useState('');

  function handlePasswordChange(newPassword) {
    setPassword(newPassword);
    console.log('Password updated in App', newPassword);
  }

  return (
    <div>
      <h1>Password Form</h1>
      <PasswordInput onPasswordChange={handlePasswordChange} />
      <SubmitButton password={password} onPasswordChange={handlePasswordChange}/>

    </div>
  )
}

export default App
