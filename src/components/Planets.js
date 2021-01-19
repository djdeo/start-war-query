import { useState } from 'react';
import {useQuery, useInfiniteQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (page) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();
}


const Planets = () => {
    const [page, setPage] = useState(1);
    const {data, isLoading, error, isPreviousData } = useQuery(['planets', page], () => fetchPlanets(page), {
        keepPreviousData:true,
    });
        // https://react-query.tanstack.com/guides/paginated-queries#better-paginated-queries-with-keeppreviousdata
    return (
        <div>
            <h2>Planets</h2>

            {isLoading && (<div>Loading data...</div>)}
            {error && (<div>Error fetching data</div>)}

            { (error === null) && (
                <>
                    <button onClick={() => setPage(old => Math.max(old - 1, 1))} disabled={page === 1}  >Prev</button>
                    <span> {page}</span>
                    <button onClick={() => {
                        if(!isPreviousData && data.next) {
                            setPage(old => old+1)
                        }
                    }} disabled={isPreviousData || !data.next}  >Next</button>
                    <div>
                    {data?.results?.map(planet => <Planet key={planet.name} planet={planet} />)}
                    </div>
                </>
            )}
        </div>
    );
}
 
export default Planets;