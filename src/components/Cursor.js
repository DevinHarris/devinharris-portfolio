import React, { useEffect, useRef, useState } from 'react';

const Cursor = () => {
    const cursorRef = useRef(null);
    const [coords, setCoords] = useState({});

    useEffect(() => {
        window.addEventListener('mousemove', e => {
            setCoords({
                x: e.clientX,
                y:  e.clientY
            })
        })
    }, [coords])
    
    return (
        <div className="cursor" ref={cursorRef} style={{ transform: `translate3d(${coords.x}px, ${coords.y}px, 0px)`  }}>
            DH.
        </div>
    )
}

export default Cursor;