import React from 'react';

const Box = () => {
    return (
        <div className="hero-box">
            <img src="/profile2.png" className="w-full h-full object-cover" loading="lazy"
                srcSet="/profile2-320w.png 320w, /profile2-480w.png 480w, /profile2-800w.png 800w"
                sizes="(max-width: 600px) 100vw, 50vw"
            />
        </div>
    );
};

export default Box;
