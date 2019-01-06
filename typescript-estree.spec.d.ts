export interface ArrayExpression {
  type: 'ArrayExpression';
  elements: Array<
    | ArrayExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | BigIntLiteral
    | BinaryExpression
    | CallExpression
    | FunctionExpression
    | Identifier
    | Literal
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | SequenceExpression
    | SpreadElement
    | TemplateLiteral
    | ThisExpression
    | UnaryExpression
    | UpdateExpression
    | TSTypeAssertion
    | null
  >;
}

export interface ArrayPattern {
  type: 'ArrayPattern';
  elements: Array<
    | ArrayExpression
    | ArrayPattern
    | AssignmentExpression
    | AssignmentPattern
    | Identifier
    | Literal
    | MemberExpression
    | ObjectExpression
    | ObjectPattern
    | RestElement
    | SpreadElement
    | null
  >;
  typeAnnotation?: TSTypeAnnotation;
  optional?: boolean;
}

export interface ArrowFunctionExpression {
  type: 'ArrowFunctionExpression';
  generator: boolean;
  id: null;
  params: Array<
    | ArrayPattern
    | AssignmentPattern
    | Identifier
    | ObjectPattern
    | RestElement
    | TSParameterProperty
  >;
  body:
    | ArrayExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | BinaryExpression
    | BlockStatement
    | CallExpression
    | ClassExpression
    | ConditionalExpression
    | FunctionExpression
    | Identifier
    | JSXElement
    | Literal
    | LogicalExpression
    | MemberExpression
    | MetaProperty
    | NewExpression
    | ObjectExpression
    | SequenceExpression
    | TemplateLiteral
    | ThisExpression
    | UnaryExpression
    | UpdateExpression
    | YieldExpression
    | TSAsExpression
    | TSTypeAssertion;
  async: boolean;
  expression: boolean;
  returnType?: TSTypeAnnotation;
  typeParameters?: TSTypeParameterDeclaration;
}

export interface AssignmentExpression {
  type: 'AssignmentExpression';
  operator:
    | '%='
    | '&='
    | '**='
    | '*='
    | '+='
    | '-='
    | '/='
    | '<<='
    | '='
    | '>>='
    | '>>>='
    | '^='
    | '|=';
  left:
    | ArrayPattern
    | CallExpression
    | Identifier
    | Literal
    | MemberExpression
    | MetaProperty
    | NewExpression
    | ObjectPattern
    | SequenceExpression;
  right:
    | ArrayExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | BigIntLiteral
    | BinaryExpression
    | CallExpression
    | ClassExpression
    | ConditionalExpression
    | FunctionExpression
    | Identifier
    | JSXElement
    | Literal
    | LogicalExpression
    | MemberExpression
    | MetaProperty
    | NewExpression
    | ObjectExpression
    | SequenceExpression
    | TaggedTemplateExpression
    | TemplateLiteral
    | ThisExpression
    | UnaryExpression
    | UpdateExpression
    | YieldExpression
    | TSAsExpression
    | TSTypeAssertion;
}

export interface AssignmentPattern {
  type: 'AssignmentPattern';
  left: ArrayPattern | Identifier | ObjectPattern;
  right:
    | ArrayExpression
    | ArrowFunctionExpression
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | ClassExpression
    | ConditionalExpression
    | FunctionExpression
    | Identifier
    | Literal
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | TemplateLiteral
    | ThisExpression
    | UnaryExpression
    | YieldExpression
    | TSTypeAssertion;
}

export interface AwaitExpression {
  type: 'AwaitExpression';
  argument:
    | AwaitExpression
    | CallExpression
    | Identifier
    | Literal
    | MemberExpression
    | NewExpression
    | ThisExpression
    | UnaryExpression;
}

export interface BigIntLiteral {
  type: 'BigIntLiteral';
  raw: string;
  value: string;
}

export interface BinaryExpression {
  type: 'BinaryExpression';
  operator:
    | '!='
    | '!=='
    | '%'
    | '&'
    | '*'
    | '**'
    | '+'
    | '-'
    | '/'
    | '<'
    | '<<'
    | '<='
    | '=='
    | '==='
    | '>'
    | '>='
    | '>>'
    | '>>>'
    | '^'
    | 'in'
    | 'instanceof'
    | '|';
  left:
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | BigIntLiteral
    | BinaryExpression
    | CallExpression
    | Identifier
    | Literal
    | LogicalExpression
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | SequenceExpression
    | TemplateLiteral
    | ThisExpression
    | UnaryExpression
    | UpdateExpression
    | TSAsExpression
    | TSTypeAssertion;
  right:
    | ArrayExpression
    | ArrowFunctionExpression
    | AwaitExpression
    | BigIntLiteral
    | BinaryExpression
    | CallExpression
    | ConditionalExpression
    | FunctionExpression
    | Identifier
    | Literal
    | LogicalExpression
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | TemplateLiteral
    | ThisExpression
    | UnaryExpression
    | UpdateExpression
    | TSAsExpression
    | TSTypeAssertion;
}

export interface BlockStatement {
  type: 'BlockStatement';
  body: Array<
    | BlockStatement
    | BreakStatement
    | ClassDeclaration
    | ContinueStatement
    | DebuggerStatement
    | DoWhileStatement
    | EmptyStatement
    | ExportAllDeclaration
    | ExportDefaultDeclaration
    | ExportNamedDeclaration
    | ExpressionStatement
    | ForInStatement
    | ForOfStatement
    | ForStatement
    | FunctionDeclaration
    | IfStatement
    | ImportDeclaration
    | LabeledStatement
    | ReturnStatement
    | SwitchStatement
    | ThrowStatement
    | TryStatement
    | VariableDeclaration
    | WhileStatement
    | WithStatement
    | TSAbstractClassDeclaration
    | TSDeclareFunction
    | TSEnumDeclaration
    | TSExportAssignment
    | TSImportEqualsDeclaration
    | TSInterfaceDeclaration
    | TSModuleDeclaration
    | TSTypeAliasDeclaration
  >;
}

export interface BreakStatement {
  type: 'BreakStatement';
  label: null | Identifier;
}

export interface CallExpression {
  type: 'CallExpression';
  callee:
    | ArrowFunctionExpression
    | AwaitExpression
    | CallExpression
    | FunctionExpression
    | Identifier
    | Import
    | Literal
    | MemberExpression
    | NewExpression
    | SequenceExpression
    | Super
    | TemplateLiteral
    | ThisExpression
    | TSAsExpression
    | TSNonNullExpression
    | TSTypeAssertion;
  arguments: Array<
    | ArrayExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | BigIntLiteral
    | BinaryExpression
    | CallExpression
    | ClassExpression
    | ConditionalExpression
    | FunctionExpression
    | Identifier
    | Literal
    | LogicalExpression
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | SequenceExpression
    | SpreadElement
    | TaggedTemplateExpression
    | TemplateLiteral
    | ThisExpression
    | UnaryExpression
    | UpdateExpression
    | YieldExpression
    | TSAsExpression
    | TSNonNullExpression
    | TSTypeAssertion
  >;
  typeParameters?: TSTypeParameterInstantiation;
}

