import Button from './../components/Button/Button.svelte';
import { home } from 'svelte-awesome/icons';

export default {
    title: 'Example/Button',
    component: Button,
};

const Template = ({ args }) => ({
    Component: Button,
    props: {
        label: 'Versions',
        type: 'tertiary'
    }
});

export const Tertiary = Template.bind({});