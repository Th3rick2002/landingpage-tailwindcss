import React from 'react';

export default function ProductModal({ product, onClose }) {
    if (!product) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div className="bg-white p-8 rounded-xl max-w-2xl w-full relative shadow-2xl animate-fade-in mx-4 overflow-y-auto max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl transition z-10 bg-white rounded-full p-1">
                    &times;
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-auto object-cover rounded-lg max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
                    />

                    <div className="flex justify-center w-full font-text">
                        <div className="max-w-xl w-full p-0 sm:p-4">

                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                {product.title}
                            </h3>

                            <p className="text-2xl font-extrabold text-amber-900 mb-4">
                                ${product.price}
                            </p>

                            <h4 className="font-semibold">Detalles del producto</h4>
                            <p className="text-sm text-gray-600 mb-4">
                                {product.details}
                            </p>

                            <h4 className="font-semibold">Ingredientes</h4>
                            <p className="text-sm text-gray-600 mb-4">
                                {product.ingredients}
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-3 mt-6">

                                <button className="w-full sm:w-auto px-6 py-2 bg-primary text-white font-bold text-sm rounded-lg shadow-md hover:bg-primary/90 transition duration-300 transform hover:scale-105 focus:outline-none">
                                    Agregar
                                </button>

                                <button className="w-full sm:w-auto px-6 py-2 bg-secondary text-white font-bold text-sm rounded-lg shadow-md hover:bg-secondary/90 transition duration-300 transform hover:scale-105 focus:outline-none">
                                    Comprar
                                </button>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}