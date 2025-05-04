import styled from 'styled-components';

export const MobilePreview = styled.div`
  width: var(--mobile-width);
  max-width: 100%;
  height: var(--mobile-height);
  overflow-y: auto;
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #111;
`;

export const ProductHeader = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 1.5rem;
`;

export const ProductName = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const ProductShortDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const ProductStyle = styled.p`
  font-size: 0.875rem;
  color: #777;
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 1.5rem;
`;

export const ProductDescription = styled.div`
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9375rem;
    line-height: 1.5;
    color: #333;
  }
`;

export const ProductDetails = styled.div`
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9375rem;
    line-height: 1.5;
    color: #333;
  }
`;

export const CareInstructions = styled.div`
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  ul {
    padding-left: 1.25rem;
    
    li {
      font-size: 0.9375rem;
      line-height: 1.5;
      color: #333;
      margin-bottom: 0.5rem;
    }
  }
`;

export const AddToCartButton = styled.button`
  background-color: #000;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  padding: 0.875rem 1.5rem;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #333;
  }
`;