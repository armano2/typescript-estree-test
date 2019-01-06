export interface ArrayExpression {
  type: 'ArrayExpression';
  elements: Array<
    | Identifier
    | Literal
    | ArrayExpression
    | ObjectExpression
    | FunctionExpression
    | NewExpression
    | CallExpression
    | AssignmentExpression
    | BigIntLiteral
    | BinaryExpression
    | UpdateExpression
    | null
    | SpreadElement
    | MemberExpression
    | TSTypeAssertion
    | ArrowFunctionExpression
    | ThisExpression
    | AwaitExpression
    | UnaryExpression
    | SequenceExpression
    | TemplateLiteral
  >;
}

export interface ArrayPattern {
  type: 'ArrayPattern';
  elements: Array<
    | Identifier
    | null
    | AssignmentExpression
    | RestElement
    | ArrayPattern
    | Literal
    | ObjectPattern
    | ObjectExpression
    | AssignmentPattern
    | MemberExpression
    | ArrayExpression
    | SpreadElement
  >;
  typeAnnotation?: TSTypeAnnotation;
  optional?: boolean;
}

export interface ArrowFunctionExpression {
  type: 'ArrowFunctionExpression';
  generator: boolean;
  id: null;
  params: Array<
    | Identifier
    | ObjectPattern
    | TSParameterProperty
    | ArrayPattern
    | RestElement
    | AssignmentPattern
  >;
  body:
    | BlockStatement
    | MemberExpression
    | Identifier
    | Literal
    | CallExpression
    | ConditionalExpression
    | LogicalExpression
    | ArrayExpression
    | ObjectExpression
    | BinaryExpression
    | TSTypeAssertion
    | FunctionExpression
    | JSXElement
    | AssignmentExpression
    | NewExpression
    | ThisExpression
    | ArrowFunctionExpression
    | TSAsExpression
    | UnaryExpression
    | TemplateLiteral
    | ClassExpression
    | UpdateExpression
    | AwaitExpression
    | MetaProperty
    | YieldExpression
    | SequenceExpression;
  async: boolean;
  expression: boolean;
  returnType?: TSTypeAnnotation;
  typeParameters?: TSTypeParameterDeclaration;
}

export interface AssignmentExpression {
  type: 'AssignmentExpression';
  operator:
    | '='
    | '+='
    | '-='
    | '*='
    | '/='
    | '%='
    | '&='
    | '|='
    | '<<='
    | '>>='
    | '>>>='
    | '^='
    | '**=';
  left:
    | MemberExpression
    | Identifier
    | ArrayPattern
    | SequenceExpression
    | NewExpression
    | ObjectPattern
    | MetaProperty
    | CallExpression
    | Literal;
  right:
    | Literal
    | BinaryExpression
    | Identifier
    | ArrowFunctionExpression
    | CallExpression
    | ObjectExpression
    | FunctionExpression
    | MemberExpression
    | NewExpression
    | ArrayExpression
    | LogicalExpression
    | AssignmentExpression
    | UnaryExpression
    | AwaitExpression
    | ClassExpression
    | SequenceExpression
    | TSTypeAssertion
    | ConditionalExpression
    | TSAsExpression
    | ThisExpression
    | BigIntLiteral
    | UpdateExpression
    | YieldExpression
    | MetaProperty
    | TaggedTemplateExpression
    | TemplateLiteral
    | JSXElement;
}

export interface AssignmentPattern {
  type: 'AssignmentPattern';
  left: Identifier | ArrayPattern | ObjectPattern;
  right:
    | Literal
    | Identifier
    | ClassExpression
    | FunctionExpression
    | ObjectExpression
    | ArrayExpression
    | NewExpression
    | ArrowFunctionExpression
    | ConditionalExpression
    | AwaitExpression
    | YieldExpression
    | CallExpression
    | MemberExpression
    | BinaryExpression
    | TemplateLiteral
    | TSTypeAssertion
    | UnaryExpression
    | ThisExpression;
}

export interface AwaitExpression {
  type: 'AwaitExpression';
  argument:
    | Literal
    | CallExpression
    | Identifier
    | UnaryExpression
    | AwaitExpression
    | MemberExpression
    | NewExpression
    | ThisExpression;
}

export interface BigIntLiteral {
  type: 'BigIntLiteral';
  raw: string;
  value: string;
}

export interface BinaryExpression {
  type: 'BinaryExpression';
  operator:
    | '+'
    | '>'
    | '==='
    | '!=='
    | '=='
    | '<='
    | '>='
    | '-'
    | '<'
    | '*'
    | '/'
    | '|'
    | '>>'
    | 'in'
    | '&'
    | '>>>'
    | '<<'
    | '**'
    | '%'
    | 'instanceof'
    | '^'
    | '!=';
  left:
    | MemberExpression
    | Literal
    | BinaryExpression
    | CallExpression
    | UnaryExpression
    | Identifier
    | BigIntLiteral
    | UpdateExpression
    | SequenceExpression
    | LogicalExpression
    | AwaitExpression
    | ArrowFunctionExpression
    | ThisExpression
    | ObjectExpression
    | TemplateLiteral
    | AssignmentExpression
    | NewExpression
    | TSTypeAssertion
    | TSAsExpression;
  right:
    | Literal
    | Identifier
    | MemberExpression
    | UnaryExpression
    | BinaryExpression
    | BigIntLiteral
    | UpdateExpression
    | ObjectExpression
    | CallExpression
    | ConditionalExpression
    | LogicalExpression
    | AwaitExpression
    | ArrowFunctionExpression
    | ThisExpression
    | ArrayExpression
    | FunctionExpression
    | TemplateLiteral
    | NewExpression
    | TSTypeAssertion
    | TSAsExpression;
}