export interface CatchClause {
  type: 'CatchClause';
  param: null | ArrayPattern | Identifier | ObjectPattern;
  body: BlockStatement;
}

export interface ClassBody {
  type: 'ClassBody';
  body: Array<
    | ClassProperty
    | MethodDefinition
    | TSAbstractClassProperty
    | TSAbstractMethodDefinition
    | TSIndexSignature
  >;
}

export interface ClassDeclaration {
  type: 'ClassDeclaration';
  id: null | Identifier;
  body: ClassBody;
  superClass:
    | null
    | AwaitExpression
    | CallExpression
    | ClassExpression
    | Identifier
    | Literal
    | MemberExpression
    | ThisExpression
    | YieldExpression
    | TSAsExpression;
  declare?: boolean;
  typeParameters?: TSTypeParameterDeclaration;
  superTypeParameters?: TSTypeParameterInstantiation;
  implements?: Array<ClassImplements>;
  decorators?: Array<Decorator>;
}

export interface ClassExpression {
  type: 'ClassExpression';
  id: null | Identifier;
  body: ClassBody;
  superClass:
    | null
    | ClassExpression
    | Identifier
    | MemberExpression
    | YieldExpression;
  implements?: Array<ClassImplements>;
  typeParameters?: TSTypeParameterDeclaration;
  superTypeParameters?: TSTypeParameterInstantiation;
}

export interface ClassImplements {
  type: 'ClassImplements';
  id: Identifier | MemberExpression;
  typeParameters?: TSTypeParameterInstantiation;
}

export interface ClassProperty {
  type: 'ClassProperty';
  key:
    | AssignmentExpression
    | BinaryExpression
    | CallExpression
    | Identifier
    | Literal
    | MemberExpression
    | TemplateLiteral
    | UnaryExpression
    | TSTypeAssertion;
  value:
    | null
    | ArrayExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | BinaryExpression
    | CallExpression
    | ClassExpression
    | FunctionExpression
    | Identifier
    | Literal
    | LogicalExpression
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | ThisExpression
    | UnaryExpression
    | UpdateExpression
    | YieldExpression
    | TSTypeAssertion;
  computed: boolean;
  static: boolean;
  typeAnnotation?: TSTypeAnnotation;
  readonly?: boolean;
  accessibility?: 'private' | 'protected' | 'public';
  decorators?: Array<Decorator>;
  definite?: boolean;
  optional?: boolean;
}

export interface ConditionalExpression {
  type: 'ConditionalExpression';
  test:
    | ArrayExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | Identifier
    | Literal
    | LogicalExpression
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | TemplateLiteral
    | UnaryExpression
    | TSTypeAssertion;
  consequent:
    | ArrayExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | ConditionalExpression
    | FunctionExpression
    | Identifier
    | JSXElement
    | Literal
    | LogicalExpression
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | TemplateLiteral
    | UnaryExpression
    | UpdateExpression
    | TSAsExpression;
  alternate:
    | ArrayExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | ConditionalExpression
    | FunctionExpression
    | Identifier
    | JSXElement
    | Literal
    | LogicalExpression
    | MemberExpression
    | ObjectExpression
    | SequenceExpression
    | TemplateLiteral
    | UnaryExpression
    | UpdateExpression;
}

export interface ContinueStatement {
  type: 'ContinueStatement';
  label: null | Identifier;
}

export interface DebuggerStatement {
  type: 'DebuggerStatement';
}

export interface Decorator {
  type: 'Decorator';
  expression:
    | ArrowFunctionExpression
    | CallExpression
    | Identifier
    | MemberExpression
    | YieldExpression;
}

export interface DoWhileStatement {
  type: 'DoWhileStatement';
  test:
    | AssignmentExpression
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | Identifier
    | Literal;
  body: BlockStatement | VariableDeclaration;
}

export interface EmptyStatement {
  type: 'EmptyStatement';
}

export interface ExportAllDeclaration {
  type: 'ExportAllDeclaration';
  source: Identifier | Literal;
}

export interface ExportDefaultDeclaration {
  type: 'ExportDefaultDeclaration';
  declaration:
    | ArrowFunctionExpression
    | AssignmentExpression
    | BinaryExpression
    | CallExpression
    | ClassDeclaration
    | FunctionDeclaration
    | Identifier
    | JSXElement
    | Literal
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | UnaryExpression
    | TSAbstractClassDeclaration
    | TSAsExpression
    | TSInterfaceDeclaration;
}

export interface ExportNamedDeclaration {
  type: 'ExportNamedDeclaration';
  declaration:
    | null
    | ClassDeclaration
    | FunctionDeclaration
    | VariableDeclaration
    | TSAbstractClassDeclaration
    | TSDeclareFunction
    | TSEnumDeclaration
    | TSInterfaceDeclaration
    | TSModuleDeclaration
    | TSTypeAliasDeclaration;
  specifiers: Array<ExportSpecifier>;
  source: null | Literal;
}

export interface ExportSpecifier {
  type: 'ExportSpecifier';
  local: Identifier;
  exported: Identifier;
}

export interface ExpressionStatement {
  type: 'ExpressionStatement';
  expression:
    | ArrayExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | ClassExpression
    | ConditionalExpression
    | FunctionExpression
    | Identifier
    | JSXElement
    | JSXFragment
    | Literal
    | LogicalExpression
    | MemberExpression
    | MetaProperty
    | NewExpression
    | ObjectExpression
    | SequenceExpression
    | TaggedTemplateExpression
    | TemplateLiteral
    | ThisExpression
    | UnaryExpression
    | UpdateExpression
    | YieldExpression
    | TSAsExpression
    | TSNonNullExpression
    | TSTypeAssertion;
  directive?: string;
}

export interface ForInStatement {
  type: 'ForInStatement';
  left:
    | AssignmentExpression
    | CallExpression
    | Identifier
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | ThisExpression
    | VariableDeclaration;
  right:
    | ArrayPattern
    | AwaitExpression
    | Identifier
    | Literal
    | MemberExpression
    | ObjectExpression
    | SequenceExpression
    | ThisExpression;
  body:
    | BlockStatement
    | EmptyStatement
    | ExpressionStatement
    | VariableDeclaration;
}

