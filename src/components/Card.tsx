import React from 'react'
import { Profile } from '../models/Profile'
import Avatar from './Avatat'
import Info from './Info'

const Card: React.FC<Profile> = ({id, name, bio, avatar, link}) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <Avatar avatar={avatar}/>

        <Info name={name} bio={bio} link={link} />
    </div>
  )
}

export default Card