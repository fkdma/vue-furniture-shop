<template>
  <nav class="navbar navbar-expand-lg navbar-light navbar-inverse">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      id="navbarTogglerDemo01"
      class="collapse navbar-collapse"
    >
      <a
        class="navbar-brand"
        href="#"
      >EC&C</a>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a
            class="nav-link"
            href="#"
          >Accueil</a>
        </li>
        <li class="nav-item">
          <router-link
            to="/store/mon-commerce"
            class="nav-link"
          >
            Je suis un commerçant
          </router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Je cherche.."
          aria-label="Search"
        >
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          C'est parti !
        </button>
      </form>
    </div>
  </nav>
</template>
