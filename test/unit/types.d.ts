/**
 * See https://github.com/microsoft/TypeScript/blob/master/doc/spec.md#3-types
 * 
 *  # Type Categories
 *  - primitive types
 *      Number, Boolean, String, Symbol (Void, Null, and Undefined are not referenceable)
 *  - object types
 *      composed from *properties*, *call signatures*, *construct signatures*, and *index signatures* (collectively called members)
 *      - Object type literals
 *      - Array type literals
 *      - Tuple type literals
 *      - Function type literals
 *      - Constructor type literals 
 *      - Constructor function types created by class declarations (section 8.2.5).
 *      - Namespace instance types created by namespace declarations (section 10.3).
 *  - union types
 *  - intersection types
 *  - type parameters
 */
export namespace Types {

    interface I {}

    type StringAlias = string;
    type ArrayAlias = Array<string>;
    type InterfaceAlias = I;
    type ObjectAlias = typeof object;
    type AliasWithTypeParam<K, V> = Map<K, V>;
    type TupleReference = [string[], string];
    type TupleReferenceHomogenous = [number, number, number];
    type TupleReferenceNested = [number, string, [boolean, boolean[]]];
    type AliasAlias<X> = AliasWithTypeParam<string, X>;

    type TypeUnion = string | number;
    type LongUnion = string | number | boolean | symbol;
    type ConstUnion = 'a' | 3;
    type ConstUnionHomogenous = 'a' | 'b';
    type NullNumberUnion = number | null; // translates to Null<Float>
    type UndefinedNumberUnion = number | undefined; // translates to Null<Float>
    type Intersection = number & string;
    type NullOrUndefined = null | undefined;

    type StructureType = {
        field: number;
        sub: {
            subField: string;
        }
    }

    type StructureWithTypeParam<T> = {
        t: T;
        optionalT?: T;
        nullableT: T | null;
        undefinedT: T | undefined;
    }

    type FunctionVarConversion = {
        exampleWithOverload: {
            (p: string): number;
            (p: boolean): number;
        },
        nullableExampleWithOverload: {
            (p: string): number;
            (p: boolean): number;
        } | null;
        optionalExampleWithOverload?: {
            (p: string): number;
            (p: boolean): number;
        }
    }

    type Recursive<T> = {
        recursive: Recursive<T>;
        recursiveRecursive: Recursive<Recursive<T>>;
        recursiveString: Recursive<string>;
        recursiveArray: Recursive<T>[];
        structureType: StructureType;
        t: T;
    }

    class ThisUnion {
        thisOrString: this | string;
    }

    // from JQueryStatic
    class ThisIntersection<T> {
        _this: this;
        thisAndAnon: this & {field: string};
        thisAndAnon2: this & {};
        thisAndString: this & string;
        thisAndTp: this & T;
        thisAndTpArg<T>(arg: this & T): void;
        thisAndTpRet<T>(): this & T;
    }

    // Mapped type recursion from babylon.js
    type Primitive = undefined | null | boolean | string | number | Function;
    export type Immutable<T> = T extends Primitive ? T : T extends Array<infer U> ? ReadonlyArray<U> : DeepImmutable<T>;
    export type DeepImmutable<T> = T extends Primitive ? T : T extends Array<infer U> ? DeepImmutableArray<U> : DeepImmutableObject<T>;
    interface DeepImmutableArray<T> extends ReadonlyArray<DeepImmutable<T>> { }
    type DeepImmutableObject<T> = {
        readonly [K in keyof T]: DeepImmutable<T[K]>;
    };
    class Color3 {
        equals(otherColor: DeepImmutable<Color3>): boolean;
        toColor4(alpha?: number): DeepImmutable<Color4>;
    }
    class Color4 {
        equals(otherColor: DeepImmutable<Color4>): boolean;
        toColor3(alpha?: number): DeepImmutable<Color3>;
    }
    
    /**
     * haxe doesn't support function-types with type parameters
     * this should translate to: 
     * typedef FunctionTypeWithTypeParam<T> = {
     *      @:selfCall
     *      function call<K>(a:T, b:K):K;
     * };
     */
    type FunctionTypeWithTypeParam<T> = <K>(a: T, b: K) => K;

    function functionWithOptional(a: string, b?: boolean): number;
    type FunctionTypeWithOptional = (a: string, b?: boolean) => number;
    type FunctionWithRest = (...a: number[]) => string;

