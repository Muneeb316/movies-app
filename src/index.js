import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import MovieList from './components/Movie_list';
import MovieDetail from './components/Movie_details';
import detail from './components/detail';

const API_KEY = "8ecb990745243d326bebb77a0a740abb";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			selectedMovie: null,
			movies : [],
			p : 1,
		};
		this.Pagination = this.Pagination.bind(this);
		
		
	}
	
	componentDidMount(){
		let p = this.state.p;
		console.log(p);
		this.ApiCallMethod(p);
	}	

	ApiCallMethod(p) {
		const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${p}`
		const call = fetch(apiUrl).then(result => {
			return result.json();
		}).then((response )=>{
			console.log(response);
			let movies = this.state.movies;
			movies = movies.concat(response.results)
			this.setState({ 
				movies: movies,
				selectedMoive: response.results[0],
				p: p+1
			});
			
		})
	}
	Pagination(){
		let p = this.state.p;
		console.log(this.state);
		this.ApiCallMethod(p);
	}
	render() {
		return (
			
            	<div className="d-flex">
				
					
					
					<div className="col-md-6">
					<MovieList 
						onMovieSelect = {selectedMovie => this.setState({selectedMovie})}
						movies={this.state.movies}/>
						<button onClick={this.Pagination} className="w-90  btn-block btn btn-success btn-outline-primary btn-lg">Load More</button>
					
					</div>
					<MovieDetail movie={this.state.selectedMovie}/>
            	</div>
        	);
    }
}




// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector(".fluid-container"));