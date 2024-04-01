import React, { useState, useEffect} from "react";
import Card from "./components/Card";
import ImageSearchForm from "./asset/ImageSearchForm";


function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, SetTerm ] = useState("")
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);
  return (
    <div className="mx-auto container w-full  ">

      <ImageSearchForm searchText={text=> SetTerm(text)}/>
        {!isLoading && images.length===0 &&<h1 className="mx-auto text-4xl  text-center mt-32 "> No Images Found</h1> }
      {isLoading ?<h1 className="mx-auto text-4xl flex  text-center mt-32 px-6 "> Loading........</h1>:
      <div className="flex text-center   w-full align-items">
        <div className="grid grid-cols-3 gap-3 s-s  ">
           {images.map(image =>{
               return <Card key={image.id} image={image}/>
           })}
        </div>
      </div> }
   

    </div>
  );
}

export default App;
