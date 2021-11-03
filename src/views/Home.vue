<template>
  <main role="main">
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">About Me!</h1>
        <p>
          This project exists for educational and experimentational reasons.
          Written in Vue.js, it consumes a Rails API. Between the front and back
          ends, I demonstrate work with numerous technologies and concepts.
        </p>
        <p>
          It's a bit of a hodgepodge of features but the purpose is to have a
          place to try new ideas without needing to boilerplate a whole new
          project for each one, a production-level sandbox for concepts
        </p>
        <ul class="list-group">
          <li class="list-group-item">Postgres</li>
          <li class="list-group-item">ReSTful API</li>
          <li class="list-group-item">3rd Party API Consumption</li>
          <li class="list-group-item">JWT</li>
          <li class="list-group-item">Action Cable and WebSockets</li>
          <li class="list-group-item">Concurrency in Ruby</li>
          <li class="list-group-item">Screen Scraping</li>
          <li class="list-group-item">Testing</li>
          <li class="list-group-item">CI-CD Pipelines</li>
        </ul>
        <br />
        <p>
          <a
            class="btn btn-primary btn-lg"
            href="https://github.com/gatorjuice"
            role="button"
            target="_blank"
            >My Github &raquo;</a
          >
        </p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h2>Backend</h2>
          <p>The backend serving this web application is written in Rails.</p>
          <p>
            <a
              class="btn btn-secondary"
              href="https://github.com/gatorjuice/about_me_api"
              role="button"
              target="_blank"
              >About Me API &raquo;</a
            >
          </p>
        </div>
        <div class="col-md-4">
          <h2>Frontend</h2>
          <p>
            This is an ongoing experiment in Vue.js. The framework is really
            terrific and fun to learn.
          </p>
          <p>
            <a
              class="btn btn-secondary"
              href="https://github.com/gatorjuice/about_me_vue"
              role="button"
              target="_blank"
              >About Me Vue &raquo;</a
            >
          </p>
        </div>
        <div class="col-md-4">
          <h2>More About Me</h2>
          <p>Check out my LinkedIn profile to learn more about me.</p>
          <p>
            <a
              class="btn btn-secondary"
              href="https://www.linkedin.com/in/jamesrgates48/"
              role="button"
              >LinkedIn &raquo;</a
            >
          </p>
        </div>
      </div>

      <hr />
    </div>
    <!-- /container -->
  </main>
</template>
<script>
export default {
  name: "Home",
};
</script>
<style scoped>
body {
  padding-top: 3.5rem;
}

.jumbotron {
  background-color: #e9ecef;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}
</style>
