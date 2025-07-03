const quotes = [
  {
    "author": "Albert Einstein",
    source: "https://en.wikiquote.org/wiki/Albert_Einstein",
    "tags": "intelligence, knowledge, simplicity, understanding",
    "text": "If you can't explain it simply, you don't understand it well enough.",
  },
  {
    "author": "Albert Einstein",
    source: "https://www.goodreads.com/quotes/38836",
    "tags": "imagination, creativity, inspiration",
    "text": "Imagination is everything. It is the preview of life's coming attractions.",
  },
  {
    "author": "Albert Einstein",
    source: "https://www.goodreads.com/quotes/297929",
    "tags": "imagination, creativity, intelligence",
    "text": "The true sign of intelligence is not knowledge but imagination.",
  },
  {
    "author": "Albert Einstein",
    source: "https://www.goodreads.com/quotes/11458",
    "tags": "talent, curious, curiosity, passion",
    "text": "I have no special talent. I am only passionately curious.",
  },
  {
    "author": "Albert Gray",
    source: "https://www.goodreads.com/quotes/524224",
    "tags": "winners, habit, losers",
    "text": "Winners have simply formed the habit of doing things losers don't like to do.",
  },
  {
    "author": "Brian Tracy",
    source: "https://www.goodreads.com/quotes/28134",
    "tags": "future, inner power",
    "text": "You have within you, right now, everything you need to deal with whatever the world can throw at you.",
  },
  {
    "author": "Dalai Lama",
    "source": "https://dailymeditate.com/meditation-quote-99-sleep-meditation-dalai-lama/",
    "tags": "Mindful, Sleep, Meditation, Relaxing, Rest",
    "text": "Sleep is the best meditation."
  },
  {
    "author": "David Bowie",
    "source": "https://www.goodreads.com/quotes/462535",
    "tags": "future, life, listen",
    "text": "Tomorrow belongs to those who can hear it coming"
  },
  {
    "author": "Ernest Hemingway",
    "source": "https://www.goodreads.com/quotes/353013",
    "tags": "listen, learn, learning",
    "text": "I like to listen. I have learned a great deal from listening carefully. Most people never listen."
  },
  {
    "author": "Ernest Hemingway",
    "source": "https://www.goodreads.com/quotes/392801",
    "tags": "action, motion, mistake",
    "text": "Never mistake motion for action."
  },
  {
    "author": "Jack Canfield",
    "source": "https://www.goodreads.com/quotes/495741",
    "tags": "overcome, action, try, persevere",
    "text": "Everything you want is on the other side of fear."
  },
  {
    "author": "J.K. Rowling",
    "source": "https://www.goodreads.com/quotes/396385",
    "tags": "future, adversity, failure, life, foundation",
    "text": "Rock bottom became the solid foundation on which I rebuilt my life."
  },
  {
    "author": "Bruce Garrabrandt",
    source:
      "https://www.google.com/search?q=Bruce+Garrabrandt+Creativity+doesn%27t+wait",
    "tags": "creativity, creative, perfect, waiting, ordinary",
    "text": "Creativity doesn't wait for that perfect moment. It fashions its own perfect moments out of ordinary ones.",
  },
  {
    "author": "Joseph Chilton Pearce",
    "source": "https://www.goodreads.com/quotes/30290",
    "tags": "creativity, life, fear",
    "text": "To live a creative life, we must lose our fear of being wrong."
  },
  {
    "author": "Deepak Chopra",
    source: "https://www.goodreads.com/quotes/381641",
    "tags": "future, choice, decision, change",
    "text": "When you make a choice, you change the future.",
  },
  {
    "author": "Dieter F. Uchtdorf",
    source: "https://www.goodreads.com/quotes/8070701",
    "tags": "creative, creativity, soul",
    "text": "The desire to create is one of the deepest yearnings of the human soul.",
  },
  {
    "author": "Diogenes",
    source:
      "https://www.goodreads.com/quotes/524180-when-some-one-reminded-him-that-the-people-of-sinope",
    "tags": "stoic, outlook, mentality",
    "text": "When some one reminded him that the people of Sinope had sentenced him to exile, he said, And I sentenced them to stay at home.",
  },
  {
    "author": "Diogenes",
    source:
      "https://www.goodreads.com/quotes/524169-the-art-of-being-a-slave-is-to-rule-one-s",
    "tags": "stoic, mentality",
    "text": "The art of being a slave is to rule one's master.",
  },
  {
    "author": "Diogenes of Sinope",
    source:
      "https://www.goodreads.com/quotes/7242929-a-philosopher-named-aristippus-who-had-quite-willingly-sucked-up",
    "tags": "stoic, willpower, mentality",
    "text": "A philosopher named Aristippus, who had quite willingly sucked up to Dionysus and won himself a spot at his court, saw Diogenes cooking lentils for a meal. If you would only learn to compliment Dionysus, you wouldn't have to live on lentils. Diogenes replied, But if you would only learn to live on lentils, you wouldn't have to flatter Dionysus.",
  },
];

export default function quotes_arr(topic: string) {
  const quotesByTag: { [key: string]: typeof quotes } = {};

  // Group quotes by "tags"
  quotes.forEach((quote) => {
    const tags = quote.tags.split(",").map((tag) => tag.trim().toLowerCase());
    tags.forEach((tag) => {
      if (!quotesByTag[tag]) {
        quotesByTag[tag] = [];
      }
      quotesByTag[tag].push(quote);
    });
  });

  const tag = topic.toLowerCase();

  if (!quotesByTag[tag] || quotesByTag[tag].length === 0) {
    return [
      {
        quote: "No Quote found matching this topic",
        author: "",
      },
    ];
  }

  // Shuffle and pick 3 random quotes from the topic
  const shuffled = quotesByTag[tag].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3).map((q) => ({
    quote: q.text,
    author: q.author,
  }));
}
