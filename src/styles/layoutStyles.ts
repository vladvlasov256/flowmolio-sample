import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1rem;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2rem;
    padding: 2rem;
  }
`;

export const CMSContainer = styled.div`
  flex: 1;
  padding: 1rem;
  background-color: var(--card-background);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    flex: 1;
    max-width: 50%;
    margin-bottom: 0;
    height: calc(100vh - 4rem);
    overflow-y: auto;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 1rem;
  flex: 1;
  
  @media (min-width: 768px) {
    padding-top: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    flex: 1;
    max-width: 50%;
    justify-content: center;
    padding-top: 0;
  }
`;

export const FormTitle = styled.h2`
  margin-bottom: 1rem;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color);
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--input-background);
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--input-background);
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--input-background);
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

export const ImagePreview = styled.div`
  width: 100%;
  margin-top: 0.75rem;
  
  img {
    max-width: 100%;
    max-height: 200px;
    object-fit: contain;
    border-radius: 4px;
    border: 1px solid var(--border-color);
  }
`;

export const CareInstructionItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: #e11d48;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  
  &:hover {
    color: #be123c;
  }
`;

export const AddButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-weight: 500;
  margin-top: 0.5rem;
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;