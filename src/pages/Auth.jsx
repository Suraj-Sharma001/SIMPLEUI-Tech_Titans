import ComponentPage from '../components/ComponentPage';

function Auth() {
  const code = `<form class="gui-auth-form">
  <input type="email" class="gui-input" placeholder="Email" />
  <input type="password" class="gui-input mt-2" placeholder="Password" />
  <button class="gui-btn gui-btn-primary mt-2">Login</button>
</form>`;

  return (
    <ComponentPage title="Auth Forms" description="Login and Sign Up form templates." code={code}>
      <form className="gui-auth-form max-w-sm">
        <input type="email" className="gui-input" placeholder="Email" />
        <input type="password" className="gui-input mt-2" placeholder="Password" />
        <button className="gui-btn gui-btn-primary mt-2">Login</button>
      </form>
    </ComponentPage>
  );
}

export default Auth;