export interface BlockStatement {
  type: 'BlockStatement';
  body: Array<
    | ReturnStatement
    | TSAbstractClassDeclaration
    | ClassDeclaration
    | ExpressionStatement
    | VariableDeclaration
    | IfStatement
    | SwitchStatement
    | FunctionDeclaration
    | ForOfStatement
    | ThrowStatement
    | ForStatement
    | BreakStatement
    | ContinueStatement
    | ForInStatement
    | LabeledStatement
    | TSEnumDeclaration
    | WhileStatement
    | TSTypeAliasDeclaration
    | TSInterfaceDeclaration
    | DoWhileStatement
    | EmptyStatement
    | BlockStatement
    | TryStatement
    | DebuggerStatement
    | WithStatement
    | TSDeclareFunction
    | ExportNamedDeclaration
    | TSModuleDeclaration
    | TSExportAssignment
    | ExportAllDeclaration
    | ExportDefaultDeclaration
    | TSImportEqualsDeclaration
    | ImportDeclaration
  >;
}

export interface BreakStatement {
  type: 'BreakStatement';
  label: null | Identifier;
}

export interface CallExpression {
  type: 'CallExpression';
  callee:
    | MemberExpression
    | ArrowFunctionExpression
    | Identifier
    | Super
    | TSNonNullExpression
    | Import
    | FunctionExpression
    | CallExpression
    | NewExpression
    | TSTypeAssertion
    | TSAsExpression
    | AwaitExpression
    | SequenceExpression
    | Literal
    | ThisExpression
    | TemplateLiteral;
  arguments: Array<
    | FunctionExpression
    | Identifier
    | CallExpression
    | MemberExpression
    | Literal
    | BinaryExpression
    | ObjectExpression
    | UnaryExpression
    | SpreadElement
    | ArrayExpression
    | ArrowFunctionExpression
    | TemplateLiteral
    | TSAsExpression
    | TSNonNullExpression
    | NewExpression
    | AwaitExpression
    | YieldExpression
    | ThisExpression
    | TSTypeAssertion
    | BigIntLiteral
    | UpdateExpression
    | AssignmentExpression
    | ClassExpression
    | SequenceExpression
    | ConditionalExpression
    | TaggedTemplateExpression
    | LogicalExpression
  >;
  typeParameters?: TSTypeParameterInstantiation;
}

export interface CatchClause {
  type: 'CatchClause';
  param: null | Identifier | ArrayPattern | ObjectPattern;
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
    | Identifier
    | MemberExpression
    | CallExpression
    | Literal
    | ClassExpression
    | TSAsExpression
    | AwaitExpression
    | YieldExpression
    | ThisExpression;
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
    | Identifier
    | MemberExpression
    | ClassExpression
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
    | Identifier
    | MemberExpression
    | Literal
    | CallExpression
    | AssignmentExpression
    | BinaryExpression
    | UnaryExpression
    | TSTypeAssertion
    | TemplateLiteral;
  value:
    | null
    | Literal
    | MemberExpression
    | ArrowFunctionExpression
    | Identifier
    | ObjectExpression
    | NewExpression
    | CallExpression
    | ClassExpression
    | BinaryExpression
    | FunctionExpression
    | ArrayExpression
    | UnaryExpression
    | LogicalExpression
    | TSTypeAssertion
    | ThisExpression
    | YieldExpression
    | AssignmentExpression
    | UpdateExpression;
  computed: boolean;
  static: boolean;
  typeAnnotation?: TSTypeAnnotation;
  readonly?: boolean;
  accessibility?: 'public' | 'private' | 'protected';
  decorators?: Array<Decorator>;
  definite?: boolean;
  optional?: boolean;
}

export interface ConditionalExpression {
  type: 'ConditionalExpression';
  test:
    | TSTypeAssertion
    | BinaryExpression
    | MemberExpression
    | Literal
    | Identifier
    | LogicalExpression
    | CallExpression
    | AwaitExpression
    | TemplateLiteral
    | UnaryExpression
    | ArrowFunctionExpression
    | ObjectExpression
    | NewExpression
    | ArrayExpression
    | AssignmentExpression;
  consequent:
    | ObjectExpression
    | Literal
    | MemberExpression
    | Identifier
    | UpdateExpression
    | ConditionalExpression
    | ArrowFunctionExpression
    | CallExpression
    | UnaryExpression
    | BinaryExpression
    | AwaitExpression
    | FunctionExpression
    | JSXElement
    | ArrayExpression
    | TSAsExpression
    | AssignmentExpression
    | NewExpression
    | TemplateLiteral
    | LogicalExpression;
  alternate:
    | Literal
    | CallExpression
    | Identifier
    | ArrayExpression
    | ObjectExpression
    | ConditionalExpression
    | ArrowFunctionExpression
    | LogicalExpression
    | MemberExpression
    | UnaryExpression
    | AwaitExpression
    | FunctionExpression
    | JSXElement
    | BinaryExpression
    | AssignmentExpression
    | TemplateLiteral
    | UpdateExpression
    | SequenceExpression;
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
    | CallExpression
    | Identifier
    | ArrowFunctionExpression
    | MemberExpression
    | YieldExpression;
}

export interface DoWhileStatement {
  type: 'DoWhileStatement';
  test:
    | Literal
    | BinaryExpression
    | CallExpression
    | Identifier
    | AwaitExpression
    | AssignmentExpression;
  body: BlockStatement | VariableDeclaration;
}

export interface EmptyStatement {
  type: 'EmptyStatement';
}

export interface ExportAllDeclaration {
  type: 'ExportAllDeclaration';
  source: Literal | Identifier;
}

export interface ExportDefaultDeclaration {
  type: 'ExportDefaultDeclaration';
  declaration:
    | Identifier
    | TSInterfaceDeclaration
    | BinaryExpression
    | UnaryExpression
    | ClassDeclaration
    | MemberExpression
    | ObjectExpression
    | FunctionDeclaration
    | NewExpression
    | Literal
    | ArrowFunctionExpression
    | CallExpression
    | TSAbstractClassDeclaration
    | TSAsExpression
    | JSXElement
    | AssignmentExpression;
}

