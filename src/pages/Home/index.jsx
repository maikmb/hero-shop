import React from 'react';
import { mock } from '../../config';
import Catalog from '../../components/Catalog';

export default function HomePage() {
    return (
        <section>
            <Catalog products={mock.products} />
        </section>
    );

}