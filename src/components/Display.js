import React from 'react'

export const Display = ({info}) => {
    return (
        <div>
        {info.map(movie => {
            return (
              <div key={movie.id}>
                <h1>Channerl name: {movie.channel_name}</h1>
                <h2>Video Title : {movie.video_title}</h2>                
                <img src={movie.thumbnail} alt="" />      
                <h1>{movie.percentage}</h1>                          
                
              </div>
            );
          })}
    </div>
    )
}