    // Primitive Types
    //  implicit
    const implicitInt = 2; // number
    const implicitFloat = 2.2; // number
    const implicitBool = true; // boolean
    const implicitStr = 'example'; // string
    // const implicitBigInt = 9007199254740991n; ESNext+
    const noType;

    //  explicit
    const numberPrimitive: number;
    const booleanPrimitive: boolean;
    const stringPrimitive: string;
    const stringObject: String;
    const numberObject: Number;
    const booleanObject: Boolean;
    const symbolPrimitive: symbol;
    const symbolObject: Symbol;
    const any: any;
    const typeInParentheses: ( number );
    const unionInParentheses: ( number | string );

    // void fields are legal in TypeScript, not legal in haxe
    const voidType: void;
    const voidUnionType: void | number;
    const voidTypeParam: Array<void>;
    const voidObjField: {
        x: void,
    }
    const voidArg: (a: void) => void;

    // literals
    const intLiteral: 1;
    const intLiteralAlt: -1; // in the AST the type is wrapped in a PrefixUnaryExpression
    const floatLiteral: 1.1;
    const booleanLiteral: false;
    const stringLiteral: 'example';

    const typeReferenceStringAlias: StringAlias;
    const typeReferenceArrayAlias: ArrayAlias;
    const typeReferenceObjectAlias: ObjectAlias;
    const typeReferenceAliasWithTypeParam: AliasWithTypeParam<string, number>;

    // Object Types
    const object: {
        fieldA: number,
        fieldB: number,
        fieldArrayAlias: ArrayAlias,
        fieldOptional?: number,
        macro: string,
        nestedTuple: [number, string, [boolean, boolean[]]],
        ['computedFieldName']: string,
        sub: {a: number, b: number},
        methodSignatureComplex<T extends string | number>(a: number, opt?: string): T;

        methodSignatureWithOverload<T>(a: T): void,
        methodSignatureWithOverload(a: number): void, // overload
        methodProperty: <T>(a: T) => void,
        methodSignatureOptional?(): string,
        readonly readonlyField: string,
    };
    const objectSingleField: { a };
    const arrayString: Array<string>;
    const arrayStringAlt: string[];
    const stringObj: String;
    const arrayNumberStringUnion: Array<number | string>;
    const tupleNumberString: [number, string];
    // Index Signatures
    // - see https://basarat.gitbooks.io/typescript/docs/types/index-signatures.html
    /**
     * @expect haxe.DynamicAccess<Float>
     */
    const stringNumberMap: {
        [key: string]: number
    };
    const readonlyStringNumberMap: {
        readonly [key: string]: number
    };
    // can be supported by generating an abstract and overloading @:op([]) and @:op(a.b)
    const stringNumberMapWithField: {
        [key: string]: number
        field: number,
    };
    /**
     * @expect ArrayAccess<String>
     */
    const numberStringMap: {
        [key: number]: string
    };
    /**
     * @expect ReadonlyArray<String>
     */
    const readonlyNumberStringMap: {
        readonly [key: number]: string
    };
    const numberStringMapWithField: {
        [key: number]: string
        field: string,
    };
    const stringAndNumberMapWithField: {
        [key: string]: string; 
        [index: number]: string;
        length: string;
    };

    // Mapped Types
    const mappedStringIndex: {
        [K in "hello" | "world"]: string;
    };
    const partial: Partial<{a: number, b: string}>; // macro Partial or evaluate
    function partialTypeParam<T>(x: Partial<T>): void; // not sure there's any way to support this
    const readonlyAnon: Readonly<Anon>;
    // limit allowed fields
    type Index = 'a' | 'b' | 'c'
    type FromIndex = { [k in Index]?: number }
    type FromSomeIndex<K extends string> = { [key in K]: number }
    type RecordOfIndex = Record<Index, boolean>;

