// import SimpleForm from './components/SimpleForm/SimpleForm'

import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import Reuseable from './components/ReuseableForm/Reuseable'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
//  const handleSignUpSubmit = data =>{
//    console.log('Sign Up data', data)
//   }
//   const handleUpdateProfile = data =>{
//     console.log('Update profile', data)
//   }
  
  return (
    <>
      
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <Reuseable formTitle={'Sign Up'}
       handleSubmit={handleSignUpSubmit}>
       <div>
        <h2>Sign Up</h2>
        <p>Please Sign Up here</p>
        </div>
       </Reuseable>
      <Reuseable formTitle={'Profile Update'}
       handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
          <div>
            <h2>Update Form</h2>
            <p>Please Update here</p>
          </div>
        </Reuseable> */}
    </>
  )
}

export default App
