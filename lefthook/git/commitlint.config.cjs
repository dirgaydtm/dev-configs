module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['#', 'GH-'],
      referenceActions: ['closes', 'fixes', 'refs', 'resolves', 'see'],
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', 'fix', 'docs', 'style', 'refactor',
        'perf', 'test', 'build', 'ci', 'chore', 'revert'
      ],
    ],
    'header-max-length': [2, 'always', 100],
    'subject-full-stop': [2, 'never', '.'],
    'subject-case': [2, 'always', 'lower-case'],
    'body-max-line-length': [1, 'always', 120],
    'footer-max-line-length': [1, 'always', 120],
    'scope-case': [2, 'always', 'lower-case'],
  },
};