export interface ExportNamedDeclaration {
  type: 'ExportNamedDeclaration';
  declaration:
    | null
    | TSModuleDeclaration
    | ClassDeclaration
    | TSInterfaceDeclaration
    | VariableDeclaration
    | FunctionDeclaration
    | TSDeclareFunction
    | TSTypeAliasDeclaration
    | TSEnumDeclaration
    | TSAbstractClassDeclaration;
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
    | Identifier
    | NewExpression
    | CallExpression
    | AssignmentExpression
    | MemberExpression
    | Literal
    | ThisExpression
    | UpdateExpression
    | TSTypeAssertion
    | ArrowFunctionExpression
    | AwaitExpression
    | YieldExpression
    | FunctionExpression
    | UnaryExpression
    | ClassExpression
    | SequenceExpression
    | BinaryExpression
    | LogicalExpression
    | ObjectExpression
    | ArrayExpression
    | ConditionalExpression
    | TSNonNullExpression
    | TSAsExpression
    | JSXElement
    | JSXFragment
    | MetaProperty
    | TemplateLiteral
    | TaggedTemplateExpression;
  directive?: string;
}

export interface ForInStatement {
  type: 'ForInStatement';
  left:
    | Identifier
    | VariableDeclaration
    | MemberExpression
    | AssignmentExpression
    | CallExpression
    | NewExpression
    | ObjectExpression
    | ThisExpression;
  right:
    | Literal
    | ObjectExpression
    | Identifier
    | ArrayPattern
    | MemberExpression
    | AwaitExpression
    | ThisExpression
    | SequenceExpression;
  body:
    | BlockStatement
    | VariableDeclaration
    | EmptyStatement
    | ExpressionStatement;
}

export interface ForOfStatement {
  type: 'ForOfStatement';
  left:
    | VariableDeclaration
    | Identifier
    | MemberExpression
    | ArrayPattern
    | ObjectExpression
    | UpdateExpression;
  right:
    | CallExpression
    | MemberExpression
    | Identifier
    | ArrayPattern
    | AwaitExpression
    | TSTypeAssertion
    | NewExpression
    | Literal;
  body:
    | BlockStatement
    | ContinueStatement
    | ExpressionStatement
    | EmptyStatement
    | ForOfStatement;
  await: boolean;
}

export interface ForStatement {
  type: 'ForStatement';
  init:
    | null
    | VariableDeclaration
    | AssignmentExpression
    | Identifier
    | AwaitExpression
    | SequenceExpression;
  test:
    | null
    | BinaryExpression
    | Literal
    | SequenceExpression
    | Identifier
    | AwaitExpression
    | UnaryExpression
    | AssignmentExpression;
  update:
    | null
    | UpdateExpression
    | SequenceExpression
    | AssignmentExpression
    | Identifier
    | AwaitExpression
    | UnaryExpression;
  body:
    | BlockStatement
    | ContinueStatement
    | VariableDeclaration
    | EmptyStatement
    | ExpressionStatement;
}

export interface FunctionDeclaration {
  type: 'FunctionDeclaration';
  id: null | Identifier;
  generator: boolean;
  expression: boolean;
  async: boolean;
  params: Array<
    | Identifier
    | RestElement
    | ObjectPattern
    | ArrayPattern
    | AssignmentPattern
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
    | Identifier
    | TSParameterProperty
    | AssignmentPattern
    | RestElement
    | ArrayPattern
    | ObjectPattern
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
    | UnaryExpression
    | Literal
    | BinaryExpression
    | LogicalExpression
    | MemberExpression
    | Identifier
    | CallExpression
    | AssignmentExpression
    | TSAsExpression
    | AwaitExpression
    | UpdateExpression
    | SequenceExpression;
  consequent:
    | BlockStatement
    | ExpressionStatement
    | ReturnStatement
    | BreakStatement
    | VariableDeclaration
    | LabeledStatement
    | EmptyStatement
    | ThrowStatement
    | ContinueStatement;
  alternate:
    | null
    | BlockStatement
    | IfStatement
    | ExpressionStatement
    | ReturnStatement
    | VariableDeclaration
    | BreakStatement;
}

export interface Import {
  type: 'Import';
}

export interface ImportDeclaration {
  type: 'ImportDeclaration';
  source: Literal;
  specifiers: Array<
    ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier
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
    JSXText | JSXElement | JSXExpressionContainer | JSXFragment | JSXSpreadChild
  >;
}

export interface JSXEmptyExpression {
  type: 'JSXEmptyExpression';
}

export interface JSXExpressionContainer {
  type: 'JSXExpressionContainer';
  expression:
    | ArrowFunctionExpression
    | Literal
    | TSAsExpression
    | Identifier
    | JSXEmptyExpression
    | JSXElement
    | MemberExpression
    | ObjectExpression
    | ConditionalExpression
    | CallExpression
    | BinaryExpression
    | ArrayExpression;
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
    | SequenceExpression
    | ObjectExpression;
}

export interface JSXSpreadChild {
  type: 'JSXSpreadChild';
  expression: MemberExpression | CallExpression | JSXElement | TSAsExpression;
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
    | VariableDeclaration
    | ForStatement
    | BreakStatement
    | WhileStatement
    | LabeledStatement
    | ForOfStatement
    | ForInStatement
    | DoWhileStatement
    | IfStatement
    | TryStatement
    | EmptyStatement
    | ContinueStatement
    | ExpressionStatement
    | SwitchStatement
    | BlockStatement;
}

export interface Literal {
  type: 'Literal';
  raw: string;
  value: boolean | null | number | string;
  regex?: {
    pattern: string;
    flags: string;
  };
}

