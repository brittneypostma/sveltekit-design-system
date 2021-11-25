<script>
	import '@styles/styles.scss';
	import { Content, Grid } from 'carbon-components-svelte';
</script>

<main>
	<Content>
		<Grid>
			<slot />
		</Grid>
	</Content>
</main>
