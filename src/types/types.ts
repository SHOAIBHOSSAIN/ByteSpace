export interface Course{
  id:number;
  title:string;
  image:string;
  instructor:string;
  rating:number;
  students:number;
  price:number;
}

export interface Testimonial{
  id:number;
  name:string;
  role:string;
  comment:string;
  image:string;
}

export interface Category{
  id:number;
  title:string;
  image:string;
}
