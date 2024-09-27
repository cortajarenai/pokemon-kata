import { render, screen } from '@testing-library/react';

import { App } from './App';

describe("App", () => {
  it("En muestra un mensaje de bienvenida", async () => {
    render(<App />);

    const wellcomeMessage = screen.getByText(/hola mundo/i);

    expect(wellcomeMessage).toBeInTheDocument();
  });
});
