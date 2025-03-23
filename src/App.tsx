import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import { Card, CardContent } from "./components/ui/card";

import love1 from "@/assets/love-1.jpeg";
import love2 from "@/assets/love-2.jpeg";
import love3 from "@/assets/love-3.jpeg";
import love4 from "@/assets/love-4.jpeg";
import love5 from "@/assets/love-5.jpeg";
import love6 from "@/assets/love-6.jpeg";
import love7 from "@/assets/love-7.jpeg";
import love8 from "@/assets/love-8.jpeg";
import love9 from "@/assets/love-9.jpeg";
import love10 from "@/assets/love-10.jpeg";
import love11 from "@/assets/love-11.jpeg";
import love12 from "@/assets/love-12.jpeg";
import love13 from "@/assets/love-13.jpeg";
import love14 from "@/assets/love-14.jpeg";
import love16 from "@/assets/love-16.jpeg";
import love17 from "@/assets/love-17.jpeg";
import love19 from "@/assets/love-19.jpeg";
import love20 from "@/assets/love-20.jpeg";
import love21 from "@/assets/love-21.jpeg";
import { Button } from "./components/ui/button";

const photos = [
  love3,
  love4,
  love5,
  love6,
  love7,
  love8,
  love2,
  love9,
  love10,
  love11,
  love12,
  love13,
  love14,
  love1,
  love16,
  love17,
  love19,
  love20,
  love21,
];

interface Heart {
  id: number;
  left: string;
  duration: number;
}

const generateHeart = (): Heart => ({
  id: Math.random(),
  left: Math.random() * 100 + "vw",
  duration: Math.random() * 3 + 2,
});

const calculateTimeElapsed = (startDate: Date) => {
  const now = new Date();
  let diff = Math.floor((now.getTime() - startDate.getTime()) / 1000);

  const years = Math.floor(diff / (365 * 24 * 60 * 60));
  diff %= 365 * 24 * 60 * 60;
  const months = Math.floor(diff / (30 * 24 * 60 * 60));
  diff %= 30 * 24 * 60 * 60;
  const days = Math.floor(diff / (24 * 60 * 60));
  diff %= 24 * 60 * 60;
  const hours = Math.floor(diff / (60 * 60));
  diff %= 60 * 60;
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  return { years, months, days, hours, minutes, seconds };
};

export default function App() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [showContent, setShowContent] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(() =>
    calculateTimeElapsed(new Date("2023-09-09T13:30:00-03:00"))
  );
  useEffect(() => {
    if (!showContent) return;
    const interval = setInterval(() => {
      setHearts((prev) => {
        const newHearts = [...prev, generateHeart()];
        return newHearts.length > 50 ? newHearts.slice(1) : newHearts;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [showContent]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(
        calculateTimeElapsed(new Date("2023-09-09T13:30:00-03:00"))
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!showContent) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-pink-950 text-white">
        <Button
          onClick={() => setShowContent(true)}
          className="cursor-pointer bg-pink-800 text-3xl p-8 hover:bg-pink-900"
        >
          💗 Clique!
        </Button>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center gap-6 justify-center min-h-screen bg-pink-950 text-white p-4 overflow-hidden">
      {/* Corações Animados */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-50">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-3xl"
            style={{ left: heart.left, top: "0%" }}
            initial={{ opacity: 1, y: "-10%" }}
            animate={{ y: "100vh" }}
            transition={{ duration: heart.duration, ease: "linear" }}
            onAnimationComplete={() => {
              setHearts((prev) => prev.filter((h) => h.id !== heart.id));
            }}
          >
            💗
          </motion.div>
        ))}
      </div>

      {/* Spotify Player */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-full max-w-lg">
          <iframe
            src="https://open.spotify.com/embed/track/24yhU1uQVX0u5Rvc0gProL"
            width="100%"
            height="82"
            allow="encrypted-media"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Carrossel de Fotos */}
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {photos.map((photo, index) => (
              <CarouselItem key={index} className="rounded-lg">
                <div>
                  <img
                    src={photo}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-zinc-100 cursor-pointer bg-pink-800 border-pink-900 hover:bg-pink-700 hover:text-zinc-100 " />
          <CarouselNext className="text-zinc-100 cursor-pointer bg-pink-800 border-pink-900 hover:bg-pink-700 hover:text-zinc-100" />
        </Carousel>

        <div className="text-center text-2xl font-semibold">
          <h2>Eu te amo há:</h2>
          <p className="text-sm text">
            {timeElapsed.years} anos, {timeElapsed.months} meses,{" "}
            {timeElapsed.days} dias, {timeElapsed.hours} horas,{" "}
            {timeElapsed.minutes} minutos, {timeElapsed.seconds} segundos
          </p>
        </div>
        {/* Mensagem Personalizada */}
        <Card className="w-full max-w-lg text-center bg-pink-800 border-pink-900 shadow-lg">
          <CardContent>
            <h2 className="text-2xl text-zinc-100 font-semibold">
              Para minha amada ❤️
            </h2>
            <p className="mt-4 text-zinc-100">
              Há um ano, começamos essa linda história juntinhos, e cada dia ao
              seu lado tem sido um presente de Deus para mim. Você é o amor da
              minha vida, minha paz minha felicidade, minha luz e minha
              inspiração. Que venham muitos outros anos repletos de carinho,
              amor, cumplicidade e momentos inesquecíveis. Te amo hoje e para
              todo sempre bebê!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
