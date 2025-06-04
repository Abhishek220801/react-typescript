import { useState } from 'react'

const UserProfile = () => {
    type UserProfileTypes = {
        name: string,
        age: number,
        email: string
    }

    const [profile, setProfile] = useState<UserProfileTypes>({
        name: 'Abhishek',
        age: 23,
        email: 'abhi.sankhwar22@gmail.com'
    })

    const updateName = (name: string) => {
        setProfile((prevProfile)=> ({...prevProfile, name}));
    }

    const updateAge = (age: string) => {
        setProfile((prev)=>({...prev, age: +age}));
    }

    const updateEmail = (email: string) => {
        setProfile((prev)=>({...prev, email}));
    }
  return (
    <div>
        <h1>User Profile 👇🏼</h1>
      <input type="string" placeholder="Name" value={profile.name} onChange={(e)=>updateName(e.target.value)}/>
      <input type="number" placeholder='Age' value={profile.age>0 ? profile.age: ''} onChange={(e)=>updateAge(e.target.value)}/>
      <input type="string" placeholder='Email' value={profile.email} onChange={(e)=>updateEmail(e.target.value)}/>
      <h3>Profile Summary: </h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>Email: {profile.email}</p>
    </div>
  )
}

export default UserProfile
