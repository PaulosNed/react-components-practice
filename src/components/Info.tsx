import React from 'react'
import Link from './Link'

interface InfoProps {
    name: string,
    bio: string,
    link?: string
}

const Info: React.FC<InfoProps> = ({name, bio, link}) => {
  return (
        <div className="p-5">

            {/* Name section */}
            <p>
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{name}</h5>
            </p>

            {/* Bio section */}
            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{bio}</p>

            {/* Link section that shows a website link if avialable */}
            {link && <Link link={link}/>}
        </div>
  )
}

export default Info