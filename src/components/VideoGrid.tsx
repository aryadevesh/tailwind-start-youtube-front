import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { VideoCard } from "./VideoCard";
import { title } from "process";

const VIDEOS = [{
        title: "How to play games",
        author:" Devesh Kumar Arya",
        thumbnail:"thumbnail.jpg",
        views:"100Mn",
        timestamp:"1d ago",
        channel:"channel.jpeg",
    },{
        title: "How to play ",
        author:" Devesh Kumar Arya",
        thumbnail:"thumbnail.jpg",
        views:"100Mn",
        timestamp:"1d ago",
        channel:"channel.jpeg",
    },{
        title: "How play games",
        author:" Devesh Kumar Arya",
        thumbnail:"thumbnail.jpg",
        views:"100Mn",
        timestamp:"1d ago",
        channel:"channel.jpeg",
    },
    {
        title: "How  games",
        author:" Devesh Kumar Arya",
        thumbnail:"thumbnail.jpg",
        views:"100Mn",
        timestamp:"1d ago",
        channel:"channel.jpeg",
    }
];
export function VideoGrid(){
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map(video => <div>
                <VideoCard
                title = {video.title}
                thumbnail = {video.thumbnail}
                timestamp = {video.timestamp}
                views = {video.views}
                author = {video.author}
                channel = {video.channel}
                ></VideoCard>
            </div>)}
    </div>
}