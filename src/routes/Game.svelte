<script>
  import { onMount } from "svelte";
  import { timeConverter } from  "../utils.js";
  import Modal from '../lib/Modal.svelte'
  import LogForm  from "../lib/LogForm.svelte"

  export let game_url = "";
  let game;
  let release_date;

  //Get game info
  onMount(async () => {
    const response = await fetch("http://localhost:8090/game/" + game_url);
    game = await response.json();

    //Convert UNIX Timestamp to readable release date
    release_date = timeConverter(parseInt(game.release_date));

  });


  let showModal = false;
  const toggleModal = () =>{
		showModal = !showModal;
	}

  let contacts=[];
  const addContact = (e) =>{
		//console.log(e.detail);
		const contact = e.detail;
		contacts = [...contacts, contact];
		console.log(contacts);
	}

</script>
<Modal {showModal} isPromo={true} on:click={toggleModal}>
	<LogForm on:addContact={addContact}/>
</Modal>



<div>
  {#if game}
      <div class=sidebar>
        <img src={"http://localhost:8090/game_images/"+game.id} alt={game.name} width="100%" height="auto">
        <button on:click={toggleModal}>
          Log or Review
        </button>
      </div>

      <div class=game_info>
        <p class=game_title>{game.name}</p>
        <p>Released on {release_date}</p>
        <p>Genres: {game.genres}</p>
        <p>Platforms: {game.platforms}</p>

        <div>
          <p>{game.description}</p>
        </div>

      </div>


      
      

  {:else}
  <p>Game could not be found</p>
  {/if}
</div> 

<style>
  .sidebar {
    float:left;
    width: 25%;
    margin-right: 5%;

    
  }
  .game_info {
    margin-left: 0%;
  }
  .game_title {
    font-size:xx-large;
    font-family: Tahoma, Verdana, sans-serif;
    font-weight: 800;

  }

</style>