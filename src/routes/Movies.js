import { gql, useQuery } from "@apollo/client"

const ALL_MOVIES = gql`
    query getMovies {
        allMovies {
            title
            id
        }
        allTweets {
            id
            text
            author {
                lastName
                fullName
            }
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
                <li key={movie.id}>{movie.title}</li>
            ))}
            <h1>Tweets</h1>
            {data.allTweets.map(tweet => (
                <li key={tweet.id}>{tweet.text}/ by: {tweet.author.fullName}</li>
            ))}
        </ul>
    );
    
}