export interface LogicalExpression {
  type: 'LogicalExpression';
  operator: '||' | '&&';
  left:
    | Identifier
    | TSTypeAssertion
    | MemberExpression
    | LogicalExpression
    | BinaryExpression
    | UnaryExpression
    | CallExpression
    | ObjectExpression
    | Literal
    | ArrowFunctionExpression
    | NewExpression
    | AwaitExpression
    | ArrayExpression
    | AssignmentExpression
    | FunctionExpression;
  right:
    | Identifier
    | ObjectExpression
    | BinaryExpression
    | UnaryExpression
    | MemberExpression
    | CallExpression
    | FunctionExpression
    | ArrayExpression
    | LogicalExpression
    | Literal
    | NewExpression
    | ArrowFunctionExpression
    | AwaitExpression
    | AssignmentExpression
    | ThisExpression
    | ConditionalExpression
    | SequenceExpression;
}

export interface MemberExpression {
  type: 'MemberExpression';
  object:
    | ThisExpression
    | MemberExpression
    | Identifier
    | Super
    | Literal
    | TSTypeAssertion
    | CallExpression
    | TSAsExpression
    | ArrayExpression
    | AwaitExpression
    | NewExpression
    | LogicalExpression
    | AssignmentExpression
    | SequenceExpression
    | ObjectExpression
    | TSNonNullExpression
    | MetaProperty
    | TaggedTemplateExpression
    | TemplateLiteral
    | ArrowFunctionExpression;
  property:
    | Identifier
    | Literal
    | MemberExpression
    | BinaryExpression
    | UpdateExpression
    | AwaitExpression
    | TSAsExpression
    | TSTypeAssertion
    | SequenceExpression
    | ThisExpression
    | TemplateLiteral
    | CallExpression;
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
    | Identifier
    | Literal
    | MemberExpression
    | BinaryExpression
    | CallExpression
    | UnaryExpression
    | TSTypeAssertion
    | TemplateLiteral
    | ArrayExpression
    | ObjectExpression
    | SequenceExpression
    | ArrowFunctionExpression
    | MetaProperty
    | YieldExpression
    | ConditionalExpression;
  value: FunctionExpression;
  computed: boolean;
  static: boolean;
  kind: 'method' | 'get' | 'set' | 'constructor';
  accessibility?: 'private' | 'public' | 'protected';
  decorators?: Array<Decorator>;
}

export interface NewExpression {
  type: 'NewExpression';
  callee:
    | Identifier
    | MemberExpression
    | TSTypeAssertion
    | AwaitExpression
    | ArrayExpression
    | Super
    | CallExpression
    | ClassExpression
    | ThisExpression
    | NewExpression
    | TemplateLiteral
    | BinaryExpression
    | TSAsExpression;
  arguments: Array<
    | Literal
    | NewExpression
    | ObjectExpression
    | ArrowFunctionExpression
    | ThisExpression
    | ArrayExpression
    | BinaryExpression
    | Identifier
    | MemberExpression
    | TSAsExpression
    | FunctionExpression
    | TemplateLiteral
    | AwaitExpression
    | SpreadElement
    | UnaryExpression
    | TSTypeAssertion
    | CallExpression
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
    | ExpressionStatement
    | ClassDeclaration
    | TSInterfaceDeclaration
    | TSAbstractClassDeclaration
    | VariableDeclaration
    | FunctionDeclaration
    | TSModuleDeclaration
    | TSImportEqualsDeclaration
    | ExportNamedDeclaration
    | ImportDeclaration
    | TSExportAssignment
    | ExportDefaultDeclaration
    | TSTypeAliasDeclaration
    | TSDeclareFunction
    | EmptyStatement
    | TSEnumDeclaration
    | TSNamespaceExportDeclaration
    | WhileStatement
    | BlockStatement
    | IfStatement
    | ReturnStatement
    | ForOfStatement
    | ForStatement
    | LabeledStatement
    | DoWhileStatement
    | ForInStatement
    | BreakStatement
    | TryStatement
    | WithStatement
    | SwitchStatement
    | ContinueStatement
    | DebuggerStatement
    | ExportAllDeclaration
    | ThrowStatement
  >;
  sourceType: 'script' | 'module';
}

export interface Property {
  type: 'Property';
  key:
    | Identifier
    | BinaryExpression
    | Literal
    | CallExpression
    | TemplateLiteral
    | MemberExpression
    | AwaitExpression
    | UnaryExpression
    | TSTypeAssertion
    | SequenceExpression
    | LogicalExpression
    | ArrayExpression
    | ObjectExpression
    | YieldExpression
    | MetaProperty;
  value:
    | FunctionExpression
    | Identifier
    | TSTypeAssertion
    | ObjectExpression
    | Literal
    | MemberExpression
    | ArrowFunctionExpression
    | TSNonNullExpression
    | NewExpression
    | ArrayExpression
    | AssignmentExpression
    | ObjectPattern
    | TSAsExpression
    | BinaryExpression
    | AssignmentPattern
    | ClassExpression
    | CallExpression
    | ConditionalExpression
    | ArrayPattern
    | UnaryExpression
    | AwaitExpression
    | ThisExpression
    | MetaProperty
    | TemplateLiteral;
  computed: boolean;
  method: boolean;
  shorthand: boolean;
  kind: 'get' | 'set' | 'init';
}

export interface RestElement {
  type: 'RestElement';
  argument: Identifier | ObjectPattern | ArrayPattern | AssignmentPattern;
  decorators?: Array<Decorator>;
}

export interface ReturnStatement {
  type: 'ReturnStatement';
  argument:
    | null
    | MemberExpression
    | CallExpression
    | Identifier
    | Literal
    | NewExpression
    | BinaryExpression
    | ClassExpression
    | ConditionalExpression
    | TSTypeAssertion
    | ObjectExpression
    | ArrayExpression
    | UnaryExpression
    | TSAsExpression
    | JSXElement
    | ArrowFunctionExpression
    | AssignmentExpression
    | ThisExpression
    | TSNonNullExpression
    | SequenceExpression
    | FunctionExpression
    | AwaitExpression
    | LogicalExpression
    | JSXFragment
    | TaggedTemplateExpression
    | TemplateLiteral
    | MetaProperty
    | YieldExpression
    | UpdateExpression;
}

