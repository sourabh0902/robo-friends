import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'Scroll', height: '800px', padding: '1rem'}}>
            {props.children}
        </div>
    );
};

export default Scroll;