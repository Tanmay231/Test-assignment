import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const NFTS = ({ nfts }) => {
  return (
    <div className=" w-64 min-h-64 mt-3 lg:mt-4 flex items-center justify-center">
      {nfts.length > 0 ? (
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {nfts?.map((nft, index) => (
              <CarouselItem key={index} className=" shadow-md">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <p>No NFTS</p>
      )}
    </div>
  );
};

export default NFTS;
