import React, { useEffect, useState } from 'react';
import * as Toast from '@radix-ui/react-toast';
import { Cross2Icon } from '@radix-ui/react-icons';
import styles from '../../styles/toast.module.scss';

const WelcomeToast: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show toast after a slight delay for better UX
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className={styles.toast}
        open={open}
        onOpenChange={setOpen}
        duration={20000} // 20 seconds
      >
        <Toast.Title className={styles.toastTitle}>
          Welcome to FlowMolio Demo!
        </Toast.Title>
        <Toast.Description className={styles.toastDescription}>
          This is a live preview of content managed through a CMS<br/><br/>
          The preview is designed in Figma and connected to the API with FlowMolio
          <span className={styles.highlightedText}>
            Click "Open Editor" to create your own interactive preview!
          </span>
        </Toast.Description>
        <Toast.Close className={styles.toastAction} asChild>
          <button className={styles.closeButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </Toast.Close>
      </Toast.Root>
      <Toast.Viewport className={styles.toastViewport} />
    </Toast.Provider>
  );
};

export default WelcomeToast;