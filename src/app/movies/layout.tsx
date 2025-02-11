import React, {ReactNode} from 'react';

export const metadata = {
    title: "Movies"
};

const MoviesLayout = ({children}: { children: ReactNode }) => {
    return (
        <div className="bg-blue-200 mt-5 rounded-[15px] shadow-4xl">
            {children}
        </div>
    );
};

export default MoviesLayout;