import prettierPlugin from 'eslint-plugin-prettier';

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                $: 'readonly',
                jQuery: 'readonly',
                window: 'readonly',
                document: 'readonly'
            }
        },
        plugins: {
            prettier: prettierPlugin
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            eqeqeq: 'warn',
            curly: 'warn',
            'prettier/prettier': 'error'
        }
    }
];
