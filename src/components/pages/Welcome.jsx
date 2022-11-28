export default function Welcome() {

	const [movies, setMovies] = useState([])

	useEffect(() =>{
        const getMovies = async () => {
            try{
                const response = await axios.get(``)
                // console.log(response.data)
                setMovies(response.data)
            }catch(err){
                console.log(err)
            }
        }
        getMovies()
    },[])


	return (
		<div>
			<h1>OMDB Movie Search</h1>
			<p>Search for a movie below...</p>

			<form method='get' action='results'>
				<label for='search-input'>Search:</label>
				<input id='search-input' type='text' placeholder='Enter your search...' name='movieInput' />

				<button type='submit'>Search</button>
			</form>
		</div>
	)
} 