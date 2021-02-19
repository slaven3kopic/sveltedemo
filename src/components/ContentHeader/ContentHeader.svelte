<script>
    import './ContentHeader.css';
    import './../../assets/3rdparty/fontawesome/fontawesome.min.js';
    import './../../assets/3rdparty/fontawesome/fontawesome.min.css';
    import './ContentHeader.css';
    import Button from '../Button/Button.svelte';

    export let pageName;
    export let pageIcon;
    export let views = [];
</script>

<div class="content-header">
    <span class="page">
        <span class="page-icon"><i class="page-icon-i {pageIcon}"></i></span>
        <span class="page-name">{pageName}</span>
    </span>
    <div class="actions">
        <div class="views">
            <span class="views-title">Views:</span>
            {#each views as view}
                <a href={view.url}><Button type="tertiary" active={view.active} label={view.name} /></a>
            {/each}
        </div>
        <Button cssClass="shortcuts-btn" type="icon" active={false} icon="fas fa-ellipsis-h" />
    </div>
</div>
