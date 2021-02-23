import React from "react";
import Button from "./components/Button";
import Heading from "./components/Button/Heading";
import Paragraph from "./components/Paragraph/Paragraph";

function App() {
  return (
    <>
      <h3>Estilizando componentes com Styled Components</h3>

      <h4>Type</h4>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <br/>
      <hr/>
      <h4>Sizes</h4>
      <Button type="primary" size="sm">Primary</Button>
      <Button type="primary" size="md">Primary</Button>
      <Button type="primary" size="lg">Primary</Button>
      <Button type="primary" size="bg">Primary</Button>
      <br/>
      <hr/>
      <h4>Desktop</h4>
      <Button type="primary" size="bg">Primary</Button>
      <Button type="secondary" size="lg">Secondary</Button>
      <br/>
      <hr/>
      <h4>Mobile</h4>
      <Button type="primary" size="md">Primary</Button>
      <Button type="secondary" size="sm">Secondary</Button>
      <br/>
      <hr/>
      <h4>Heading</h4>
      <Heading type="h1" text="h1.Heading"/>
      <Heading type="h2" text="h2.Heading"/>
      <Heading type="h3" text="h3.Heading"/>
      <Heading type="h4" text="h4.Heading"/>
      <Heading type="h5" text="h5.Heading"/>
      <Heading type="h6" text="h6.Heading"/>
      <br/>
      <hr/>

      <h4>Paragraph Weight</h4>
      <Paragraph weight="normal">Normal weight paragraph</Paragraph>
      <Paragraph weight="bold">Bold weight paragraph</Paragraph>
      <h4>Paragraph Size</h4>
      <Paragraph size="big"> Big size paragraph</Paragraph>
      <Paragraph size="small">Small size paragraph</Paragraph>

      <br/>
      <hr/>
      <h4>Device Paragraph</h4>
      <Paragraph size="big" weight="normal">Desktop normal paragraph</Paragraph>
      <Paragraph size="big" weight="bold">Desktop bold paragraph</Paragraph>
      <Paragraph size="small" weight="normal">Mobile normal paragraph</Paragraph>
      <Paragraph size="small" weight="bold">Mobile bold paragraph</Paragraph>
    </>
  );
}

export default App;
