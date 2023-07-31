import React, {useEffect, useState} from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Collection from '../components/Collection';
import {guides} from '../helpers/data';
import * as plantService from '../services/plant.service';

const Home = (props) => {
	const {selected, setSelected, itemToAdd, setItemToAdd} = props;
	const [collections, setCollections] = useState([]);

	useEffect(async () => {
		await plantService.getPlants()
			.then(response => {
				if (response.status !== 200) return
				setCollections(
					[{
						title: 'test title',
						bannerImg:
							'https://images.unsplash.com/photo-1605449669747-35d71b9436f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
						items: response.data.plants,
						action: 'Shop Now ⟶',
						url: 'tools',
					}]
				);
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
