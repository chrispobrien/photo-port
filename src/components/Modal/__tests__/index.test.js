/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

const onClose = jest.fn();

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal
            currentPhoto={currentPhoto}
            onClose={onClose}
          />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Modal
            currentPhoto={currentPhoto}
            onClose={onClose}
          />);

        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal
            currentPhoto={currentPhoto}
            onClose={onClose}
        />);
        fireEvent.click(getByText('Close this modal'));

        expect(onClose).toHaveBeenCalledTimes(1);

    })
})

