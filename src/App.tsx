import React from 'react';
import Box from './components/Box';
import Layout from './components/Layout';

const App = () => {
  const solution = 'apple';
  return (
    <div className="flex justify-center items-center bg-slate-700 h-screen">
      <Layout>
        <Box solution={solution} />
      </Layout>
    </div>
  );
};

export default App;
