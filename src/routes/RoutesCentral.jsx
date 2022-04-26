import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHome from '../pages/home/PageHome';
import PageAdvices from '../pages/advices/PageAdvices';
import PageNotFound from '../pages/notFound/PageNotFound';

function RoutesCentral() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PageHome />} />
        <Route exact path="/advices" element={<PageAdvices />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesCentral;
