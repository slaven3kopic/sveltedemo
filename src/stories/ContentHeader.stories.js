import ContentHeader from './../components/ContentHeader/ContentHeader.svelte';

export default {
    title: 'Example/ContentHeader',
    component: ContentHeader,
};

const Template = ({ args }) => ({
    Component: ContentHeader,
    props: {
        pageName: 'Home Page',
        pageIcon: 'fa fa-home',
        views: [{
                name: 'View',
                active: true,
                url: './'
            },
            {
                name: 'Properties',
                active: false,
                url: './'
            },
            {
                name: 'Layouts',
                active: false,
                url: './'
            },
            {
                name: 'Versions',
                active: false,
                url: './'
            }
        ]
    }
});

export const Primary = Template.bind({});