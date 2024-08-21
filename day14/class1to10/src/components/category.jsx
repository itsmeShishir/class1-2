import { Card } from "flowbite-react";
import CustomHooks from "../hooks/Customhooks";

export function CategoryCards() {
  const url = "https://fakestoreapi.com/products/categories";
  let state = CustomHooks(url);
  return (
    <>
    <div className="sm:container mx-auto grid gap-4
     sm:grid-cols-1 md:grid-cols-3 grid-rows-3 ">
    {state.map((items, index) => {
      return(
       
                <div key={index}>
                 <Card href="#" className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {items} 
                    </h5>
                  </Card>
                </div>
                            )}
                  )}
        </div>

    
    </>
  );
}