export interface ForOfStatement {
  type: 'ForOfStatement';
  left:
    | ArrayPattern
    | Identifier
    | MemberExpression
    | ObjectExpression
    | UpdateExpression
    | VariableDeclaration;
  right:
    | ArrayPattern
    | AwaitExpression
    | CallExpression
    | Identifier
    | Literal
    | MemberExpression
    | NewExpression
    | TSTypeAssertion;
  body:
    | BlockStatement
    | ContinueStatement
    | EmptyStatement
    | ExpressionStatement
    | ForOfStatement;
  await: boolean;
}

export interface ForStatement {
  type: 'ForStatement';
  init:
    | null
    | AssignmentExpression
    | AwaitExpression
    | Identifier
    | SequenceExpression
    | VariableDeclaration;
  test:
    | null
    | AssignmentExpression
    | AwaitExpression
    | BinaryExpression
    | Identifier
    | Literal
    | SequenceExpression
    | UnaryExpression;
  update:
    | null
    | AssignmentExpression
    | AwaitExpression
    | Identifier
    | SequenceExpression
    | UnaryExpression
    | UpdateExpression;
  body:
    | BlockStatement
    | ContinueStatement
    | EmptyStatement
    | ExpressionStatement
    | VariableDeclaration;
}

export interface FunctionDeclaration {
  type: 'FunctionDeclaration';
  id: null | Identifier;
  generator: boolean;
  expression: boolean;
  async: boolean;
  params: Array<
    | ArrayPattern
    | AssignmentPattern
    | Identifier
    | ObjectPattern
    | RestElement
    | TSParameterProperty
  >;
  body?: BlockStatement;
  returnType?: TSTypeAnnotation;
  typeParameters?: TSTypeParameterDeclaration;
}

export interface FunctionExpression {
  type: 'FunctionExpression';
  id: null | Identifier;
  generator: boolean;
  params: Array<
    | ArrayPattern
    | AssignmentPattern
    | Identifier
    | ObjectPattern
    | RestElement
    | TSParameterProperty
  >;
  body: null | BlockStatement;
  async: boolean;
  expression: boolean;
  returnType?: TSTypeAnnotation;
  typeParameters?: TSTypeParameterDeclaration;
}

export interface Identifier {
  type: 'Identifier';
  name: string;
  typeAnnotation?: TSTypeAnnotation;
  optional?: boolean;
  decorators?: Array<Decorator>;
}

export interface IfStatement {
  type: 'IfStatement';
  test:
    | AssignmentExpression
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | Identifier
    | Literal
    | LogicalExpression
    | MemberExpression
    | SequenceExpression
    | UnaryExpression
    | UpdateExpression
    | TSAsExpression;
  consequent:
    | BlockStatement
    | BreakStatement
    | ContinueStatement
    | EmptyStatement
    | ExpressionStatement
    | LabeledStatement
    | ReturnStatement
    | ThrowStatement
    | VariableDeclaration;
  alternate:
    | null
    | BlockStatement
    | BreakStatement
    | ExpressionStatement
    | IfStatement
    | ReturnStatement
    | VariableDeclaration;
}

export interface Import {
  type: 'Import';
}

export interface ImportDeclaration {
  type: 'ImportDeclaration';
  source: Literal;
  specifiers: Array<
    ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportSpecifier
  >;
}

export interface ImportDefaultSpecifier {
  type: 'ImportDefaultSpecifier';
  local: Identifier;
}

export interface ImportNamespaceSpecifier {
  type: 'ImportNamespaceSpecifier';
  local: Identifier;
}

export interface ImportSpecifier {
  type: 'ImportSpecifier';
  local: Identifier;
  imported: Identifier;
}

export interface JSXAttribute {
  type: 'JSXAttribute';
  name: JSXIdentifier;
  value: null | JSXExpressionContainer | Literal;
}

export interface JSXClosingElement {
  type: 'JSXClosingElement';
  name: JSXIdentifier | JSXMemberExpression;
}

export interface JSXClosingFragment {
  type: 'JSXClosingFragment';
}

export interface JSXElement {
  type: 'JSXElement';
  openingElement: JSXOpeningElement;
  closingElement: null | JSXClosingElement;
  children: Array<
    JSXElement | JSXExpressionContainer | JSXFragment | JSXSpreadChild | JSXText
  >;
}

export interface JSXEmptyExpression {
  type: 'JSXEmptyExpression';
}

export interface JSXExpressionContainer {
  type: 'JSXExpressionContainer';
  expression:
    | ArrayExpression
    | ArrowFunctionExpression
    | BinaryExpression
    | CallExpression
    | ConditionalExpression
    | Identifier
    | JSXElement
    | JSXEmptyExpression
    | Literal
    | MemberExpression
    | ObjectExpression
    | TSAsExpression;
}

export interface JSXFragment {
  type: 'JSXFragment';
  openingFragment: JSXOpeningFragment;
  closingFragment: JSXClosingFragment;
  children: Array<JSXElement | JSXFragment | JSXText>;
}

export interface JSXIdentifier {
  type: 'JSXIdentifier';
  name: string;
}

export interface JSXMemberExpression {
  type: 'JSXMemberExpression';
  object: JSXIdentifier | JSXMemberExpression | MemberExpression;
  property: JSXIdentifier;
}

export interface JSXOpeningElement {
  type: 'JSXOpeningElement';
  selfClosing: boolean;
  name: JSXIdentifier | JSXMemberExpression;
  attributes: Array<JSXAttribute | JSXSpreadAttribute>;
  typeParameters?: TSTypeParameterInstantiation;
}

export interface JSXOpeningFragment {
  type: 'JSXOpeningFragment';
}

export interface JSXSpreadAttribute {
  type: 'JSXSpreadAttribute';
  argument:
    | Identifier
    | MemberExpression
    | ObjectExpression
    | SequenceExpression;
}

export interface JSXSpreadChild {
  type: 'JSXSpreadChild';
  expression: CallExpression | JSXElement | MemberExpression | TSAsExpression;
}

export interface JSXText {
  type: 'JSXText';
  value: string;
  raw: string;
}

export interface LabeledStatement {
  type: 'LabeledStatement';
  label: Identifier;
  body:
    | BlockStatement
    | BreakStatement
    | ContinueStatement
    | DoWhileStatement
    | EmptyStatement
    | ExpressionStatement
    | ForInStatement
    | ForOfStatement
    | ForStatement
    | IfStatement
    | LabeledStatement
    | SwitchStatement
    | TryStatement
    | VariableDeclaration
    | WhileStatement;
}

export interface Literal {
  type: 'Literal';
  value: boolean | null | number | string;
  raw: string;
  regex?: {
    pattern: string;
    flags: string;
  };
}

