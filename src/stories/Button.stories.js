import Button from './../components/Button/Button.svelte';
import { ellipsisH } from 'svelte-awesome/icons';

export default {
    title: 'Example/Button',
    component: Button,
};

export const TertiaryButton = () => ({
    Component: Button,
    props: {
        label: 'Versions',
        type: 'tertiary'
    }
});

export const IconButton = () => ({
    Component: Button,
    props: {
        label: '',
        type: 'icon',
        icon: ellipsisH
    }
});