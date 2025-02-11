import React from 'react';
import {Rating} from "@mui/material";

const StarsRating = ({rating}: { rating: number }) => {
    return (
        <div>
            <Rating name="half-rating-read"
                    defaultValue={rating}
                    max={10}
                    size={'medium'}
                    precision={0.1} readOnly
                    className="w-auto"
            />
        </div>
    );
};

export default StarsRating;