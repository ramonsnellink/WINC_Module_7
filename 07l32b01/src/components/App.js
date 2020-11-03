import React from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

/**
 * Create 2 new components - Header and MemeGenerator
 * Header will only display things
 * MemeGenerator will be calling to an API and holding on to data
 * Each should be in their own file of the same name
 * Gebleven bij -16 min. Eerst MemeGen afmaken met state en componentDidMount
 */

const App = () => {
  return (
    <main>
      <Header />
      <MemeGenerator />
    </main>
  );
};

export default App;
