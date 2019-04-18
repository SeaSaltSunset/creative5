<template>
<div id="app">

  <div id="nav" class="content">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><i class="fas fa-dice-d20"></i></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">


          <li class="nav-item active">

            <router-link to="/" class="pure-menu-link nav-link">Home</router-link>
            <!-- HOME PAGE LINK -->
            <!--  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
          </li>


          <li class="nav-item">

            <router-link to="/yourpage" class="pure-menu-link nav-link">Your Page</router-link>
            <!-- OUR PAGE LINK -->
          </li>
        </ul>
      </div>
    </nav>
    <hr>
  </div>
  <router-view />


  <div class="footer">
    <a href="https://github.com/SeaSaltSunset/creative5">Link to Github Repository</a>
  </div>
</div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



#nav a {
  font-weight: bold;
  color: #2c3e50;

}


#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 2.5rem;
  /* Footer height */
}

#fa {

  width: 20px;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  height: 50px;
  padding: 10px 100px 10px 100px;
  background: #f8f9fa;
  border-top: 2px groove #4c2000;
  border-color: #42b98d;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}

.footer a {
  color: #000;
}

.content {
  padding: 20px 100px 0px 100px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


/* Modals */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  max-height: calc(100vh - 50px);
  overflow-y: auto;
}

.modal-header h1 {
  margin-bottom: 30px;
  font-size: 1.5em;
}

.modal-body {
  margin: 0;
}

.modal-body input {
  margin-bottom: 20px;
  height: 30px;
}

.modal-footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.modal-default-button {
  float: right;
}

.modal-title {
  text-align: center;
}

/*
  * The following styles are auto-applied to elements with
  * transition="modal" when their visibility is toggled
  * by Vue.js.
  *
  * You can easily play with the modal transition by editing
  * these styles.
  */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
