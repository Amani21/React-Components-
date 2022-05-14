import React from 'react'
import Adress from './Adress'
import FullName from './FullName'
import ProfilePhoto from './ProfilePhoto'

function Profile() {
  return (
    <div>
      <FullName />
      <ProfilePhoto />
      
       <Adress />
       
    </div>
  )
}

export default Profile