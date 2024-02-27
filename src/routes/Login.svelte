<script>
	import Input from '../lib/Input.svelte';
	import Button from '../lib/Button.svelte';
    import { token_store } from '../store';
	
	export let data = {};

	let email = data.email ?? '';
    let password = data.password ?? '';
	let errors = {};
    let error = "";
	let touchedFields = {};
    let access_token = null;


    async function login () {
        const res = await fetch("http://localhost:8090/login", {
            method: "POST",
            body: JSON.stringify(result, null, 2)
        })

        access_token = await res.text();

        if (access_token) {
            $token_store = access_token;
            if ( error ) error = ""

        } else {
            error = "Incorrect email and/or password"
        }
        console.log(access_token);
    }

	
	$: result = {
		email,password
	};
	
	$: errors = validate(touchedFields, result);

	const validate = () => {
		const errors = {};
        if (touchedFields.email && email === '') {
			errors.email = 'E-Mail is required';
		}

        if (touchedFields.password && password === '') {
			errors.password = 'Password is required';
		}
		return errors;
	};
	
	const validateAndSubmit = () => {
		touchedFields = { email: true, password: true };
		if (!Object.keys(errors).length) {
			login();
		}
	};




</script>

<div class = "form">
    <form name="login">
        <h2>Login</h2>
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
            label="Password"
            bind:value={password}
            on:blur={() => touchedFields.password = true}
            error={errors.password}
            />
            <Button on:click={validateAndSubmit}>Submit</Button>
            <div id="error_message">
                <small>{error}</small>
            </div>
            <div>
                <pre>
                    {JSON.stringify(result, null, 2)}
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