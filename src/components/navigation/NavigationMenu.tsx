import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import styles from '../../styles/navigation.module.scss';

const NavMenu: React.FC = () => {
  return (
    <NavigationMenu.Root className={styles.navigationMenuRoot}>
      <a href="https://github.com/vladvlasov256/flowmolio" className={styles.navigationMenuLogo} target="_blank" rel="noopener noreferrer">FlowMolio</a>
      
      <NavigationMenu.List className={styles.navigationMenuList}>
        <NavigationMenu.Item className={styles.navigationMenuItem}>
          <NavigationMenu.Link
            className={`${styles.navigationMenuLink} ${styles.solid}`}
            href="https://flowmol.io/"
          >
            Open Editor
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        
        <NavigationMenu.Item className={styles.navigationMenuItem}>
          <NavigationMenu.Link
            className={styles.navigationMenuLink}
            href="https://github.com/vladvlasov256/flowmolio-sample"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon style={{ marginRight: '5px' }} />
            GitHub
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default NavMenu;