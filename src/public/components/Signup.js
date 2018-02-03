<!DOCTYPE html>
<html>
<head>
  <title>Schoolwork Hub</title>
  <link rel="stylesheet" type="text/css" href="../style.css">
</head>
<header>
  <% include ./partials/header %>
</header>

<body>
  <div class="container-fluid">
    <% include ./partials/message %>
    <form method='post' action='/auth/signup' style="margin-right: 30%; margin-left: 30%" class="form-signup">
        <h2 class="form-signin-heading">Please sign up</h2>
        <label for="inputEmail" class="sr-only">Username</label>
        <input class="form-control" type='text' placeholder='Username' name='username' required autofocus>
        <label for="inputEmail" class="sr-only">Email</label>
        <input class="form-control" type='email' placeholder='Email' name='email' required autofocus>
        <label style="padding-top: 100px;" for="inputPassword" class="sr-only">Password</label>
        <input  class="form-control" type='password' placeholder='Password' name='password' required>
        <button type='submit' value='Log In' class="btn btn-lg btn-primary btn-block">Sign up</button>
      </form>
  </div>
<script src="../js/index.js"></script>

</html>