export interface SequenceExpression {
  type: 'SequenceExpression';
  expressions: Array<
    | Literal
    | Identifier
    | UpdateExpression
    | CallExpression
    | BinaryExpression
    | TemplateLiteral
    | AssignmentExpression
    | ArrowFunctionExpression
    | FunctionExpression
    | ObjectExpression
    | UnaryExpression
    | ArrayExpression
    | TSNonNullExpression
    | ConditionalExpression
    | TSAsExpression
    | AwaitExpression
    | NewExpression
    | MemberExpression
    | JSXElement
    | LogicalExpression
  >;
}

export interface SpreadElement {
  type: 'SpreadElement';
  argument:
    | Identifier
    | CallExpression
    | ObjectExpression
    | AwaitExpression
    | TSAsExpression
    | ConditionalExpression
    | ArrayExpression
    | LogicalExpression
    | NewExpression;
}

export interface Super {
  type: 'Super';
}

export interface SwitchCase {
  type: 'SwitchCase';
  test:
    | null
    | Literal
    | MemberExpression
    | SequenceExpression
    | Identifier
    | AwaitExpression
    | TemplateLiteral
    | CallExpression;
  consequent: Array<
    | BreakStatement
    | IfStatement
    | VariableDeclaration
    | ReturnStatement
    | ExpressionStatement
    | ContinueStatement
    | BlockStatement
    | FunctionDeclaration
    | SwitchStatement
  >;
}

export interface SwitchStatement {
  type: 'SwitchStatement';
  discriminant:
    | Identifier
    | MemberExpression
    | Literal
    | AwaitExpression
    | UnaryExpression
    | BinaryExpression
    | TemplateLiteral
    | CallExpression;
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
    | MemberExpression
    | BinaryExpression
    | Identifier
    | LogicalExpression
    | CallExpression
    | Literal
    | ArrowFunctionExpression
    | ArrayExpression
    | ObjectExpression
    | FunctionExpression
    | TemplateLiteral
    | ConditionalExpression
    | NewExpression
    | TSTypeAssertion
    | UnaryExpression
    | YieldExpression
    | TSAsExpression
  >;
}

export interface ThisExpression {
  type: 'ThisExpression';
}

export interface ThrowStatement {
  type: 'ThrowStatement';
  argument:
    | null
    | Literal
    | NewExpression
    | CallExpression
    | Identifier
    | ArrayExpression
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
  operator: '!' | '-' | 'typeof' | '+' | 'void' | '~' | 'delete';
  prefix: boolean;
  argument:
    | Identifier
    | Literal
    | MemberExpression
    | ClassExpression
    | CallExpression
    | UnaryExpression
    | BigIntLiteral
    | AwaitExpression
    | TSTypeAssertion
    | BinaryExpression
    | ThisExpression
    | LogicalExpression
    | TemplateLiteral
    | ArrowFunctionExpression
    | UpdateExpression
    | AssignmentExpression
    | ObjectExpression
    | NewExpression;
}

export interface UpdateExpression {
  type: 'UpdateExpression';
  operator: '++' | '--';
  prefix: boolean;
  argument:
    | MemberExpression
    | Identifier
    | TSNonNullExpression
    | Literal
    | BinaryExpression
    | ObjectExpression
    | CallExpression
    | FunctionExpression
    | ThisExpression
    | ArrayExpression
    | NewExpression;
}

export interface VariableDeclaration {
  type: 'VariableDeclaration';
  declarations: Array<VariableDeclarator>;
  kind: 'let' | 'const' | 'var';
  declare?: boolean;
}

export interface VariableDeclarator {
  type: 'VariableDeclarator';
  id: Identifier | ObjectPattern | ArrayPattern;
  init:
    | null
    | CallExpression
    | ArrowFunctionExpression
    | Literal
    | NewExpression
    | Identifier
    | ObjectExpression
    | MemberExpression
    | ArrayExpression
    | FunctionExpression
    | LogicalExpression
    | ConditionalExpression
    | BinaryExpression
    | TSTypeAssertion
    | TSAsExpression
    | AssignmentExpression
    | AwaitExpression
    | ThisExpression
    | BigIntLiteral
    | UnaryExpression
    | ClassExpression
    | JSXElement
    | SequenceExpression
    | TemplateLiteral
    | YieldExpression
    | TaggedTemplateExpression
    | TSNonNullExpression
    | MetaProperty
    | UpdateExpression;
  definite?: boolean;
}

export interface WhileStatement {
  type: 'WhileStatement';
  test:
    | Literal
    | BinaryExpression
    | CallExpression
    | Identifier
    | AwaitExpression
    | AssignmentExpression
    | TemplateLiteral
    | LogicalExpression;
  body:
    | EmptyStatement
    | BlockStatement
    | BreakStatement
    | ContinueStatement
    | VariableDeclaration
    | LabeledStatement
    | ExpressionStatement;
}

export interface WithStatement {
  type: 'WithStatement';
  object:
    | Identifier
    | AwaitExpression
    | ObjectExpression
    | NewExpression
    | MemberExpression
    | Literal;
  body: BlockStatement | VariableDeclaration | ReturnStatement;
}

export interface YieldExpression {
  type: 'YieldExpression';
  delegate: boolean;
  argument:
    | null
    | Literal
    | Identifier
    | ConditionalExpression
    | ArrayExpression
    | BinaryExpression
    | CallExpression
    | TemplateLiteral
    | NewExpression
    | ArrowFunctionExpression
    | ObjectExpression
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
  accessibility?: 'public' | 'protected' | 'private';
  optional?: boolean;
  definite: boolean;
}

export interface TSAbstractMethodDefinition {
  type: 'TSAbstractMethodDefinition';
  key: Identifier;
  value: FunctionExpression;
  computed: boolean;
  static: boolean;
  kind: 'get' | 'set' | 'method' | 'constructor';
  accessibility?: 'public' | 'protected' | 'private';
}

