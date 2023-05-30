import React, { Suspense } from 'react';
import './products.styles.css';
import Spinner from '../../components/spinner/Spinner';

const ProductComponent = React.lazy(() => import('../../components/ProductComponent'));

const Products = () => {
	return (
		<div>
			<Suspense fallback={<Spinner />}>
				<ProductComponent />
			</Suspense>
		</div>
	);
};

export default Products;
