import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

export default function Frota(){
    return(
        <div className=" flex  items-center justify-center p-6 bg-gray-100">
            <Carousel  className="w-full max-w-screen-2xl">
                <CarouselContent>
                    
                    <CarouselItem className="md:basis-1/2 lg:basis-full">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex  aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">TESTE</span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-full">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex  aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">TESTE</span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-full">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex  aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">TESTE</span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-full">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex  aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">TESTE</span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem> 
                 
                </CarouselContent>

            </Carousel>
        </div>
    )
}