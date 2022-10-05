// Function component
const MovieList=(props)=>{
        return(
            <div>
               {
                props.movie.map((movie)=>{
                    return (
                        <div key={movie.id}>
                            <p>{movie.id}</p>
                            <p>{movie.title}</p>
                            <p>{movie.genre}</p>
                            <p>{movie.year}</p>
                        </div>
                    )
                })
               }
            </div>
        )
}

export default MovieList;