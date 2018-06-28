export class MenuItem {
    link: string;
    type: string;
    label: string;
    icon: string;
    child: MenuItem[];
}

export const MENUS = [
    {
        link: '',
        type: 'parent',
        label: 'Home',
        icon: '',
        child: [{
            link: '',
            type: 'link',
            label: 'Home',
            icon: '',
            child: []
        }]
    }
];
