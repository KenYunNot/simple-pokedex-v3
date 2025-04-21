
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Pokemon
 * 
 */
export type Pokemon = $Result.DefaultSelection<Prisma.$PokemonPayload>
/**
 * Model PokemonSpecies
 * 
 */
export type PokemonSpecies = $Result.DefaultSelection<Prisma.$PokemonSpeciesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pokemon
 * const pokemon = await prisma.pokemon.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Pokemon
   * const pokemon = await prisma.pokemon.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pokemon`: Exposes CRUD operations for the **Pokemon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pokemon
    * const pokemon = await prisma.pokemon.findMany()
    * ```
    */
  get pokemon(): Prisma.PokemonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pokemonSpecies`: Exposes CRUD operations for the **PokemonSpecies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PokemonSpecies
    * const pokemonSpecies = await prisma.pokemonSpecies.findMany()
    * ```
    */
  get pokemonSpecies(): Prisma.PokemonSpeciesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Pokemon: 'Pokemon',
    PokemonSpecies: 'PokemonSpecies'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pokemon" | "pokemonSpecies"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pokemon: {
        payload: Prisma.$PokemonPayload<ExtArgs>
        fields: Prisma.PokemonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          findFirst: {
            args: Prisma.PokemonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          findMany: {
            args: Prisma.PokemonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          create: {
            args: Prisma.PokemonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          createMany: {
            args: Prisma.PokemonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          delete: {
            args: Prisma.PokemonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          update: {
            args: Prisma.PokemonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          deleteMany: {
            args: Prisma.PokemonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokemonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          upsert: {
            args: Prisma.PokemonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          aggregate: {
            args: Prisma.PokemonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemon>
          }
          groupBy: {
            args: Prisma.PokemonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonCountAggregateOutputType> | number
          }
        }
      }
      PokemonSpecies: {
        payload: Prisma.$PokemonSpeciesPayload<ExtArgs>
        fields: Prisma.PokemonSpeciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonSpeciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSpeciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonSpeciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSpeciesPayload>
          }
          findFirst: {
            args: Prisma.PokemonSpeciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSpeciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonSpeciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSpeciesPayload>
          }
          findMany: {
            args: Prisma.PokemonSpeciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSpeciesPayload>[]
          }
          create: {
            args: Prisma.PokemonSpeciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSpeciesPayload>
          }
          createMany: {
            args: Prisma.PokemonSpeciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonSpeciesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSpeciesPayload>[]
          }
          delete: {
            args: Prisma.PokemonSpeciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSpeciesPayload>
          }
          update: {
            args: Prisma.PokemonSpeciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSpeciesPayload>
          }
          deleteMany: {
            args: Prisma.PokemonSpeciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonSpeciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokemonSpeciesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSpeciesPayload>[]
          }
          upsert: {
            args: Prisma.PokemonSpeciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSpeciesPayload>
          }
          aggregate: {
            args: Prisma.PokemonSpeciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemonSpecies>
          }
          groupBy: {
            args: Prisma.PokemonSpeciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonSpeciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonSpeciesCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonSpeciesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    pokemon?: PokemonOmit
    pokemonSpecies?: PokemonSpeciesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PokemonSpeciesCountOutputType
   */

  export type PokemonSpeciesCountOutputType = {
    pokemon: number
  }

  export type PokemonSpeciesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonSpeciesCountOutputTypeCountPokemonArgs
  }

  // Custom InputTypes
  /**
   * PokemonSpeciesCountOutputType without action
   */
  export type PokemonSpeciesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSpeciesCountOutputType
     */
    select?: PokemonSpeciesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PokemonSpeciesCountOutputType without action
   */
  export type PokemonSpeciesCountOutputTypeCountPokemonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Pokemon
   */

  export type AggregatePokemon = {
    _count: PokemonCountAggregateOutputType | null
    _avg: PokemonAvgAggregateOutputType | null
    _sum: PokemonSumAggregateOutputType | null
    _min: PokemonMinAggregateOutputType | null
    _max: PokemonMaxAggregateOutputType | null
  }

  export type PokemonAvgAggregateOutputType = {
    id: number | null
    height: number | null
    weight: number | null
    hp: number | null
    attack: number | null
    defense: number | null
    sp_attack: number | null
    sp_defense: number | null
    speed: number | null
    species_id: number | null
  }

  export type PokemonSumAggregateOutputType = {
    id: number | null
    height: number | null
    weight: number | null
    hp: number | null
    attack: number | null
    defense: number | null
    sp_attack: number | null
    sp_defense: number | null
    speed: number | null
    species_id: number | null
  }

  export type PokemonMinAggregateOutputType = {
    id: number | null
    name: string | null
    height: number | null
    weight: number | null
    image_url: string | null
    hp: number | null
    attack: number | null
    defense: number | null
    sp_attack: number | null
    sp_defense: number | null
    speed: number | null
    species_id: number | null
  }

  export type PokemonMaxAggregateOutputType = {
    id: number | null
    name: string | null
    height: number | null
    weight: number | null
    image_url: string | null
    hp: number | null
    attack: number | null
    defense: number | null
    sp_attack: number | null
    sp_defense: number | null
    speed: number | null
    species_id: number | null
  }

  export type PokemonCountAggregateOutputType = {
    id: number
    name: number
    types: number
    abilities: number
    height: number
    weight: number
    image_url: number
    hp: number
    attack: number
    defense: number
    sp_attack: number
    sp_defense: number
    speed: number
    species_id: number
    _all: number
  }


  export type PokemonAvgAggregateInputType = {
    id?: true
    height?: true
    weight?: true
    hp?: true
    attack?: true
    defense?: true
    sp_attack?: true
    sp_defense?: true
    speed?: true
    species_id?: true
  }

  export type PokemonSumAggregateInputType = {
    id?: true
    height?: true
    weight?: true
    hp?: true
    attack?: true
    defense?: true
    sp_attack?: true
    sp_defense?: true
    speed?: true
    species_id?: true
  }

  export type PokemonMinAggregateInputType = {
    id?: true
    name?: true
    height?: true
    weight?: true
    image_url?: true
    hp?: true
    attack?: true
    defense?: true
    sp_attack?: true
    sp_defense?: true
    speed?: true
    species_id?: true
  }

  export type PokemonMaxAggregateInputType = {
    id?: true
    name?: true
    height?: true
    weight?: true
    image_url?: true
    hp?: true
    attack?: true
    defense?: true
    sp_attack?: true
    sp_defense?: true
    speed?: true
    species_id?: true
  }

  export type PokemonCountAggregateInputType = {
    id?: true
    name?: true
    types?: true
    abilities?: true
    height?: true
    weight?: true
    image_url?: true
    hp?: true
    attack?: true
    defense?: true
    sp_attack?: true
    sp_defense?: true
    speed?: true
    species_id?: true
    _all?: true
  }

  export type PokemonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pokemon to aggregate.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pokemon
    **/
    _count?: true | PokemonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonMaxAggregateInputType
  }

  export type GetPokemonAggregateType<T extends PokemonAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemon[P]>
      : GetScalarType<T[P], AggregatePokemon[P]>
  }




  export type PokemonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonWhereInput
    orderBy?: PokemonOrderByWithAggregationInput | PokemonOrderByWithAggregationInput[]
    by: PokemonScalarFieldEnum[] | PokemonScalarFieldEnum
    having?: PokemonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonCountAggregateInputType | true
    _avg?: PokemonAvgAggregateInputType
    _sum?: PokemonSumAggregateInputType
    _min?: PokemonMinAggregateInputType
    _max?: PokemonMaxAggregateInputType
  }

  export type PokemonGroupByOutputType = {
    id: number
    name: string
    types: string[]
    abilities: string[]
    height: number
    weight: number
    image_url: string
    hp: number
    attack: number
    defense: number
    sp_attack: number
    sp_defense: number
    speed: number
    species_id: number
    _count: PokemonCountAggregateOutputType | null
    _avg: PokemonAvgAggregateOutputType | null
    _sum: PokemonSumAggregateOutputType | null
    _min: PokemonMinAggregateOutputType | null
    _max: PokemonMaxAggregateOutputType | null
  }

  type GetPokemonGroupByPayload<T extends PokemonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonGroupByOutputType[P]>
        }
      >
    >


  export type PokemonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    types?: boolean
    abilities?: boolean
    height?: boolean
    weight?: boolean
    image_url?: boolean
    hp?: boolean
    attack?: boolean
    defense?: boolean
    sp_attack?: boolean
    sp_defense?: boolean
    speed?: boolean
    species_id?: boolean
    species?: boolean | PokemonSpeciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    types?: boolean
    abilities?: boolean
    height?: boolean
    weight?: boolean
    image_url?: boolean
    hp?: boolean
    attack?: boolean
    defense?: boolean
    sp_attack?: boolean
    sp_defense?: boolean
    speed?: boolean
    species_id?: boolean
    species?: boolean | PokemonSpeciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    types?: boolean
    abilities?: boolean
    height?: boolean
    weight?: boolean
    image_url?: boolean
    hp?: boolean
    attack?: boolean
    defense?: boolean
    sp_attack?: boolean
    sp_defense?: boolean
    speed?: boolean
    species_id?: boolean
    species?: boolean | PokemonSpeciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectScalar = {
    id?: boolean
    name?: boolean
    types?: boolean
    abilities?: boolean
    height?: boolean
    weight?: boolean
    image_url?: boolean
    hp?: boolean
    attack?: boolean
    defense?: boolean
    sp_attack?: boolean
    sp_defense?: boolean
    speed?: boolean
    species_id?: boolean
  }

  export type PokemonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "types" | "abilities" | "height" | "weight" | "image_url" | "hp" | "attack" | "defense" | "sp_attack" | "sp_defense" | "speed" | "species_id", ExtArgs["result"]["pokemon"]>
  export type PokemonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    species?: boolean | PokemonSpeciesDefaultArgs<ExtArgs>
  }
  export type PokemonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    species?: boolean | PokemonSpeciesDefaultArgs<ExtArgs>
  }
  export type PokemonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    species?: boolean | PokemonSpeciesDefaultArgs<ExtArgs>
  }

  export type $PokemonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pokemon"
    objects: {
      species: Prisma.$PokemonSpeciesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      types: string[]
      abilities: string[]
      height: number
      weight: number
      image_url: string
      hp: number
      attack: number
      defense: number
      sp_attack: number
      sp_defense: number
      speed: number
      species_id: number
    }, ExtArgs["result"]["pokemon"]>
    composites: {}
  }

  type PokemonGetPayload<S extends boolean | null | undefined | PokemonDefaultArgs> = $Result.GetResult<Prisma.$PokemonPayload, S>

  type PokemonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokemonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokemonCountAggregateInputType | true
    }

  export interface PokemonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pokemon'], meta: { name: 'Pokemon' } }
    /**
     * Find zero or one Pokemon that matches the filter.
     * @param {PokemonFindUniqueArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonFindUniqueArgs>(args: SelectSubset<T, PokemonFindUniqueArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pokemon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonFindUniqueOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindFirstArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonFindFirstArgs>(args?: SelectSubset<T, PokemonFindFirstArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pokemon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindFirstOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pokemon
     * const pokemon = await prisma.pokemon.findMany()
     * 
     * // Get first 10 Pokemon
     * const pokemon = await prisma.pokemon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokemonFindManyArgs>(args?: SelectSubset<T, PokemonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pokemon.
     * @param {PokemonCreateArgs} args - Arguments to create a Pokemon.
     * @example
     * // Create one Pokemon
     * const Pokemon = await prisma.pokemon.create({
     *   data: {
     *     // ... data to create a Pokemon
     *   }
     * })
     * 
     */
    create<T extends PokemonCreateArgs>(args: SelectSubset<T, PokemonCreateArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pokemon.
     * @param {PokemonCreateManyArgs} args - Arguments to create many Pokemon.
     * @example
     * // Create many Pokemon
     * const pokemon = await prisma.pokemon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonCreateManyArgs>(args?: SelectSubset<T, PokemonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pokemon and returns the data saved in the database.
     * @param {PokemonCreateManyAndReturnArgs} args - Arguments to create many Pokemon.
     * @example
     * // Create many Pokemon
     * const pokemon = await prisma.pokemon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pokemon and only return the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pokemon.
     * @param {PokemonDeleteArgs} args - Arguments to delete one Pokemon.
     * @example
     * // Delete one Pokemon
     * const Pokemon = await prisma.pokemon.delete({
     *   where: {
     *     // ... filter to delete one Pokemon
     *   }
     * })
     * 
     */
    delete<T extends PokemonDeleteArgs>(args: SelectSubset<T, PokemonDeleteArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pokemon.
     * @param {PokemonUpdateArgs} args - Arguments to update one Pokemon.
     * @example
     * // Update one Pokemon
     * const pokemon = await prisma.pokemon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonUpdateArgs>(args: SelectSubset<T, PokemonUpdateArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pokemon.
     * @param {PokemonDeleteManyArgs} args - Arguments to filter Pokemon to delete.
     * @example
     * // Delete a few Pokemon
     * const { count } = await prisma.pokemon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonDeleteManyArgs>(args?: SelectSubset<T, PokemonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pokemon
     * const pokemon = await prisma.pokemon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonUpdateManyArgs>(args: SelectSubset<T, PokemonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemon and returns the data updated in the database.
     * @param {PokemonUpdateManyAndReturnArgs} args - Arguments to update many Pokemon.
     * @example
     * // Update many Pokemon
     * const pokemon = await prisma.pokemon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pokemon and only return the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokemonUpdateManyAndReturnArgs>(args: SelectSubset<T, PokemonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pokemon.
     * @param {PokemonUpsertArgs} args - Arguments to update or create a Pokemon.
     * @example
     * // Update or create a Pokemon
     * const pokemon = await prisma.pokemon.upsert({
     *   create: {
     *     // ... data to create a Pokemon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pokemon we want to update
     *   }
     * })
     */
    upsert<T extends PokemonUpsertArgs>(args: SelectSubset<T, PokemonUpsertArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonCountArgs} args - Arguments to filter Pokemon to count.
     * @example
     * // Count the number of Pokemon
     * const count = await prisma.pokemon.count({
     *   where: {
     *     // ... the filter for the Pokemon we want to count
     *   }
     * })
    **/
    count<T extends PokemonCountArgs>(
      args?: Subset<T, PokemonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PokemonAggregateArgs>(args: Subset<T, PokemonAggregateArgs>): Prisma.PrismaPromise<GetPokemonAggregateType<T>>

    /**
     * Group by Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PokemonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonGroupByArgs['orderBy'] }
        : { orderBy?: PokemonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PokemonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pokemon model
   */
  readonly fields: PokemonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pokemon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    species<T extends PokemonSpeciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonSpeciesDefaultArgs<ExtArgs>>): Prisma__PokemonSpeciesClient<$Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pokemon model
   */
  interface PokemonFieldRefs {
    readonly id: FieldRef<"Pokemon", 'Int'>
    readonly name: FieldRef<"Pokemon", 'String'>
    readonly types: FieldRef<"Pokemon", 'String[]'>
    readonly abilities: FieldRef<"Pokemon", 'String[]'>
    readonly height: FieldRef<"Pokemon", 'Int'>
    readonly weight: FieldRef<"Pokemon", 'Int'>
    readonly image_url: FieldRef<"Pokemon", 'String'>
    readonly hp: FieldRef<"Pokemon", 'Int'>
    readonly attack: FieldRef<"Pokemon", 'Int'>
    readonly defense: FieldRef<"Pokemon", 'Int'>
    readonly sp_attack: FieldRef<"Pokemon", 'Int'>
    readonly sp_defense: FieldRef<"Pokemon", 'Int'>
    readonly speed: FieldRef<"Pokemon", 'Int'>
    readonly species_id: FieldRef<"Pokemon", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pokemon findUnique
   */
  export type PokemonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon findUniqueOrThrow
   */
  export type PokemonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon findFirst
   */
  export type PokemonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon findFirstOrThrow
   */
  export type PokemonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon findMany
   */
  export type PokemonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon create
   */
  export type PokemonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The data needed to create a Pokemon.
     */
    data: XOR<PokemonCreateInput, PokemonUncheckedCreateInput>
  }

  /**
   * Pokemon createMany
   */
  export type PokemonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pokemon.
     */
    data: PokemonCreateManyInput | PokemonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pokemon createManyAndReturn
   */
  export type PokemonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * The data used to create many Pokemon.
     */
    data: PokemonCreateManyInput | PokemonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pokemon update
   */
  export type PokemonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The data needed to update a Pokemon.
     */
    data: XOR<PokemonUpdateInput, PokemonUncheckedUpdateInput>
    /**
     * Choose, which Pokemon to update.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon updateMany
   */
  export type PokemonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pokemon.
     */
    data: XOR<PokemonUpdateManyMutationInput, PokemonUncheckedUpdateManyInput>
    /**
     * Filter which Pokemon to update
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to update.
     */
    limit?: number
  }

  /**
   * Pokemon updateManyAndReturn
   */
  export type PokemonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * The data used to update Pokemon.
     */
    data: XOR<PokemonUpdateManyMutationInput, PokemonUncheckedUpdateManyInput>
    /**
     * Filter which Pokemon to update
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pokemon upsert
   */
  export type PokemonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The filter to search for the Pokemon to update in case it exists.
     */
    where: PokemonWhereUniqueInput
    /**
     * In case the Pokemon found by the `where` argument doesn't exist, create a new Pokemon with this data.
     */
    create: XOR<PokemonCreateInput, PokemonUncheckedCreateInput>
    /**
     * In case the Pokemon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonUpdateInput, PokemonUncheckedUpdateInput>
  }

  /**
   * Pokemon delete
   */
  export type PokemonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter which Pokemon to delete.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon deleteMany
   */
  export type PokemonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pokemon to delete
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to delete.
     */
    limit?: number
  }

  /**
   * Pokemon without action
   */
  export type PokemonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
  }


  /**
   * Model PokemonSpecies
   */

  export type AggregatePokemonSpecies = {
    _count: PokemonSpeciesCountAggregateOutputType | null
    _avg: PokemonSpeciesAvgAggregateOutputType | null
    _sum: PokemonSpeciesSumAggregateOutputType | null
    _min: PokemonSpeciesMinAggregateOutputType | null
    _max: PokemonSpeciesMaxAggregateOutputType | null
  }

  export type PokemonSpeciesAvgAggregateOutputType = {
    id: number | null
    gender_rate: number | null
  }

  export type PokemonSpeciesSumAggregateOutputType = {
    id: number | null
    gender_rate: number | null
  }

  export type PokemonSpeciesMinAggregateOutputType = {
    id: number | null
    name: string | null
    genus: string | null
    gender_rate: number | null
  }

  export type PokemonSpeciesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    genus: string | null
    gender_rate: number | null
  }

  export type PokemonSpeciesCountAggregateOutputType = {
    id: number
    name: number
    genus: number
    gender_rate: number
    _all: number
  }


  export type PokemonSpeciesAvgAggregateInputType = {
    id?: true
    gender_rate?: true
  }

  export type PokemonSpeciesSumAggregateInputType = {
    id?: true
    gender_rate?: true
  }

  export type PokemonSpeciesMinAggregateInputType = {
    id?: true
    name?: true
    genus?: true
    gender_rate?: true
  }

  export type PokemonSpeciesMaxAggregateInputType = {
    id?: true
    name?: true
    genus?: true
    gender_rate?: true
  }

  export type PokemonSpeciesCountAggregateInputType = {
    id?: true
    name?: true
    genus?: true
    gender_rate?: true
    _all?: true
  }

  export type PokemonSpeciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonSpecies to aggregate.
     */
    where?: PokemonSpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonSpecies to fetch.
     */
    orderBy?: PokemonSpeciesOrderByWithRelationInput | PokemonSpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonSpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonSpecies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonSpecies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PokemonSpecies
    **/
    _count?: true | PokemonSpeciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonSpeciesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonSpeciesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonSpeciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonSpeciesMaxAggregateInputType
  }

  export type GetPokemonSpeciesAggregateType<T extends PokemonSpeciesAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemonSpecies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemonSpecies[P]>
      : GetScalarType<T[P], AggregatePokemonSpecies[P]>
  }




  export type PokemonSpeciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonSpeciesWhereInput
    orderBy?: PokemonSpeciesOrderByWithAggregationInput | PokemonSpeciesOrderByWithAggregationInput[]
    by: PokemonSpeciesScalarFieldEnum[] | PokemonSpeciesScalarFieldEnum
    having?: PokemonSpeciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonSpeciesCountAggregateInputType | true
    _avg?: PokemonSpeciesAvgAggregateInputType
    _sum?: PokemonSpeciesSumAggregateInputType
    _min?: PokemonSpeciesMinAggregateInputType
    _max?: PokemonSpeciesMaxAggregateInputType
  }

  export type PokemonSpeciesGroupByOutputType = {
    id: number
    name: string
    genus: string
    gender_rate: number
    _count: PokemonSpeciesCountAggregateOutputType | null
    _avg: PokemonSpeciesAvgAggregateOutputType | null
    _sum: PokemonSpeciesSumAggregateOutputType | null
    _min: PokemonSpeciesMinAggregateOutputType | null
    _max: PokemonSpeciesMaxAggregateOutputType | null
  }

  type GetPokemonSpeciesGroupByPayload<T extends PokemonSpeciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonSpeciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonSpeciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonSpeciesGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonSpeciesGroupByOutputType[P]>
        }
      >
    >


  export type PokemonSpeciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    genus?: boolean
    gender_rate?: boolean
    pokemon?: boolean | PokemonSpecies$pokemonArgs<ExtArgs>
    _count?: boolean | PokemonSpeciesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonSpecies"]>

  export type PokemonSpeciesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    genus?: boolean
    gender_rate?: boolean
  }, ExtArgs["result"]["pokemonSpecies"]>

  export type PokemonSpeciesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    genus?: boolean
    gender_rate?: boolean
  }, ExtArgs["result"]["pokemonSpecies"]>

  export type PokemonSpeciesSelectScalar = {
    id?: boolean
    name?: boolean
    genus?: boolean
    gender_rate?: boolean
  }

  export type PokemonSpeciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "genus" | "gender_rate", ExtArgs["result"]["pokemonSpecies"]>
  export type PokemonSpeciesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonSpecies$pokemonArgs<ExtArgs>
    _count?: boolean | PokemonSpeciesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PokemonSpeciesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PokemonSpeciesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PokemonSpeciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PokemonSpecies"
    objects: {
      pokemon: Prisma.$PokemonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      genus: string
      gender_rate: number
    }, ExtArgs["result"]["pokemonSpecies"]>
    composites: {}
  }

  type PokemonSpeciesGetPayload<S extends boolean | null | undefined | PokemonSpeciesDefaultArgs> = $Result.GetResult<Prisma.$PokemonSpeciesPayload, S>

  type PokemonSpeciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokemonSpeciesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokemonSpeciesCountAggregateInputType | true
    }

  export interface PokemonSpeciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PokemonSpecies'], meta: { name: 'PokemonSpecies' } }
    /**
     * Find zero or one PokemonSpecies that matches the filter.
     * @param {PokemonSpeciesFindUniqueArgs} args - Arguments to find a PokemonSpecies
     * @example
     * // Get one PokemonSpecies
     * const pokemonSpecies = await prisma.pokemonSpecies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonSpeciesFindUniqueArgs>(args: SelectSubset<T, PokemonSpeciesFindUniqueArgs<ExtArgs>>): Prisma__PokemonSpeciesClient<$Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PokemonSpecies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonSpeciesFindUniqueOrThrowArgs} args - Arguments to find a PokemonSpecies
     * @example
     * // Get one PokemonSpecies
     * const pokemonSpecies = await prisma.pokemonSpecies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonSpeciesFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonSpeciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonSpeciesClient<$Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonSpecies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonSpeciesFindFirstArgs} args - Arguments to find a PokemonSpecies
     * @example
     * // Get one PokemonSpecies
     * const pokemonSpecies = await prisma.pokemonSpecies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonSpeciesFindFirstArgs>(args?: SelectSubset<T, PokemonSpeciesFindFirstArgs<ExtArgs>>): Prisma__PokemonSpeciesClient<$Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonSpecies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonSpeciesFindFirstOrThrowArgs} args - Arguments to find a PokemonSpecies
     * @example
     * // Get one PokemonSpecies
     * const pokemonSpecies = await prisma.pokemonSpecies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonSpeciesFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonSpeciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonSpeciesClient<$Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PokemonSpecies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonSpeciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokemonSpecies
     * const pokemonSpecies = await prisma.pokemonSpecies.findMany()
     * 
     * // Get first 10 PokemonSpecies
     * const pokemonSpecies = await prisma.pokemonSpecies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonSpeciesWithIdOnly = await prisma.pokemonSpecies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokemonSpeciesFindManyArgs>(args?: SelectSubset<T, PokemonSpeciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PokemonSpecies.
     * @param {PokemonSpeciesCreateArgs} args - Arguments to create a PokemonSpecies.
     * @example
     * // Create one PokemonSpecies
     * const PokemonSpecies = await prisma.pokemonSpecies.create({
     *   data: {
     *     // ... data to create a PokemonSpecies
     *   }
     * })
     * 
     */
    create<T extends PokemonSpeciesCreateArgs>(args: SelectSubset<T, PokemonSpeciesCreateArgs<ExtArgs>>): Prisma__PokemonSpeciesClient<$Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PokemonSpecies.
     * @param {PokemonSpeciesCreateManyArgs} args - Arguments to create many PokemonSpecies.
     * @example
     * // Create many PokemonSpecies
     * const pokemonSpecies = await prisma.pokemonSpecies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonSpeciesCreateManyArgs>(args?: SelectSubset<T, PokemonSpeciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PokemonSpecies and returns the data saved in the database.
     * @param {PokemonSpeciesCreateManyAndReturnArgs} args - Arguments to create many PokemonSpecies.
     * @example
     * // Create many PokemonSpecies
     * const pokemonSpecies = await prisma.pokemonSpecies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PokemonSpecies and only return the `id`
     * const pokemonSpeciesWithIdOnly = await prisma.pokemonSpecies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonSpeciesCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonSpeciesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PokemonSpecies.
     * @param {PokemonSpeciesDeleteArgs} args - Arguments to delete one PokemonSpecies.
     * @example
     * // Delete one PokemonSpecies
     * const PokemonSpecies = await prisma.pokemonSpecies.delete({
     *   where: {
     *     // ... filter to delete one PokemonSpecies
     *   }
     * })
     * 
     */
    delete<T extends PokemonSpeciesDeleteArgs>(args: SelectSubset<T, PokemonSpeciesDeleteArgs<ExtArgs>>): Prisma__PokemonSpeciesClient<$Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PokemonSpecies.
     * @param {PokemonSpeciesUpdateArgs} args - Arguments to update one PokemonSpecies.
     * @example
     * // Update one PokemonSpecies
     * const pokemonSpecies = await prisma.pokemonSpecies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonSpeciesUpdateArgs>(args: SelectSubset<T, PokemonSpeciesUpdateArgs<ExtArgs>>): Prisma__PokemonSpeciesClient<$Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PokemonSpecies.
     * @param {PokemonSpeciesDeleteManyArgs} args - Arguments to filter PokemonSpecies to delete.
     * @example
     * // Delete a few PokemonSpecies
     * const { count } = await prisma.pokemonSpecies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonSpeciesDeleteManyArgs>(args?: SelectSubset<T, PokemonSpeciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonSpecies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonSpeciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokemonSpecies
     * const pokemonSpecies = await prisma.pokemonSpecies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonSpeciesUpdateManyArgs>(args: SelectSubset<T, PokemonSpeciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonSpecies and returns the data updated in the database.
     * @param {PokemonSpeciesUpdateManyAndReturnArgs} args - Arguments to update many PokemonSpecies.
     * @example
     * // Update many PokemonSpecies
     * const pokemonSpecies = await prisma.pokemonSpecies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PokemonSpecies and only return the `id`
     * const pokemonSpeciesWithIdOnly = await prisma.pokemonSpecies.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokemonSpeciesUpdateManyAndReturnArgs>(args: SelectSubset<T, PokemonSpeciesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PokemonSpecies.
     * @param {PokemonSpeciesUpsertArgs} args - Arguments to update or create a PokemonSpecies.
     * @example
     * // Update or create a PokemonSpecies
     * const pokemonSpecies = await prisma.pokemonSpecies.upsert({
     *   create: {
     *     // ... data to create a PokemonSpecies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokemonSpecies we want to update
     *   }
     * })
     */
    upsert<T extends PokemonSpeciesUpsertArgs>(args: SelectSubset<T, PokemonSpeciesUpsertArgs<ExtArgs>>): Prisma__PokemonSpeciesClient<$Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PokemonSpecies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonSpeciesCountArgs} args - Arguments to filter PokemonSpecies to count.
     * @example
     * // Count the number of PokemonSpecies
     * const count = await prisma.pokemonSpecies.count({
     *   where: {
     *     // ... the filter for the PokemonSpecies we want to count
     *   }
     * })
    **/
    count<T extends PokemonSpeciesCountArgs>(
      args?: Subset<T, PokemonSpeciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonSpeciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PokemonSpecies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonSpeciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PokemonSpeciesAggregateArgs>(args: Subset<T, PokemonSpeciesAggregateArgs>): Prisma.PrismaPromise<GetPokemonSpeciesAggregateType<T>>

    /**
     * Group by PokemonSpecies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonSpeciesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PokemonSpeciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonSpeciesGroupByArgs['orderBy'] }
        : { orderBy?: PokemonSpeciesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PokemonSpeciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonSpeciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PokemonSpecies model
   */
  readonly fields: PokemonSpeciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PokemonSpecies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonSpeciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pokemon<T extends PokemonSpecies$pokemonArgs<ExtArgs> = {}>(args?: Subset<T, PokemonSpecies$pokemonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PokemonSpecies model
   */
  interface PokemonSpeciesFieldRefs {
    readonly id: FieldRef<"PokemonSpecies", 'Int'>
    readonly name: FieldRef<"PokemonSpecies", 'String'>
    readonly genus: FieldRef<"PokemonSpecies", 'String'>
    readonly gender_rate: FieldRef<"PokemonSpecies", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PokemonSpecies findUnique
   */
  export type PokemonSpeciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSpecies
     */
    select?: PokemonSpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSpecies
     */
    omit?: PokemonSpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonSpeciesInclude<ExtArgs> | null
    /**
     * Filter, which PokemonSpecies to fetch.
     */
    where: PokemonSpeciesWhereUniqueInput
  }

  /**
   * PokemonSpecies findUniqueOrThrow
   */
  export type PokemonSpeciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSpecies
     */
    select?: PokemonSpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSpecies
     */
    omit?: PokemonSpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonSpeciesInclude<ExtArgs> | null
    /**
     * Filter, which PokemonSpecies to fetch.
     */
    where: PokemonSpeciesWhereUniqueInput
  }

  /**
   * PokemonSpecies findFirst
   */
  export type PokemonSpeciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSpecies
     */
    select?: PokemonSpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSpecies
     */
    omit?: PokemonSpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonSpeciesInclude<ExtArgs> | null
    /**
     * Filter, which PokemonSpecies to fetch.
     */
    where?: PokemonSpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonSpecies to fetch.
     */
    orderBy?: PokemonSpeciesOrderByWithRelationInput | PokemonSpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonSpecies.
     */
    cursor?: PokemonSpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonSpecies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonSpecies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonSpecies.
     */
    distinct?: PokemonSpeciesScalarFieldEnum | PokemonSpeciesScalarFieldEnum[]
  }

  /**
   * PokemonSpecies findFirstOrThrow
   */
  export type PokemonSpeciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSpecies
     */
    select?: PokemonSpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSpecies
     */
    omit?: PokemonSpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonSpeciesInclude<ExtArgs> | null
    /**
     * Filter, which PokemonSpecies to fetch.
     */
    where?: PokemonSpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonSpecies to fetch.
     */
    orderBy?: PokemonSpeciesOrderByWithRelationInput | PokemonSpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonSpecies.
     */
    cursor?: PokemonSpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonSpecies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonSpecies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonSpecies.
     */
    distinct?: PokemonSpeciesScalarFieldEnum | PokemonSpeciesScalarFieldEnum[]
  }

  /**
   * PokemonSpecies findMany
   */
  export type PokemonSpeciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSpecies
     */
    select?: PokemonSpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSpecies
     */
    omit?: PokemonSpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonSpeciesInclude<ExtArgs> | null
    /**
     * Filter, which PokemonSpecies to fetch.
     */
    where?: PokemonSpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonSpecies to fetch.
     */
    orderBy?: PokemonSpeciesOrderByWithRelationInput | PokemonSpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PokemonSpecies.
     */
    cursor?: PokemonSpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonSpecies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonSpecies.
     */
    skip?: number
    distinct?: PokemonSpeciesScalarFieldEnum | PokemonSpeciesScalarFieldEnum[]
  }

  /**
   * PokemonSpecies create
   */
  export type PokemonSpeciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSpecies
     */
    select?: PokemonSpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSpecies
     */
    omit?: PokemonSpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonSpeciesInclude<ExtArgs> | null
    /**
     * The data needed to create a PokemonSpecies.
     */
    data: XOR<PokemonSpeciesCreateInput, PokemonSpeciesUncheckedCreateInput>
  }

  /**
   * PokemonSpecies createMany
   */
  export type PokemonSpeciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokemonSpecies.
     */
    data: PokemonSpeciesCreateManyInput | PokemonSpeciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokemonSpecies createManyAndReturn
   */
  export type PokemonSpeciesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSpecies
     */
    select?: PokemonSpeciesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSpecies
     */
    omit?: PokemonSpeciesOmit<ExtArgs> | null
    /**
     * The data used to create many PokemonSpecies.
     */
    data: PokemonSpeciesCreateManyInput | PokemonSpeciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokemonSpecies update
   */
  export type PokemonSpeciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSpecies
     */
    select?: PokemonSpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSpecies
     */
    omit?: PokemonSpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonSpeciesInclude<ExtArgs> | null
    /**
     * The data needed to update a PokemonSpecies.
     */
    data: XOR<PokemonSpeciesUpdateInput, PokemonSpeciesUncheckedUpdateInput>
    /**
     * Choose, which PokemonSpecies to update.
     */
    where: PokemonSpeciesWhereUniqueInput
  }

  /**
   * PokemonSpecies updateMany
   */
  export type PokemonSpeciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PokemonSpecies.
     */
    data: XOR<PokemonSpeciesUpdateManyMutationInput, PokemonSpeciesUncheckedUpdateManyInput>
    /**
     * Filter which PokemonSpecies to update
     */
    where?: PokemonSpeciesWhereInput
    /**
     * Limit how many PokemonSpecies to update.
     */
    limit?: number
  }

  /**
   * PokemonSpecies updateManyAndReturn
   */
  export type PokemonSpeciesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSpecies
     */
    select?: PokemonSpeciesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSpecies
     */
    omit?: PokemonSpeciesOmit<ExtArgs> | null
    /**
     * The data used to update PokemonSpecies.
     */
    data: XOR<PokemonSpeciesUpdateManyMutationInput, PokemonSpeciesUncheckedUpdateManyInput>
    /**
     * Filter which PokemonSpecies to update
     */
    where?: PokemonSpeciesWhereInput
    /**
     * Limit how many PokemonSpecies to update.
     */
    limit?: number
  }

  /**
   * PokemonSpecies upsert
   */
  export type PokemonSpeciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSpecies
     */
    select?: PokemonSpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSpecies
     */
    omit?: PokemonSpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonSpeciesInclude<ExtArgs> | null
    /**
     * The filter to search for the PokemonSpecies to update in case it exists.
     */
    where: PokemonSpeciesWhereUniqueInput
    /**
     * In case the PokemonSpecies found by the `where` argument doesn't exist, create a new PokemonSpecies with this data.
     */
    create: XOR<PokemonSpeciesCreateInput, PokemonSpeciesUncheckedCreateInput>
    /**
     * In case the PokemonSpecies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonSpeciesUpdateInput, PokemonSpeciesUncheckedUpdateInput>
  }

  /**
   * PokemonSpecies delete
   */
  export type PokemonSpeciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSpecies
     */
    select?: PokemonSpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSpecies
     */
    omit?: PokemonSpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonSpeciesInclude<ExtArgs> | null
    /**
     * Filter which PokemonSpecies to delete.
     */
    where: PokemonSpeciesWhereUniqueInput
  }

  /**
   * PokemonSpecies deleteMany
   */
  export type PokemonSpeciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonSpecies to delete
     */
    where?: PokemonSpeciesWhereInput
    /**
     * Limit how many PokemonSpecies to delete.
     */
    limit?: number
  }

  /**
   * PokemonSpecies.pokemon
   */
  export type PokemonSpecies$pokemonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    where?: PokemonWhereInput
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    cursor?: PokemonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * PokemonSpecies without action
   */
  export type PokemonSpeciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSpecies
     */
    select?: PokemonSpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSpecies
     */
    omit?: PokemonSpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonSpeciesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PokemonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    types: 'types',
    abilities: 'abilities',
    height: 'height',
    weight: 'weight',
    image_url: 'image_url',
    hp: 'hp',
    attack: 'attack',
    defense: 'defense',
    sp_attack: 'sp_attack',
    sp_defense: 'sp_defense',
    speed: 'speed',
    species_id: 'species_id'
  };

  export type PokemonScalarFieldEnum = (typeof PokemonScalarFieldEnum)[keyof typeof PokemonScalarFieldEnum]


  export const PokemonSpeciesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    genus: 'genus',
    gender_rate: 'gender_rate'
  };

  export type PokemonSpeciesScalarFieldEnum = (typeof PokemonSpeciesScalarFieldEnum)[keyof typeof PokemonSpeciesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PokemonWhereInput = {
    AND?: PokemonWhereInput | PokemonWhereInput[]
    OR?: PokemonWhereInput[]
    NOT?: PokemonWhereInput | PokemonWhereInput[]
    id?: IntFilter<"Pokemon"> | number
    name?: StringFilter<"Pokemon"> | string
    types?: StringNullableListFilter<"Pokemon">
    abilities?: StringNullableListFilter<"Pokemon">
    height?: IntFilter<"Pokemon"> | number
    weight?: IntFilter<"Pokemon"> | number
    image_url?: StringFilter<"Pokemon"> | string
    hp?: IntFilter<"Pokemon"> | number
    attack?: IntFilter<"Pokemon"> | number
    defense?: IntFilter<"Pokemon"> | number
    sp_attack?: IntFilter<"Pokemon"> | number
    sp_defense?: IntFilter<"Pokemon"> | number
    speed?: IntFilter<"Pokemon"> | number
    species_id?: IntFilter<"Pokemon"> | number
    species?: XOR<PokemonSpeciesScalarRelationFilter, PokemonSpeciesWhereInput>
  }

  export type PokemonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    types?: SortOrder
    abilities?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    image_url?: SortOrder
    hp?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    sp_attack?: SortOrder
    sp_defense?: SortOrder
    speed?: SortOrder
    species_id?: SortOrder
    species?: PokemonSpeciesOrderByWithRelationInput
  }

  export type PokemonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PokemonWhereInput | PokemonWhereInput[]
    OR?: PokemonWhereInput[]
    NOT?: PokemonWhereInput | PokemonWhereInput[]
    name?: StringFilter<"Pokemon"> | string
    types?: StringNullableListFilter<"Pokemon">
    abilities?: StringNullableListFilter<"Pokemon">
    height?: IntFilter<"Pokemon"> | number
    weight?: IntFilter<"Pokemon"> | number
    image_url?: StringFilter<"Pokemon"> | string
    hp?: IntFilter<"Pokemon"> | number
    attack?: IntFilter<"Pokemon"> | number
    defense?: IntFilter<"Pokemon"> | number
    sp_attack?: IntFilter<"Pokemon"> | number
    sp_defense?: IntFilter<"Pokemon"> | number
    speed?: IntFilter<"Pokemon"> | number
    species_id?: IntFilter<"Pokemon"> | number
    species?: XOR<PokemonSpeciesScalarRelationFilter, PokemonSpeciesWhereInput>
  }, "id">

  export type PokemonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    types?: SortOrder
    abilities?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    image_url?: SortOrder
    hp?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    sp_attack?: SortOrder
    sp_defense?: SortOrder
    speed?: SortOrder
    species_id?: SortOrder
    _count?: PokemonCountOrderByAggregateInput
    _avg?: PokemonAvgOrderByAggregateInput
    _max?: PokemonMaxOrderByAggregateInput
    _min?: PokemonMinOrderByAggregateInput
    _sum?: PokemonSumOrderByAggregateInput
  }

  export type PokemonScalarWhereWithAggregatesInput = {
    AND?: PokemonScalarWhereWithAggregatesInput | PokemonScalarWhereWithAggregatesInput[]
    OR?: PokemonScalarWhereWithAggregatesInput[]
    NOT?: PokemonScalarWhereWithAggregatesInput | PokemonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pokemon"> | number
    name?: StringWithAggregatesFilter<"Pokemon"> | string
    types?: StringNullableListFilter<"Pokemon">
    abilities?: StringNullableListFilter<"Pokemon">
    height?: IntWithAggregatesFilter<"Pokemon"> | number
    weight?: IntWithAggregatesFilter<"Pokemon"> | number
    image_url?: StringWithAggregatesFilter<"Pokemon"> | string
    hp?: IntWithAggregatesFilter<"Pokemon"> | number
    attack?: IntWithAggregatesFilter<"Pokemon"> | number
    defense?: IntWithAggregatesFilter<"Pokemon"> | number
    sp_attack?: IntWithAggregatesFilter<"Pokemon"> | number
    sp_defense?: IntWithAggregatesFilter<"Pokemon"> | number
    speed?: IntWithAggregatesFilter<"Pokemon"> | number
    species_id?: IntWithAggregatesFilter<"Pokemon"> | number
  }

  export type PokemonSpeciesWhereInput = {
    AND?: PokemonSpeciesWhereInput | PokemonSpeciesWhereInput[]
    OR?: PokemonSpeciesWhereInput[]
    NOT?: PokemonSpeciesWhereInput | PokemonSpeciesWhereInput[]
    id?: IntFilter<"PokemonSpecies"> | number
    name?: StringFilter<"PokemonSpecies"> | string
    genus?: StringFilter<"PokemonSpecies"> | string
    gender_rate?: IntFilter<"PokemonSpecies"> | number
    pokemon?: PokemonListRelationFilter
  }

  export type PokemonSpeciesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    genus?: SortOrder
    gender_rate?: SortOrder
    pokemon?: PokemonOrderByRelationAggregateInput
  }

  export type PokemonSpeciesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PokemonSpeciesWhereInput | PokemonSpeciesWhereInput[]
    OR?: PokemonSpeciesWhereInput[]
    NOT?: PokemonSpeciesWhereInput | PokemonSpeciesWhereInput[]
    name?: StringFilter<"PokemonSpecies"> | string
    genus?: StringFilter<"PokemonSpecies"> | string
    gender_rate?: IntFilter<"PokemonSpecies"> | number
    pokemon?: PokemonListRelationFilter
  }, "id">

  export type PokemonSpeciesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    genus?: SortOrder
    gender_rate?: SortOrder
    _count?: PokemonSpeciesCountOrderByAggregateInput
    _avg?: PokemonSpeciesAvgOrderByAggregateInput
    _max?: PokemonSpeciesMaxOrderByAggregateInput
    _min?: PokemonSpeciesMinOrderByAggregateInput
    _sum?: PokemonSpeciesSumOrderByAggregateInput
  }

  export type PokemonSpeciesScalarWhereWithAggregatesInput = {
    AND?: PokemonSpeciesScalarWhereWithAggregatesInput | PokemonSpeciesScalarWhereWithAggregatesInput[]
    OR?: PokemonSpeciesScalarWhereWithAggregatesInput[]
    NOT?: PokemonSpeciesScalarWhereWithAggregatesInput | PokemonSpeciesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PokemonSpecies"> | number
    name?: StringWithAggregatesFilter<"PokemonSpecies"> | string
    genus?: StringWithAggregatesFilter<"PokemonSpecies"> | string
    gender_rate?: IntWithAggregatesFilter<"PokemonSpecies"> | number
  }

  export type PokemonCreateInput = {
    id: number
    name: string
    types?: PokemonCreatetypesInput | string[]
    abilities?: PokemonCreateabilitiesInput | string[]
    height: number
    weight: number
    image_url: string
    hp: number
    attack: number
    defense: number
    sp_attack: number
    sp_defense: number
    speed: number
    species: PokemonSpeciesCreateNestedOneWithoutPokemonInput
  }

  export type PokemonUncheckedCreateInput = {
    id: number
    name: string
    types?: PokemonCreatetypesInput | string[]
    abilities?: PokemonCreateabilitiesInput | string[]
    height: number
    weight: number
    image_url: string
    hp: number
    attack: number
    defense: number
    sp_attack: number
    sp_defense: number
    speed: number
    species_id: number
  }

  export type PokemonUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    types?: PokemonUpdatetypesInput | string[]
    abilities?: PokemonUpdateabilitiesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    sp_attack?: IntFieldUpdateOperationsInput | number
    sp_defense?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    species?: PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput
  }

  export type PokemonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    types?: PokemonUpdatetypesInput | string[]
    abilities?: PokemonUpdateabilitiesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    sp_attack?: IntFieldUpdateOperationsInput | number
    sp_defense?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    species_id?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonCreateManyInput = {
    id: number
    name: string
    types?: PokemonCreatetypesInput | string[]
    abilities?: PokemonCreateabilitiesInput | string[]
    height: number
    weight: number
    image_url: string
    hp: number
    attack: number
    defense: number
    sp_attack: number
    sp_defense: number
    speed: number
    species_id: number
  }

  export type PokemonUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    types?: PokemonUpdatetypesInput | string[]
    abilities?: PokemonUpdateabilitiesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    sp_attack?: IntFieldUpdateOperationsInput | number
    sp_defense?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    types?: PokemonUpdatetypesInput | string[]
    abilities?: PokemonUpdateabilitiesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    sp_attack?: IntFieldUpdateOperationsInput | number
    sp_defense?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    species_id?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonSpeciesCreateInput = {
    id: number
    name: string
    genus: string
    gender_rate: number
    pokemon?: PokemonCreateNestedManyWithoutSpeciesInput
  }

  export type PokemonSpeciesUncheckedCreateInput = {
    id: number
    name: string
    genus: string
    gender_rate: number
    pokemon?: PokemonUncheckedCreateNestedManyWithoutSpeciesInput
  }

  export type PokemonSpeciesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    gender_rate?: IntFieldUpdateOperationsInput | number
    pokemon?: PokemonUpdateManyWithoutSpeciesNestedInput
  }

  export type PokemonSpeciesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    gender_rate?: IntFieldUpdateOperationsInput | number
    pokemon?: PokemonUncheckedUpdateManyWithoutSpeciesNestedInput
  }

  export type PokemonSpeciesCreateManyInput = {
    id: number
    name: string
    genus: string
    gender_rate: number
  }

  export type PokemonSpeciesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    gender_rate?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonSpeciesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    gender_rate?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PokemonSpeciesScalarRelationFilter = {
    is?: PokemonSpeciesWhereInput
    isNot?: PokemonSpeciesWhereInput
  }

  export type PokemonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    types?: SortOrder
    abilities?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    image_url?: SortOrder
    hp?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    sp_attack?: SortOrder
    sp_defense?: SortOrder
    speed?: SortOrder
    species_id?: SortOrder
  }

  export type PokemonAvgOrderByAggregateInput = {
    id?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    hp?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    sp_attack?: SortOrder
    sp_defense?: SortOrder
    speed?: SortOrder
    species_id?: SortOrder
  }

  export type PokemonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    image_url?: SortOrder
    hp?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    sp_attack?: SortOrder
    sp_defense?: SortOrder
    speed?: SortOrder
    species_id?: SortOrder
  }

  export type PokemonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    image_url?: SortOrder
    hp?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    sp_attack?: SortOrder
    sp_defense?: SortOrder
    speed?: SortOrder
    species_id?: SortOrder
  }

  export type PokemonSumOrderByAggregateInput = {
    id?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    hp?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    sp_attack?: SortOrder
    sp_defense?: SortOrder
    speed?: SortOrder
    species_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PokemonListRelationFilter = {
    every?: PokemonWhereInput
    some?: PokemonWhereInput
    none?: PokemonWhereInput
  }

  export type PokemonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PokemonSpeciesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    genus?: SortOrder
    gender_rate?: SortOrder
  }

  export type PokemonSpeciesAvgOrderByAggregateInput = {
    id?: SortOrder
    gender_rate?: SortOrder
  }

  export type PokemonSpeciesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    genus?: SortOrder
    gender_rate?: SortOrder
  }

  export type PokemonSpeciesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    genus?: SortOrder
    gender_rate?: SortOrder
  }

  export type PokemonSpeciesSumOrderByAggregateInput = {
    id?: SortOrder
    gender_rate?: SortOrder
  }

  export type PokemonCreatetypesInput = {
    set: string[]
  }

  export type PokemonCreateabilitiesInput = {
    set: string[]
  }

  export type PokemonSpeciesCreateNestedOneWithoutPokemonInput = {
    create?: XOR<PokemonSpeciesCreateWithoutPokemonInput, PokemonSpeciesUncheckedCreateWithoutPokemonInput>
    connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutPokemonInput
    connect?: PokemonSpeciesWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PokemonUpdatetypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PokemonUpdateabilitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput = {
    create?: XOR<PokemonSpeciesCreateWithoutPokemonInput, PokemonSpeciesUncheckedCreateWithoutPokemonInput>
    connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutPokemonInput
    upsert?: PokemonSpeciesUpsertWithoutPokemonInput
    connect?: PokemonSpeciesWhereUniqueInput
    update?: XOR<XOR<PokemonSpeciesUpdateToOneWithWhereWithoutPokemonInput, PokemonSpeciesUpdateWithoutPokemonInput>, PokemonSpeciesUncheckedUpdateWithoutPokemonInput>
  }

  export type PokemonCreateNestedManyWithoutSpeciesInput = {
    create?: XOR<PokemonCreateWithoutSpeciesInput, PokemonUncheckedCreateWithoutSpeciesInput> | PokemonCreateWithoutSpeciesInput[] | PokemonUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: PokemonCreateOrConnectWithoutSpeciesInput | PokemonCreateOrConnectWithoutSpeciesInput[]
    createMany?: PokemonCreateManySpeciesInputEnvelope
    connect?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
  }

  export type PokemonUncheckedCreateNestedManyWithoutSpeciesInput = {
    create?: XOR<PokemonCreateWithoutSpeciesInput, PokemonUncheckedCreateWithoutSpeciesInput> | PokemonCreateWithoutSpeciesInput[] | PokemonUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: PokemonCreateOrConnectWithoutSpeciesInput | PokemonCreateOrConnectWithoutSpeciesInput[]
    createMany?: PokemonCreateManySpeciesInputEnvelope
    connect?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
  }

  export type PokemonUpdateManyWithoutSpeciesNestedInput = {
    create?: XOR<PokemonCreateWithoutSpeciesInput, PokemonUncheckedCreateWithoutSpeciesInput> | PokemonCreateWithoutSpeciesInput[] | PokemonUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: PokemonCreateOrConnectWithoutSpeciesInput | PokemonCreateOrConnectWithoutSpeciesInput[]
    upsert?: PokemonUpsertWithWhereUniqueWithoutSpeciesInput | PokemonUpsertWithWhereUniqueWithoutSpeciesInput[]
    createMany?: PokemonCreateManySpeciesInputEnvelope
    set?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
    disconnect?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
    delete?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
    connect?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
    update?: PokemonUpdateWithWhereUniqueWithoutSpeciesInput | PokemonUpdateWithWhereUniqueWithoutSpeciesInput[]
    updateMany?: PokemonUpdateManyWithWhereWithoutSpeciesInput | PokemonUpdateManyWithWhereWithoutSpeciesInput[]
    deleteMany?: PokemonScalarWhereInput | PokemonScalarWhereInput[]
  }

  export type PokemonUncheckedUpdateManyWithoutSpeciesNestedInput = {
    create?: XOR<PokemonCreateWithoutSpeciesInput, PokemonUncheckedCreateWithoutSpeciesInput> | PokemonCreateWithoutSpeciesInput[] | PokemonUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: PokemonCreateOrConnectWithoutSpeciesInput | PokemonCreateOrConnectWithoutSpeciesInput[]
    upsert?: PokemonUpsertWithWhereUniqueWithoutSpeciesInput | PokemonUpsertWithWhereUniqueWithoutSpeciesInput[]
    createMany?: PokemonCreateManySpeciesInputEnvelope
    set?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
    disconnect?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
    delete?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
    connect?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
    update?: PokemonUpdateWithWhereUniqueWithoutSpeciesInput | PokemonUpdateWithWhereUniqueWithoutSpeciesInput[]
    updateMany?: PokemonUpdateManyWithWhereWithoutSpeciesInput | PokemonUpdateManyWithWhereWithoutSpeciesInput[]
    deleteMany?: PokemonScalarWhereInput | PokemonScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PokemonSpeciesCreateWithoutPokemonInput = {
    id: number
    name: string
    genus: string
    gender_rate: number
  }

  export type PokemonSpeciesUncheckedCreateWithoutPokemonInput = {
    id: number
    name: string
    genus: string
    gender_rate: number
  }

  export type PokemonSpeciesCreateOrConnectWithoutPokemonInput = {
    where: PokemonSpeciesWhereUniqueInput
    create: XOR<PokemonSpeciesCreateWithoutPokemonInput, PokemonSpeciesUncheckedCreateWithoutPokemonInput>
  }

  export type PokemonSpeciesUpsertWithoutPokemonInput = {
    update: XOR<PokemonSpeciesUpdateWithoutPokemonInput, PokemonSpeciesUncheckedUpdateWithoutPokemonInput>
    create: XOR<PokemonSpeciesCreateWithoutPokemonInput, PokemonSpeciesUncheckedCreateWithoutPokemonInput>
    where?: PokemonSpeciesWhereInput
  }

  export type PokemonSpeciesUpdateToOneWithWhereWithoutPokemonInput = {
    where?: PokemonSpeciesWhereInput
    data: XOR<PokemonSpeciesUpdateWithoutPokemonInput, PokemonSpeciesUncheckedUpdateWithoutPokemonInput>
  }

  export type PokemonSpeciesUpdateWithoutPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    gender_rate?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonSpeciesUncheckedUpdateWithoutPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    gender_rate?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonCreateWithoutSpeciesInput = {
    id: number
    name: string
    types?: PokemonCreatetypesInput | string[]
    abilities?: PokemonCreateabilitiesInput | string[]
    height: number
    weight: number
    image_url: string
    hp: number
    attack: number
    defense: number
    sp_attack: number
    sp_defense: number
    speed: number
  }

  export type PokemonUncheckedCreateWithoutSpeciesInput = {
    id: number
    name: string
    types?: PokemonCreatetypesInput | string[]
    abilities?: PokemonCreateabilitiesInput | string[]
    height: number
    weight: number
    image_url: string
    hp: number
    attack: number
    defense: number
    sp_attack: number
    sp_defense: number
    speed: number
  }

  export type PokemonCreateOrConnectWithoutSpeciesInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutSpeciesInput, PokemonUncheckedCreateWithoutSpeciesInput>
  }

  export type PokemonCreateManySpeciesInputEnvelope = {
    data: PokemonCreateManySpeciesInput | PokemonCreateManySpeciesInput[]
    skipDuplicates?: boolean
  }

  export type PokemonUpsertWithWhereUniqueWithoutSpeciesInput = {
    where: PokemonWhereUniqueInput
    update: XOR<PokemonUpdateWithoutSpeciesInput, PokemonUncheckedUpdateWithoutSpeciesInput>
    create: XOR<PokemonCreateWithoutSpeciesInput, PokemonUncheckedCreateWithoutSpeciesInput>
  }

  export type PokemonUpdateWithWhereUniqueWithoutSpeciesInput = {
    where: PokemonWhereUniqueInput
    data: XOR<PokemonUpdateWithoutSpeciesInput, PokemonUncheckedUpdateWithoutSpeciesInput>
  }

  export type PokemonUpdateManyWithWhereWithoutSpeciesInput = {
    where: PokemonScalarWhereInput
    data: XOR<PokemonUpdateManyMutationInput, PokemonUncheckedUpdateManyWithoutSpeciesInput>
  }

  export type PokemonScalarWhereInput = {
    AND?: PokemonScalarWhereInput | PokemonScalarWhereInput[]
    OR?: PokemonScalarWhereInput[]
    NOT?: PokemonScalarWhereInput | PokemonScalarWhereInput[]
    id?: IntFilter<"Pokemon"> | number
    name?: StringFilter<"Pokemon"> | string
    types?: StringNullableListFilter<"Pokemon">
    abilities?: StringNullableListFilter<"Pokemon">
    height?: IntFilter<"Pokemon"> | number
    weight?: IntFilter<"Pokemon"> | number
    image_url?: StringFilter<"Pokemon"> | string
    hp?: IntFilter<"Pokemon"> | number
    attack?: IntFilter<"Pokemon"> | number
    defense?: IntFilter<"Pokemon"> | number
    sp_attack?: IntFilter<"Pokemon"> | number
    sp_defense?: IntFilter<"Pokemon"> | number
    speed?: IntFilter<"Pokemon"> | number
    species_id?: IntFilter<"Pokemon"> | number
  }

  export type PokemonCreateManySpeciesInput = {
    id: number
    name: string
    types?: PokemonCreatetypesInput | string[]
    abilities?: PokemonCreateabilitiesInput | string[]
    height: number
    weight: number
    image_url: string
    hp: number
    attack: number
    defense: number
    sp_attack: number
    sp_defense: number
    speed: number
  }

  export type PokemonUpdateWithoutSpeciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    types?: PokemonUpdatetypesInput | string[]
    abilities?: PokemonUpdateabilitiesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    sp_attack?: IntFieldUpdateOperationsInput | number
    sp_defense?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonUncheckedUpdateWithoutSpeciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    types?: PokemonUpdatetypesInput | string[]
    abilities?: PokemonUpdateabilitiesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    sp_attack?: IntFieldUpdateOperationsInput | number
    sp_defense?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonUncheckedUpdateManyWithoutSpeciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    types?: PokemonUpdatetypesInput | string[]
    abilities?: PokemonUpdateabilitiesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    sp_attack?: IntFieldUpdateOperationsInput | number
    sp_defense?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}