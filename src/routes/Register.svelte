<script>
	import Input from '../lib/Input.svelte';
	import Select from '../lib/Select.svelte';
	import Button from '../lib/Button.svelte';
	
	export let data = {};

	let email = data.email ?? '';
	let username = data.username ?? '';
    let password = data.password ?? '';
	let errors = {};
	let touchedFields = {};
    let final_res = null;


    async function register () {
        const res = await fetch("http://localhost:8090/register", {
            method: "POST",
            body: JSON.stringify(result, null, 2)
        })

        const json = await res.json()
		final_res = JSON.stringify(json)
    }

	
	$: result = {
		email,username,password
	};
	
	$: errors = validate(touchedFields, result);

	const validate = () => {
		const errors = {};
        if (touchedFields.email && email === '') {
			errors.email = 'E-Mail is required';
		}
		if (touchedFields.username && (username.length < 3 || username.length > 20)) {
			errors.username = 'Username must have 3 to 20 characters';
		}   
        if (touchedFields.password && password === '') {
			errors.password = 'Password is required';
		}
		return errors;
	};
	
	const validateAndSubmit = () => {
		touchedFields = {email: true, username: true, password: true };
		if (!Object.keys(errors).length) {
			register();
            alert("Registration complete");
            window.location.href = '/';
		}
	};
</script>

<div class = "form">
    <form name="register">
        <h2>Register</h2>
        <fieldset class="fieldset">
            <Input
                type="text"
                label="E-mail"
                bind:value={email}
                on:blur={() => touchedFields.email = true}
                error={errors.email}
            />
            <Input
            type="text"
            label="Username"
            bind:value={username}
            on:blur={() => touchedFields.username = true}
            error={errors.username}
            />
            <Input
            type="text"
            label="Password"
            bind:value={password}
            on:blur={() => touchedFields.password = true}
            error={errors.password}
            />
            <Button on:click={validateAndSubmit}>Submit</Button>
            <div>
                <pre>
                    {JSON.stringify(result, null, 2)}
                </pre>
                <pre>
                    {final_res}
                </pre>
            </div>
        </fieldset>
    </form>
</div>

<style>
    div.form {
        padding-top: 5%;
        display: block;
        text-align: center;
    }
    form {
        display: inline-block;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        width: 40%;
    }
	.fieldset > * {
		display: block;
	}
	
	.fieldset > :global(:not(legend) + *) {
		margin-top: 16px;
	}
	
	.fieldset {
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 20px;
	}
</style>