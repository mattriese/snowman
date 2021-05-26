import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Snowman from './Snowman';

it('renders without crashing', function () {
	render(<Snowman />);
});

it('game ends if numWrong = 7', function () {
	const { debug, container } = render(<Snowman words={["apple"]} />);

	const buttons = document.querySelectorAll('button');

	const b = container.querySelector('button[value="b"]');
	fireEvent.click(b);
	const c = container.querySelector('button[value="c"]');
	fireEvent.click(c);
	const d = container.querySelector('button[value="d"]');
	fireEvent.click(d);
	const f = container.querySelector('button[value="f"]');
	fireEvent.click(f);
	const g = container.querySelector('button[value="g"]');
	fireEvent.click(g);
	const h = container.querySelector('button[value="h"]');
	fireEvent.click(h);
	const i = container.querySelector('button[value="i"]');
	fireEvent.click(i);

	debug(container);
	expect(buttons).not.toBeVisible();
	expect("You lose!").toBeInTheDocument();
	expect("apple").toBeInTheDocument();
})


it('losing game matches snapshot', function () {
	const { container } = render(<Snowman />);

	const b = container.querySelector('button[value="b"]');
	fireEvent.click(b);
	const c = container.querySelector('button[value="c"]');
	fireEvent.click(c);
	const d = container.querySelector('button[value="d"]');
	fireEvent.click(d);
	const f = container.querySelector('button[value="f"]');
	fireEvent.click(f);
	const g = container.querySelector('button[value="g"]');
	fireEvent.click(g);
	const h = container.querySelector('button[value="h"]');
	fireEvent.click(h);
	const i = container.querySelector('button[value="i"]');
	fireEvent.click(i);
	expect(container).toMatchSnapshot();
});


// it('works when you click on the right arrow', function () {
//   const { container } = render(<Snowman />);
