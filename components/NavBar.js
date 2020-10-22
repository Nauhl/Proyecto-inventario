import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar(){
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Inventory</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Items</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/categories">Categories</a>
          <>
          <a class="dropdown-item" href="/conditions">Condition</a>
          <a class="dropdown-item" href="/locations">Locations</a>
          </>
          <a class="dropdown-item" href="/rooms">Rooms</a>
          <a class="dropdown-item" href="#">About us</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
  )
}