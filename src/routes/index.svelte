<script>
	import 'carbon-components-svelte/css/white.css';
	import {
		Button,
		Content,
		Grid,
		Row,
		Column,
		Link,
		TextInput,
		Form,
		FormGroup,
		Checkbox,
		RadioButtonGroup,
		RadioButton,
		Select,
		SelectItem
	} from 'carbon-components-svelte';
</script>

<Content>
	<Grid>
		<Row style="margin-bottom: var(--cds-layout-04)">
			<Column>
				<h1>Carbon Components Svelte</h1>
				<p class="big-paragraph">
					Carbon Components Svelte is a
					<Link inline class="big-link" href="https://github.com/sveltejs/svelte">Svelte</Link>
					component library that implements the
					<Link inline class="big-link" href="https://www.carbondesignsystem.com/">
						Carbon Design System
					</Link>, an open source design system by IBM.
				</p>
				<p>
					Design systems facilitate design and development through reuse, consistency, and
					extensibility.
				</p>
			</Column>
		</Row>
		<Row style="margin-bottom: var(--cds-layout-02)">
			<Column>
				<h2>Buttons</h2>
				<hr />
				<Row>
					<Column>
						<h3>Primary</h3>
						<Button>Primary button</Button>
					</Column>
					<Column>
						<h3>Secondary</h3>
						<Button kind="secondary">Secondary button</Button>
					</Column>
					<Column>
						<h3>Tertiary</h3>
						<Button kind="tertiary">Tertiary button</Button>
					</Column>
				</Row>
			</Column>
		</Row>
		<Row style="margin-bottom: var(--cds-layout-02)">
			<Column>
				<h2>Inputs</h2>
				<hr />
				<Row>
					<Column>
						<h3>Default</h3>
						<TextInput labelText="User name" placeholder="Enter user name..." />
					</Column>
					<Column>
						<h3>With helper text</h3>
						<TextInput
							labelText="User name"
							helperText="Your user name is associated with your email"
							placeholder="Enter user name..."
						/>
					</Column>
					<Column>
						<h3>Hidden Label</h3>
						<TextInput hideLabel labelText="User name" placeholder="Enter user name..." />
					</Column>
				</Row>
			</Column>
		</Row>
		<Row style="margin-bottom: var(--cds-layout-02)">
			<Column>
				<h2>Form</h2>
				<hr />
				<Form on:submit>
					<FormGroup legendText="Checkboxes">
						<Checkbox id="checkbox-0" labelText="Checkbox Label" checked />
						<Checkbox id="checkbox-1" labelText="Checkbox Label" />
						<Checkbox id="checkbox-2" labelText="Checkbox Label" disabled />
					</FormGroup>
					<FormGroup legendText="Radio buttons">
						<RadioButtonGroup name="radio-button-group" selected="default-selected">
							<RadioButton id="radio-1" value="standard" labelText="Standard Radio Button" />
							<RadioButton
								id="radio-2"
								value="default-selected"
								labelText="Default Selected Radio Button"
							/>
							<RadioButton
								id="radio-4"
								value="disabled"
								labelText="Disabled Radio Button"
								disabled
							/>
						</RadioButtonGroup>
					</FormGroup>
					<FormGroup>
						<Select id="select-1" labelText="Select menu" value="placeholder-item">
							<SelectItem disabled hidden value="placeholder-item" text="Choose an option" />
							<SelectItem value="option-1" text="Option 1" />
							<SelectItem value="option-2" text="Option 2" />
							<SelectItem value="option-3" text="Option 3" />
						</Select>
					</FormGroup>
					<Button type="submit">Submit</Button>
				</Form>
			</Column>
		</Row>
	</Grid>
</Content>

<style>
	h3 {
		margin-bottom: var(--cds-layout-01);
	}
</style>
