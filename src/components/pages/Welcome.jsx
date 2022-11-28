export default function Welcome() {
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