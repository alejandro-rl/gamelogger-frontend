<script>
    // create a prop
    /**
     * @type {{ Name: any; }}
     */
     export let game;
</script>

<article>
    <h1>{game.Name}</h1>
</article>

<style>
    article {
      margin: 0 0 1em 0;
    }
    h1 {
      font-size: 1.4em;
      margin: 0;
      display: block;
    }
  </style>