
import {Card, CardHeader,  CardFooter, Image, Button} from "@nextui-org/react";
import bannerImage from '../assets/earth.jpg'


export default function Banner() {
  return (
    <div className=" h-full w-full rounded-none">
    
    <Card isFooterBlurred className="w-full md:h-[90vh] h-[75vh] col-span-12 sm:col-span-7 rounded-none">
      <CardHeader className="absolute z-10 md:top-[20%] top-[10%] left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center px-3 ">
        <p className=" text-white/90 font-bold text-6xl  py-5  ">Empowering Tomorrows Connectivity <br />Today</p>
        <h4 className="text-2xl text-white text-md  ">Crafting Excellence in ICT Solutions Since 2012</h4>
        <div className="py-3 flex justify-between gap-5 md:flex-row flex-col" >
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-10">
            Get Quotation
            </Button>

            <Button radius="full"  variant="ghost" className=" text-white shadow-lg px-10">
            Learn More
            </Button>
        </div>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-screen h-full object-cover rounded-none"
        src={bannerImage}
      />

    
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
         
          <div className="flex flex-col">
            <p className="text text-white/60">0722-614-589</p>
            <p className=" text-white/60">0723-716-940</p>
          </div>
        </div>
        <Button radius="full" size="md" className="bg-green-600 text-white font-bold">WhatsApp</Button>
      </CardFooter>
    </Card>
  </div>
  );
}
