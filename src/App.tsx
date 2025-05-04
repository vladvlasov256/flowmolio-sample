import React from 'react';
import styles from './styles/layout.module.scss';
import './styles/global.scss';
import './styles/deviceStyles.css';
import CMSForm from './components/cms/CMSForm';
import MobilePreview from './components/preview/MobilePreview';
import useProductState from './hooks/useProductState';

function App() {
  const {
    product,
    updateField,
    updateCareInstruction,
    addCareInstruction,
    removeCareInstruction
  } = useProductState();

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
        <MobilePreview product={product} />
      </div>
    </div>
  );
}

export default App;
