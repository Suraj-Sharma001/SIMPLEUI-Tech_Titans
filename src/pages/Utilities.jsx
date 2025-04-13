import ComponentPage from '../components/ComponentPage';
import UtilityParts from '../components/UtilityParts';

function Utilities() {
  return (
    <ComponentPage title="Utility Classes" description="Quick utility classes for layout and spacing.">
      
      <UtilityParts
        title="Colors"
        demo={
          <div className="gui-flex gui-gap-2 gui-flex-wrap">
            <div className="text-primary gui-font-bold gui-p-4 gui-rounded">Primary</div>
            <div className="text-secondary gui-font-bold gui-p-4 gui-rounded">Secondary</div>
            <div className="text-success gui-font-bold gui-p-4 gui-rounded">Success</div>
            <div className="text-danger gui-font-bold gui-p-4 gui-rounded">Danger</div>
          </div>
        }
        code={` <div className="text-primary gui-font-bold gui-p-4 gui-rounded">Primary</div>
 <div className="text-secondary gui-font-bold gui-p-4 gui-rounded">Secondary</div>
 <div className="text-success gui-font-bold gui-p-4 gui-rounded">Success</div>
 <div className="text-danger gui-font-bold gui-p-4 gui-rounded">Danger</div>`}
      />

      <UtilityParts
        title="Flex"
        demo={
          <div className="gui-flex gui-justify-between gui-p-4 gui-border">
            <span>Left</span>
            <span>Right</span>
          </div>
        }
        code={`<div class="gui-flex gui-justify-between gui-p-4 gui-border">
  <span>Left</span>
  <span>Right</span>
</div>`}
      />

      <UtilityParts
        title="Spacing"
        demo={
          <div className="gui-p-4 gui-m-4 gui-bg-gray-200 gui-rounded">
            Box with padding and margin
          </div>
        }
        code={`<div class="gui-p-4 gui-m-4 gui-bg-gray-200 gui-rounded">
  Box with padding and margin
</div>`}
      />

      <UtilityParts
        title="Typography"
        demo={
          <>
            <p className="gui-text-lg gui-font-medium">This is large text with medium weight.</p>
            <p className="gui-text-sm gui-italic">This is small italic text.</p>
          </>
        }
        code={`<p class="gui-text-lg gui-font-medium">Large text</p>
<p class="gui-text-sm gui-italic">Small italic text</p>`}
      />

    </ComponentPage>
  );
}

export default Utilities;
