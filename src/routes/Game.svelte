<script>
  import { onMount } from "svelte";
  import { timeConverter} from  "../utils.ts";
  export let game_url = "";
  let game;
  let release_date;

  //Get game info
  onMount(async () => {
    const response = await fetch("http://localhost:8090/game/" + game_url);
    game = await response.json();

    //Convert UNIX Timestamp to readable release date
    release_date = timeConverter(parseInt(game.ReleaseDate));
  });



</script>

<style>
  .game_title {
    font-size:xx-large;
    font-family: Tahoma, Verdana, sans-serif;
    font-weight: 800;

  }

</style>

<div>
  {#if game}
      <div>
        <p class=game_title>{game.Name}</p>
        <p>Released on {release_date}</p>
        <p>Genres: {game.Genres}</p>
        <p>Platforms: {game.Platforms}</p>
      </div>

      <div>
        <p>{game.Description}</p>
      </div>
      
      

  {:else}
  <p>loading...</p>
  {/if}
</div> 

