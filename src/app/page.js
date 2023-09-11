import Carousel from "./contents/Carousel" 
import ListCard from "./contents/ListCard" 

export default function Home() {
  return (
    <>
      <Carousel className="md:px-10 px-7 py-4 flex items-center justify-center mx-auto" />
      <ListCard />
    </>
  )
}
