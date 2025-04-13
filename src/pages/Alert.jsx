import ComponentPage from '../components/ComponentPage';

function Alert() {
  const code = `<div class="gui-alert gui-alert-success">Success! All good.</div>
  <div class="gui-alert gui-alert-warning">Warning! Are you Sure??.</div>
  <div class="gui-alert gui-alert-danger">Error! Something went wrong.</div>`;

  return (
    <ComponentPage title="Alerts" description="GUI alert components for messages." code={code}>
      <div className="gui-alert gui-alert-success">Success! All good.</div>
      <div class="gui-alert gui-alert-warning">Warning! Are you Sure??.</div>
      <div className="gui-alert gui-alert-danger mt-2">Error! Something went wrong.</div>
    </ComponentPage>
  );
}

export default Alert;
