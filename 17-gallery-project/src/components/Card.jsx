import React from 'react'

const Card = (props) => {
  return (
    <div> <a href={props.elem.url} target="_blank">
            <div className="h-40 w-44 bg-white  cursor-pointer text-sm active:scale-95 rounded-xl overflow-hidden max-sm:w-70">
              <img
                className="h-full w-full object-cover"
                src={props.elem.download_url}
              />
            </div>
            <h1 className="font-bold text-lg">{props.elem.author}</h1>
          </a></div>
  )
}

export default Card