import './VideoMain.scss'

function VideoMain(props) {
    return (
        <div className='video-main'>
        <video
            className='video-main__player'
            poster={props.data.image}
            controls>
        </video>
    </div>
    )
}

export default VideoMain