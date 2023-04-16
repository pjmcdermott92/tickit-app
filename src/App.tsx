import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout/AppLayout';

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<p>Hello, World!</p>} />
      </Route>
    </Routes>
  )
}