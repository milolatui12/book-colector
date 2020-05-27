import React from 'react';
import book_logo from './book-logo.png'
import Tilt from 'react-tilt';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '5px'}} alt='logo' src={book_logo} />
                </div>
            </Tilt>
        </div>
    )
}
export default Logo;