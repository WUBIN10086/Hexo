export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10')
];

export const server_loads = [2];

export const dictionary = {
		"/(waves)": [~8,[3]],
		"/(waves)/404": [9,[3]],
		"/(blog-article)/Ubuntu-install-Nvidia-Driver": [4,[2]],
		"/(blog-article)/blog-posts": [5,[2]],
		"/(waves)/blog": [~10,[3]],
		"/(blog-article)/fuzzy-logic": [6,[2]],
		"/(blog-article)/project-structure": [7,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';