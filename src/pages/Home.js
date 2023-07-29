import axios from 'axios';
import React, {useEffect} from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Collection from '../components/Collection';
import {collections, guides} from '../helpers/data';

const Home = (props) => {
	const {selected, setSelected, itemToAdd, setItemToAdd} = props;

	useEffect(() => {
		axios.get('http://localhost:8888/.netlify/functions/api')
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<>
			<Hero/>
			<Collection
				category={collections}
				mapStart={0}
				mapEnd={4}
				selected={selected}
				setSelected={setSelected}
				itemToAdd={itemToAdd}
				setItemToAdd={setItemToAdd}
			/>
			<Info/>
			<Collection
				category={guides}
				mapStart={0}
				mapEnd={4}
				selected={selected}
				setSelected={setSelected}
			/>
		</>
	);
};

export default Home;
