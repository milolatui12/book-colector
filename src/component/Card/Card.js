import React from 'react';

const Card = ({imgUrl, titles}) => {
    return (
        <div className="bg-light-blue dib br3 pa4 ma2 grow bw4 shadow-5" style={{ width: 300 }}>
            <div>
            <img alt='book images' src={imgUrl} style={{ height: 200, width: 150 }} />
                <h2 className='f6'>{titles}</h2>
            </div>
        </div>
    )
}
export default Card;