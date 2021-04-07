import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Component = (props) => {
    return (
        <>
            <div className="list_div">
                <DeleteIcon className="button2" onClick={() => {
                    props.del(props.id);
                }} />
                <li >{props.value}</li>
            </div>
        </>
    );
}
export default Component;