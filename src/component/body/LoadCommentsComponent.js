import dateFormat from 'dateformat';

const LoadCommentsComponent = ({ comments }) => {
  if (!comments || comments.length === 0) return <p>No comments found.</p>;

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

export default LoadCommentsComponent;
