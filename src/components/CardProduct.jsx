import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState, useEffect } from 'react';

export function CardProduct({ product }) {
  const { name, image, price, description } = product

  const isMdOrGreater = useMediaQuery('(min-width: 768px)'); 
  const maxLength = isMdOrGreater ? 100 : 70;

  const displayDescription = description.length > maxLength 
    ? `${description.slice(0, maxLength).trimEnd()}${description[maxLength] !== ' ' ? '...' : ' +'}` 
    : description;

  return (
    <Card className="md:w-96 md:max-h-max max-h-32 flex-row flex md:flex-col overflow-hidden">
      <CardHeader shadow={false} floated={false} className="md:w-auto h-24 shrink-0 md:mb-0 mb-4 rounded-r-none md:rounded-r-xl md:h-96">
        <img
          src="https://www.nescafe.com/es/sites/default/files/2023-04/RecipeHero_CaramelLatte_1066x1066.jpg"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <Typography variant="small" color="blue-gray" className="font-bold">
            {name}
          </Typography>
          <Typography variant="small" color="black" className="ml-2 font-medium">
            {price}€
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {displayDescription}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 hidden md:block">
        <Button
          ripple={false}
          fullWidth={true}
          color="teal"
          className="shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}