    // Functions
    const arrowNumberStringVoid: (a: number, noType) => void;
    const arrowNumberTVoidTypeParam: <T>(a: number, tParam: T, arrayTParam: Array<T>) => void;
    const arrowParamWithRest: (a: number, b: number, ...rest: Array<number>) => void;
    const arrowParamWithRestOr: (a: number, b: number, ...rest: [] | [number]) => void;
    const arrowParamWithRestUnion: (a: number, b: number, ...rest: number[] | boolean[]) => void;
    const arrowParamWithRestTuple: (a: number, b: number, ...rest: [number]) => void;
    const arrowParamWithRestTupleUnion: (a: number, b: number, ...rest: [number] | [boolean]) => void;
    const arrowParamObjectBindingPattern: ({ x: number , y: string }) => void;
    function functionImplicit(x, y);
    function functionNumberStringVoidAlt (a: number, b: string): void;
    function functionNumberTVoidTypeParamAlt<T>(a: number, tparam: T): void;
    function overloadedFunction(a: number);
    function overloadedFunction(a: string);
    function overloadedFunction(a: Array<symbol>);
    function overloadedFunction<T, U>(a: Array<symbol>, u: U): T;
    function typeParameterWithConstraint<T extends Array<number>>(x: T);

    const constructorType: new (a: string) => void;

    // Union Types
    const nullableNumber: null | number;
    const undefineableNumber: undefined | number;
    const undefineableNullableNumber: undefined | null | number;

    // Intersection Types
    const intersectionWithSubIntersection: { x: {a: number} } & { x: {b: string} };
    const intersectionXY: { x: number } & { y: number };
    const intersectionRedefinitionSame: { x: number } & { x: number };
    const intersectionRedefinitionDifferent: { x: number } & { x: string };
    const intersectionWithTypeof: typeof object & { extendedField: number };
    const intersectionWithAny: { x: number } & any;
    const intersectionWithArray: { x: number } & Array<number>;
    const intersectionStringNumber: string & number;
    const intersectionTripleAnon: {x: number} & {y: number} & {z: number};
    const intersectionWithUnion: {a: string} & {b: boolean} | {c: number};
    const intersectionWithCallSignatures: {(callParamA: string): number; call(): number} & {(callParamB: boolean): string[]; b: number};
    type Anon = { a: string, r: Record<Index, boolean> };
    type AliasedAnon = Anon;
    const intersectionAnonAlias: AliasedAnon & {b: boolean};

    class IntersectionA {fieldA: number}
    class IntersectionB {fieldB: number}
    const intersectionBetweenClasses: IntersectionA & IntersectionB;
    function intersectionBetweenTypeParams<A, B>(p: A & B): void;

    // Type Query
    const typeQueryImplicitStr: typeof implicitStr;
    const typeQueryObject: typeof object;
    const typeQueryNoType: typeof noType;
    const typeQueryFunction: typeof functionImplicit;
    const typeQueryFunctionWithOverloads: typeof overloadedFunction;
    const typeQueryClassLike: typeof ClassLikeConstructorType;
    const typeQueryClassLikeOrNull: null | typeof ClassLikeConstructorType;

    interface ClassLikeConstructorType { }
    const ClassLikeConstructorType: {
        new(): ClassLikeConstructorType;
        field: string;
    }

    // Type reference enum
    type EnumValueAlias = ExampleEnum.A;
    type EnumSubset = ExampleEnum.A | ExampleEnum.B;

    enum ExampleEnum {
        A = 1,
        B = 2,
        C = 3
    }

    // FirstTypeNode
    function firstTypeFunction(node: {}): node is string;

    // Testing work around for haxe compiler bug https://github.com/HaxeFoundation/haxe/issues/9397
    // simplified from lib.dom.d.ts
    type ParentNode = {
        exampleField: number;
    }

    type INode<T> = {
        /**
         * To work around #9397, parent type should just be INode<T>
         */
        parent: INode<T> & ParentNode;
    }

    /**
     * Should translate to _Lowercasename
     */
    type _lowercasename = string;

    type StringEnum = 'secret' | 'public' | 'private';

    class Issue26 {
        nonOptionalEnumField: ExampleEnum;
        optionalEnumField?: ExampleEnum;
        nullOrEnumField: ExampleEnum | null;
        undefinedOrEnumField: ExampleEnum | undefined;
        undefinedNullEnumField: ExampleEnum | undefined | null;

        nonOptionalEnumField2: StringEnum;
        optionalEnumField2?: StringEnum;
        nullOrEnumField2: StringEnum | null;
        undefinedOrEnumField2: StringEnum | undefined;
        undefinedNullEnumField2: StringEnum | undefined | null;
        
        method(optionalEnum?:ExampleEnum): ExampleEnum | null;
        method2(optionalEnum?:StringEnum): StringEnum | null;
    }

    type Issue26Tp<X,Y> = Issue26TpB<X> | Issue26TpC<Y>;
    type Issue26TpB<X> = {}
    type Issue26TpC<Y> = {}

}