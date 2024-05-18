import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

//mi primer hook personalizado 

const { images, isLoading} = useFetchGifs( category ); 
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>) //el null no se renderiza en react
            }
            <div className='card-grid'>
                {
                    images.map( (images) => (
                    <GifGridItem 
                        key ={ images.id }
                        {...images}
                    />
                ))
                }
            </div>
        </>
    )
}
