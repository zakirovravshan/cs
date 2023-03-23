import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const CategorySingle = () => {
	const { id } = useParams();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://641a8c8df398d7d95d59328a.mockapi.io/category/${id}/products`,
			)
			.then((res) => setProducts(res.data))
			.catch((error) => console.log(error));
	}, [id]);
	return (
		<div className='container'>
			<div className='card-deck d-flex flex-wrap gap-4 align-items-center justify-content-between'>
				{products.map((product) => (
					<div style={{ width: '350px' }} className='card'>
						<img
							className='card-img-top  object-fit-cover'
							src={product.img}
							alt={product.name}
						/>
						<div className='card-body text-start'>
							<h5 className='card-title'>{product.name}</h5>
							<p className='card-text'>{product.description}</p>
							<p className='card-text'>
								<small className='text-muted'>{product.api}</small>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
