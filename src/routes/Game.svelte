<script>
  import { onMount } from "svelte";
  import { timeConverter } from  "../utils.js";
  import Image  from "../lib/Image.svelte"

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


</script>

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


<div>
  {#if game}
      <div class=sidebar>
        <img src={"http://localhost:8090/game_images/"+game.id} alt={game.name} width="100%" height="auto">
        <p>aaaaa</p>
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

