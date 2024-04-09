module.exports = {
	root: true,
	env: {
		jest: true,
	},
	extends: 'airbnb-base',
	rules: {
		'no-console': 'warn',
		'no-debugger': 'warn',
		'no-trailing-spaces': 'error',
		'comma-dangle': ['error', 'always-multiline'],
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
	},
};
