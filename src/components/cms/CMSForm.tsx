import React from 'react';
import { Product } from '../../types';
import { imageOptions } from '../../data/initialData';
import styles from '../../styles/layout.module.scss';

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
      
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="name">Product Name</label>
        <input
          className={styles.input}
          id="name"
          type="text"
          value={product.name}
          onChange={(e) => updateField('name', e.target.value)}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="short_description">Short Description</label>
        <input
          className={styles.input}
          id="short_description"
          type="text"
          value={product.short_description}
          onChange={(e) => updateField('short_description', e.target.value)}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="style">Style</label>
        <input
          className={styles.input}
          id="style"
          type="text"
          value={product.style}
          onChange={(e) => updateField('style', e.target.value)}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="price">Price</label>
        <input
          className={styles.input}
          id="price"
          type="text"
          value={product.price}
          onChange={(e) => updateField('price', e.target.value)}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="image_url">Image URL</label>
        <select
          className={styles.select}
          id="image_url"
          value={product.image_url}
          onChange={(e) => updateField('image_url', e.target.value)}
        >
          {imageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className={styles.imagePreview}>
          {product.image_url && <img src={product.image_url} alt="Product preview" />}
        </div>
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="description">Description</label>
        <textarea
          className={styles.textArea}
          id="description"
          value={product.description}
          onChange={(e) => updateField('description', e.target.value)}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="material">Material</label>
        <textarea
          className={styles.textArea}
          id="material"
          value={product.material}
          onChange={(e) => updateField('material', e.target.value)}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>Care Instructions</label>
        {product.care_instructions.map((instruction, index) => (
          <div className={styles.careInstructionItem} key={index}>
            <input
              className={styles.input}
              type="text"
              value={instruction}
              onChange={(e) => updateCareInstruction(index, e.target.value)}
              placeholder="Care instruction"
            />
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
      </div>
    </>
  );
};

export default CMSForm;