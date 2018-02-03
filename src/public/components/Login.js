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
    <form action='/auth/login' style="margin-right: 30%; margin-left: 30%" class="form-signin">
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputEmail" class="sr-only">Username</label>
      <input class="form-control" type='text' placeholder='Username' name='username' required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input class="form-control" type='password' placeholder='Password' name='password' required>
      <button type='submit' value='Log In' class="btn btn-lg btn-primary btn-block">Sign in</button>
    </form>
    </div>
    <script src="../js/index.js"></script>
</html>
