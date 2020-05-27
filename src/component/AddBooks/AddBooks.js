import React from 'react';

const AddBooks = ( {onRouteChange} ) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'center'}}>
            <p onClick={() => onRouteChange('addbooks')} className='f5 link dim black pa2 pointer'>Add your books</p>
        </nav>
    )
}
export default AddBooks;