<template>
  <div
    id="banner"
    class="container-fluid d-flex px-0"
  >
    <div class="overlay d-flex w-100">
      <div class="d-flex flex-column m-auto">
        <h1 class="text-white">
          Je fais marcher le commerce de proximité avec...
        </h1>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Une boutique, un produit, une envie ?"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          >
          <div class="input-group-append">
            <button
              id="button-addon2"
              class="btn btn-outline-light"
              type="button"
            >
              Rechercher
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container-fluid {
  background-image: url('/img/brooke-lark-W1B2LpQOBxA-unsplash.jpg');
  background-clip: padding-box;
  background-size: cover;
  background-repeat: no-repeat;
}
#banner {
  min-height: 100%;
  height: 100%;
}
.overlay {
  background-color:rgb(0 0 0 / 48%);
}
</style>