export interface LogicalExpression {
  type: 'LogicalExpression';
  operator: '&&' | '||';
  left:
    | ArrayExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | FunctionExpression
    | Identifier
    | Literal
    | LogicalExpression
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | UnaryExpression
    | TSTypeAssertion;
  right:
    | ArrayExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | ConditionalExpression
    | FunctionExpression
    | Identifier
    | Literal
    | LogicalExpression
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | SequenceExpression
    | ThisExpression
    | UnaryExpression;
}

export interface MemberExpression {
  type: 'MemberExpression';
  object:
    | ArrayExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | CallExpression
    | Identifier
    | Literal
    | LogicalExpression
    | MemberExpression
    | MetaProperty
    | NewExpression
    | ObjectExpression
    | SequenceExpression
    | Super
    | TaggedTemplateExpression
    | TemplateLiteral
    | ThisExpression
    | TSAsExpression
    | TSNonNullExpression
    | TSTypeAssertion;
  property:
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | Identifier
    | Literal
    | MemberExpression
    | SequenceExpression
    | TemplateLiteral
    | ThisExpression
    | UpdateExpression
    | TSAsExpression
    | TSTypeAssertion;
  computed: boolean;
}

export interface MetaProperty {
  type: 'MetaProperty';
  meta: Identifier;
  property: Identifier;
}

export interface MethodDefinition {
  type: 'MethodDefinition';
  key:
    | ArrayExpression
    | ArrowFunctionExpression
    | BinaryExpression
    | CallExpression
    | ConditionalExpression
    | Identifier
    | Literal
    | MemberExpression
    | MetaProperty
    | ObjectExpression
    | SequenceExpression
    | TemplateLiteral
    | UnaryExpression
    | YieldExpression
    | TSTypeAssertion;
  value: FunctionExpression;
  computed: boolean;
  static: boolean;
  kind: 'constructor' | 'get' | 'method' | 'set';
  accessibility?: 'private' | 'protected' | 'public';
  decorators?: Array<Decorator>;
}

export interface NewExpression {
  type: 'NewExpression';
  callee:
    | ArrayExpression
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | ClassExpression
    | Identifier
    | MemberExpression
    | NewExpression
    | Super
    | TemplateLiteral
    | ThisExpression
    | TSAsExpression
    | TSTypeAssertion;
  arguments: Array<
    | ArrayExpression
    | ArrowFunctionExpression
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | FunctionExpression
    | Identifier
    | Literal
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | SpreadElement
    | TemplateLiteral
    | ThisExpression
    | UnaryExpression
    | TSAsExpression
    | TSTypeAssertion
  >;
  typeParameters?: TSTypeParameterInstantiation;
}

export interface ObjectExpression {
  type: 'ObjectExpression';
  properties: Array<Property | SpreadElement>;
}

export interface ObjectPattern {
  type: 'ObjectPattern';
  properties: Array<Property | RestElement>;
  typeAnnotation?: TSTypeAnnotation;
  optional?: boolean;
}

export interface Program {
  type: 'Program';
  body: Array<
    | BlockStatement
    | BreakStatement
    | ClassDeclaration
    | ContinueStatement
    | DebuggerStatement
    | DoWhileStatement
    | EmptyStatement
    | ExportAllDeclaration
    | ExportDefaultDeclaration
    | ExportNamedDeclaration
    | ExpressionStatement
    | ForInStatement
    | ForOfStatement
    | ForStatement
    | FunctionDeclaration
    | IfStatement
    | ImportDeclaration
    | LabeledStatement
    | ReturnStatement
    | SwitchStatement
    | ThrowStatement
    | TryStatement
    | VariableDeclaration
    | WhileStatement
    | WithStatement
    | TSAbstractClassDeclaration
    | TSDeclareFunction
    | TSEnumDeclaration
    | TSExportAssignment
    | TSImportEqualsDeclaration
    | TSInterfaceDeclaration
    | TSModuleDeclaration
    | TSNamespaceExportDeclaration
    | TSTypeAliasDeclaration
  >;
  sourceType: 'module' | 'script';
}

export interface Property {
  type: 'Property';
  key:
    | ArrayExpression
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | Identifier
    | Literal
    | LogicalExpression
    | MemberExpression
    | MetaProperty
    | ObjectExpression
    | SequenceExpression
    | TemplateLiteral
    | UnaryExpression
    | YieldExpression
    | TSTypeAssertion;
  value:
    | ArrayExpression
    | ArrayPattern
    | ArrowFunctionExpression
    | AssignmentExpression
    | AssignmentPattern
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | ClassExpression
    | ConditionalExpression
    | FunctionExpression
    | Identifier
    | Literal
    | MemberExpression
    | MetaProperty
    | NewExpression
    | ObjectExpression
    | ObjectPattern
    | TemplateLiteral
    | ThisExpression
    | UnaryExpression
    | TSAsExpression
    | TSNonNullExpression
    | TSTypeAssertion;
  computed: boolean;
  method: boolean;
  shorthand: boolean;
  kind: 'get' | 'init' | 'set';
}

export interface RestElement {
  type: 'RestElement';
  argument: ArrayPattern | AssignmentPattern | Identifier | ObjectPattern;
  decorators?: Array<Decorator>;
}

export interface ReturnStatement {
  type: 'ReturnStatement';
  argument:
    | null
    | ArrayExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | ClassExpression
    | ConditionalExpression
    | FunctionExpression
    | Identifier
    | JSXElement
    | JSXFragment
    | Literal
    | LogicalExpression
    | MemberExpression
    | MetaProperty
    | NewExpression
    | ObjectExpression
    | SequenceExpression
    | TaggedTemplateExpression
    | TemplateLiteral
    | ThisExpression
    | UnaryExpression
    | UpdateExpression
    | YieldExpression
    | TSAsExpression
    | TSNonNullExpression
    | TSTypeAssertion;
}

export interface SequenceExpression {
  type: 'SequenceExpression';
  expressions: Array<
    | ArrayExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | ConditionalExpression
    | FunctionExpression
    | Identifier
    | JSXElement
    | Literal
    | LogicalExpression
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | TemplateLiteral
    | UnaryExpression
    | UpdateExpression
    | TSAsExpression
    | TSNonNullExpression
  >;
}

export interface SpreadElement {
  type: 'SpreadElement';
  argument:
    | ArrayExpression
    | AwaitExpression
    | CallExpression
    | ConditionalExpression
    | Identifier
    | LogicalExpression
    | NewExpression
    | ObjectExpression
    | TSAsExpression;
}

export interface Super {
  type: 'Super';
}

