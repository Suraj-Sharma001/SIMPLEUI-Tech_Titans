import ComponentPage from '../components/ComponentPage';

function Utilities() {
  const colorCode = `<div class="gui-bg-primary gui-text-white gui-p-4 gui-rounded">Primary</div>`;
  const flexCode = `<div class="gui-flex gui-justify-between gui-p-4 gui-border">
  <span>Left</span>
  <span>Right</span>
</div>`;
  const spacingCode = `<div class="gui-p-4 gui-m-4 gui-bg-gray-200 gui-rounded">
  Box with padding and margin
</div>`;
  const typographyCode = `<p class="gui-text-lg gui-font-medium">Large text</p>
<p class="gui-text-sm gui-italic">Small italic text</p>`;

  return (
    <ComponentPage title="Utility Classes" description="Quick utility classes for layout and spacing.">
      {/* Colors */}
      <section className="gui-mb-8">
        <h2 className="gui-text-lg gui-font-bold gui-mb-2">Colors</h2>
        <div className="gui-flex gui-gap-2 gui-flex-wrap gui-mb-2">
          <div className="gui-bg-primary gui-text-white gui-p-4 gui-rounded">Primary</div>
          <div className="gui-bg-secondary gui-text-white gui-p-4 gui-rounded">Secondary</div>
          <div className="gui-bg-success gui-text-white gui-p-4 gui-rounded">Success</div>
          <div className="gui-bg-danger gui-text-white gui-p-4 gui-rounded">Danger</div>
        </div>
        <pre className="language-html">
          <code>{colorCode}</code>
        </pre>
      </section>

      {/* Flex */}
      <section className="gui-mb-8">
        <h2 className="gui-text-lg gui-font-bold gui-mb-2">Flex</h2>
        <div className="gui-flex gui-justify-between gui-p-4 gui-border gui-mb-2">
          <span>Left</span>
          <span>Right</span>
        </div>
        <pre className="language-html">
          <code>{flexCode}</code>
        </pre>
      </section>

      {/* Spacing */}
      <section className="gui-mb-8">
        <h2 className="gui-text-lg gui-font-bold gui-mb-2">Spacing</h2>
        <div className="gui-p-4 gui-m-4 gui-bg-gray-200 gui-rounded gui-mb-2">
          Box with padding and margin
        </div>
        <pre className="language-html">
          <code>{spacingCode}</code>
        </pre>
      </section>

      {/* Typography */}
      <section className="gui-mb-8">
        <h2 className="gui-text-lg gui-font-bold gui-mb-2">Typography</h2>
        <p className="gui-text-lg gui-font-medium gui-mb-1">This is large text with medium weight.</p>
        <p className="gui-text-sm gui-italic gui-mb-2">This is small italic text.</p>
        <pre className="language-html">
          <code>{typographyCode}</code>
        </pre>
      </section>
    </ComponentPage>
  );
}

export default Utilities;