export interface TSArrayType {
  type: 'TSArrayType';
  elementType:
    | TSTypeReference
    | TSTypeQuery
    | TSStringKeyword
    | TSAnyKeyword
    | TSParenthesizedType
    | TSVoidKeyword
    | TSArrayType
    | TSTypeLiteral
    | TSNumberKeyword
    | TSBooleanKeyword
    | TSTupleType
    | TSIndexedAccessType
    | TSMappedType
    | TSNeverKeyword
    | TSNullKeyword
    | TSSymbolKeyword
    | TSUnknownKeyword;
}

export interface TSAsExpression {
  type: 'TSAsExpression';
  expression:
    | Identifier
    | Literal
    | ObjectExpression
    | FunctionExpression
    | CallExpression
    | ConditionalExpression
    | ThisExpression
    | MemberExpression
    | ClassExpression
    | ArrayExpression
    | TSAsExpression
    | BinaryExpression
    | TemplateLiteral
    | TaggedTemplateExpression
    | ArrowFunctionExpression
    | JSXElement;
  typeAnnotation:
    | TSAnyKeyword
    | TSTypeReference
    | TSUnionType
    | TSNumberKeyword
    | TSLiteralType
    | TSIntersectionType
    | TSArrayType
    | TSParenthesizedType
    | TSTypeLiteral
    | TSTypeOperator
    | TSConstructorType
    | TSTupleType
    | TSStringKeyword
    | TSFunctionType;
}

export interface TSCallSignatureDeclaration {
  type: 'TSCallSignatureDeclaration';
  params: Array<Identifier | RestElement | ObjectPattern>;
  returnType?: TSTypeAnnotation;
  typeParameters?: TSTypeParameterDeclaration;
}

export interface TSConditionalType {
  type: 'TSConditionalType';
  checkType:
    | TSIndexedAccessType
    | TSStringKeyword
    | TSTypeReference
    | TSTupleType
    | TSTypeQuery
    | TSNumberKeyword
    | TSParenthesizedType
    | TSUndefinedKeyword
    | TSTypeLiteral;
  extendsType:
    | TSBooleanKeyword
    | TSIndexedAccessType
    | TSUnionType
    | TSTypeOperator
    | TSTypeLiteral
    | TSTypeReference
    | TSTupleType
    | TSArrayType
    | TSStringKeyword
    | TSFunctionType
    | TSParenthesizedType
    | TSLiteralType
    | TSNumberKeyword;
  trueType:
    | TSNumberKeyword
    | TSIndexedAccessType
    | TSTypeReference
    | TSMappedType
    | TSTypeLiteral
    | TSLiteralType
    | TSNeverKeyword
    | TSParenthesizedType
    | TSTupleType
    | TSIntersectionType;
  falseType:
    | TSStringKeyword
    | TSNeverKeyword
    | TSIntersectionType
    | TSMappedType
    | TSTypeLiteral
    | TSConditionalType
    | TSTypeQuery
    | TSUndefinedKeyword
    | TSLiteralType
    | TSTypeReference
    | TSAnyKeyword
    | TSTupleType
    | TSUnionType;
}

export interface TSConstructSignatureDeclaration {
  type: 'TSConstructSignatureDeclaration';
  params: Array<RestElement | Identifier | ObjectPattern | TSParameterProperty>;
  returnType?: TSTypeAnnotation;
  typeParameters?: TSTypeParameterDeclaration;
}

export interface TSConstructorType {
  type: 'TSConstructorType';
  typeParameters: null | TSTypeParameterDeclaration;
  parameters: Array<Identifier | RestElement | ArrayPattern>;
  typeAnnotation: TSTypeAnnotation;
}

export interface TSDeclareFunction {
  type: 'TSDeclareFunction';
  id: Identifier;
  generator: boolean;
  expression: boolean;
  async: boolean;
  params: Array<Identifier | RestElement | ObjectPattern | AssignmentPattern>;
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
    TSAsyncKeyword | TSPublicKeyword | TSPrivateKeyword | TSStaticKeyword
  >;
  decorators?: Array<Decorator>;
}

export interface TSEnumMember {
  type: 'TSEnumMember';
  id: Identifier | Literal;
  initializer?:
    | Literal
    | MemberExpression
    | UnaryExpression
    | Identifier
    | BinaryExpression
    | CallExpression
    | ThisExpression
    | NewExpression
    | ObjectExpression
    | ArrowFunctionExpression
    | AssignmentExpression
    | UpdateExpression;
}

export interface TSExportAssignment {
  type: 'TSExportAssignment';
  expression:
    | Identifier
    | BinaryExpression
    | UnaryExpression
    | ClassExpression
    | ObjectExpression
    | NewExpression
    | MemberExpression
    | Literal
    | FunctionExpression
    | ThisExpression;
}

export interface TSExternalModuleReference {
  type: 'TSExternalModuleReference';
  expression: Literal | Identifier;
}

export interface TSFunctionType {
  type: 'TSFunctionType';
  typeParameters: null | TSTypeParameterDeclaration;
  parameters: Array<
    | Identifier
    | RestElement
    | AssignmentPattern
    | TSParameterProperty
    | ArrayPattern
    | ObjectPattern
  >;
  typeAnnotation: TSTypeAnnotation;
}

export interface TSImportEqualsDeclaration {
  type: 'TSImportEqualsDeclaration';
  id: Identifier;
  moduleReference: Identifier | TSQualifiedName | TSExternalModuleReference;
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
    | Identifier
    | RestElement
    | TSParameterProperty
    | AssignmentPattern;
  typeAnnotation: null | TSTypeAnnotation;
  static: boolean;
  readonly?: boolean;
  accessibility?: 'public' | 'private';
  export?: boolean;
}

export interface TSIndexedAccessType {
  type: 'TSIndexedAccessType';
  objectType:
    | TSAnyKeyword
    | TSTypeReference
    | TSParenthesizedType
    | TSTypeLiteral
    | TSIndexedAccessType
    | TSTupleType
    | TSMappedType;
  indexType:
    | TSTupleType
    | TSLiteralType
    | TSTypeReference
    | TSNeverKeyword
    | TSTypeOperator
    | TSIntersectionType
    | TSTypeQuery
    | TSIndexedAccessType;
}