export interface SwitchCase {
  type: 'SwitchCase';
  test:
    | null
    | AwaitExpression
    | CallExpression
    | Identifier
    | Literal
    | MemberExpression
    | SequenceExpression
    | TemplateLiteral;
  consequent: Array<
    | BlockStatement
    | BreakStatement
    | ContinueStatement
    | ExpressionStatement
    | FunctionDeclaration
    | IfStatement
    | ReturnStatement
    | SwitchStatement
    | VariableDeclaration
  >;
}

export interface SwitchStatement {
  type: 'SwitchStatement';
  discriminant:
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | Identifier
    | Literal
    | MemberExpression
    | TemplateLiteral
    | UnaryExpression;
  cases: Array<SwitchCase>;
}

export interface TaggedTemplateExpression {
  type: 'TaggedTemplateExpression';
  typeParameters?: TSTypeParameterInstantiation;
  tag: Identifier | MemberExpression | TemplateLiteral;
  quasi: TemplateLiteral;
}

export interface TemplateElement {
  type: 'TemplateElement';
  value: {
    raw: string;
    cooked: string;
  };
  tail: boolean;
}

export interface TemplateLiteral {
  type: 'TemplateLiteral';
  quasis: Array<TemplateElement>;
  expressions: Array<
    | ArrayExpression
    | ArrowFunctionExpression
    | BinaryExpression
    | CallExpression
    | ConditionalExpression
    | FunctionExpression
    | Identifier
    | Literal
    | LogicalExpression
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | TemplateLiteral
    | UnaryExpression
    | YieldExpression
    | TSAsExpression
    | TSTypeAssertion
  >;
}

export interface ThisExpression {
  type: 'ThisExpression';
}

export interface ThrowStatement {
  type: 'ThrowStatement';
  argument:
    | null
    | ArrayExpression
    | CallExpression
    | Identifier
    | Literal
    | NewExpression
    | ObjectExpression;
}

export interface TryStatement {
  type: 'TryStatement';
  block: BlockStatement;
  handler: null | CatchClause;
  finalizer: null | BlockStatement;
}

export interface UnaryExpression {
  type: 'UnaryExpression';
  operator: '!' | '+' | '-' | 'delete' | 'typeof' | 'void' | '~';
  prefix: boolean;
  argument:
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | BigIntLiteral
    | BinaryExpression
    | CallExpression
    | ClassExpression
    | Identifier
    | Literal
    | LogicalExpression
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | TemplateLiteral
    | ThisExpression
    | UnaryExpression
    | UpdateExpression
    | TSTypeAssertion;
}

export interface UpdateExpression {
  type: 'UpdateExpression';
  operator: '++' | '--';
  prefix: boolean;
  argument:
    | ArrayExpression
    | BinaryExpression
    | CallExpression
    | FunctionExpression
    | Identifier
    | Literal
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | ThisExpression
    | TSNonNullExpression;
}

export interface VariableDeclaration {
  type: 'VariableDeclaration';
  declarations: Array<VariableDeclarator>;
  kind: 'const' | 'let' | 'var';
  declare?: boolean;
}

export interface VariableDeclarator {
  type: 'VariableDeclarator';
  id: ArrayPattern | Identifier | ObjectPattern;
  init:
    | null
    | ArrayExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | BigIntLiteral
    | BinaryExpression
    | CallExpression
    | ClassExpression
    | ConditionalExpression
    | FunctionExpression
    | Identifier
    | JSXElement
    | Literal
    | LogicalExpression
    | MemberExpression
    | MetaProperty
    | NewExpression
    | ObjectExpression
    | SequenceExpression
    | TaggedTemplateExpression
    | TemplateLiteral
    | ThisExpression
    | UnaryExpression
    | UpdateExpression
    | YieldExpression
    | TSAsExpression
    | TSNonNullExpression
    | TSTypeAssertion;
  definite?: boolean;
}

export interface WhileStatement {
  type: 'WhileStatement';
  test:
    | AssignmentExpression
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | Identifier
    | Literal
    | LogicalExpression
    | TemplateLiteral;
  body:
    | BlockStatement
    | BreakStatement
    | ContinueStatement
    | EmptyStatement
    | ExpressionStatement
    | LabeledStatement
    | VariableDeclaration;
}

export interface WithStatement {
  type: 'WithStatement';
  object:
    | AwaitExpression
    | Identifier
    | Literal
    | MemberExpression
    | NewExpression
    | ObjectExpression;
  body: BlockStatement | ReturnStatement | VariableDeclaration;
}

export interface YieldExpression {
  type: 'YieldExpression';
  delegate: boolean;
  argument:
    | null
    | ArrayExpression
    | ArrowFunctionExpression
    | BinaryExpression
    | CallExpression
    | ConditionalExpression
    | Identifier
    | Literal
    | NewExpression
    | ObjectExpression
    | TemplateLiteral
    | YieldExpression;
}

export interface TSAbstractClassDeclaration {
  type: 'TSAbstractClassDeclaration';
  id: null | Identifier;
  body: ClassBody;
  superClass: null | Identifier;
  implements?: Array<ClassImplements>;
  typeParameters?: TSTypeParameterDeclaration;
  declare?: boolean;
  superTypeParameters?: TSTypeParameterInstantiation;
}

export interface TSAbstractClassProperty {
  type: 'TSAbstractClassProperty';
  key: Identifier;
  value: null;
  computed: boolean;
  static: boolean;
  typeAnnotation?: TSTypeAnnotation;
  readonly?: boolean;
  accessibility?: 'private' | 'protected' | 'public';
  optional?: boolean;
  definite: boolean;
}

export interface TSAbstractMethodDefinition {
  type: 'TSAbstractMethodDefinition';
  key: Identifier;
  value: FunctionExpression;
  computed: boolean;
  static: boolean;
  kind: 'constructor' | 'get' | 'method' | 'set';
  accessibility?: 'private' | 'protected' | 'public';
}

export interface TSArrayType {
  type: 'TSArrayType';
  elementType:
    | TSArrayType
    | TSIndexedAccessType
    | TSMappedType
    | TSParenthesizedType
    | TSTupleType
    | TSTypeLiteral
    | TSTypeQuery
    | TSTypeReference
    | TSAnyKeyword
    | TSBooleanKeyword
    | TSNeverKeyword
    | TSNullKeyword
    | TSNumberKeyword
    | TSStringKeyword
    | TSSymbolKeyword
    | TSUnknownKeyword
    | TSVoidKeyword;
}

