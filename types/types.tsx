
interface User  {
    img: string;
    name: string;
    role: string;
}

interface Post {
    id: string;
    user: User
    date: string;
    description: string;
    image?: string;
    likes: number;
    comments: number;
    midia?: string;
    video?: string;
}

export {
    User,
    Post
}