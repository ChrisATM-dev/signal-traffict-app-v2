import React from 'react';
import { NavBar } from '../../ui/components/NavBar';
import { ExamenLayout } from '../layouts/ExamenLayout';
import { Examen, Resultados } from '../components';
import { Route, Routes } from 'react-router-dom';

export const ExamenRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ExamenLayout />}>
          <Route index element={<Examen />} />
          <Route path="resultados" element={<Resultados />} />
        </Route>
      </Routes>
    </>
  );
};