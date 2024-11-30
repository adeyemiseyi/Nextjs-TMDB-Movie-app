import { Suspense } from 'react';
import Results from './components/Results';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const { genre } = await searchParams; 
  //const genreValue = genre || 'fetchTrending';
  const res = await fetch ( `https://api.themoviedb.org/3${
    genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
  }?api_key=${API_KEY}&language=en-US&page=1`,
  {next: {revalidate: 10000}}
  );
  
  const data = await res.json();
  if(!res.ok){
    throw new Error('Faild to fetch data')
  }
  const results = data.results;
  return (
    <div>
      <Results results={results} />
    </div>
  )
  
}

export function about() { 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutPage />
    </Suspense>
  );
}




/*import Results from './components/Results';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre =  searchParams.genre || 'fetchTrending';


  const api = `https://api.themoviedb.org/3${
    genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
  }?api_key=${API_KEY}&language=en-US&page=1`;

  try {
    const res = await fetch(api, { next: { revalidate: 60 } });
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();

    const results = data.results || [];

    return (
      <div>
          <Results results={results} />
      </div>
    );
  } catch (error) {
    console.error('Error:', error);
    return <div>Error fetching data.</div>;
  }
}
*/













