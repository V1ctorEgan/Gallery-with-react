import React from 'react'

const Card = ({image}) => {
    const tags = image.tags.split(',')
  return (
     
        <div className="max-w-sm rounded overflow-hidden px-4    shadow-lg " >
          <br/>

          <img src={image.webformatURL} alt="a random " className="w-full "/>
          <div className=" px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
            photo by {image.user}
            </div>
            <ul className='list-style-none'>
              <li><strong> Views: {image.views}</strong></li>
              <li><strong> Downloads:{image.downloads}</strong></li>
              <li><strong> Likes: {image.likes}</strong></li>
            </ul>
          </div>
          <div className="px-6 py-4 ">
          {tags.map((tag, index)=> <span key={index}className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"> #{tag}</span>) }
          </div>
        </div>
     
  )
}

export default Card