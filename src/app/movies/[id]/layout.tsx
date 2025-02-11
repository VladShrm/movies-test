import React, {ReactNode} from 'react';

export const metadata = {
    title: "Movie"
};

const MovieLayout = ({children}: { children: ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MovieLayout;