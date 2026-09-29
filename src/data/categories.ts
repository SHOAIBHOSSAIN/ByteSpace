import {
  FiTool,
  FiCode,
  FiMonitor,
  FiGrid,
  FiRadio,
  FiCamera,
} from "react-icons/fi";
import type { Category } from "../types/types";


export const categories: Category[] = [
  {
    id: 1,
    title: "Design",
    icon: FiTool,
  },
  {
    id: 2,
    title: "Development",
    icon: FiCode,
  },
  {
    id: 3,
    title: "IT & Software",
    icon: FiMonitor,
  },
  {
    id: 4,
    title: "Business",
    icon: FiGrid,
  },
  {
    id: 5,
    title: "Marketing",
    icon: FiRadio,
  },
  {
    id: 6,
    title: "Photography",
    icon: FiCamera,
  },
];