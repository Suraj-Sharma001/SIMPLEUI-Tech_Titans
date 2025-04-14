import ComponentPage from '../components/ComponentPage';

function Card() {
  const code = `<div class="gui-card">
  <h3 class="gui-card-title">Card Title</h3>
  <p class="gui-card-body">This is a simple card.</p>
</div>`;

  return (
    <ComponentPage
      title="Cards"
      description="GUI card layouts to display content in a clean and structured manner."
      code={code}
    >
      <div className="gui-card-row">
        <div className="gui-card">
          <h3 className="gui-card-title">Card Title</h3>
          <p className="gui-card-body">This is a simple card.</p>
        </div>
        <div className="gui-card">
          <h3 className="gui-card-title">Card Title</h3>
          <p className="gui-card-body">This is a simple card.</p>
        </div>
        <div className="gui-card">
          <h3 className="gui-card-title">Card Title</h3>
          <p className="gui-card-body">This is a simple card.</p>
        </div>
      </div>
    </ComponentPage>
  );
}

export default Card;
