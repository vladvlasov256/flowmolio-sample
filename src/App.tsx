import React from 'react';
import { AppContainer, CMSContainer, PreviewContainer } from './styles/layoutStyles';
import GlobalStyles from './styles/globalStyles';
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
    <>
      <GlobalStyles />
      <AppContainer>
        <CMSContainer>
          <CMSForm
            product={product}
            updateField={updateField}
            updateCareInstruction={updateCareInstruction}
            addCareInstruction={addCareInstruction}
            removeCareInstruction={removeCareInstruction}
          />
        </CMSContainer>
        <PreviewContainer>
          <MobilePreview product={product} />
        </PreviewContainer>
      </AppContainer>
    </>
  );
}

export default App;
