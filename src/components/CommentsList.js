import dayjs from "dayjs";

function CommentsList({ comments }) {
  return (
    <ul className="comments-list">
      {comments?.map((comment) => (
        <li key={comment.id} className="comments-list__item">
          <img className="comments-list__item-avatar user-avatar" alt="" />

          <div className="comments-list__item-right">
            <h3 className="comments-list__item-title">{comment.name}</h3>

            <time className="comments-list__item-time" dateTime={comment.timestamp}>
              {dayjs(comment.timestamp).format('DD/MM/YYYY')}
            </time>

            <p className="comments-list__item-comment">{comment.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentsList;
