export type VideoData = {
    username: string;
    title: string;
    subtitle: string;
    thumbnail: string;
    video: string;
    id: string;
    avatar: string;
};

export const videoArray: VideoData[] = [
    {
        username: "John Doe",
        title: "Learn TypeScript",
        subtitle: "A Comprehensive Guide",
        thumbnail: "https://i.ytimg.com/vi/e-5obm1G_FY/maxresdefault.jpg",
        video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
        id: "vid001",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        username: "Jane Smith",
        title: "Advanced JavaScript",
        subtitle: "Deep Dive into JS",
        thumbnail: "https://i.ytimg.com/vi/e-5obm1G_FY/maxresdefault.jpg",
        video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
        id: "vid002",
        avatar: "https://randomuser.me/api/portraits/women/82.jpg"
    },
    {
        username: "Emily Johnson",
        title: "React Basics",
        subtitle: "Getting Started with React",
        thumbnail: "https://i.ytimg.com/vi/DLX62G4lc44/maxresdefault.jpg",
        video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
        id: "vid003",
        avatar: "https://randomuser.me/api/portraits/women/67.jpg"
    },
    {
        username: "Michael Brown",
        title: "Vue.js Fundamentals",
        subtitle: "Introduction to Vue.js",
        thumbnail: "https://i.ytimg.com/vi/FXpIoQ_rT_c/maxresdefault.jpg",
        video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
        id: "vid004",
        avatar: "https://randomuser.me/api/portraits/men/43.jpg"
    },
    {
        username: "Sophia Williams",
        title: "Angular for Beginners",
        subtitle: "Learn Angular from Scratch",
        thumbnail: "https://i.ytimg.com/vi/k5E2AVpwsko/maxresdefault.jpg",
        video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
        id: "vid005",
        avatar: "https://randomuser.me/api/portraits/women/24.jpg"
    }
];
