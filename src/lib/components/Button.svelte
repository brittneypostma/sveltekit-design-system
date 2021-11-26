<script>
	export let kind = 'primary';
</script>

<button class={kind} {...$$restProps} on:click>
	<slot />
</button>

<style>
	button {
		@apply text-base leading-tight tracking-base relative inline-flex min-h-8 items-center content-between py-calc pl-left pr-right no-underline transition-button;
	}

	button.primary {
		@apply bg-primary-300 text-white border-transparent;
	}

	button.primary:hover {
		@apply bg-primary;
	}

	button.secondary {
		@apply bg-basics-700 text-white border-transparent;
	}

	button.secondary:hover {
		@apply bg-basics-800;
	}

	button.tertiary {
		@apply border border-primary-300 text-primary-300 bg-transparent;
	}

	button.tertiary:hover {
		@apply bg-primary-500 text-basics-50;
	}
</style>
