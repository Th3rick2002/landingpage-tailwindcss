import React from 'react';

export default function ProductModal({ product, onClose }) {
    if (!product) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={onClose} 
        >
            <div 
                className="bg-white p-8 rounded-xl max-w-2xl w-full relative shadow-2xl animate-fade-in"
                onClick={(e) => e.stopPropagation()} 
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl transition"
                >
                    &times;
                </button>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-auto object-cover rounded-lg"
                    />

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            {product.title}
                        </h2>
                        <p className="text-2xl font-extrabold text-amber-900 mb-4">
                            ${product.price}
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            {product.description}
                        </p>
                        
                        <h4 className="text-lg font-semibold mb-2">
                            Detalles Adicionales
                        </h4>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Ingredientes: Leche, Café, Azúcar, etc.</li>
                            <li>Apto para: Vegano/Vegetariano (si aplica)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}