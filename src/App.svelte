<script>
    import { onMount } from "svelte";
    let game;

    onMount(async () => {
      const response = await fetch("http://localhost:8090/game/destiny");
      game = await response.json();
    });

    console.log(game);
    console.log("AAAAAAA");
</script>
    
<p>Game Info</p>
{#if game}
  <ul>
    <li>
      <p> Name: {game.Name}</p>    
    </li>
  </ul>
{:else}
  <p class="loading">loading...</p>
{/if}
      