export interface Heart {
  id: number;
  left: string;
  duration: number;
}

export const generateHeart = (): Heart => ({
  id: Math.random(),
  left: Math.random() * 100 + "vw",
  duration: Math.random() * 3 + 2,
});
