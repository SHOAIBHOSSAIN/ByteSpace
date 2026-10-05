import designIcon from "../assets/icon/designicon.svg";
import developmentIcon from "../assets/icon/dev.svg";
import itIcon from "../assets/icon/laptop.svg";
import businessIcon from "../assets/icon/business.svg";
import marketingIcon from "../assets/icon/communicating.svg";
import photographyIcon from "../assets/icon/camera.svg";
import type { Category } from "../types/types";


export const categories: Category[] = [
  {
    id: 1,
    title: "Design",
    image: designIcon,
  },
  {
    id: 2,
    title: "Development",
    image: developmentIcon,
  },
  {
    id: 3,
    title: "IT & Software",
    image: itIcon,
  },
  {
    id: 4,
    title: "Business",
    image: businessIcon,
  },
  {
    id: 5,
    title: "Marketing",
    image: marketingIcon,
  },
  {
    id: 6,
    title: "Photography",
    image: photographyIcon,
  },
];
