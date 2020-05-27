import React from 'react';
import Card from '../Card/Card';

const CardList = ({books}) => {
    return (
        <div>
          {
            books.map((user, i) => {
              return (
                <Card
                  key={i}
                  imgUrl={books[i].imgurl}
                  titles={books[i].titles}
                />
              );
            })
          }
        </div>
      );
}

export default CardList; 