export interface TSAsExpression {
  type: 'TSAsExpression';
  expression:
    | ArrayExpression
    | ArrowFunctionExpression
    | BinaryExpression
    | CallExpression
    | ClassExpression
    | ConditionalExpression
    | FunctionExpression
    | Identifier
    | JSXElement
    | Literal
    | MemberExpression
    | ObjectExpression
    | TaggedTemplateExpression
    | TemplateLiteral
    | ThisExpression
    | TSAsExpression;
  typeAnnotation:
    | TSArrayType
    | TSConstructorType
    | TSFunctionType
    | TSIntersectionType
    | TSLiteralType
    | TSParenthesizedType
    | TSTupleType
    | TSTypeLiteral
    | TSTypeOperator
    | TSTypeReference
    | TSUnionType
    | TSAnyKeyword
    | TSNumberKeyword
    | TSStringKeyword;
}

export interface TSCallSignatureDeclaration {
  type: 'TSCallSignatureDeclaration';
  params: Array<Identifier | ObjectPattern | RestElement>;
  returnType?: TSTypeAnnotation;
  typeParameters?: TSTypeParameterDeclaration;
}

export interface TSConditionalType {
  type: 'TSConditionalType';
  checkType:
    | TSIndexedAccessType
    | TSParenthesizedType
    | TSTupleType
    | TSTypeLiteral
    | TSTypeQuery
    | TSTypeReference
    | TSNumberKeyword
    | TSStringKeyword
    | TSUndefinedKeyword;
  extendsType:
    | TSArrayType
    | TSFunctionType
    | TSIndexedAccessType
    | TSLiteralType
    | TSParenthesizedType
    | TSTupleType
    | TSTypeLiteral
    | TSTypeOperator
    | TSTypeReference
    | TSUnionType
    | TSBooleanKeyword
    | TSNumberKeyword
    | TSStringKeyword;
  trueType:
    | TSIndexedAccessType
    | TSIntersectionType
    | TSLiteralType
    | TSMappedType
    | TSParenthesizedType
    | TSTupleType
    | TSTypeLiteral
    | TSTypeReference
    | TSNeverKeyword
    | TSNumberKeyword;
  falseType:
    | TSConditionalType
    | TSIntersectionType
    | TSLiteralType
    | TSMappedType
    | TSTupleType
    | TSTypeLiteral
    | TSTypeQuery
    | TSTypeReference
    | TSUnionType
    | TSAnyKeyword
    | TSNeverKeyword
    | TSStringKeyword
    | TSUndefinedKeyword;
}

export interface TSConstructSignatureDeclaration {
  type: 'TSConstructSignatureDeclaration';
  params: Array<Identifier | ObjectPattern | RestElement | TSParameterProperty>;
  returnType?: TSTypeAnnotation;
  typeParameters?: TSTypeParameterDeclaration;
}

export interface TSConstructorType {
  type: 'TSConstructorType';
  typeParameters: null | TSTypeParameterDeclaration;
  parameters: Array<ArrayPattern | Identifier | RestElement>;
  typeAnnotation: TSTypeAnnotation;
}

export interface TSDeclareFunction {
  type: 'TSDeclareFunction';
  id: Identifier;
  generator: boolean;
  expression: boolean;
  async: boolean;
  params: Array<AssignmentPattern | Identifier | ObjectPattern | RestElement>;
  returnType?: TSTypeAnnotation;
  declare: boolean;
  typeParameters?: TSTypeParameterDeclaration;
  body?: BlockStatement;
}

export interface TSEnumDeclaration {
  type: 'TSEnumDeclaration';
  id: Identifier;
  members: Array<TSEnumMember>;
  declare?: boolean;
  const?: boolean;
  modifiers?: Array<
    TSAsyncKeyword | TSPrivateKeyword | TSPublicKeyword | TSStaticKeyword
  >;
  decorators?: Array<Decorator>;
}

export interface TSEnumMember {
  type: 'TSEnumMember';
  id: Identifier | Literal;
  initializer?:
    | ArrowFunctionExpression
    | AssignmentExpression
    | BinaryExpression
    | CallExpression
    | Identifier
    | Literal
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | ThisExpression
    | UnaryExpression
    | UpdateExpression;
}

export interface TSExportAssignment {
  type: 'TSExportAssignment';
  expression:
    | BinaryExpression
    | ClassExpression
    | FunctionExpression
    | Identifier
    | Literal
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | ThisExpression
    | UnaryExpression;
}

export interface TSExternalModuleReference {
  type: 'TSExternalModuleReference';
  expression: Identifier | Literal;
}

export interface TSFunctionType {
  type: 'TSFunctionType';
  typeParameters: null | TSTypeParameterDeclaration;
  parameters: Array<
    | ArrayPattern
    | AssignmentPattern
    | Identifier
    | ObjectPattern
    | RestElement
    | TSParameterProperty
  >;
  typeAnnotation: TSTypeAnnotation;
}

export interface TSImportEqualsDeclaration {
  type: 'TSImportEqualsDeclaration';
  id: Identifier;
  moduleReference: Identifier | TSExternalModuleReference | TSQualifiedName;
  isExport: boolean;
}

export interface TSImportType {
  type: 'TSImportType';
  isTypeOf: boolean;
  parameter: TSLiteralType;
  qualifier: null | Identifier;
  typeParameters: null | TSTypeParameterInstantiation;
}

export interface TSIndexSignature {
  type: 'TSIndexSignature';
  index:
    | null
    | AssignmentPattern
    | Identifier
    | RestElement
    | TSParameterProperty;
  typeAnnotation: null | TSTypeAnnotation;
  static: boolean;
  readonly?: boolean;
  accessibility?: 'private' | 'public';
  export?: boolean;
}

export interface TSIndexedAccessType {
  type: 'TSIndexedAccessType';
  objectType:
    | TSIndexedAccessType
    | TSMappedType
    | TSParenthesizedType
    | TSTupleType
    | TSTypeLiteral
    | TSTypeReference
    | TSAnyKeyword;
  indexType:
    | TSIndexedAccessType
    | TSIntersectionType
    | TSLiteralType
    | TSTupleType
    | TSTypeOperator
    | TSTypeQuery
    | TSTypeReference
    | TSNeverKeyword;
}

export interface TSInferType {
  type: 'TSInferType';
  typeParameter: TSTypeParameter;
}

export interface TSInterfaceBody {
  type: 'TSInterfaceBody';
  body: Array<
    | TSCallSignatureDeclaration
    | TSConstructSignatureDeclaration
    | TSIndexSignature
    | TSMethodSignature
    | TSPropertySignature
  >;
}

export interface TSInterfaceDeclaration {
  type: 'TSInterfaceDeclaration';
  body: TSInterfaceBody;
  id: Identifier;
  heritage: Array<TSInterfaceHeritage>;
  typeParameters?: TSTypeParameterDeclaration;
  declare?: boolean;
  abstract?: boolean;
  decorators?: Array<Decorator>;
}

export interface TSInterfaceHeritage {
  type: 'TSInterfaceHeritage';
  id: CallExpression | Identifier | MemberExpression | UnaryExpression;
  typeParameters?: TSTypeParameterInstantiation;
}

