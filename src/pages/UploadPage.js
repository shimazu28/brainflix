import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import uploadVideoPreview from '../assets/images/upload-video-preview.jpg';
import { AppRoute } from '../const';

function UploadPage() {
  const navigate = useNavigate();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    navigate(AppRoute.HOME);
    toast.success('Video published successfully!');
  };

  return (
    <main className="upload-page">
      <div className="container">
        <h1 className="upload-page__title">Upload Video</h1>

        <form className="upload-page__form form" onSubmit={handleFormSubmit}>
          <div className="form__element">
            <label className="form__label form__label--file">
              Video thumbnail
              <input className="visually-hidden"
                type="file"
                name="video"
              />
              <img className="form__image"
                width={360}
                height={210}
                src={uploadVideoPreview}
                alt=""
              />
            </label>
          </div>

          <div className="upload-page__form-right">
            <div className="form__element">
              <label className="form__label" htmlFor="title">Title your video</label>
              <input className="form__field"
                name="title"
                type="text"
                placeholder="Add a title to your video"
                required
              />
            </div>

            <div className="form__element">
              <label className="form__label" htmlFor="description">Add a video description</label>
              <textarea className="upload-page__description form__field form__field--text"
                name="description"
                cols="30"
                rows="10"
                placeholder="Add a description to your video"
                required
              ></textarea>
            </div>
          </div>

          <div className="form__buttons">
            <button className="form__submit button" type="submit">
              <svg className="button__icon" height="24" width="24" fill="currentColor">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M5 5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1zm2.41 9H9v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.71 7.7c-.39-.39-1.02-.39-1.41 0l-4.59 4.59c-.63.63-.19 1.71.7 1.71z" />
              </svg>
              Publish
            </button>
            <button className="form__reset button button--inverse" type="reset">Cancel</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default UploadPage;