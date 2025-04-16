import ComponentPage from '../components/ComponentPage';
import UtilityParts from '../components/UtilityParts';

function Utilities() {
  return (
    <ComponentPage title="Utility Classes" description="Quick utility classes for layout and spacing.">
      
      <UtilityParts
        title="Colors"
        demo={
          <div className="gap-2 pb-2 flex">
            <div className="text-primary gui-font-bold">Primary</div>
            <div className="text-secondary gui-font-bold">Secondary</div>
            <div className="text-success gui-font-bold ">Success</div>
            <div className="text-danger gui-font-bold">Danger</div>
          </div>
        }
        code={`  <div className="text-primary gui-font-bold">Primary</div>
  <div className="text-secondary gui-font-bold">Secondary</div>
  <div className="text-success gui-font-bold ">Success</div>
  <div className="text-danger gui-font-bold">Danger</div>`}
      />

    <UtilityParts
        title="Flex Row"
        demo={
          <div className="flex-row flex-wrap gap-2 gui-border p-4 flex">
            <div className="bg-primary p-2">Item 1</div>
            <div className="bg-secondary p-2">Item 2</div>
            <div className="bg-success p-2">Item 3</div>
          </div>
        }
        code={`<div className="flex-row flex-wrap gap-2 gui-border p-4 flex">
  <div className="bg-primary p-2">Item 1</div>
  <div className="bg-secondary p-2">Item 2</div>
  <div className="bg-success p-2">Item 3</div>
</div>`}
      />

      <UtilityParts
        title="Flex Column with Center"
        demo={
          <div className="flex-col item-centre gap-2 gui-border p-4 flex">
            <div className="bg-primary p-2">Column 1</div>
            <div className="bg-secondary gui-text-white p-2">Column 2</div>
          </div>
        }
        code={`<div class="flex-col item-centre gap-2 gui-border p-4 flex">
  <div class="bg-primary p-2">Column 1</div>
  <div class="bg-secondary p-2">Column 2</div>
</div>`}
      />

      <UtilityParts
        title="Justify Centre"
        demo={
          <div className="flex-row text-pink justify-centre gui-border p-4 flex">
            <span>Centered Text</span>
          </div>
        }
        code={`<div class="flex-row text-pink justify-centre gui-border p-4 flex">
  <span>Centered Text</span>
</div>`}
/>

<UtilityParts
  title="Typography"
  demo={
    <>
      <p className="gui-text-sm gui-font-light">Small and Light Text</p>
      <p className="gui-text gui-font-normal">Normal Text</p>
      <p className="gui-text-lg gui-font-semibold">Large and Semibold Text</p>
      <p className="gui-text-xl gui-font-black">Extra large and Bold Text</p>
    </>
  }
  code={`<p class="gui-text-sm gui-font-light">Small and Light Text</p>
<p class="gui-text gui-font-normal">Normal Text</p>
<p class="gui-text-lg gui-font-semibold">Large and Semibold Text</p>
<p class="gui-text-xl gui-font-black">Extra large and Bold Text</p>`}
/>

<UtilityParts
  title="Spacing"
  demo={
    <>
      <div className="p-3 m-2 gui-border bg-gray">
        Box with Margin and Padding 
      </div>
      <div className="pb-3 mt-2 gui-border bg-gray">
        Box with padding butom and margin top
      </div>
      <p className='pl-3 text-success'>And more....</p>
    </>
  }
  code={`<div className="p-3 m-2 gui-border bg-gray">
   Box with Margin and Padding 
</div>
<div className="pb-3 mt-2 gui-border bg-gray">
  Box with padding butom and margin top
</div>`}
/>

{/* yha pe */}


    </ComponentPage>
  );
}

export default Utilities;