export interface TSInferType {
  type: 'TSInferType';
  typeParameter: TSTypeParameter;
}

export interface TSInterfaceBody {
  type: 'TSInterfaceBody';
  body: Array<
    | TSPropertySignature
    | TSMethodSignature
    | TSCallSignatureDeclaration
    | TSIndexSignature
    | TSConstructSignatureDeclaration
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
  id: Identifier | MemberExpression | UnaryExpression | CallExpression;
  typeParameters?: TSTypeParameterInstantiation;
}

export interface TSIntersectionType {
  type: 'TSIntersectionType';
  types: Array<
    | TSTypeReference
    | TSTypeLiteral
    | TSIndexedAccessType
    | TSMappedType
    | TSTypeQuery
    | TSNumberKeyword
    | TSBooleanKeyword
    | TSParenthesizedType
    | TSObjectKeyword
    | TSStringKeyword
    | TSUndefinedKeyword
    | TSThisType
  >;
}

export interface TSLiteralType {
  type: 'TSLiteralType';
  literal: Literal | BigIntLiteral | UnaryExpression | TemplateLiteral;
}

export interface TSMappedType {
  type: 'TSMappedType';
  typeParameter: TSTypeParameter;
  typeAnnotation?:
    | TSConditionalType
    | TSIndexedAccessType
    | TSTypeReference
    | TSStringKeyword
    | TSNumberKeyword
    | TSLiteralType
    | TSAnyKeyword
    | TSIntersectionType
    | TSNeverKeyword
    | TSTypeLiteral
    | TSUnionType
    | TSBooleanKeyword
    | TSFunctionType;
  optional?: boolean | '-';
  readonly?: boolean;
}

export interface TSMethodSignature {
  type: 'TSMethodSignature';
  optional: boolean;
  computed: boolean;
  key:
    | Identifier
    | Literal
    | CallExpression
    | BinaryExpression
    | MemberExpression;
  params: Array<
    Identifier | RestElement | AssignmentPattern | ArrayPattern | ObjectPattern
  >;
  typeAnnotation: null | TSTypeAnnotation;
  static: boolean;
  typeParameters?: TSTypeParameterDeclaration;
}

export interface TSModuleBlock {
  type: 'TSModuleBlock';
  body: Array<
    | ExportNamedDeclaration
    | TSImportEqualsDeclaration
    | ClassDeclaration
    | VariableDeclaration
    | FunctionDeclaration
    | TSExportAssignment
    | TSModuleDeclaration
    | TSInterfaceDeclaration
    | ExportDefaultDeclaration
    | TSEnumDeclaration
    | WhileStatement
    | BreakStatement
    | ContinueStatement
    | DebuggerStatement
    | DoWhileStatement
    | ForInStatement
    | IfStatement
    | ExpressionStatement
    | LabeledStatement
    | ReturnStatement
    | SwitchStatement
    | ThrowStatement
    | TryStatement
    | WithStatement
    | EmptyStatement
    | BlockStatement
    | TSDeclareFunction
    | TSTypeAliasDeclaration
    | ForStatement
    | ImportDeclaration
    | ExportAllDeclaration
    | ForOfStatement
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
    | TSPublicKeyword
    | TSPrivateKeyword
    | TSStaticKeyword
    | TSProtectedKeyword
  >;
}

export interface TSNamespaceExportDeclaration {
  type: 'TSNamespaceExportDeclaration';
  id: Identifier;
}

export interface TSNonNullExpression {
  type: 'TSNonNullExpression';
  expression: MemberExpression | Identifier | Literal | CallExpression;
}

export interface TSOptionalType {
  type: 'TSOptionalType';
  typeAnnotation: TSStringKeyword;
}

export interface TSParameterProperty {
  type: 'TSParameterProperty';
  accessibility?: 'public' | 'private' | 'protected';
  parameter:
    | Identifier
    | ArrayPattern
    | ObjectPattern
    | AssignmentPattern
    | RestElement;
  readonly?: boolean;
  static?: boolean;
  export?: boolean;
  decorators?: Array<Decorator>;
}

export interface TSParenthesizedType {
  type: 'TSParenthesizedType';
  typeAnnotation:
    | TSUnionType
    | TSFunctionType
    | TSConditionalType
    | TSTypeOperator
    | TSIntersectionType
    | TSConstructorType
    | TSInferType
    | TSTypeQuery
    | TSMappedType
    | TSArrayType
    | TSLiteralType
    | TSTupleType
    | TSTypeLiteral
    | TSTypeReference;
}

export interface TSPropertySignature {
  type: 'TSPropertySignature';
  computed: boolean;
  key: Identifier | Literal | MemberExpression | AssignmentExpression;
  typeAnnotation?: TSTypeAnnotation;
  optional?: boolean;
  readonly?: boolean;
  initializer?: Literal;
  accessibility?: 'public' | 'private' | 'protected';
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
    | TSAnyKeyword
    | TSNumberKeyword
    | TSBooleanKeyword
    | TSStringKeyword
    | TSTypeLiteral
    | TSTypeReference
    | TSArrayType
    | TSFunctionType
    | TSLiteralType
    | TSTupleType
    | TSRestType
    | TSIntersectionType
    | TSConstructorType
    | TSParenthesizedType
    | TSNeverKeyword
    | TSVoidKeyword
    | TSOptionalType
    | TSUnionType
    | TSUndefinedKeyword
    | TSTypeOperator
    | TSIndexedAccessType
  >;
}

export interface TSTypeAliasDeclaration {
  type: 'TSTypeAliasDeclaration';
  id: Identifier;
  typeAnnotation:
    | TSFunctionType
    | TSTypeLiteral
    | TSMappedType
    | TSUnionType
    | TSTypeReference
    | TSIntersectionType
    | TSConditionalType
    | TSArrayType
    | TSTupleType
    | TSTypeQuery
    | TSStringKeyword
    | TSNumberKeyword
    | TSIndexedAccessType
    | TSConstructorType
    | TSTypeOperator
    | TSLiteralType
    | TSBooleanKeyword
    | TSParenthesizedType
    | TSAnyKeyword
    | TSThisType
    | TSVoidKeyword;
  typeParameters?: TSTypeParameterDeclaration;
  declare?: boolean;
}

