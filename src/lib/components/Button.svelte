<script>
	export let kind = 'primary';
</script>

<button class={kind} {...$$restProps} on:click>
	<slot />
</button>

<style>
	button {
		font-size: var(--cds-body-short-01-font-size, 1rem);
		font-weight: var(--cds-body-short-01-font-weight, 400);
		line-height: var(--cds-body-short-01-line-height, 1.29);
		letter-spacing: var(--cds-body-short-01-letter-spacing, 0.16px);
		position: relative;
		display: inline-flex;
		max-width: 20rem;
		min-height: 3rem;
		flex-shrink: 0;
		align-items: center;
		justify-content: space-between;
		padding: calc(0.875rem - 3px) 63px calc(0.875rem - 3px) 15px;
		margin: 0;
		border-radius: 0;
		cursor: pointer;
		outline: 0;
		text-align: left;
		text-decoration: none;
		transition: background 70ms cubic-bezier(0, 0, 0.38, 0.9),
			box-shadow 70ms cubic-bezier(0, 0, 0.38, 0.9), border-color 70ms cubic-bezier(0, 0, 0.38, 0.9),
			outline 70ms cubic-bezier(0, 0, 0.38, 0.9);
		vertical-align: top;
	}

	button.primary {
		background-color: var(--cds-interactive-01, #0f62fe);
		color: var(--cds-text-04, #fff);
		border: 1px solid transparent;
	}

	button.primary:hover {
		background-color: var(--cds-hover-primary, #0353e9);
		color: var(--cds-text-04, #fff);
	}

	button.secondary {
		background-color: var(--cds-interactive-02, #393939);
		color: var(--cds-text-04, #fff);
		border: 1px solid transparent;
	}

	button.secondary:hover {
		color: var(--cds-text-04, #fff);
		background-color: var(--cds-hover-secondary, #4c4c4c);
	}

	button.tertiary {
		border-width: 1px;
		border-style: solid;
		border-color: var(--cds-interactive-03, #0f62fe);
		background-color: transparent;
		color: var(--cds-interactive-03, #0f62fe);
	}

	button.tertiary:hover {
		background-color: var(--cds-hover-tertiary, #0353e9);
		color: var(--cds-inverse-01, #fff);
	}
</style>
