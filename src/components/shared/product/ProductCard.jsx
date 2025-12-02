
import React from 'react';


export default function ProductCard({
  title,
  price = "",
  image = "",
  description = "",
  alt = title,
  category,
  onDetailsClick,
  details = "",
  ingredients = ""
}) 
{
  return (
    <article
      className="product-card max-w-sm rounded-lg shadow-md overflow-hidden bg-white mb-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
      aria-label={title}
    >
      {image && (
        <a  className="block">
          <img src={image} alt={alt} className="w-full h-80 object-cover" />
        </a>
      )}

      <div className="p-5">

        {category && (
          <div className="mb-2">
            <span className="text-secondary text-sm font-medium">
              {category}
            </span>
          </div>
        )}
        
        <h3 className="text-lg font-semibold leading-tight text-primary">
          <a  className="hover:underline">{title}</a>
        </h3>

        {description && (
          <p className="mt-2 text-sm text-gray-600 h-6 overflow-hidden">
            {description}
          </p>
        )}
        
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            {price ? `$${price}` : ""}
          </div>
          <div className="flex items-center gap-2">
            <div>
              <button
                onClick={onDetailsClick}
                className="inline-flex items-center justify-center w-10 h-10 text-3xl text-primary hover:text-primary/90 transition"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}