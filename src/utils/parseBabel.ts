import { parse as babelParse, ParserPlugin } from '@babel/parser';

export function parseBabel(text: string, jsx: boolean = true) {
  const plugins: ParserPlugin[] = [
    'typescript',
    'objectRestSpread',
    'decorators-legacy',
    'classProperties',
    'asyncGenerators',
    'dynamicImport',
    'estree',
    'bigInt',
    'importMeta',
    'optionalChaining',
    'nullishCoalescingOperator',
  ];
  if (jsx) {
    plugins.push('jsx');
  }

  return babelParse(text, {
    sourceType: 'unambiguous',
    allowImportExportEverywhere: true,
    allowReturnOutsideFunction: true,
    ranges: true,
    plugins,
  });
}
