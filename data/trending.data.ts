type VideoData = {
    nameOfCreator: string;
    title: string;
    subtitle: string;
    thumbnail: string;
    video: string;
    id: string;
};

export const TrendingVideoArray: VideoData[] = [
    {
        nameOfCreator: "John Doe",
        title: "Learn TypeScript",
        subtitle: "A Comprehensive Guide",
        thumbnail: "https://img.youtube.com/vi/d56mG7DezGs/0.jpg",
        video: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your actual video URL
        id: "vid001"
    },
    {
        nameOfCreator: "Jane Smith",
        title: "Advanced JavaScript",
        subtitle: "Deep Dive into JS",
        thumbnail: "https://img.youtube.com/vi/Oe421EPjeBE/0.jpg",
        video: "https://www.w3schools.com/html/movie.mp4", // Replace with your actual video URL
        id: "vid002"
    },
    {
        nameOfCreator: "Traversy Media",
        title: "React JS Crash Course",
        subtitle: "Learn React JS",
        thumbnail: "https://img.youtube.com/vi/w7ejDZ8SWv8/0.jpg",
        video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4", // Replace with your actual video URL
        id: "vid003"
    },
    {
        nameOfCreator: "Academind",
        title: "Node.js Crash Course",
        subtitle: "Learn Node.js",
        thumbnail: "https://img.youtube.com/vi/TlB_eWDSMt4/0.jpg",
        video: "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4", // Replace with your actual video URL
        id: "vid004"
    }
];
