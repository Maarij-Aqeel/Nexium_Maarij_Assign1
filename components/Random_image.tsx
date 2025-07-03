
const images=[
  '/images/aesthetic.jpg',
  '/images/black_white.jpg',
  '/images/blue_bg.jpg',
  '/images/mug.jpg',
  '/images/random.jpg',
  '/images/watch_table.jpg',
]

export default function random_image(){
      
        const randomIndex=Math.floor(images.length*Math.random())
      
      return images[randomIndex]

}