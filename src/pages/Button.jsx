import ComponentPage from '../components/ComponentPage';

function Button() {
  const code = `<button class="gui-btn gui-btn-primary">Primary</button>
<button class="gui-btn gui-btn-secondary">Secondary</button>`;

  return (
    <ComponentPage title="Buttons" description="GUI button styles for common actions." code={code}>
      <button className="gui-btn gui-btn-primary">Primary</button>
      <button className="gui-btn gui-btn-secondary ml-2">Secondary</button>
      <button className='gui-btn gui-btn-success'>Success</button>
    </ComponentPage>
  );
}

export default Button;
