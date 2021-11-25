<script>
	import Button from '@components/Button.svelte';
</script>

<section class="row" style="margin-bottom: var(--cds-layout-04)">
	<section class="col">
		<h1>Vanilla CSS</h1>
		<p>
			Vanilla CSS is a great way to create your design system. It is simple and easy to get started
			and requires little effort to customize and add to.
		</p>

		<p>
			Design systems facilitate design and development through reuse, consistency, and
			extensibility.
		</p>
	</section>
</section>
<section class="row">
	<section class="col">
		<h2>Buttons</h2>
		<hr />
	</section>
</section>
<section class="row">
	<section class="col">
		<h3>Primary</h3>
		<Button>Primary button</Button>
	</section>
	<section class="col">
		<h3>Secondary</h3>
		<Button kind="secondary">Secondary button</Button>
	</section>
	<section class="col">
		<h3>Tertiary</h3>
		<Button kind="tertiary">Tertiary button</Button>
	</section>
</section>
