export interface Position {
  line: number;
  column: number;
}

interface SourceLocation {
  source?: string | null;
  start: Position;
  end: Position;
}

export interface BaseNode {
  type: string;
  loc?: SourceLocation | null;
  range?: [number, number];
}

export interface Comment extends BaseNode {
  type: 'Line' | 'Block';
  value: string;
}

export interface ArrayExpression extends BaseNode {
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

export interface ArrayPattern extends BaseNode {
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

export interface ArrowFunctionExpression extends BaseNode {
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

export interface AssignmentExpression extends BaseNode {
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

export interface AssignmentPattern extends BaseNode {
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

export interface AwaitExpression extends BaseNode {
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

export interface BigIntLiteral extends BaseNode {
  type: 'BigIntLiteral';
  raw: string;
  value: string;
}

export interface BinaryExpression extends BaseNode {
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

export interface BlockStatement extends BaseNode {
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

export interface BreakStatement extends BaseNode {
  type: 'BreakStatement';
  label: null | Identifier;
}

export interface CallExpression extends BaseNode {
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

export interface CatchClause extends BaseNode {
  type: 'CatchClause';
  param: null | ArrayPattern | Identifier | ObjectPattern;
  body: BlockStatement;
}

export interface ClassBody extends BaseNode {
  type: 'ClassBody';
  body: Array<
    | ClassProperty
    | MethodDefinition
    | TSAbstractClassProperty
    | TSAbstractMethodDefinition
    | TSIndexSignature
  >;
}

export interface ClassDeclaration extends BaseNode {
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

export interface ClassExpression extends BaseNode {
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

export interface ClassImplements extends BaseNode {
  type: 'ClassImplements';
  id: Identifier | MemberExpression;
  typeParameters?: TSTypeParameterInstantiation;
}

export interface ClassProperty extends BaseNode {
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

export interface ConditionalExpression extends BaseNode {
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

export interface ContinueStatement extends BaseNode {
  type: 'ContinueStatement';
  label: null | Identifier;
}

export interface DebuggerStatement extends BaseNode {
  type: 'DebuggerStatement';
}

export interface Decorator extends BaseNode {
  type: 'Decorator';
  expression:
    | ArrowFunctionExpression
    | CallExpression
    | Identifier
    | MemberExpression
    | YieldExpression;
}

export interface DoWhileStatement extends BaseNode {
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

export interface EmptyStatement extends BaseNode {
  type: 'EmptyStatement';
}

export interface ExportAllDeclaration extends BaseNode {
  type: 'ExportAllDeclaration';
  source: Identifier | Literal;
}

export interface ExportDefaultDeclaration extends BaseNode {
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
    | TSDeclareFunction
    | TSInterfaceDeclaration;
}

export interface ExportNamedDeclaration extends BaseNode {
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

export interface ExportSpecifier extends BaseNode {
  type: 'ExportSpecifier';
  local: Identifier;
  exported: Identifier;
}

export interface ExpressionStatement extends BaseNode {
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

export interface ForInStatement extends BaseNode {
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

export interface ForOfStatement extends BaseNode {
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

export interface ForStatement extends BaseNode {
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

export interface FunctionDeclaration extends BaseNode {
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
  body: BlockStatement;
  typeParameters?: TSTypeParameterDeclaration;
  returnType?: TSTypeAnnotation;
}

export interface FunctionExpression extends BaseNode {
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

export interface Identifier extends BaseNode {
  type: 'Identifier';
  name: string;
  typeAnnotation?: TSTypeAnnotation;
  optional?: boolean;
  decorators?: Array<Decorator>;
}

export interface IfStatement extends BaseNode {
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

export interface Import extends BaseNode {
  type: 'Import';
}

export interface ImportDeclaration extends BaseNode {
  type: 'ImportDeclaration';
  source: Literal;
  specifiers: Array<
    ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportSpecifier
  >;
}

export interface ImportDefaultSpecifier extends BaseNode {
  type: 'ImportDefaultSpecifier';
  local: Identifier;
}

export interface ImportNamespaceSpecifier extends BaseNode {
  type: 'ImportNamespaceSpecifier';
  local: Identifier;
}

export interface ImportSpecifier extends BaseNode {
  type: 'ImportSpecifier';
  local: Identifier;
  imported: Identifier;
}

export interface JSXAttribute extends BaseNode {
  type: 'JSXAttribute';
  name: JSXIdentifier;
  value: null | JSXExpressionContainer | Literal;
}

export interface JSXClosingElement extends BaseNode {
  type: 'JSXClosingElement';
  name: JSXIdentifier | JSXMemberExpression;
}

export interface JSXClosingFragment extends BaseNode {
  type: 'JSXClosingFragment';
}

export interface JSXElement extends BaseNode {
  type: 'JSXElement';
  openingElement: JSXOpeningElement;
  closingElement: null | JSXClosingElement;
  children: Array<
    JSXElement | JSXExpressionContainer | JSXFragment | JSXSpreadChild | JSXText
  >;
}

export interface JSXEmptyExpression extends BaseNode {
  type: 'JSXEmptyExpression';
}

export interface JSXExpressionContainer extends BaseNode {
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

export interface JSXFragment extends BaseNode {
  type: 'JSXFragment';
  openingFragment: JSXOpeningFragment;
  closingFragment: JSXClosingFragment;
  children: Array<JSXElement | JSXFragment | JSXText>;
}

export interface JSXIdentifier extends BaseNode {
  type: 'JSXIdentifier';
  name: string;
}

export interface JSXMemberExpression extends BaseNode {
  type: 'JSXMemberExpression';
  object: JSXIdentifier | JSXMemberExpression | MemberExpression;
  property: JSXIdentifier;
}

export interface JSXOpeningElement extends BaseNode {
  type: 'JSXOpeningElement';
  selfClosing: boolean;
  name: JSXIdentifier | JSXMemberExpression;
  attributes: Array<JSXAttribute | JSXSpreadAttribute>;
  typeParameters?: TSTypeParameterInstantiation;
}

export interface JSXOpeningFragment extends BaseNode {
  type: 'JSXOpeningFragment';
}

export interface JSXSpreadAttribute extends BaseNode {
  type: 'JSXSpreadAttribute';
  argument:
    | Identifier
    | MemberExpression
    | ObjectExpression
    | SequenceExpression;
}

export interface JSXSpreadChild extends BaseNode {
  type: 'JSXSpreadChild';
  expression: CallExpression | JSXElement | MemberExpression | TSAsExpression;
}

export interface JSXText extends BaseNode {
  type: 'JSXText';
  value: string;
  raw: string;
}

export interface LabeledStatement extends BaseNode {
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

export interface Literal extends BaseNode {
  type: 'Literal';
  value: boolean | null | number | string;
  raw: string;
  regex?: {
    pattern: string;
    flags: string;
  };
}

export interface LogicalExpression extends BaseNode {
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

export interface MemberExpression extends BaseNode {
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

export interface MetaProperty extends BaseNode {
  type: 'MetaProperty';
  meta: Identifier;
  property: Identifier;
}

export interface MethodDefinition extends BaseNode {
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

export interface NewExpression extends BaseNode {
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

export interface ObjectExpression extends BaseNode {
  type: 'ObjectExpression';
  properties: Array<Property | SpreadElement>;
}

export interface ObjectPattern extends BaseNode {
  type: 'ObjectPattern';
  properties: Array<Property | RestElement>;
  typeAnnotation?: TSTypeAnnotation;
  optional?: boolean;
}

export interface Program extends BaseNode {
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

export interface Property extends BaseNode {
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

export interface RestElement extends BaseNode {
  type: 'RestElement';
  argument: ArrayPattern | AssignmentPattern | Identifier | ObjectPattern;
  decorators?: Array<Decorator>;
}

export interface ReturnStatement extends BaseNode {
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

export interface SequenceExpression extends BaseNode {
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

export interface SpreadElement extends BaseNode {
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

export interface Super extends BaseNode {
  type: 'Super';
}

export interface SwitchCase extends BaseNode {
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

export interface SwitchStatement extends BaseNode {
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

export interface TaggedTemplateExpression extends BaseNode {
  type: 'TaggedTemplateExpression';
  typeParameters?: TSTypeParameterInstantiation;
  tag: Identifier | MemberExpression | TemplateLiteral;
  quasi: TemplateLiteral;
}

export interface TemplateElement extends BaseNode {
  type: 'TemplateElement';
  value: {
    raw: string;
    cooked: string;
  };
  tail: boolean;
}

export interface TemplateLiteral extends BaseNode {
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

export interface ThisExpression extends BaseNode {
  type: 'ThisExpression';
}

export interface ThrowStatement extends BaseNode {
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

export interface TryStatement extends BaseNode {
  type: 'TryStatement';
  block: BlockStatement;
  handler: null | CatchClause;
  finalizer: null | BlockStatement;
}

export interface UnaryExpression extends BaseNode {
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

export interface UpdateExpression extends BaseNode {
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

export interface VariableDeclaration extends BaseNode {
  type: 'VariableDeclaration';
  declarations: Array<VariableDeclarator>;
  kind: 'const' | 'let' | 'var';
  declare?: boolean;
}

export interface VariableDeclarator extends BaseNode {
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

export interface WhileStatement extends BaseNode {
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

export interface WithStatement extends BaseNode {
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

export interface YieldExpression extends BaseNode {
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

export interface TSAbstractClassDeclaration extends BaseNode {
  type: 'TSAbstractClassDeclaration';
  id: null | Identifier;
  body: ClassBody;
  superClass: null | Identifier;
  implements?: Array<ClassImplements>;
  typeParameters?: TSTypeParameterDeclaration;
  declare?: boolean;
  superTypeParameters?: TSTypeParameterInstantiation;
}

export interface TSAbstractClassProperty extends BaseNode {
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

export interface TSAbstractMethodDefinition extends BaseNode {
  type: 'TSAbstractMethodDefinition';
  key: Identifier;
  value: FunctionExpression;
  computed: boolean;
  static: boolean;
  kind: 'constructor' | 'get' | 'method' | 'set';
  accessibility?: 'private' | 'protected' | 'public';
}

export interface TSArrayType extends BaseNode {
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

export interface TSAsExpression extends BaseNode {
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

export interface TSCallSignatureDeclaration extends BaseNode {
  type: 'TSCallSignatureDeclaration';
  params: Array<Identifier | ObjectPattern | RestElement>;
  returnType?: TSTypeAnnotation;
  typeParameters?: TSTypeParameterDeclaration;
}

export interface TSConditionalType extends BaseNode {
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

export interface TSConstructSignatureDeclaration extends BaseNode {
  type: 'TSConstructSignatureDeclaration';
  params: Array<Identifier | ObjectPattern | RestElement | TSParameterProperty>;
  returnType?: TSTypeAnnotation;
  typeParameters?: TSTypeParameterDeclaration;
}

export interface TSConstructorType extends BaseNode {
  type: 'TSConstructorType';
  params: Array<ArrayPattern | Identifier | RestElement>;
  returnType: TSTypeAnnotation;
  typeParameters?: TSTypeParameterDeclaration;
}

export interface TSDeclareFunction extends BaseNode {
  type: 'TSDeclareFunction';
  id: Identifier;
  generator: boolean;
  expression: boolean;
  async: boolean;
  params: Array<
    ArrayPattern | AssignmentPattern | Identifier | ObjectPattern | RestElement
  >;
  returnType?: TSTypeAnnotation;
  declare?: boolean;
  typeParameters?: TSTypeParameterDeclaration;
  body?: BlockStatement;
}

export interface TSEnumDeclaration extends BaseNode {
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

export interface TSEnumMember extends BaseNode {
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

export interface TSExportAssignment extends BaseNode {
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

export interface TSExternalModuleReference extends BaseNode {
  type: 'TSExternalModuleReference';
  expression: Identifier | Literal;
}

export interface TSFunctionType extends BaseNode {
  type: 'TSFunctionType';
  params: Array<
    | ArrayPattern
    | AssignmentPattern
    | Identifier
    | ObjectPattern
    | RestElement
    | TSParameterProperty
  >;
  returnType: TSTypeAnnotation;
  typeParameters?: TSTypeParameterDeclaration;
}

export interface TSImportEqualsDeclaration extends BaseNode {
  type: 'TSImportEqualsDeclaration';
  id: Identifier;
  moduleReference: Identifier | TSExternalModuleReference | TSQualifiedName;
  isExport: boolean;
}

export interface TSImportType extends BaseNode {
  type: 'TSImportType';
  isTypeOf: boolean;
  parameter: TSLiteralType;
  qualifier: null | Identifier;
  typeParameters: null | TSTypeParameterInstantiation;
}

export interface TSIndexSignature extends BaseNode {
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

export interface TSIndexedAccessType extends BaseNode {
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

export interface TSInferType extends BaseNode {
  type: 'TSInferType';
  typeParameter: TSTypeParameter;
}

export interface TSInterfaceBody extends BaseNode {
  type: 'TSInterfaceBody';
  body: Array<
    | TSCallSignatureDeclaration
    | TSConstructSignatureDeclaration
    | TSIndexSignature
    | TSMethodSignature
    | TSPropertySignature
  >;
}

export interface TSInterfaceDeclaration extends BaseNode {
  type: 'TSInterfaceDeclaration';
  body: TSInterfaceBody;
  id: Identifier;
  heritage: Array<TSInterfaceHeritage>;
  typeParameters?: TSTypeParameterDeclaration;
  declare?: boolean;
  abstract?: boolean;
  decorators?: Array<Decorator>;
}

export interface TSInterfaceHeritage extends BaseNode {
  type: 'TSInterfaceHeritage';
  id: CallExpression | Identifier | MemberExpression | UnaryExpression;
  typeParameters?: TSTypeParameterInstantiation;
}

export interface TSIntersectionType extends BaseNode {
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

export interface TSLiteralType extends BaseNode {
  type: 'TSLiteralType';
  literal: BigIntLiteral | Literal | TemplateLiteral | UnaryExpression;
}

export interface TSMappedType extends BaseNode {
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

export interface TSMethodSignature extends BaseNode {
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

export interface TSModuleBlock extends BaseNode {
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

export interface TSModuleDeclaration extends BaseNode {
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

export interface TSNamespaceExportDeclaration extends BaseNode {
  type: 'TSNamespaceExportDeclaration';
  id: Identifier;
}

export interface TSNonNullExpression extends BaseNode {
  type: 'TSNonNullExpression';
  expression: CallExpression | Identifier | Literal | MemberExpression;
}

export interface TSOptionalType extends BaseNode {
  type: 'TSOptionalType';
  typeAnnotation: TSStringKeyword;
}

export interface TSParameterProperty extends BaseNode {
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

export interface TSParenthesizedType extends BaseNode {
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

export interface TSPropertySignature extends BaseNode {
  type: 'TSPropertySignature';
  computed: boolean;
  key: AssignmentExpression | Identifier | Literal | MemberExpression;
  typeAnnotation?: TSTypeAnnotation;
  optional?: boolean;
  readonly?: boolean;
  initializer?: Literal;
  accessibility?: 'private' | 'protected' | 'public';
}

export interface TSQualifiedName extends BaseNode {
  type: 'TSQualifiedName';
  left: Identifier | TSQualifiedName;
  right: Identifier;
}

export interface TSRestType extends BaseNode {
  type: 'TSRestType';
  typeAnnotation: TSArrayType | TSTypeReference;
}

export interface TSThisType extends BaseNode {
  type: 'TSThisType';
}

export interface TSTupleType extends BaseNode {
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

export interface TSTypeAliasDeclaration extends BaseNode {
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

export interface TSTypeAnnotation extends BaseNode {
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

export interface TSTypeAssertion extends BaseNode {
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

export interface TSTypeLiteral extends BaseNode {
  type: 'TSTypeLiteral';
  members: Array<
    | TSCallSignatureDeclaration
    | TSConstructSignatureDeclaration
    | TSIndexSignature
    | TSMethodSignature
    | TSPropertySignature
  >;
}

export interface TSTypeOperator extends BaseNode {
  type: 'TSTypeOperator';
  operator: 'keyof' | 'unique';
  typeAnnotation:
    | TSIndexedAccessType
    | TSTypeQuery
    | TSTypeReference
    | TSAnyKeyword
    | TSSymbolKeyword;
}

export interface TSTypeParameter extends BaseNode {
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

export interface TSTypeParameterDeclaration extends BaseNode {
  type: 'TSTypeParameterDeclaration';
  params: Array<TSTypeParameter>;
}

export interface TSTypeParameterInstantiation extends BaseNode {
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

export interface TSTypePredicate extends BaseNode {
  type: 'TSTypePredicate';
  parameterName: Identifier | TSThisType;
  typeAnnotation: TSTypeAnnotation;
}

export interface TSTypeQuery extends BaseNode {
  type: 'TSTypeQuery';
  exprName: Identifier | TSQualifiedName;
}

export interface TSTypeReference extends BaseNode {
  type: 'TSTypeReference';
  typeName: Identifier | TSQualifiedName;
  typeParameters?: TSTypeParameterInstantiation;
}

export interface TSUnionType extends BaseNode {
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

export interface TSAnyKeyword extends BaseNode {
  type: 'TSAnyKeyword';
}

export interface TSAsyncKeyword extends BaseNode {
  type: 'TSAsyncKeyword';
}

export interface TSBigIntKeyword extends BaseNode {
  type: 'TSBigIntKeyword';
}

export interface TSBooleanKeyword extends BaseNode {
  type: 'TSBooleanKeyword';
}

export interface TSNeverKeyword extends BaseNode {
  type: 'TSNeverKeyword';
}

export interface TSNullKeyword extends BaseNode {
  type: 'TSNullKeyword';
}

export interface TSNumberKeyword extends BaseNode {
  type: 'TSNumberKeyword';
}

export interface TSObjectKeyword extends BaseNode {
  type: 'TSObjectKeyword';
}

export interface TSPrivateKeyword extends BaseNode {
  type: 'TSPrivateKeyword';
}

export interface TSProtectedKeyword extends BaseNode {
  type: 'TSProtectedKeyword';
}

export interface TSPublicKeyword extends BaseNode {
  type: 'TSPublicKeyword';
}

export interface TSStaticKeyword extends BaseNode {
  type: 'TSStaticKeyword';
}

export interface TSStringKeyword extends BaseNode {
  type: 'TSStringKeyword';
}

export interface TSSymbolKeyword extends BaseNode {
  type: 'TSSymbolKeyword';
}

export interface TSUndefinedKeyword extends BaseNode {
  type: 'TSUndefinedKeyword';
}

export interface TSUnknownKeyword extends BaseNode {
  type: 'TSUnknownKeyword';
}

export interface TSVoidKeyword extends BaseNode {
  type: 'TSVoidKeyword';
}
