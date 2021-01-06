import './addBlogDetail.css';
import React from 'react';
import { Link} from 'react-router-dom';

function AddBlogInfo(props) {
    const { name, catchPhrase, bs } = props.company;

    return (
        <Link to={`/post/${props.id}`}>
        <div className='blog' >

            <h2>{props.name}</h2>
            <h3>{props.website}</h3> 
                <div>
                    {name}
                    <p>{catchPhrase}</p>
                    {bs}
                </div>
            </div>
        </Link>
    );
}

export default AddBlogInfo;