export interface TSIntersectionType {
  type: 'TSIntersectionType';
  types: Array<
    | TSIndexedAccessType
    | TSMappedType
    | TSParenthesizedType
    | TSThisType
    | TSTypeLiteral
    | TSTypeQuery
    | TSTypeReference
    | TSBooleanKeyword
    | TSNumberKeyword
    | TSObjectKeyword
    | TSStringKeyword
    | TSUndefinedKeyword
  >;
}

export interface TSLiteralType {
  type: 'TSLiteralType';
  literal: BigIntLiteral | Literal | TemplateLiteral | UnaryExpression;
}

export interface TSMappedType {
  type: 'TSMappedType';
  typeParameter: TSTypeParameter;
  typeAnnotation?:
    | TSConditionalType
    | TSFunctionType
    | TSIndexedAccessType
    | TSIntersectionType
    | TSLiteralType
    | TSTypeLiteral
    | TSTypeReference
    | TSUnionType
    | TSAnyKeyword
    | TSBooleanKeyword
    | TSNeverKeyword
    | TSNumberKeyword
    | TSStringKeyword;
  optional?: boolean | '-';
  readonly?: boolean;
}

export interface TSMethodSignature {
  type: 'TSMethodSignature';
  optional: boolean;
  computed: boolean;
  key:
    | BinaryExpression
    | CallExpression
    | Identifier
    | Literal
    | MemberExpression;
  params: Array<
    ArrayPattern | AssignmentPattern | Identifier | ObjectPattern | RestElement
  >;
  typeAnnotation: null | TSTypeAnnotation;
  static: boolean;
  typeParameters?: TSTypeParameterDeclaration;
}

export interface TSModuleBlock {
  type: 'TSModuleBlock';
  body: Array<
    | BlockStatement
    | BreakStatement
    | ClassDeclaration
    | ContinueStatement
    | DebuggerStatement
    | DoWhileStatement
    | EmptyStatement
    | ExportAllDeclaration
    | ExportDefaultDeclaration
    | ExportNamedDeclaration
    | ExpressionStatement
    | ForInStatement
    | ForOfStatement
    | ForStatement
    | FunctionDeclaration
    | IfStatement
    | ImportDeclaration
    | LabeledStatement
    | ReturnStatement
    | SwitchStatement
    | ThrowStatement
    | TryStatement
    | VariableDeclaration
    | WhileStatement
    | WithStatement
    | TSDeclareFunction
    | TSEnumDeclaration
    | TSExportAssignment
    | TSImportEqualsDeclaration
    | TSInterfaceDeclaration
    | TSModuleDeclaration
    | TSTypeAliasDeclaration
  >;
}

export interface TSModuleDeclaration {
  type: 'TSModuleDeclaration';
  id: Identifier | Literal;
  body?: TSModuleBlock | TSModuleDeclaration;
  declare?: boolean;
  global?: boolean;
  modifiers?: Array<
    | TSAsyncKeyword
    | TSPrivateKeyword
    | TSProtectedKeyword
    | TSPublicKeyword
    | TSStaticKeyword
  >;
}

export interface TSNamespaceExportDeclaration {
  type: 'TSNamespaceExportDeclaration';
  id: Identifier;
}

export interface TSNonNullExpression {
  type: 'TSNonNullExpression';
  expression: CallExpression | Identifier | Literal | MemberExpression;
}

export interface TSOptionalType {
  type: 'TSOptionalType';
  typeAnnotation: TSStringKeyword;
}

export interface TSParameterProperty {
  type: 'TSParameterProperty';
  accessibility?: 'private' | 'protected' | 'public';
  parameter:
    | ArrayPattern
    | AssignmentPattern
    | Identifier
    | ObjectPattern
    | RestElement;
  readonly?: boolean;
  static?: boolean;
  export?: boolean;
  decorators?: Array<Decorator>;
}

export interface TSParenthesizedType {
  type: 'TSParenthesizedType';
  typeAnnotation:
    | TSArrayType
    | TSConditionalType
    | TSConstructorType
    | TSFunctionType
    | TSInferType
    | TSIntersectionType
    | TSLiteralType
    | TSMappedType
    | TSTupleType
    | TSTypeLiteral
    | TSTypeOperator
    | TSTypeQuery
    | TSTypeReference
    | TSUnionType;
}

export interface TSPropertySignature {
  type: 'TSPropertySignature';
  computed: boolean;
  key: AssignmentExpression | Identifier | Literal | MemberExpression;
  typeAnnotation?: TSTypeAnnotation;
  optional?: boolean;
  readonly?: boolean;
  initializer?: Literal;
  accessibility?: 'private' | 'protected' | 'public';
}

export interface TSQualifiedName {
  type: 'TSQualifiedName';
  left: Identifier | TSQualifiedName;
  right: Identifier;
}

export interface TSRestType {
  type: 'TSRestType';
  typeAnnotation: TSArrayType | TSTypeReference;
}

export interface TSThisType {
  type: 'TSThisType';
}

export interface TSTupleType {
  type: 'TSTupleType';
  elementTypes: Array<
    | TSArrayType
    | TSConstructorType
    | TSFunctionType
    | TSIndexedAccessType
    | TSIntersectionType
    | TSLiteralType
    | TSOptionalType
    | TSParenthesizedType
    | TSRestType
    | TSTupleType
    | TSTypeLiteral
    | TSTypeOperator
    | TSTypeReference
    | TSUnionType
    | TSAnyKeyword
    | TSBooleanKeyword
    | TSNeverKeyword
    | TSNumberKeyword
    | TSStringKeyword
    | TSUndefinedKeyword
    | TSVoidKeyword
  >;
}

export interface TSTypeAliasDeclaration {
  type: 'TSTypeAliasDeclaration';
  id: Identifier;
  typeAnnotation:
    | TSArrayType
    | TSConditionalType
    | TSConstructorType
    | TSFunctionType
    | TSIndexedAccessType
    | TSIntersectionType
    | TSLiteralType
    | TSMappedType
    | TSParenthesizedType
    | TSThisType
    | TSTupleType
    | TSTypeLiteral
    | TSTypeOperator
    | TSTypeQuery
    | TSTypeReference
    | TSUnionType
    | TSAnyKeyword
    | TSBooleanKeyword
    | TSNumberKeyword
    | TSStringKeyword
    | TSVoidKeyword;
  typeParameters?: TSTypeParameterDeclaration;
  declare?: boolean;
}

