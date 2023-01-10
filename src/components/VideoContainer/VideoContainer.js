import VideoList from "../VideoList"
import './VideoContainer.scss'

function VideoContainer(props) {

    const videoList = props.data.map((mapVideo, index) => {
        return <VideoList
        handleVideoClick = {props.handleVideoClick}
        key = {index}
        id = {mapVideo.id}
        image = {mapVideo.image}
        title = {mapVideo.title}
        by = {mapVideo.channel}
        />
    })
    
    return (
       <aside className="aside-video">
        <h4 className="aside-video__next-title">next videos</h4>
       {videoList}
       </aside>
    )
}

export default VideoContainer