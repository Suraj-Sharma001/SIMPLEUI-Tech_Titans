import ComponentPage from '../components/ComponentPage';

function Utilities() {
  const code = `<div class="gui-text-center gui-m-4">Centered Text with Margin</div>`;

  return (
    <ComponentPage title="Utility Classes" description="Quick utility classes for layout and spacing." code={code}>
      <div className="gui-text-center gui-m-4">Centered Text with Margin</div>
    </ComponentPage>
  );
}

export default Utilities;
  