<template>
   <div class="home">
      <div class="jumbotron">
        <h1 class="display-3">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" :href="getLoginUrl" role="button">Login with google</a>
        </p>
     </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
      computed: {
        getLoginUrl() {
          if(window.location.hostname === 'localhost'){
            return 'http://localhost:5000/auth/google';
          } else {return 'https://hdv-store-api/auth/google';}
        }
     }

};
</script>
