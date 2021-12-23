import { Post, User } from '../types/types';
import  images from './images'
import  videos  from './videos';

export const USER : User = {
    img: images.theOfficeMichael,
    name: 'Michael Scott',
    role: 'Gerente regional da Dunder Mifflin Inc'
}

export const DRAWER_SECTIONS = [
    {
        title: "Recentes",
        data: [
            "Dunder Mifflin",
            "Melhores chefes",
            "Associação de artistas",
            "Papeis & impressoras",
            "Vendas"
        ]
    },
    {
        title: "Grupos",
        data: [
            "Dunder Mifflin",
            "Melhores chefes",
            "Associação de artistas",
            "Papeis & impressoras",
            "Vendas"
        ]
    },
    {
        title: "Eventos",
        data: [
            "Dunder Mifflin",
            "Melhores chefes",
            "Associação de artistas",
            "Papeis & impressoras",
            "Vendas"
        ]
    },
]

export const POSTS : Post[] = [
    {
      id: "1",
      user: {
        name: "Tyler Durden",
        img: images.person1,
        role: "Narrador | vendedor de sabonete",
      },
      date: "2 h",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: images.fightClub,
      likes: 60,
      comments: 6,
      midia: 'gif',
      video: videos.catVideo1
    },
    {
      id: "2",
      user: {
        name: "Jack",
        img: images.person2,
        role: "Um escritor problemático",
      },
      date: "30 min",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: images.boredWoman,
      likes: 20,
      comments: 2,
      midia: 'video',
      video: videos.catVideo1
    },
    {
      id: "3",
      user: {
        name: "Thomas A. Anderson",
        img: images.person3,
        role: "O escolhido | programador java",
      },
      date: "1 h",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: images.matrix,
      likes: 100,
      comments: 30,
    },
    {
      id: "4",
      user: {
        name: "Tony Montana",
        img: images.person4,
        role: "CTO do Cartel Montana",
      },
      date: "1 h",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: images.scarface,
      likes: 100,
      comments: 30,
    },
    {
      id: "5",
      user: {
        name: "Walter white",
        img: images.person5,
        role: "Professor de química",
      },
      date: "1 h",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: images.breakingBad,
      likes: 100,
      comments: 30,
    },
    {
      id: "6",
      user: {
        name: "Jon Snow",
        img: images.person6,
        role: "Guardião do norte | Comandante da Patrulha da Noite ",
      },
      date: "1 h",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: images.gameofthrones,
      likes: 600,
      comments: 50,
    },
    {
      id: "7",
      user: {
        name: "Bruce Wayne",
        img: images.person7,
        role: "Diretor Executivo das empresas Wayne",
      },
      date: "1 h",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: images.batman,
      likes: 600,
      comments: 50,
    },
  ];

export default {
    USER,
    DRAWER_SECTIONS,
    POSTS
}