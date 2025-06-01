import React from 'react';
import 'devices.css/dist/devices.css';
import { Product } from '../../types';
import { FlowMolioPreview } from 'flowmolio';
import blueprint from '../../data/flowmolio.json';

interface MobilePreviewProps {
  product: Product;
}

const MobilePreview: React.FC<MobilePreviewProps> = ({ product }) => {
  const dataSources = { "data-source-1": {...product} };

  return (
    <div className="device device-iphone-x">
      <div className="device-frame">
          <FlowMolioPreview className="device-screen" dataSources={dataSources} blueprint={blueprint} />
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