export interface TSTypeAnnotation {
  type: 'TSTypeAnnotation';
  typeAnnotation:
    | TSArrayType
    | TSConditionalType
    | TSConstructorType
    | TSFunctionType
    | TSImportType
    | TSIndexedAccessType
    | TSInferType
    | TSIntersectionType
    | TSLiteralType
    | TSMappedType
    | TSParenthesizedType
    | TSThisType
    | TSTupleType
    | TSTypeLiteral
    | TSTypeOperator
    | TSTypePredicate
    | TSTypeQuery
    | TSTypeReference
    | TSUnionType
    | TSAnyKeyword
    | TSBigIntKeyword
    | TSBooleanKeyword
    | TSNeverKeyword
    | TSNullKeyword
    | TSNumberKeyword
    | TSObjectKeyword
    | TSStringKeyword
    | TSSymbolKeyword
    | TSUndefinedKeyword
    | TSUnknownKeyword
    | TSVoidKeyword;
}

export interface TSTypeAssertion {
  type: 'TSTypeAssertion';
  typeAnnotation:
    | TSArrayType
    | TSFunctionType
    | TSTupleType
    | TSTypeLiteral
    | TSTypeQuery
    | TSTypeReference
    | TSUnionType
    | TSAnyKeyword
    | TSBooleanKeyword
    | TSNumberKeyword
    | TSObjectKeyword
    | TSStringKeyword;
  expression:
    | ArrayExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | AwaitExpression
    | BinaryExpression
    | CallExpression
    | FunctionExpression
    | Identifier
    | Literal
    | MemberExpression
    | NewExpression
    | ObjectExpression
    | SequenceExpression
    | TemplateLiteral
    | ThisExpression
    | UnaryExpression
    | UpdateExpression
    | TSTypeAssertion;
}

export interface TSTypeLiteral {
  type: 'TSTypeLiteral';
  members: Array<
    | TSCallSignatureDeclaration
    | TSConstructSignatureDeclaration
    | TSIndexSignature
    | TSMethodSignature
    | TSPropertySignature
  >;
}

export interface TSTypeOperator {
  type: 'TSTypeOperator';
  operator: 'keyof' | 'unique';
  typeAnnotation:
    | TSIndexedAccessType
    | TSTypeQuery
    | TSTypeReference
    | TSAnyKeyword
    | TSSymbolKeyword;
}

export interface TSTypeParameter {
  type: 'TSTypeParameter';
  name: string;
  constraint?:
    | TSArrayType
    | TSConstructorType
    | TSFunctionType
    | TSIndexedAccessType
    | TSLiteralType
    | TSMappedType
    | TSParenthesizedType
    | TSThisType
    | TSTupleType
    | TSTypeLiteral
    | TSTypeOperator
    | TSTypeQuery
    | TSTypeReference
    | TSUnionType
    | TSAnyKeyword
    | TSNullKeyword
    | TSNumberKeyword
    | TSObjectKeyword
    | TSStringKeyword
    | TSUndefinedKeyword
    | TSVoidKeyword;
  default?:
    | TSFunctionType
    | TSIndexedAccessType
    | TSIntersectionType
    | TSLiteralType
    | TSTypeLiteral
    | TSTypeReference
    | TSUnionType
    | TSAnyKeyword
    | TSNeverKeyword
    | TSNumberKeyword
    | TSObjectKeyword
    | TSStringKeyword;
}

export interface TSTypeParameterDeclaration {
  type: 'TSTypeParameterDeclaration';
  params: Array<TSTypeParameter>;
}

export interface TSTypeParameterInstantiation {
  type: 'TSTypeParameterInstantiation';
  params: Array<
    | TSArrayType
    | TSFunctionType
    | TSImportType
    | TSIndexedAccessType
    | TSInferType
    | TSIntersectionType
    | TSLiteralType
    | TSMappedType
    | TSParenthesizedType
    | TSThisType
    | TSTupleType
    | TSTypeLiteral
    | TSTypeOperator
    | TSTypeQuery
    | TSTypeReference
    | TSUnionType
    | TSAnyKeyword
    | TSBooleanKeyword
    | TSNeverKeyword
    | TSNullKeyword
    | TSNumberKeyword
    | TSObjectKeyword
    | TSStringKeyword
    | TSUndefinedKeyword
    | TSUnknownKeyword
    | TSVoidKeyword
  >;
}

export interface TSTypePredicate {
  type: 'TSTypePredicate';
  parameterName: Identifier | TSThisType;
  typeAnnotation: TSTypeAnnotation;
}

export interface TSTypeQuery {
  type: 'TSTypeQuery';
  exprName: Identifier | TSQualifiedName;
}

export interface TSTypeReference {
  type: 'TSTypeReference';
  typeName: Identifier | TSQualifiedName;
  typeParameters?: TSTypeParameterInstantiation;
}

export interface TSUnionType {
  type: 'TSUnionType';
  types: Array<
    | TSArrayType
    | TSIndexedAccessType
    | TSIntersectionType
    | TSLiteralType
    | TSParenthesizedType
    | TSTupleType
    | TSTypeLiteral
    | TSTypeOperator
    | TSTypeQuery
    | TSTypeReference
    | TSAnyKeyword
    | TSBigIntKeyword
    | TSBooleanKeyword
    | TSNeverKeyword
    | TSNullKeyword
    | TSNumberKeyword
    | TSObjectKeyword
    | TSStringKeyword
    | TSSymbolKeyword
    | TSUndefinedKeyword
    | TSUnknownKeyword
    | TSVoidKeyword
  >;
}

export interface TSAnyKeyword {
  type: 'TSAnyKeyword';
}

export interface TSAsyncKeyword {
  type: 'TSAsyncKeyword';
}

export interface TSBigIntKeyword {
  type: 'TSBigIntKeyword';
}

export interface TSBooleanKeyword {
  type: 'TSBooleanKeyword';
}

export interface TSNeverKeyword {
  type: 'TSNeverKeyword';
}

export interface TSNullKeyword {
  type: 'TSNullKeyword';
}

export interface TSNumberKeyword {
  type: 'TSNumberKeyword';
}

export interface TSObjectKeyword {
  type: 'TSObjectKeyword';
}

export interface TSPrivateKeyword {
  type: 'TSPrivateKeyword';
}

export interface TSProtectedKeyword {
  type: 'TSProtectedKeyword';
}

export interface TSPublicKeyword {
  type: 'TSPublicKeyword';
}

export interface TSStaticKeyword {
  type: 'TSStaticKeyword';
}

export interface TSStringKeyword {
  type: 'TSStringKeyword';
}

export interface TSSymbolKeyword {
  type: 'TSSymbolKeyword';
}

export interface TSUndefinedKeyword {
  type: 'TSUndefinedKeyword';
}

export interface TSUnknownKeyword {
  type: 'TSUnknownKeyword';
}

export interface TSVoidKeyword {
  type: 'TSVoidKeyword';
}
