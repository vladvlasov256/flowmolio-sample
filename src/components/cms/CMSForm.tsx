import React from 'react';
import { Product } from '../../types';
import { imageOptions } from '../../data/initialData';
import {
  FormTitle,
  FormGroup,
  Label,
  Input,
  TextArea,
  Select,
  ImagePreview,
  CareInstructionItem,
  RemoveButton,
  AddButton
} from '../../styles/layoutStyles';

interface CMSFormProps {
  product: Product;
  updateField: (field: keyof Product, value: string | string[]) => void;
  updateCareInstruction: (index: number, value: string) => void;
  addCareInstruction: () => void;
  removeCareInstruction: (index: number) => void;
}

const CMSForm: React.FC<CMSFormProps> = ({
  product,
  updateField,
  updateCareInstruction,
  addCareInstruction,
  removeCareInstruction
}) => {
  return (
    <>
      <FormTitle>Product CMS</FormTitle>
      
      <FormGroup>
        <Label htmlFor="name">Product Name</Label>
        <Input
          id="name"
          type="text"
          value={product.name}
          onChange={(e) => updateField('name', e.target.value)}
        />
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="short_description">Short Description</Label>
        <Input
          id="short_description"
          type="text"
          value={product.short_description}
          onChange={(e) => updateField('short_description', e.target.value)}
        />
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="style">Style</Label>
        <Input
          id="style"
          type="text"
          value={product.style}
          onChange={(e) => updateField('style', e.target.value)}
        />
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          type="text"
          value={product.price}
          onChange={(e) => updateField('price', e.target.value)}
        />
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="image_url">Image URL</Label>
        <Select
          id="image_url"
          value={product.image_url}
          onChange={(e) => updateField('image_url', e.target.value)}
        >
          {imageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <ImagePreview>
          {product.image_url && <img src={product.image_url} alt="Product preview" />}
        </ImagePreview>
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="description">Description</Label>
        <TextArea
          id="description"
          value={product.description}
          onChange={(e) => updateField('description', e.target.value)}
        />
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="material">Material</Label>
        <TextArea
          id="material"
          value={product.material}
          onChange={(e) => updateField('material', e.target.value)}
        />
      </FormGroup>
      
      <FormGroup>
        <Label>Care Instructions</Label>
        {product.care_instructions.map((instruction, index) => (
          <CareInstructionItem key={index}>
            <Input
              type="text"
              value={instruction}
              onChange={(e) => updateCareInstruction(index, e.target.value)}
              placeholder="Care instruction"
            />
            <RemoveButton
              type="button"
              onClick={() => removeCareInstruction(index)}
              aria-label="Remove instruction"
            >
              ✕
            </RemoveButton>
          </CareInstructionItem>
        ))}
        <AddButton type="button" onClick={addCareInstruction}>
          Add Instruction
        </AddButton>
      </FormGroup>
    </>
  );
};

export default CMSForm;