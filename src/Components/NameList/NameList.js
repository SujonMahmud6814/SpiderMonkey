import React from 'react';

const NameList = (props) => {
    return (
        <div>
            <h4>Name: {props.member.name}</h4>
        </div>
    );
};

export default NameList;