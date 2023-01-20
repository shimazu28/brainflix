import CommentsForm from '../CommentsForm/CommentsForm';
import CommentsList from '../CommentsList/CommentsList';

function Comments({ comments }) {
  return (
    <section className="comments">
      <output className="comments__count">{comments?.length} Comments</output>

      <CommentsForm />

      <CommentsList comments={comments} />
    </section>
  );
}

export default Comments;
