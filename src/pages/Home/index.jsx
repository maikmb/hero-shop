import React from 'react';
import { mock } from '../../config';
import Products from '../../components/Products';

export default function HomePage() {
    return (
        <section>
            <Products products={mock.products} />
        </section>
    );

}