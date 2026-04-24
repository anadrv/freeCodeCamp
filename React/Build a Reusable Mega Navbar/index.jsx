export const Navbar = () => {
  return (
    <nav class="navbar">
      <ul>
        <li className="nav-item">
          <a href='#'>Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="#">Widgets</a>
        </li>
        <li className="nav-item">
          <button aria-expanded="false">Apps</button>
          <ul className="sub-menu" aria-label="Apps">
          <li></li>
          <li></li>
          <li></li>
            
          </ul>
        </li>
      </ul>
    </nav>
  )
}