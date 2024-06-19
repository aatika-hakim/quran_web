import { StaticImageData } from "next/image";

export interface BlogPost {
    date: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: StaticImageData;
}

export interface BlogCardProps {
    image: StaticImageData;
    date: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

export interface ButtonsProps {
    properties: string;
    text: string;
    links: string;
    type?: string;
}

export interface Image {
    id: number;
    src: string;
    name: string;
  }
  
  export interface Juz {
    id: number;
    name: string;
    images: Image[];
  }