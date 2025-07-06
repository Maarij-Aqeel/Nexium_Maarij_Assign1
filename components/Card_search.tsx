import { Card, CardContent } from "./ui/card";
import quotes from "@/lib/quotes";


const tagColorMap: { [key: string]: string } = {
  Intelligence: "from-green-200/40 to-blue-300/40",
  Imagination: "from-pink-200/40 to-purple-300/40",
  Creativity: "from-yellow-200/40 to-orange-300/40",
  Talent: "from-blue-100/40 to-indigo-300/40",
  Curiosity: "from-amber-100/40 to-lime-200/40",
  Passion: "from-red-200/40 to-rose-300/40",
  Meditation: "from-teal-200/40 to-emerald-300/40",
  Winners: "from-slate-200/40 to-gray-300/40",
  Future: "from-fuchsia-200/40 to-cyan-300/40",
  Action: "from-lime-200/40 to-emerald-300/40",
  Failure: "from-red-100/40 to-orange-200/40",
  Life: "from-cyan-100/40 to-sky-200/40",
};

export default function Card_search({
  tag,
  setQuoteList,
}: {
  tag: string;
  setQuoteList: React.Dispatch<React.SetStateAction<{ quote: string; author: string }[]>>;
}) {

  const gradient = tagColorMap[tag] || "from-gray-100 to-gray-200";

  return (
    <Card
      onClick={() => {
        const result = quotes(tag);
        setQuoteList(result);
      }}
      className={`bg-gradient-to-br ${gradient} backdrop-blur-lg border hover:scale-110 hover:shadow-lg ease-in-out transition-transform  duration-300 border-black shadow-xl p-4 min-h-[150px] justify-center cursor-pointer `}
    >
      <CardContent className="font-bold text-3xl text-black justify-center text-center">
        {tag}
      </CardContent>
    </Card>
  );
}
