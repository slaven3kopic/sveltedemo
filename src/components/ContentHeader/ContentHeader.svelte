<script>
    import './content-header.css';
    import Icon from 'svelte-awesome';
    import Button from '../Button/Button.svelte';
    import { ellipsisH } from 'svelte-awesome/icons';


    export let pageName;
    export let pageIcon;
    export let views = [];
</script>

<div class="content-header">
    <span class="page">
        <span class="page-icon"><Icon data={pageIcon} /></span>
        <span class="page-name">{pageName}</span>
    </span>
    <div class="actions">
        <div class="views">
            <span class="views-title">Views:</span>
            {#each views as view}
                <Button type="tertiary" active={view.active} label={view.name} />
            {/each}
        </div>
        <Button cssClass="shortcuts-btn" type="icon" active={false} icon={ellipsisH} />
    </div>
</div>
