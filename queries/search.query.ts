import { VideoData, videoArray } from "@/data/video.data";

export const searchVideos = (query: string | undefined) => {
    return (): VideoData[] => {
        const videos = videoArray
        if (!query) {
            return videoArray;
        }

        query = query.toLowerCase();


        return videos.filter(video => {
            if (query) {
                console.log(query);
                return (
                    video.username.toLowerCase().includes(query) ||
                    video.title.toLowerCase().includes(query) ||
                    video.subtitle.toLowerCase().includes(query))

            } else {
                return []
            }

        }

        );
    }

};