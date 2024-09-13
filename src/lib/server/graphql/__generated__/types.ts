import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Locale = {
  __typename?: 'Locale';
  code: LocaleType;
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export enum LocaleType {
  En = 'en',
  Hi = 'hi',
  Ml = 'ml',
  Np = 'np',
}

export type Query = {
  __typename?: 'Query';
  locale?: Maybe<Locale>;
  locales?: Maybe<Array<Maybe<Locale>>>;
  translation?: Maybe<Translation>;
  translations?: Maybe<Array<Maybe<Translation>>>;
};

export type QueryLocaleArgs = {
  code: LocaleType;
};

export type QueryLocalesArgs = {
  code?: InputMaybe<Array<LocaleType>>;
};

export type QueryTranslationArgs = {
  from: LocaleType;
  id: Scalars['ID']['input'];
  to: LocaleType;
};

export type QueryTranslationsArgs = {
  from: LocaleType;
  to: LocaleType;
  word: Scalars['String']['input'];
};

export type Translation = {
  __typename?: 'Translation';
  id: Scalars['ID']['output'];
  phonetic: Scalars['String']['output'];
  translation: Scalars['String']['output'];
  word: Scalars['String']['output'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Locale: ResolverTypeWrapper<Locale>;
  LocaleType: LocaleType;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Translation: ResolverTypeWrapper<Translation>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Locale: Locale;
  Query: {};
  String: Scalars['String']['output'];
  Translation: Translation;
};

export type LocaleResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Locale'] = ResolversParentTypes['Locale'],
> = {
  code?: Resolver<ResolversTypes['LocaleType'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  locale?: Resolver<
    Maybe<ResolversTypes['Locale']>,
    ParentType,
    ContextType,
    RequireFields<QueryLocaleArgs, 'code'>
  >;
  locales?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Locale']>>>,
    ParentType,
    ContextType,
    Partial<QueryLocalesArgs>
  >;
  translation?: Resolver<
    Maybe<ResolversTypes['Translation']>,
    ParentType,
    ContextType,
    RequireFields<QueryTranslationArgs, 'from' | 'id' | 'to'>
  >;
  translations?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Translation']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryTranslationsArgs, 'from' | 'to' | 'word'>
  >;
};

export type TranslationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Translation'] = ResolversParentTypes['Translation'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  phonetic?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  word?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Locale?: LocaleResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Translation?: TranslationResolvers<ContextType>;
};
