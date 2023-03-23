import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../Home/Home.css';

export const Home = () => {
	const [category, setCategory] = useState([]);

	useEffect(() => {
		axios
			.get('https://641a8c8df398d7d95d59328a.mockapi.io/category')
			.then((res) => setCategory(res.data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className=''>
			<div className='home__box d-flex align-items-center'>
				<div className='w-25'>
					<h2 className='home__title'>TRUSTED FOR 150 YEARS</h2>
					<p className='p-4'>
						Valvoline doesn’t just set the bar for premium products and
						services. We raise it. Relentless innovation has been at the heart
						of our company since 1866. From leading-edge lubricants to
						best-in-class automotive maintenance, we go the extra mile so your
						car can, too.
					</p>
					<Link className='btn btn-danger rounded-0 w-50 fw-3' to='/'>
						LEARN MORE
					</Link>
				</div>
				<div className='w-75'>
					<img
						className='w-100'
						src='https://www.valvolineglobal.com/4a38c8/globalassets/vcom/header/eur-en-home-img.jpg?format=webp&quality=80&width=1056&height=594&mode=crop'
						alt='valvoline car'
					/>
				</div>
			</div>
			<div>
				<div className='p-3 mt-4' >
					<h3 className='fs-2 fw-bold' > QUICK LINKS</h3>
					<p> Find what you're looking for fast.</p>
				</div>
				<ul className=' mb-5 container mt-4 list-unstyled d-flex justify-content-between p-0'>
					{category.map((el) => (
						<li
							className='border rounded-4  h-100 '
							style={{ height: '150px', width: '400px' }}
							key={el.id}>
							<Link className='text-center' to={`home/category/${el.id}`}>
								<img
									style={{ width: '100%' }}
									src={el.category_img}
									alt={el.category_name}
								/>
								<p className='m-0 mb-4'> {el.category_name}</p>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
