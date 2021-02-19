import Button from './components/Button/Button.svelte';
import ContentHeader from './components/ContentHeader/ContentHeader.svelte';

window.Button = function(options) {
    return new Button(options);
};

window.ContentHeader = function(options) {
    return new ContentHeader(options);
};