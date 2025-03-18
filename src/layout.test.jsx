import { MockedProvider } from '@apollo/client/testing/react'
// Change to:
// import { MockedProvider } from '@apollo/client/testing'
//    when testing "@apollo/client"@3.11.4

import {
    createMemoryRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';
import { render } from '@testing-library/react'

import { Layout } from './layout'

  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <MockedProvider>
            <Layout />
          </MockedProvider>
        }
      />
    )
  );

test('This fails...', () => {
    console.error = jest.fn()
    render(<RouterProvider router={router} />)
    expect(console.error).not.toHaveBeenCalledWith(expect.objectContaining({message: expect.stringContaining("cache.fragmentQueryDocuments")}))
})