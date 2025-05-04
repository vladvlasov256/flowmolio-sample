import React from 'react';
import 'devices.css/dist/devices.css';
import { Product } from '../../types';
import styles from '../../styles/preview.module.scss';
import { FlowMolioPreview, PreviewObject } from 'flowmolio';

interface MobilePreviewProps {
  product: Product;
  previewObject: PreviewObject;
}

const MobilePreview: React.FC<MobilePreviewProps> = ({ product, previewObject }) => {
  return (
    <div className="device device-iphone-x">
      <div className="device-frame">
        <div className={styles.mobilePreview}>
          <FlowMolioPreview dataSources={{"data-source-1": product}} previewObject={previewObject} />
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