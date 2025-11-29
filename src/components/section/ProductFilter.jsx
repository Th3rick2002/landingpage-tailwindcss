import { useState } from 'react';
import ProductCard from '../shared/ProductCard';
import ProductModal from '../shared/ProductModal';

export default function ProductFilter({ products }) {
  const [filter, setFilter] = useState('Todos');
  const categories = ["Todos", ...new Set(products.map(p => p.category))];
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(item =>
    filter === 'Todos' || item.category === filter
  );

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section>
      <div className="flex justify-center space-x-4 mb-8 mt-5">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`
              py-2 px-4 rounded-lg font-semibold transition
              ${filter === category
                ? 'bg-amber-900 text-white shadow-lg'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-7xl mx-auto"
      >
        {filteredProducts.map((item) => (
          <ProductCard key={item.title} {...item} onDetailsClick={() => handleOpenModal(item)} />
        ))}

        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-xl text-gray-500">
            No hay productos en esta categoría.
          </p>
        )}

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
}