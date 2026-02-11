export type Category = 'SST' | 'Incendie' | 'CACES' | 'Habilitation' | 'Gestes';

export interface Course {
  id: string;
  title: string;
  category: Category;
  duration: string;
  price: string;
  description: string;
  image: string;
  tags: string[];
  program: string[];
  prerequisites: string[];
}

export interface Session {
  id: string;
  courseId: string;
  date: string; // ISO string YYYY-MM-DD
  location: string;
  seatsTotal: number;
  seatsTaken: number;
}
