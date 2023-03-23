import moon from '../../images/moon.svg';
import '../Header/Header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export function Header() {
	return (
		<div className='header'>
			<div className='p-2'>
				<div className='header__inner d-flex align-items-center justify-content-between '>
					<img src={logo} alt='' width={'200px'} />
					<ul className=' m-0 p-0 w-50 d-flex align-items-center justify-content-between list-unstyled'>
						<li>
							<Link
								style={{
									color: '#00316d',
									fontFamily: 'PassionOne,sans-serif',
									fontSize: '22px',
								}}
								className='text-decoration-none'
								to={'/'}>
								Home
							</Link>
						</li>
						<li>
							<Link
								style={{
									color: '#00316d',
									fontFamily: 'PassionOne,sans-serif',
									fontSize: '22px',
								}}
								className='text-decoration-none'
								to={'/about'}>
								About
							</Link>
						</li>
						<li>
							<Link
								style={{
									color: '#00316d',
									fontFamily: 'PassionOne,sans-serif',
									fontSize: '22px',
								}}
								className='text-decoration-none'
								to={'/products'}>
								Products
							</Link>
						</li>
						<li>
							<Link
								style={{
									color: '#00316d',
									fontFamily: 'PassionOne,sans-serif',
									fontSize: '22px',
								}}
								className='text-decoration-none'
								to={'/contacts'}>
								Contacts
							</Link>
						</li>
					</ul>
					<a className='header__btn' href='tel:+998977807111'> Связаться с нами</a>
				</div>
			</div>
		</div>
	);
}
