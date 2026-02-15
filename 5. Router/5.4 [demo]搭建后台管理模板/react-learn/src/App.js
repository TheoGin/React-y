import React from "react";
import Layout from "./components/Layout";

function App() {

  return (
    <div>
      <Layout
        header={ <h1>header</h1> }
        aside={<p>aside</p>}
      >
        <div>主区域</div>
      </Layout>
    </div>
  );
}

export default App;