export interface TSTypeAnnotation {
  type: 'TSTypeAnnotation';
  typeAnnotation:
    | TSBooleanKeyword
    | TSArrayType
    | TSStringKeyword
    | TSVoidKeyword
    | TSTypeReference
    | TSFunctionType
    | TSNumberKeyword
    | TSTypeQuery
    | TSAnyKeyword
    | TSTypeLiteral
    | TSIndexedAccessType
    | TSUnionType
    | TSLiteralType
    | TSConstructorType
    | TSTupleType
    | TSTypePredicate
    | TSBigIntKeyword
    | TSObjectKeyword
    | TSIntersectionType
    | TSUnknownKeyword
    | TSThisType
    | TSParenthesizedType
    | TSConditionalType
    | TSMappedType
    | TSTypeOperator
    | TSNullKeyword
    | TSImportType
    | TSInferType
    | TSNeverKeyword
    | TSUndefinedKeyword
    | TSSymbolKeyword;
}

export interface TSTypeAssertion {
  type: 'TSTypeAssertion';
  typeAnnotation:
    | TSTypeReference
    | TSTypeLiteral
    | TSTupleType
    | TSNumberKeyword
    | TSArrayType
    | TSAnyKeyword
    | TSStringKeyword
    | TSTypeQuery
    | TSBooleanKeyword
    | TSFunctionType
    | TSObjectKeyword
    | TSUnionType;
  expression:
    | Literal
    | Identifier
    | CallExpression
    | ArrayExpression
    | ObjectExpression
    | TSTypeAssertion
    | MemberExpression
    | ThisExpression
    | NewExpression
    | UnaryExpression
    | FunctionExpression
    | AwaitExpression
    | AssignmentExpression
    | ArrowFunctionExpression
    | TemplateLiteral
    | BinaryExpression
    | UpdateExpression
    | SequenceExpression;
}

export interface TSTypeLiteral {
  type: 'TSTypeLiteral';
  members: Array<
    | TSPropertySignature
    | TSConstructSignatureDeclaration
    | TSCallSignatureDeclaration
    | TSIndexSignature
    | TSMethodSignature
  >;
}

export interface TSTypeOperator {
  type: 'TSTypeOperator';
  operator: 'keyof' | 'unique';
  typeAnnotation:
    | TSTypeReference
    | TSSymbolKeyword
    | TSAnyKeyword
    | TSIndexedAccessType
    | TSTypeQuery;
}

export interface TSTypeParameter {
  type: 'TSTypeParameter';
  name: string;
  constraint?:
    | TSTypeLiteral
    | TSTypeReference
    | TSLiteralType
    | TSObjectKeyword
    | TSNumberKeyword
    | TSUnionType
    | TSTypeOperator
    | TSArrayType
    | TSConstructorType
    | TSStringKeyword
    | TSFunctionType
    | TSMappedType
    | TSTupleType
    | TSIndexedAccessType
    | TSTypeQuery
    | TSThisType
    | TSAnyKeyword
    | TSParenthesizedType
    | TSNullKeyword
    | TSUndefinedKeyword
    | TSVoidKeyword;
  default?:
    | TSIndexedAccessType
    | TSObjectKeyword
    | TSTypeLiteral
    | TSStringKeyword
    | TSAnyKeyword
    | TSNumberKeyword
    | TSTypeReference
    | TSLiteralType
    | TSNeverKeyword
    | TSFunctionType
    | TSUnionType
    | TSIntersectionType;
}

export interface TSTypeParameterDeclaration {
  type: 'TSTypeParameterDeclaration';
  params: Array<TSTypeParameter>;
}

export interface TSTypeParameterInstantiation {
  type: 'TSTypeParameterInstantiation';
  params: Array<
    | TSTypeReference
    | TSAnyKeyword
    | TSStringKeyword
    | TSTypeLiteral
    | TSNumberKeyword
    | TSUnionType
    | TSArrayType
    | TSTupleType
    | TSIndexedAccessType
    | TSVoidKeyword
    | TSBooleanKeyword
    | TSTypeOperator
    | TSIntersectionType
    | TSTypeQuery
    | TSLiteralType
    | TSThisType
    | TSFunctionType
    | TSParenthesizedType
    | TSImportType
    | TSNeverKeyword
    | TSInferType
    | TSMappedType
    | TSNullKeyword
    | TSUndefinedKeyword
    | TSObjectKeyword
    | TSUnknownKeyword
  >;
}

export interface TSTypePredicate {
  type: 'TSTypePredicate';
  parameterName: Identifier | TSThisType;
  typeAnnotation: TSTypeAnnotation;
}

export interface TSTypeQuery {
  type: 'TSTypeQuery';
  exprName: TSQualifiedName | Identifier;
}

export interface TSTypeReference {
  type: 'TSTypeReference';
  typeName: Identifier | TSQualifiedName;
  typeParameters?: TSTypeParameterInstantiation;
}

export interface TSUnionType {
  type: 'TSUnionType';
  types: Array<
    | TSStringKeyword
    | TSUndefinedKeyword
    | TSTypeReference
    | TSTypeLiteral
    | TSNumberKeyword
    | TSBooleanKeyword
    | TSArrayType
    | TSLiteralType
    | TSParenthesizedType
    | TSNullKeyword
    | TSTypeOperator
    | TSSymbolKeyword
    | TSVoidKeyword
    | TSNeverKeyword
    | TSObjectKeyword
    | TSAnyKeyword
    | TSIntersectionType
    | TSTypeQuery
    | TSTupleType
    | TSBigIntKeyword
    | TSIndexedAccessType
    | TSUnknownKeyword
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
