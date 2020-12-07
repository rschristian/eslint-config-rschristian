export default {
    parser: '@typescript-eslint/parser',
    extends: [
        'preact',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    settings: {
        react: {
            pragma: 'h',
            version: '16.0'
        },
    },
    rules: {
        'react/no-unknown-property': ['error', { ignore: ['class'] }],
        '@typescript-eslint/quotes': ['warn', 'single'],
        '@typescript-eslint/interface-name-prefix': 'off',
    },
    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
}
