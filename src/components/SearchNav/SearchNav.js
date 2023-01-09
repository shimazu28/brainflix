import icon from '../../assets/images/icons/search.svg'
import ava from '../../assets/images/images/Mohan-muruge.jpg'
import uploadIcon from '../../assets/images/icons/upload.svg';
import './SearchNav.scss'

function SearchNav() {

    const hadnleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className="search-form" onSubmit={hadnleSubmit}>
            <div className="search-form__container">
                <img className="search-form__icon" src={icon} alt='search-icon'/>
                 <label className="search-form__label" htmlFor="search"></label>
                 <input className="search-form__input" type='text' name='search' placeholder='Seach'/>
            </div>

            <button className='search-form__button' type='submit'>
                <img src={uploadIcon} className='search-from__upload' alt='upload-icon'/>
                upload
            </button>

            <div className='search-form__container'>
                <img className='search-form__ava' src={ava} alt='ava-icon'/>
            </div>
        </form>
    )
}

export default SearchNav