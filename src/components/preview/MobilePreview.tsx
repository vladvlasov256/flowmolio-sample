import React from 'react';
import 'devices.css/dist/devices.css';
import { Product } from '../../types';
import {
  MobilePreview as StyledMobilePreview,
  ProductHeader,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductShortDescription,
  ProductStyle,
  ProductPrice,
  ProductDescription,
  ProductDetails,
  CareInstructions,
  AddToCartButton
} from '../../styles/previewStyles';

interface MobilePreviewProps {
  product: Product;
}

const MobilePreview: React.FC<MobilePreviewProps> = ({ product }) => {
  return (
    <div className="device device-iphone-x">
      <div className="device-frame">
        <StyledMobilePreview>
          <ProductHeader>
            <ProductImage src={product.image_url} alt={product.name} />
          </ProductHeader>
          
          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProductShortDescription>{product.short_description}</ProductShortDescription>
            <ProductStyle>{product.style}</ProductStyle>
            <ProductPrice>{product.price}</ProductPrice>
            
            <ProductDescription>
              <h3>Description</h3>
              <p>{product.description}</p>
            </ProductDescription>
            
            <ProductDetails>
              <h3>Material</h3>
              <p>{product.material}</p>
            </ProductDetails>
            
            <CareInstructions>
              <h3>Care Instructions</h3>
              <ul>
                {product.care_instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </CareInstructions>
            
            <AddToCartButton>Add to Cart</AddToCartButton>
          </ProductInfo>
        </StyledMobilePreview>
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