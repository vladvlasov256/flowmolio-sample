import React from 'react';
import 'devices.css/dist/devices.css';
import { Product } from '../../types';
import styles from '../../styles/preview.module.scss';

interface MobilePreviewProps {
  product: Product;
}

const MobilePreview: React.FC<MobilePreviewProps> = ({ product }) => {
  return (
    <div className="device device-iphone-x">
      <div className="device-frame">
        <div className={styles.mobilePreview}>
          <div className={styles.productHeader}>
            <img className={styles.productImage} src={product.image_url} alt={product.name} />
          </div>
          
          <div className={styles.productInfo}>
            <h1 className={styles.productName}>{product.name}</h1>
            <p className={styles.productShortDescription}>{product.short_description}</p>
            <p className={styles.productStyle}>{product.style}</p>
            <p className={styles.productPrice}>{product.price}</p>
            
            <div className={styles.productDescription}>
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
            
            <div className={styles.productDetails}>
              <h3>Material</h3>
              <p>{product.material}</p>
            </div>
            
            <div className={styles.careInstructions}>
              <h3>Care Instructions</h3>
              <ul>
                {product.care_instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>
            
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="device-stripe"></div>
      <div className="device-header"></div>
      <div className="device-sensors"></div>
      <div className="device-btns"></div>
      <div className="device-power"></div>
    </div>
  );
};

export default MobilePreview;