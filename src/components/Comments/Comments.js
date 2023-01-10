import "./Comments.scss";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";
import CommentForm from "../CommentForm";
import ava from "../../assets/images/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/icons/add_comment.svg";

function Comments(props) {
  function formatDate(date) {
    let newDate = new Date(date);
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    let year = newDate.getFullYear();
    return `${month}/${day}/${year}`;
  }

  let commentsForm = props.data.comments.map((mapComment, index) => {
    return (
      <CommentForm
        key={index}
        comment={mapComment.comment}
        time={mapComment.timestamp}
        name={mapComment.name}
      />
    );
  });
  return (
    <div className="video-info">
      <div className="video-info__container">
        <h1 className="video-info__title">{props.data.title}</h1>
        <div className="video-info__info">
          <div className="video-info__author-container">
            <h2 className="video-info__author">By {props.data.channel}</h2>
            <p className="video-info__date">
              {formatDate(props.data.timestamp)}
            </p>
          </div>
          <div className="video-info__view-container">
            <div className="video-info__container-icon">
              <img
                src={viewsIcon}
                className="video-info__icon "
                alt="icon-view"
              ></img>
              <p className="video-info__view">{props.data.views}</p>
            </div>
            <div className="video-info__container-icon">
              <img
                src={likesIcon}
                className="video-info__icon"
                alt="icon-like"
              ></img>
              <p className="video-info__likes">{props.data.likes}</p>
            </div>
          </div>
        </div>
        <p className="video-info__about">{props.data.description}</p>
        <h2 className="video-info__number-comment">
          {props.data.comments.length} Comments
        </h2>
        <div className="comment-main">
          <img className="comment-main__avatar" src={ava} alt="avatar-Mohan" />
          <form className="comment-main__form">
            <div className="comment-main__tablet-cont">
              <label className="comment-main__name" htmlFor="name">
                join the conversation
              </label>
              <textarea
                className="comment-main__box"
                placeholder="Add a new comment"
                type="text"
                id="comment"
                name="comment"
              />
            </div>
            <div className="comment-main__tablet-cont">
              <button className="comment-main__button" type="submit">
                <img
                  src={commentIcon}
                  className="comment-main__upload"
                  alt="upload-icon"
                />
                comment
              </button>
            </div>
          </form>
        </div>
        <div className="comment-example">{commentsForm}</div>
      </div>
    </div>
  );
}

export default Comments;
