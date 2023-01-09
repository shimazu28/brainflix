import "./CommentForm.scss";

function CommentForm(props) {
  function formatDate(date) {
    let newDate = new Date(date);
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    let year = newDate.getFullYear();
    return `${month}/${day}/${year}`;
  }

  return (
    <div className="comment-example__container">
      <div className="comment-example__avatars-container">
        <div className="comment-example__avatar"></div>
      </div>
      <div className="comment-example__top-container">
        <h3 className="comment-example__full-name">{props.name}</h3>
        <h3 className="comment-example__date">{formatDate(props.time)}</h3>
      </div>
      <div className="comment-example__bottom-container">
        <p className="comment-example__statement">{props.comment}</p>
      </div>
    </div>
  );
}

export default CommentForm;
