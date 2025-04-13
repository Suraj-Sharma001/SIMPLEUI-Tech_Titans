import ComponentPage from '../components/ComponentPage';

function Auth() {
  const code = `<div class="gui-auth">
  <h2 class="gui-auth-header">Login</h2>
  <form class="gui-auth-form">
    <input type="email" class="gui-input" placeholder="Email" />
    <input type="password" class="gui-input mt-2" placeholder="Password" />
    <button class="gui-btn gui-btn-success mt-2 w-full">Login</button>
  </form>
  <div class="gui-auth-footer">
    <a href="#">Forgot Password?</a>
    <a href="#">Sign Up</a>
  </div>
</div>`;

  return (
    <ComponentPage title="Auth Forms" description="Login and Sign Up form templates." code={code}>
      <div className="gui-auth">
        <h2 className="gui-auth-header">Login</h2>
        <form className="gui-auth-form">
          <input type="email" className="gui-input" placeholder="Email" />
          <input type="password" className="gui-input mt-2" placeholder="Password" />
          <button className="gui-btn gui-btn-success mt-2 w-full">Login</button>
        </form>
        <div className="gui-auth-footer">
          <a href="#">Forgot Password?</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </ComponentPage>
  );
}

export default Auth;
