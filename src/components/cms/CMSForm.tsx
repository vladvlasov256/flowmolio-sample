import React from 'react';
import { Product } from '../../types';
import { imageOptions } from '../../data/initialData';
import * as Form from '@radix-ui/react-form';
import styles from '../../styles/form.module.scss';

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
      <h2 className={styles.formTitle}>Product CMS</h2>
      
      <Form.Root className={styles.formRoot} onSubmit={(event) => event.preventDefault()}>
        <Form.Field className={styles.formField} name="name">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className={styles.formLabel}>Product Name</Form.Label>
            <Form.Message className={styles.formMessage} match="valueMissing">
              Please enter product name
            </Form.Message>
          </div>
          <Form.Control asChild className={styles.formControl}>
            <input 
              className={styles.formInput}
              type="text" 
              value={product.name}
              onChange={(e) => updateField('name', e.target.value)}
              required
            />
          </Form.Control>
        </Form.Field>
        
        <Form.Field className={styles.formField} name="short_description">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className={styles.formLabel}>Short Description</Form.Label>
          </div>
          <Form.Control asChild className={styles.formControl}>
            <input 
              className={styles.formInput}
              type="text" 
              value={product.short_description}
              onChange={(e) => updateField('short_description', e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        
        <Form.Field className={styles.formField} name="style">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className={styles.formLabel}>Style</Form.Label>
          </div>
          <Form.Control asChild className={styles.formControl}>
            <input 
              className={styles.formInput}
              type="text" 
              value={product.style}
              onChange={(e) => updateField('style', e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        
        <Form.Field className={styles.formField} name="price">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className={styles.formLabel}>Price</Form.Label>
          </div>
          <Form.Control asChild className={styles.formControl}>
            <input 
              className={styles.formInput}
              type="text" 
              value={product.price}
              onChange={(e) => updateField('price', e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        
        <Form.Field className={styles.formField} name="image_url">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className={styles.formLabel}>Image URL</Form.Label>
          </div>
          <Form.Control asChild className={styles.formControl}>
            <select
              className={styles.formSelect}
              value={product.image_url}
              onChange={(e) => updateField('image_url', e.target.value)}
            >
              {imageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Form.Control>
          <div className={styles.imagePreview}>
            {product.image_url && <img src={product.image_url} alt="Product preview" />}
          </div>
        </Form.Field>
        
        <Form.Field className={styles.formField} name="description">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className={styles.formLabel}>Description</Form.Label>
          </div>
          <Form.Control asChild className={styles.formControl}>
            <textarea
              className={styles.formTextarea}
              value={product.description}
              onChange={(e) => updateField('description', e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        
        <Form.Field className={styles.formField} name="material">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className={styles.formLabel}>Material</Form.Label>
          </div>
          <Form.Control asChild className={styles.formControl}>
            <textarea
              className={styles.formTextarea}
              value={product.material}
              onChange={(e) => updateField('material', e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        
        <Form.Field className={styles.formField} name="care_instructions">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className={styles.formLabel}>Care Instructions</Form.Label>
          </div>
          {product.care_instructions.map((instruction, index) => (
            <div className={styles.careInstructionItem} key={index}>
              <Form.Control asChild className={styles.formControl}>
                <input
                  className={styles.formInput}
                  type="text"
                  value={instruction}
                  onChange={(e) => updateCareInstruction(index, e.target.value)}
                  placeholder="Care instruction"
                />
              </Form.Control>
              <button
                className={styles.removeButton}
                type="button"
                onClick={() => removeCareInstruction(index)}
                aria-label="Remove instruction"
              >
                ✕
              </button>
            </div>
          ))}
          <button className={styles.addButton} type="button" onClick={addCareInstruction}>
            Add Instruction
          </button>
        </Form.Field>
      </Form.Root>
    </>
  );
};

export default CMSForm;