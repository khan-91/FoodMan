import React from 'react'
import dateFormat from 'dateformat';
const LoadCommentsComponent = ({ comments }) => {
    const previewComments = comments.map((c) => {
        return (
            <div key={c.id}>
                <h5>{c.author}</h5>
                <p>{c.comment}  <span style={{ color: 'orange', fontWeight: 'bold' }}> Rating:</span> {c.rating}</p>
                <p>{dateFormat(c.date, "dddd, mmmm dS, yyyy")}</p>

            </div>
        );
    });

    return (
        <div>{previewComments}</div>
    )
}

export default LoadCommentsComponent