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
        type: 'head',
        label: 'Main',
        icon: '',
        child: []
    },
    {
        link: '',
        type: 'parent',
        label: 'Dashboard',
        icon: '',
        child: [{
            link: '',
            type: 'link',
            label: 'Home',
            icon: '',
            child: []
        }, {
            link: '',
            type: 'link',
            label: 'Home',
            icon: '',
            child: []
        }, {
            link: '',
            type: 'link',
            label: 'Home',
            icon: '',
            child: []
        }, {
            link: '',
            type: 'link',
            label: 'Home',
            icon: '',
            child: []
        }]
    },
    {
        link: '',
        type: 'head',
        label: 'Component',
        icon: '',
        child: []
    },
    {
        link: '',
        type: 'parent',
        label: 'Dashboard',
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
