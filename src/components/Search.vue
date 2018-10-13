<template>
  <div>
    <div class="container">
      <form class="d-flex w-100 justify-content-between align-items-start">
        <div class="col">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="cidadeSearch"
              aria-describedby="city"
              placeholder="Nome da cidade"
            >
            <small id="emailHelp" class="form-text text-muted">Procure pela cidade desejada</small>
          </div>
        </div>
        <div class="col">
          <button type="submit" class="btn btn-primary">Buscar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
};
</script>
