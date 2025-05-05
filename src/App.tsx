import React from 'react';
import styles from './styles/layout.module.scss';
import './styles/global.scss';
import './styles/deviceStyles.css';
import './styles/custom-focus.css';
import CMSForm from './components/cms/CMSForm';
import MobilePreview from './components/preview/MobilePreview';
import useProductState from './hooks/useProductState';
import { usePreviewObject } from './hooks/usePreviewObject';

function App() {
  const {
    product,
    updateField,
    updateCareInstruction,
    addCareInstruction,
    removeCareInstruction
  } = useProductState();

  const previewObject = usePreviewObject();

  return (
    <div className={styles.appContainer}>
      <div className={styles.cmsContainer}>
        <CMSForm
          product={product}
          updateField={updateField}
          updateCareInstruction={updateCareInstruction}
          addCareInstruction={addCareInstruction}
          removeCareInstruction={removeCareInstruction}
        />
      </div>
      <div className={styles.previewContainer}>
        <MobilePreview product={product} previewObject={previewObject} />
      </div>
    </div>
  );
}

export default App;
