import ContentHeader from './../components/ContentHeader/ContentHeader.svelte';
import { home } from 'svelte-awesome/icons';

export default {
    title: 'Example/ContentHeader',
    component: ContentHeader,
};

const Template = ({ args }) => ({
    Component: ContentHeader,
    props: {
        pageName: 'Home Page',
        pageIcon: home,
        views: [{
                name: 'View',
                active: true
            },
            {
                name: 'Properties',
                active: false
            },
            {
                name: 'Layouts',
                active: false
            },
            {
                name: 'Versions',
                active: false
            }
        ]
    }
});

export const Primary = Template.bind({});