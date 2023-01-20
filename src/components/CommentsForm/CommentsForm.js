import userAvatar from '../../assets/images/user-avatar.jpg'

function CommentsForm() {
  return (
    <form className="comments__form form">
      <img className="comments__form-avatar user-avatar"
        src={userAvatar}
        width={1200}
        height={798}
        alt="Muhur"
      />

      <div className="comments__form-right">
        <div>
          <label className="form__label" htmlFor="new-comment">Join the conversation</label>
          <textarea className="form__field form__field--text"
            name="comment"
            id="new-comment"
            cols="30"
            rows="10"
            placeholder="Add a new comment"
          ></textarea>
        </div>
        {/* this way easier to render the svg */}
        <button className="form__submit button" type="submit">
          <svg className="button__icon" height="24" width="24" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-6 7h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V6c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z" />
          </svg>
          Comment
        </button>
      </div>
    </form>
  );
}

export default CommentsForm;