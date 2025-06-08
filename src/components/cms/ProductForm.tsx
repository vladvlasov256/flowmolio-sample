import React from 'react';
import { Product } from '../../types';
import { imageOptions } from '../../data/initialData';
import * as Form from '@radix-ui/react-form';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import styles from '../../styles/form.module.scss';

interface ProductFormProps {
  product: Product;
  updateField: (field: keyof Product, value: string) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  product,
  updateField
}) => {
  return (
    <>
      <h2 className={styles.formTitle}>{product.name || "Product"}</h2>
      
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Form.Label className={styles.formLabel}>Photo</Form.Label>
          </div>
          {/* Use a hidden input for form validation */}
          <input 
            type="hidden" 
            name="image_url" 
            value={product.image_url} 
          />
          <div className={`${styles.formControl} ${styles.selectWithIcon}`}>
            <Select.Root value={product.image_url} onValueChange={(value) => updateField('image_url', value)}>
              <Select.Trigger className={styles.selectTrigger} aria-label="Image selection">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {product.image_url && <img src={product.image_url} alt="" className={styles.thumbnail} />}
                  <Select.Value placeholder="Select a photo" />
                </div>
                <Select.Icon className={styles.selectIcon}>
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className={styles.selectContent}>
                  <Select.Viewport className={styles.selectViewport}>
                    {imageOptions.map((option) => (
                      <Select.Item key={option.value} value={option.value} className={styles.selectItem}>
                        <img src={option.value} alt="" className={styles.thumbnail} />
                        <Select.ItemText>{option.label}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
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
      </Form.Root>
    </>
  );
};

export default ProductForm;