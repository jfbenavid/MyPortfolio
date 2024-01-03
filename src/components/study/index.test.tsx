// import '@testing-library/jest-dom/extend-expect';  // Asegúrate de importar esto al inicio de tu archivo de prueba
import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { Study } from '.'

describe('<Study />', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: jest.fn(),
      disconnect: jest.fn(),
    });

    window.IntersectionObserver = mockIntersectionObserver;
  });

  describe('Rendering with props', () => {
    it('should render successfully', () => {
      const data = {
        urlFile: '',
        institute: '',
        instituteLogo: '',
        title: '',
        endingDate: ''
      }

      render(<Study {...data} />)

      const component = screen.getByRole('link')

      expect(component).not.toBeNull()
    })

    // it('should show the data when visible', async () => {
    //   const data = {
    //     urlFile: 'urlFile',
    //     institute: 'alt institute',
    //     instituteLogo: 'logo link',
    //     title: 'title :D',
    //     endingDate: ''
    //   }

    //   render(<Study {...data} />)

    //   // window.scrollTo(0, 1000)
    //   // userEvent..scroll(window, { target: { scrollY: 1000 } });
    //   // expect(screen.queryByText('Mock Institute')).not.toBeInTheDocument();

    //   // await waitFor(() => {
    //   //   expect(screen.getByRole('img')).not.toBeNull();
    //   // });

    //   const component = screen.getByRole('img')

    //   expect(component).not.toBeNull()
    // })
  })
})
