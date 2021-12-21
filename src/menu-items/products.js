// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill,IconBrandProducthunt } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconBrandProducthunt
};

// ==============================|| products MENU ITEMS ||============================== //

const products = {
    id: 'products',
    title: 'Product Management',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'All Product',
            type: 'item',
            url: '/products',
            icon: icons.IconBrandProducthunt,
            breadcrumbs: false
        }
    ]
};

export default products;
