<script>
  import {Router, Link, Route} from "svelte-routing";
  import Game from "./routes/Game.svelte";
  import Home from "./routes/Home.svelte";
  import Register from "./routes/Register.svelte";
  import Login from "./routes/Login.svelte";
  import Logout from "./routes/Logout.svelte";

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
    <Route path ="register">
      <Register/>
    </Route>
    <Route path ="login">
      <Login/>
    </Route>
    <Route path="logout">
      <Logout/>
    </Route>
  </div>
</Router>

      