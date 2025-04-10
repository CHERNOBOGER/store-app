import React from 'react';

const RatingStars = ({ rating }) => {
    const roundedRating = Math.round(rating);

    return (
        <div className="rating">
            {[...Array(5)].map((_, i) => (
                <span key={i} className={i < roundedRating ? 'star filled' : 'star'}>
          ★
        </span>
            ))}
        </div>
    );
};

export default RatingStars;