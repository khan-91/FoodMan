import dateFormat from 'dateformat';
import { fetchComments } from '../../redux/ActionCreators';
import Loading from './Loading';

const LoadCommentsComponent = ({ comments, commentsIsLoading }) => {
  // if (!comments || comments.length === 0) return <p>No comments found.</p>;
  if (commentsIsLoading) {
    return <Loading />
  }
  else if (!comments || comments.length === 0) { // Check if filtered comments array is empty
    return <p>No comments found for this dish.</p>;
  }
  else {
    return (
      <div>
        {comments.map((c) => (
          <div key={c.id} style={{ marginBottom: '10px' }}>
            <p style={{ marginBottom: 0 }}>
              <strong>{c.author}</strong> <span style={{ color: 'orange' }}>({c.rating}★)</span>
            </p>
            <p style={{ marginBottom: 0 }}>{c.comment}</p>
            <small style={{ color: 'gray' }}>{dateFormat(c.date, "mmmm dS, yyyy")}</small>
            <hr />
          </div>
        ))}
      </div>
    );
  };
}
export default LoadCommentsComponent;
