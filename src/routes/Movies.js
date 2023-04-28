import { gql, useQuery } from "@apollo/client"
import { Link } from "react-router-dom";

const ALL_MOVIES = gql`
    query getMovies {
        allMovies {
            title
            id
        }
    }
`;

export default function Movies() {
    const {data, loading, error} = useQuery(ALL_MOVIES);
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Could not Fetch :(</p>;
    return (
        <ul>
            <h1>Movies</h1>
            {data.allMovies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
    
}