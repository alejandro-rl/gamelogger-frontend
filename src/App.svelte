<script>
  import {Router, Link, Route} from "svelte-routing";
  import Game from "./routes/Game.svelte";
  import Home from "./routes/Home.svelte"


  export let url = "";
</script>


<Router {url}>
  <nav>
    <Link to="/">Home</Link>
  </nav>
  <div>
    <Route path ="/">
      <Home/>
    </Route>
    <Route path ="game/:game_url" let:params>
      <Game game_url={params.game_url}/>
    </Route>
  </div>
</Router>

      