import React from 'react';
import 'devices.css/dist/devices.css';
import { Product } from '../../types';
import { FlowMolioPreview, PreviewObject } from 'flowmolio';

interface MobilePreviewProps {
  product: Product;
  previewObject: PreviewObject;
}

const MobilePreview: React.FC<MobilePreviewProps> = ({ product, previewObject }) => {
  return (
    <div className="device device-iphone-x">
      <div className="device-frame">
          <FlowMolioPreview className="device-screen" dataSources={{"data-source-1": product}} previewObject={previewObject} />
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