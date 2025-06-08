import React from 'react';
import styles from './styles/layout.module.scss';
import './styles/global.scss';
import './styles/deviceStyles.css';
import './styles/custom-focus.css';
import ProductForm from './components/cms/ProductForm';
import MobilePreview from './components/preview/MobilePreview';
import NavigationMenu from './components/navigation/NavigationMenu';
import WelcomeToast from './components/toast/WelcomeToast';
import useProductState from './hooks/useProductState';

function App() {
  const {
    product,
    updateField
  } = useProductState();

  return (
    <>
      <NavigationMenu />
      <WelcomeToast />
      <div className={styles.appContainer} style={{ paddingTop: '80px' }}>
        <div className={styles.cmsContainer}>
          <ProductForm
            product={product}
            updateField={updateField}
          />
        </div>
        <div className={styles.previewContainer}>
          <MobilePreview product={product} />
        </div>
      </div>
    </>
  );
}

export default App;
