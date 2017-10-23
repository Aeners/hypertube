import React, { Component } from 'react';
import Thumbnail from './thumbnail';
import callApi from '../../../ApiCaller/apiCaller';
import '../css/catalog.css';

class Catalog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			catalog: {},
			pages: 0
		}
	}

	componentDidMount() {
		const bodyStyle = document.body.style;
		bodyStyle.backgroundColor = '#20232a';
		callApi('/api/catalog/')
		.then((catalogMovies) => {
			this.setState({
				catalog: catalogMovies.data.movies,
				pages: Math.floor(catalogMovies.data.movie_count / 16)
			})
		})
	}

	render() {
		console.log(this.state);
		return (
			<div className="row">
				{ this.state.catalog.length > 0 && this.state.catalog.map((movieData, index) => {
					return (<Thumbnail key={index} infos={movieData} />)
				}) }
			</div>
		);
	}
}

export default Catalog;