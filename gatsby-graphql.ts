export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  wpContentNode?: Maybe<WpContentNode>;
  allWpContentNode: WpContentNodeConnection;
  wpTermNode?: Maybe<WpTermNode>;
  allWpTermNode: WpTermNodeConnection;
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  wpUser?: Maybe<WpUser>;
  allWpUser: WpUserConnection;
  wpComment?: Maybe<WpComment>;
  allWpComment: WpCommentConnection;
  wpMediaItem?: Maybe<WpMediaItem>;
  allWpMediaItem: WpMediaItemConnection;
  wpContentType?: Maybe<WpContentType>;
  allWpContentType: WpContentTypeConnection;
  wpTaxonomy?: Maybe<WpTaxonomy>;
  allWpTaxonomy: WpTaxonomyConnection;
  wpPage?: Maybe<WpPage>;
  allWpPage: WpPageConnection;
  wpPost?: Maybe<WpPost>;
  allWpPost: WpPostConnection;
  wpCategory?: Maybe<WpCategory>;
  allWpCategory: WpCategoryConnection;
  wpPostFormat?: Maybe<WpPostFormat>;
  allWpPostFormat: WpPostFormatConnection;
  wpTag?: Maybe<WpTag>;
  allWpTag: WpTagConnection;
  wpUserRole?: Maybe<WpUserRole>;
  allWpUserRole: WpUserRoleConnection;
  wpMenu?: Maybe<WpMenu>;
  allWpMenu: WpMenuConnection;
  wpMenuItem?: Maybe<WpMenuItem>;
  allWpMenuItem: WpMenuItemConnection;
  wp?: Maybe<Wp>;
  allWp: WpConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryWpContentNodeArgs = {
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  terms?: Maybe<WpContentNodeToTermNodeConnectionFilterInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWpContentNodeArgs = {
  filter?: Maybe<WpContentNodeFilterInput>;
  sort?: Maybe<WpContentNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpTermNodeArgs = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWpTermNodeArgs = {
  filter?: Maybe<WpTermNodeFilterInput>;
  sort?: Maybe<WpTermNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpUserArgs = {
  avatar?: Maybe<WpAvatarFilterInput>;
  capKey?: Maybe<StringQueryOperatorInput>;
  capabilities?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpUserToCommentConnectionFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  extraCapabilities?: Maybe<StringQueryOperatorInput>;
  firstName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastName?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nicename?: Maybe<StringQueryOperatorInput>;
  nickname?: Maybe<StringQueryOperatorInput>;
  pages?: Maybe<WpUserToPageConnectionFilterInput>;
  posts?: Maybe<WpUserToPostConnectionFilterInput>;
  registeredDate?: Maybe<StringQueryOperatorInput>;
  roles?: Maybe<WpUserToUserRoleConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpUserArgs = {
  filter?: Maybe<WpUserFilterInput>;
  sort?: Maybe<WpUserSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpCommentArgs = {
  agent?: Maybe<StringQueryOperatorInput>;
  approved?: Maybe<BooleanQueryOperatorInput>;
  author?: Maybe<WpCommentToCommenterConnectionEdgeFilterInput>;
  authorIp?: Maybe<StringQueryOperatorInput>;
  commentedOn?: Maybe<WpCommentToContentNodeConnectionEdgeFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  karma?: Maybe<IntQueryOperatorInput>;
  wpParent?: Maybe<WpCommentToParentCommentConnectionEdgeFilterInput>;
  replies?: Maybe<WpCommentToCommentConnectionFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpCommentArgs = {
  filter?: Maybe<WpCommentFilterInput>;
  sort?: Maybe<WpCommentSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpMediaItemArgs = {
  altText?: Maybe<StringQueryOperatorInput>;
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeConnectionFilterInput>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpMediaItemToCommentConnectionFilterInput>;
  contentType?: Maybe<WpMediaItemToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  fileSize?: Maybe<IntQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  mediaDetails?: Maybe<WpMediaDetailsFilterInput>;
  mediaItemUrl?: Maybe<StringQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  wpParent?: Maybe<WpHierarchicalContentNodeToContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  terms?: Maybe<WpContentNodeToTermNodeConnectionFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  remoteFile?: Maybe<FileFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpMediaItemArgs = {
  filter?: Maybe<WpMediaItemFilterInput>;
  sort?: Maybe<WpMediaItemSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpContentTypeArgs = {
  archivePath?: Maybe<StringQueryOperatorInput>;
  canExport?: Maybe<BooleanQueryOperatorInput>;
  connectedTaxonomies?: Maybe<WpContentTypeToTaxonomyConnectionFilterInput>;
  contentNodes?: Maybe<WpContentTypeToContentNodeConnectionFilterInput>;
  deleteWithUser?: Maybe<BooleanQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  excludeFromSearch?: Maybe<BooleanQueryOperatorInput>;
  graphqlPluralName?: Maybe<StringQueryOperatorInput>;
  graphqlSingleName?: Maybe<StringQueryOperatorInput>;
  hasArchive?: Maybe<BooleanQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isFrontPage?: Maybe<BooleanQueryOperatorInput>;
  isPostsPage?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  labels?: Maybe<WpPostTypeLabelDetailsFilterInput>;
  menuIcon?: Maybe<StringQueryOperatorInput>;
  menuPosition?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  publiclyQueryable?: Maybe<BooleanQueryOperatorInput>;
  restBase?: Maybe<StringQueryOperatorInput>;
  restControllerClass?: Maybe<StringQueryOperatorInput>;
  showInAdminBar?: Maybe<BooleanQueryOperatorInput>;
  showInGraphql?: Maybe<BooleanQueryOperatorInput>;
  showInMenu?: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus?: Maybe<BooleanQueryOperatorInput>;
  showInRest?: Maybe<BooleanQueryOperatorInput>;
  showUi?: Maybe<BooleanQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpContentTypeArgs = {
  filter?: Maybe<WpContentTypeFilterInput>;
  sort?: Maybe<WpContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpTaxonomyArgs = {
  archivePath?: Maybe<StringQueryOperatorInput>;
  connectedContentTypes?: Maybe<WpTaxonomyToContentTypeConnectionFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  graphqlPluralName?: Maybe<StringQueryOperatorInput>;
  graphqlSingleName?: Maybe<StringQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  restBase?: Maybe<StringQueryOperatorInput>;
  restControllerClass?: Maybe<StringQueryOperatorInput>;
  showCloud?: Maybe<BooleanQueryOperatorInput>;
  showInAdminColumn?: Maybe<BooleanQueryOperatorInput>;
  showInGraphql?: Maybe<BooleanQueryOperatorInput>;
  showInMenu?: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus?: Maybe<BooleanQueryOperatorInput>;
  showInQuickEdit?: Maybe<BooleanQueryOperatorInput>;
  showInRest?: Maybe<BooleanQueryOperatorInput>;
  showUi?: Maybe<BooleanQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpTaxonomyArgs = {
  filter?: Maybe<WpTaxonomyFilterInput>;
  sort?: Maybe<WpTaxonomySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpPageArgs = {
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeConnectionFilterInput>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpPageToCommentConnectionFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpPageToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: Maybe<IntQueryOperatorInput>;
  featuredImageId?: Maybe<IdQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isFrontPage?: Maybe<BooleanQueryOperatorInput>;
  isPostsPage?: Maybe<BooleanQueryOperatorInput>;
  isRevision?: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  menuOrder?: Maybe<IntQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  wpParent?: Maybe<WpHierarchicalContentNodeToContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  terms?: Maybe<WpContentNodeToTermNodeConnectionFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpPageArgs = {
  filter?: Maybe<WpPageFilterInput>;
  sort?: Maybe<WpPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpPostArgs = {
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  categories?: Maybe<WpPostToCategoryConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpPostToCommentConnectionFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpPostToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: Maybe<IntQueryOperatorInput>;
  featuredImageId?: Maybe<IdQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isRevision?: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  pingStatus?: Maybe<StringQueryOperatorInput>;
  pinged?: Maybe<StringQueryOperatorInput>;
  postFormats?: Maybe<WpPostToPostFormatConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<WpPostToTagConnectionFilterInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  terms?: Maybe<WpContentNodeToTermNodeConnectionFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  toPing?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpPostArgs = {
  filter?: Maybe<WpPostFilterInput>;
  sort?: Maybe<WpPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpCategoryArgs = {
  ancestors?: Maybe<WpCategoryToAncestorsCategoryConnectionFilterInput>;
  wpChildren?: Maybe<WpCategoryToCategoryConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  wpParent?: Maybe<WpCategoryToParentCategoryConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  posts?: Maybe<WpCategoryToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpCategoryToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpCategoryArgs = {
  filter?: Maybe<WpCategoryFilterInput>;
  sort?: Maybe<WpCategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpPostFormatArgs = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<WpPostFormatToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpPostFormatToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpPostFormatArgs = {
  filter?: Maybe<WpPostFormatFilterInput>;
  sort?: Maybe<WpPostFormatSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpTagArgs = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<WpTagToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpTagToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpTagArgs = {
  filter?: Maybe<WpTagFilterInput>;
  sort?: Maybe<WpTagSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpUserRoleArgs = {
  capabilities?: Maybe<StringQueryOperatorInput>;
  displayName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpUserRoleArgs = {
  filter?: Maybe<WpUserRoleFilterInput>;
  sort?: Maybe<WpUserRoleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpMenuArgs = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menuItems?: Maybe<WpMenuToMenuItemConnectionFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpMenuArgs = {
  filter?: Maybe<WpMenuFilterInput>;
  sort?: Maybe<WpMenuSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpMenuItemArgs = {
  childItems?: Maybe<WpMenuItemToMenuItemConnectionFilterInput>;
  connectedNode?: Maybe<WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput>;
  cssClasses?: Maybe<StringQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  linkRelationship?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menu?: Maybe<WpMenuItemToMenuConnectionEdgeFilterInput>;
  order?: Maybe<IntQueryOperatorInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpMenuItemArgs = {
  filter?: Maybe<WpMenuItemFilterInput>;
  sort?: Maybe<WpMenuItemSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpArgs = {
  allSettings?: Maybe<WpSettingsFilterInput>;
  discussionSettings?: Maybe<WpDiscussionSettingsFilterInput>;
  generalSettings?: Maybe<WpGeneralSettingsFilterInput>;
  readingSettings?: Maybe<WpReadingSettingsFilterInput>;
  writingSettings?: Maybe<WpWritingSettingsFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpArgs = {
  filter?: Maybe<WpFilterInput>;
  sort?: Maybe<WpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___slug'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___url'
  | 'pluginCreator___pluginOptions___verbose'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___url'
  | 'pluginOptions___verbose'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___fileName'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  url?: Maybe<Scalars['String']>;
  verbose?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  verbose?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Wp = Node & {
  allSettings?: Maybe<WpSettings>;
  discussionSettings?: Maybe<WpDiscussionSettings>;
  generalSettings?: Maybe<WpGeneralSettings>;
  readingSettings?: Maybe<WpReadingSettings>;
  writingSettings?: Maybe<WpWritingSettings>;
  nodeType?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpAvatar = {
  default?: Maybe<Scalars['String']>;
  extraAttr?: Maybe<Scalars['String']>;
  forceDefault?: Maybe<Scalars['Boolean']>;
  foundAvatar?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['String']>;
  scheme?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type WpAvatarFilterInput = {
  default?: Maybe<StringQueryOperatorInput>;
  extraAttr?: Maybe<StringQueryOperatorInput>;
  forceDefault?: Maybe<BooleanQueryOperatorInput>;
  foundAvatar?: Maybe<BooleanQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  rating?: Maybe<StringQueryOperatorInput>;
  scheme?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type WpCategory = Node & WpNode & WpTermNode & WpUniformResourceIdentifiable & WpDatabaseIdentifier & WpHierarchicalTermNode & WpMenuItemLinkable & {
  ancestors?: Maybe<WpCategoryToAncestorsCategoryConnection>;
  wpChildren?: Maybe<WpCategoryToCategoryConnection>;
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  wpParent?: Maybe<WpCategoryToParentCategoryConnectionEdge>;
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
  posts?: Maybe<WpCategoryToPostConnection>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<WpCategoryToTaxonomyConnectionEdge>;
  termGroupId?: Maybe<Scalars['Int']>;
  termTaxonomyId?: Maybe<Scalars['Int']>;
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpCategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCategoryEdge>;
  nodes: Array<WpCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpCategoryGroupConnection>;
};


export type WpCategoryConnectionDistinctArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpCategoryFieldsEnum;
};

export type WpCategoryEdge = {
  next?: Maybe<WpCategory>;
  node: WpCategory;
  previous?: Maybe<WpCategory>;
};

export type WpCategoryFieldsEnum = 
  | 'ancestors___nodes'
  | 'ancestors___nodes___ancestors___nodes'
  | 'ancestors___nodes___wpChildren___nodes'
  | 'ancestors___nodes___count'
  | 'ancestors___nodes___databaseId'
  | 'ancestors___nodes___description'
  | 'ancestors___nodes___id'
  | 'ancestors___nodes___link'
  | 'ancestors___nodes___name'
  | 'ancestors___nodes___parentDatabaseId'
  | 'ancestors___nodes___parentId'
  | 'ancestors___nodes___posts___nodes'
  | 'ancestors___nodes___slug'
  | 'ancestors___nodes___termGroupId'
  | 'ancestors___nodes___termTaxonomyId'
  | 'ancestors___nodes___uri'
  | 'ancestors___nodes___nodeType'
  | 'ancestors___nodes___parent___id'
  | 'ancestors___nodes___parent___children'
  | 'ancestors___nodes___children'
  | 'ancestors___nodes___children___id'
  | 'ancestors___nodes___children___children'
  | 'ancestors___nodes___internal___content'
  | 'ancestors___nodes___internal___contentDigest'
  | 'ancestors___nodes___internal___description'
  | 'ancestors___nodes___internal___fieldOwners'
  | 'ancestors___nodes___internal___ignoreType'
  | 'ancestors___nodes___internal___mediaType'
  | 'ancestors___nodes___internal___owner'
  | 'ancestors___nodes___internal___type'
  | 'wpChildren___nodes'
  | 'wpChildren___nodes___ancestors___nodes'
  | 'wpChildren___nodes___wpChildren___nodes'
  | 'wpChildren___nodes___count'
  | 'wpChildren___nodes___databaseId'
  | 'wpChildren___nodes___description'
  | 'wpChildren___nodes___id'
  | 'wpChildren___nodes___link'
  | 'wpChildren___nodes___name'
  | 'wpChildren___nodes___parentDatabaseId'
  | 'wpChildren___nodes___parentId'
  | 'wpChildren___nodes___posts___nodes'
  | 'wpChildren___nodes___slug'
  | 'wpChildren___nodes___termGroupId'
  | 'wpChildren___nodes___termTaxonomyId'
  | 'wpChildren___nodes___uri'
  | 'wpChildren___nodes___nodeType'
  | 'wpChildren___nodes___parent___id'
  | 'wpChildren___nodes___parent___children'
  | 'wpChildren___nodes___children'
  | 'wpChildren___nodes___children___id'
  | 'wpChildren___nodes___children___children'
  | 'wpChildren___nodes___internal___content'
  | 'wpChildren___nodes___internal___contentDigest'
  | 'wpChildren___nodes___internal___description'
  | 'wpChildren___nodes___internal___fieldOwners'
  | 'wpChildren___nodes___internal___ignoreType'
  | 'wpChildren___nodes___internal___mediaType'
  | 'wpChildren___nodes___internal___owner'
  | 'wpChildren___nodes___internal___type'
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'link'
  | 'name'
  | 'wpParent___node___ancestors___nodes'
  | 'wpParent___node___wpChildren___nodes'
  | 'wpParent___node___count'
  | 'wpParent___node___databaseId'
  | 'wpParent___node___description'
  | 'wpParent___node___id'
  | 'wpParent___node___link'
  | 'wpParent___node___name'
  | 'wpParent___node___parentDatabaseId'
  | 'wpParent___node___parentId'
  | 'wpParent___node___posts___nodes'
  | 'wpParent___node___slug'
  | 'wpParent___node___termGroupId'
  | 'wpParent___node___termTaxonomyId'
  | 'wpParent___node___uri'
  | 'wpParent___node___nodeType'
  | 'wpParent___node___parent___id'
  | 'wpParent___node___parent___children'
  | 'wpParent___node___children'
  | 'wpParent___node___children___id'
  | 'wpParent___node___children___children'
  | 'wpParent___node___internal___content'
  | 'wpParent___node___internal___contentDigest'
  | 'wpParent___node___internal___description'
  | 'wpParent___node___internal___fieldOwners'
  | 'wpParent___node___internal___ignoreType'
  | 'wpParent___node___internal___mediaType'
  | 'wpParent___node___internal___owner'
  | 'wpParent___node___internal___type'
  | 'parentDatabaseId'
  | 'parentId'
  | 'posts___nodes'
  | 'posts___nodes___authorDatabaseId'
  | 'posts___nodes___authorId'
  | 'posts___nodes___categories___nodes'
  | 'posts___nodes___commentCount'
  | 'posts___nodes___commentStatus'
  | 'posts___nodes___comments___nodes'
  | 'posts___nodes___content'
  | 'posts___nodes___databaseId'
  | 'posts___nodes___date'
  | 'posts___nodes___dateGmt'
  | 'posts___nodes___desiredSlug'
  | 'posts___nodes___enclosure'
  | 'posts___nodes___excerpt'
  | 'posts___nodes___featuredImageDatabaseId'
  | 'posts___nodes___featuredImageId'
  | 'posts___nodes___guid'
  | 'posts___nodes___id'
  | 'posts___nodes___isRevision'
  | 'posts___nodes___link'
  | 'posts___nodes___modified'
  | 'posts___nodes___modifiedGmt'
  | 'posts___nodes___pingStatus'
  | 'posts___nodes___pinged'
  | 'posts___nodes___postFormats___nodes'
  | 'posts___nodes___slug'
  | 'posts___nodes___status'
  | 'posts___nodes___tags___nodes'
  | 'posts___nodes___template___templateFile'
  | 'posts___nodes___template___templateName'
  | 'posts___nodes___terms___nodes'
  | 'posts___nodes___title'
  | 'posts___nodes___toPing'
  | 'posts___nodes___uri'
  | 'posts___nodes___nodeType'
  | 'posts___nodes___parent___id'
  | 'posts___nodes___parent___children'
  | 'posts___nodes___children'
  | 'posts___nodes___children___id'
  | 'posts___nodes___children___children'
  | 'posts___nodes___internal___content'
  | 'posts___nodes___internal___contentDigest'
  | 'posts___nodes___internal___description'
  | 'posts___nodes___internal___fieldOwners'
  | 'posts___nodes___internal___ignoreType'
  | 'posts___nodes___internal___mediaType'
  | 'posts___nodes___internal___owner'
  | 'posts___nodes___internal___type'
  | 'slug'
  | 'taxonomy___node___archivePath'
  | 'taxonomy___node___connectedContentTypes___nodes'
  | 'taxonomy___node___description'
  | 'taxonomy___node___graphqlPluralName'
  | 'taxonomy___node___graphqlSingleName'
  | 'taxonomy___node___hierarchical'
  | 'taxonomy___node___id'
  | 'taxonomy___node___label'
  | 'taxonomy___node___name'
  | 'taxonomy___node___public'
  | 'taxonomy___node___restBase'
  | 'taxonomy___node___restControllerClass'
  | 'taxonomy___node___showCloud'
  | 'taxonomy___node___showInAdminColumn'
  | 'taxonomy___node___showInGraphql'
  | 'taxonomy___node___showInMenu'
  | 'taxonomy___node___showInNavMenus'
  | 'taxonomy___node___showInQuickEdit'
  | 'taxonomy___node___showInRest'
  | 'taxonomy___node___showUi'
  | 'taxonomy___node___nodeType'
  | 'taxonomy___node___parent___id'
  | 'taxonomy___node___parent___children'
  | 'taxonomy___node___children'
  | 'taxonomy___node___children___id'
  | 'taxonomy___node___children___children'
  | 'taxonomy___node___internal___content'
  | 'taxonomy___node___internal___contentDigest'
  | 'taxonomy___node___internal___description'
  | 'taxonomy___node___internal___fieldOwners'
  | 'taxonomy___node___internal___ignoreType'
  | 'taxonomy___node___internal___mediaType'
  | 'taxonomy___node___internal___owner'
  | 'taxonomy___node___internal___type'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpCategoryFilterInput = {
  ancestors?: Maybe<WpCategoryToAncestorsCategoryConnectionFilterInput>;
  wpChildren?: Maybe<WpCategoryToCategoryConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  wpParent?: Maybe<WpCategoryToParentCategoryConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  posts?: Maybe<WpCategoryToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpCategoryToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpCategoryFilterListInput = {
  elemMatch?: Maybe<WpCategoryFilterInput>;
};

export type WpCategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCategoryEdge>;
  nodes: Array<WpCategory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpCategorySortInput = {
  fields?: Maybe<Array<Maybe<WpCategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpCategoryToAncestorsCategoryConnection = {
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

export type WpCategoryToAncestorsCategoryConnectionFilterInput = {
  nodes?: Maybe<WpCategoryFilterListInput>;
};

export type WpCategoryToCategoryConnection = {
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

export type WpCategoryToCategoryConnectionFilterInput = {
  nodes?: Maybe<WpCategoryFilterListInput>;
};

export type WpCategoryToParentCategoryConnectionEdge = {
  node?: Maybe<WpCategory>;
};

export type WpCategoryToParentCategoryConnectionEdgeFilterInput = {
  node?: Maybe<WpCategoryFilterInput>;
};

export type WpCategoryToPostConnection = {
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpCategoryToPostConnectionFilterInput = {
  nodes?: Maybe<WpPostFilterListInput>;
};

export type WpCategoryToTaxonomyConnectionEdge = {
  node?: Maybe<WpTaxonomy>;
};

export type WpCategoryToTaxonomyConnectionEdgeFilterInput = {
  node?: Maybe<WpTaxonomyFilterInput>;
};

export type WpComment = Node & WpNode & WpDatabaseIdentifier & {
  agent?: Maybe<Scalars['String']>;
  approved?: Maybe<Scalars['Boolean']>;
  author?: Maybe<WpCommentToCommenterConnectionEdge>;
  authorIp?: Maybe<Scalars['String']>;
  commentedOn?: Maybe<WpCommentToContentNodeConnectionEdge>;
  content?: Maybe<Scalars['String']>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['Date']>;
  dateGmt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  karma?: Maybe<Scalars['Int']>;
  wpParent?: Maybe<WpCommentToParentCommentConnectionEdge>;
  replies?: Maybe<WpCommentToCommentConnection>;
  type?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type WpCommentDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpCommentDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpCommentConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCommentEdge>;
  nodes: Array<WpComment>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpCommentGroupConnection>;
};


export type WpCommentConnectionDistinctArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpCommentFieldsEnum;
};

export type WpCommentEdge = {
  next?: Maybe<WpComment>;
  node: WpComment;
  previous?: Maybe<WpComment>;
};

export type WpCommenter = {
  databaseId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCommenterFilterInput = {
  databaseId?: Maybe<IntQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IdQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type WpCommentFieldsEnum = 
  | 'agent'
  | 'approved'
  | 'author___node___databaseId'
  | 'author___node___email'
  | 'author___node___id'
  | 'author___node___name'
  | 'author___node___url'
  | 'authorIp'
  | 'commentedOn___node___databaseId'
  | 'commentedOn___node___date'
  | 'commentedOn___node___dateGmt'
  | 'commentedOn___node___desiredSlug'
  | 'commentedOn___node___enclosure'
  | 'commentedOn___node___guid'
  | 'commentedOn___node___id'
  | 'commentedOn___node___link'
  | 'commentedOn___node___modified'
  | 'commentedOn___node___modifiedGmt'
  | 'commentedOn___node___slug'
  | 'commentedOn___node___status'
  | 'commentedOn___node___terms___nodes'
  | 'commentedOn___node___uri'
  | 'commentedOn___node___nodeType'
  | 'content'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'id'
  | 'karma'
  | 'wpParent___node___agent'
  | 'wpParent___node___approved'
  | 'wpParent___node___authorIp'
  | 'wpParent___node___content'
  | 'wpParent___node___databaseId'
  | 'wpParent___node___date'
  | 'wpParent___node___dateGmt'
  | 'wpParent___node___id'
  | 'wpParent___node___karma'
  | 'wpParent___node___replies___nodes'
  | 'wpParent___node___type'
  | 'wpParent___node___nodeType'
  | 'wpParent___node___parent___id'
  | 'wpParent___node___parent___children'
  | 'wpParent___node___children'
  | 'wpParent___node___children___id'
  | 'wpParent___node___children___children'
  | 'wpParent___node___internal___content'
  | 'wpParent___node___internal___contentDigest'
  | 'wpParent___node___internal___description'
  | 'wpParent___node___internal___fieldOwners'
  | 'wpParent___node___internal___ignoreType'
  | 'wpParent___node___internal___mediaType'
  | 'wpParent___node___internal___owner'
  | 'wpParent___node___internal___type'
  | 'replies___nodes'
  | 'replies___nodes___agent'
  | 'replies___nodes___approved'
  | 'replies___nodes___authorIp'
  | 'replies___nodes___content'
  | 'replies___nodes___databaseId'
  | 'replies___nodes___date'
  | 'replies___nodes___dateGmt'
  | 'replies___nodes___id'
  | 'replies___nodes___karma'
  | 'replies___nodes___replies___nodes'
  | 'replies___nodes___type'
  | 'replies___nodes___nodeType'
  | 'replies___nodes___parent___id'
  | 'replies___nodes___parent___children'
  | 'replies___nodes___children'
  | 'replies___nodes___children___id'
  | 'replies___nodes___children___children'
  | 'replies___nodes___internal___content'
  | 'replies___nodes___internal___contentDigest'
  | 'replies___nodes___internal___description'
  | 'replies___nodes___internal___fieldOwners'
  | 'replies___nodes___internal___ignoreType'
  | 'replies___nodes___internal___mediaType'
  | 'replies___nodes___internal___owner'
  | 'replies___nodes___internal___type'
  | 'type'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpCommentFilterInput = {
  agent?: Maybe<StringQueryOperatorInput>;
  approved?: Maybe<BooleanQueryOperatorInput>;
  author?: Maybe<WpCommentToCommenterConnectionEdgeFilterInput>;
  authorIp?: Maybe<StringQueryOperatorInput>;
  commentedOn?: Maybe<WpCommentToContentNodeConnectionEdgeFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  karma?: Maybe<IntQueryOperatorInput>;
  wpParent?: Maybe<WpCommentToParentCommentConnectionEdgeFilterInput>;
  replies?: Maybe<WpCommentToCommentConnectionFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpCommentFilterListInput = {
  elemMatch?: Maybe<WpCommentFilterInput>;
};

export type WpCommentGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCommentEdge>;
  nodes: Array<WpComment>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpCommentSortInput = {
  fields?: Maybe<Array<Maybe<WpCommentFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpCommentToCommentConnection = {
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpCommentToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

export type WpCommentToCommenterConnectionEdge = {
  node?: Maybe<WpCommenter>;
};

export type WpCommentToCommenterConnectionEdgeFilterInput = {
  node?: Maybe<WpCommenterFilterInput>;
};

export type WpCommentToContentNodeConnectionEdge = {
  node?: Maybe<WpContentNode>;
};

export type WpCommentToContentNodeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentNodeFilterInput>;
};

export type WpCommentToParentCommentConnectionEdge = {
  node?: Maybe<WpComment>;
};

export type WpCommentToParentCommentConnectionEdgeFilterInput = {
  node?: Maybe<WpCommentFilterInput>;
};

export type WpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpEdge>;
  nodes: Array<Wp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpGroupConnection>;
};


export type WpConnectionDistinctArgs = {
  field: WpFieldsEnum;
};


export type WpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpFieldsEnum;
};

export type WpContentNode = {
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['Date']>;
  dateGmt?: Maybe<Scalars['Date']>;
  desiredSlug?: Maybe<Scalars['String']>;
  enclosure?: Maybe<Scalars['String']>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  link?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['Date']>;
  modifiedGmt?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  terms?: Maybe<WpContentNodeToTermNodeConnection>;
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
};


export type WpContentNodeDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpContentNodeDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpContentNodeModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpContentNodeModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpContentNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpContentNodeEdge>;
  nodes: Array<WpContentNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpContentNodeGroupConnection>;
};


export type WpContentNodeConnectionDistinctArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpContentNodeFieldsEnum;
};

export type WpContentNodeEdge = {
  next?: Maybe<WpContentNode>;
  node: WpContentNode;
  previous?: Maybe<WpContentNode>;
};

export type WpContentNodeFieldsEnum = 
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'guid'
  | 'id'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'modified'
  | 'modifiedGmt'
  | 'slug'
  | 'status'
  | 'terms___nodes'
  | 'terms___nodes___count'
  | 'terms___nodes___databaseId'
  | 'terms___nodes___description'
  | 'terms___nodes___id'
  | 'terms___nodes___link'
  | 'terms___nodes___name'
  | 'terms___nodes___slug'
  | 'terms___nodes___termGroupId'
  | 'terms___nodes___termTaxonomyId'
  | 'terms___nodes___uri'
  | 'terms___nodes___nodeType'
  | 'uri'
  | 'nodeType';

export type WpContentNodeFilterInput = {
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  terms?: Maybe<WpContentNodeToTermNodeConnectionFilterInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type WpContentNodeFilterListInput = {
  elemMatch?: Maybe<WpContentNodeFilterInput>;
};

export type WpContentNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpContentNodeEdge>;
  nodes: Array<WpContentNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpContentNodeSortInput = {
  fields?: Maybe<Array<Maybe<WpContentNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpContentNodeToEditLastConnectionEdge = {
  node?: Maybe<WpUser>;
};

export type WpContentNodeToEditLastConnectionEdgeFilterInput = {
  node?: Maybe<WpUserFilterInput>;
};

export type WpContentNodeToEditLockConnectionEdge = {
  lockTimestamp?: Maybe<Scalars['String']>;
  node?: Maybe<WpUser>;
};

export type WpContentNodeToTermNodeConnection = {
  nodes?: Maybe<Array<Maybe<WpTermNode>>>;
};

export type WpContentNodeToTermNodeConnectionFilterInput = {
  nodes?: Maybe<WpTermNodeFilterListInput>;
};

export type WpContentTemplate = {
  templateFile?: Maybe<Scalars['String']>;
  templateName?: Maybe<Scalars['String']>;
};

export type WpContentTemplateFilterInput = {
  templateFile?: Maybe<StringQueryOperatorInput>;
  templateName?: Maybe<StringQueryOperatorInput>;
};

export type WpContentType = Node & WpNode & WpUniformResourceIdentifiable & {
  archivePath?: Maybe<Scalars['String']>;
  canExport?: Maybe<Scalars['Boolean']>;
  connectedTaxonomies?: Maybe<WpContentTypeToTaxonomyConnection>;
  contentNodes?: Maybe<WpContentTypeToContentNodeConnection>;
  deleteWithUser?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  excludeFromSearch?: Maybe<Scalars['Boolean']>;
  graphqlPluralName?: Maybe<Scalars['String']>;
  graphqlSingleName?: Maybe<Scalars['String']>;
  hasArchive?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isFrontPage: Scalars['Boolean'];
  isPostsPage: Scalars['Boolean'];
  label?: Maybe<Scalars['String']>;
  labels?: Maybe<WpPostTypeLabelDetails>;
  menuIcon?: Maybe<Scalars['String']>;
  menuPosition?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  publiclyQueryable?: Maybe<Scalars['Boolean']>;
  restBase?: Maybe<Scalars['String']>;
  restControllerClass?: Maybe<Scalars['String']>;
  showInAdminBar?: Maybe<Scalars['Boolean']>;
  showInGraphql?: Maybe<Scalars['Boolean']>;
  showInMenu?: Maybe<Scalars['Boolean']>;
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  showInRest?: Maybe<Scalars['Boolean']>;
  showUi?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpContentTypeEdge>;
  nodes: Array<WpContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpContentTypeGroupConnection>;
};


export type WpContentTypeConnectionDistinctArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpContentTypeFieldsEnum;
};

export type WpContentTypeEdge = {
  next?: Maybe<WpContentType>;
  node: WpContentType;
  previous?: Maybe<WpContentType>;
};

export type WpContentTypeFieldsEnum = 
  | 'archivePath'
  | 'canExport'
  | 'connectedTaxonomies___nodes'
  | 'connectedTaxonomies___nodes___archivePath'
  | 'connectedTaxonomies___nodes___connectedContentTypes___nodes'
  | 'connectedTaxonomies___nodes___description'
  | 'connectedTaxonomies___nodes___graphqlPluralName'
  | 'connectedTaxonomies___nodes___graphqlSingleName'
  | 'connectedTaxonomies___nodes___hierarchical'
  | 'connectedTaxonomies___nodes___id'
  | 'connectedTaxonomies___nodes___label'
  | 'connectedTaxonomies___nodes___name'
  | 'connectedTaxonomies___nodes___public'
  | 'connectedTaxonomies___nodes___restBase'
  | 'connectedTaxonomies___nodes___restControllerClass'
  | 'connectedTaxonomies___nodes___showCloud'
  | 'connectedTaxonomies___nodes___showInAdminColumn'
  | 'connectedTaxonomies___nodes___showInGraphql'
  | 'connectedTaxonomies___nodes___showInMenu'
  | 'connectedTaxonomies___nodes___showInNavMenus'
  | 'connectedTaxonomies___nodes___showInQuickEdit'
  | 'connectedTaxonomies___nodes___showInRest'
  | 'connectedTaxonomies___nodes___showUi'
  | 'connectedTaxonomies___nodes___nodeType'
  | 'connectedTaxonomies___nodes___parent___id'
  | 'connectedTaxonomies___nodes___parent___children'
  | 'connectedTaxonomies___nodes___children'
  | 'connectedTaxonomies___nodes___children___id'
  | 'connectedTaxonomies___nodes___children___children'
  | 'connectedTaxonomies___nodes___internal___content'
  | 'connectedTaxonomies___nodes___internal___contentDigest'
  | 'connectedTaxonomies___nodes___internal___description'
  | 'connectedTaxonomies___nodes___internal___fieldOwners'
  | 'connectedTaxonomies___nodes___internal___ignoreType'
  | 'connectedTaxonomies___nodes___internal___mediaType'
  | 'connectedTaxonomies___nodes___internal___owner'
  | 'connectedTaxonomies___nodes___internal___type'
  | 'contentNodes___nodes'
  | 'contentNodes___nodes___databaseId'
  | 'contentNodes___nodes___date'
  | 'contentNodes___nodes___dateGmt'
  | 'contentNodes___nodes___desiredSlug'
  | 'contentNodes___nodes___enclosure'
  | 'contentNodes___nodes___guid'
  | 'contentNodes___nodes___id'
  | 'contentNodes___nodes___link'
  | 'contentNodes___nodes___modified'
  | 'contentNodes___nodes___modifiedGmt'
  | 'contentNodes___nodes___slug'
  | 'contentNodes___nodes___status'
  | 'contentNodes___nodes___terms___nodes'
  | 'contentNodes___nodes___uri'
  | 'contentNodes___nodes___nodeType'
  | 'deleteWithUser'
  | 'description'
  | 'excludeFromSearch'
  | 'graphqlPluralName'
  | 'graphqlSingleName'
  | 'hasArchive'
  | 'hierarchical'
  | 'id'
  | 'isFrontPage'
  | 'isPostsPage'
  | 'label'
  | 'labels___addNew'
  | 'labels___addNewItem'
  | 'labels___allItems'
  | 'labels___archives'
  | 'labels___attributes'
  | 'labels___editItem'
  | 'labels___featuredImage'
  | 'labels___filterItemsList'
  | 'labels___insertIntoItem'
  | 'labels___itemsList'
  | 'labels___itemsListNavigation'
  | 'labels___menuName'
  | 'labels___name'
  | 'labels___newItem'
  | 'labels___notFound'
  | 'labels___notFoundInTrash'
  | 'labels___parentItemColon'
  | 'labels___removeFeaturedImage'
  | 'labels___searchItems'
  | 'labels___setFeaturedImage'
  | 'labels___singularName'
  | 'labels___uploadedToThisItem'
  | 'labels___useFeaturedImage'
  | 'labels___viewItem'
  | 'labels___viewItems'
  | 'menuIcon'
  | 'menuPosition'
  | 'name'
  | 'public'
  | 'publiclyQueryable'
  | 'restBase'
  | 'restControllerClass'
  | 'showInAdminBar'
  | 'showInGraphql'
  | 'showInMenu'
  | 'showInNavMenus'
  | 'showInRest'
  | 'showUi'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpContentTypeFilterInput = {
  archivePath?: Maybe<StringQueryOperatorInput>;
  canExport?: Maybe<BooleanQueryOperatorInput>;
  connectedTaxonomies?: Maybe<WpContentTypeToTaxonomyConnectionFilterInput>;
  contentNodes?: Maybe<WpContentTypeToContentNodeConnectionFilterInput>;
  deleteWithUser?: Maybe<BooleanQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  excludeFromSearch?: Maybe<BooleanQueryOperatorInput>;
  graphqlPluralName?: Maybe<StringQueryOperatorInput>;
  graphqlSingleName?: Maybe<StringQueryOperatorInput>;
  hasArchive?: Maybe<BooleanQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isFrontPage?: Maybe<BooleanQueryOperatorInput>;
  isPostsPage?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  labels?: Maybe<WpPostTypeLabelDetailsFilterInput>;
  menuIcon?: Maybe<StringQueryOperatorInput>;
  menuPosition?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  publiclyQueryable?: Maybe<BooleanQueryOperatorInput>;
  restBase?: Maybe<StringQueryOperatorInput>;
  restControllerClass?: Maybe<StringQueryOperatorInput>;
  showInAdminBar?: Maybe<BooleanQueryOperatorInput>;
  showInGraphql?: Maybe<BooleanQueryOperatorInput>;
  showInMenu?: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus?: Maybe<BooleanQueryOperatorInput>;
  showInRest?: Maybe<BooleanQueryOperatorInput>;
  showUi?: Maybe<BooleanQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpContentTypeFilterListInput = {
  elemMatch?: Maybe<WpContentTypeFilterInput>;
};

export type WpContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpContentTypeEdge>;
  nodes: Array<WpContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<WpContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpContentTypeToContentNodeConnection = {
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpContentTypeToContentNodeConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

export type WpContentTypeToTaxonomyConnection = {
  nodes?: Maybe<Array<Maybe<WpTaxonomy>>>;
};

export type WpContentTypeToTaxonomyConnectionFilterInput = {
  nodes?: Maybe<WpTaxonomyFilterListInput>;
};

export type WpCustomTemplateTemplate = WpContentTemplate & {
  templateFile?: Maybe<Scalars['String']>;
  templateName?: Maybe<Scalars['String']>;
};

export type WpDatabaseIdentifier = {
  databaseId: Scalars['Int'];
};

export type WpDefaultTemplate = WpContentTemplate & {
  templateFile?: Maybe<Scalars['String']>;
  templateName?: Maybe<Scalars['String']>;
};

export type WpDiscussionSettings = {
  defaultCommentStatus?: Maybe<Scalars['String']>;
  defaultPingStatus?: Maybe<Scalars['String']>;
};

export type WpDiscussionSettingsFilterInput = {
  defaultCommentStatus?: Maybe<StringQueryOperatorInput>;
  defaultPingStatus?: Maybe<StringQueryOperatorInput>;
};

export type WpEdge = {
  next?: Maybe<Wp>;
  node: Wp;
  previous?: Maybe<Wp>;
};

export type WpFieldsEnum = 
  | 'allSettings___discussionSettingsDefaultCommentStatus'
  | 'allSettings___discussionSettingsDefaultPingStatus'
  | 'allSettings___generalSettingsDateFormat'
  | 'allSettings___generalSettingsDescription'
  | 'allSettings___generalSettingsEmail'
  | 'allSettings___generalSettingsLanguage'
  | 'allSettings___generalSettingsStartOfWeek'
  | 'allSettings___generalSettingsTimeFormat'
  | 'allSettings___generalSettingsTimezone'
  | 'allSettings___generalSettingsTitle'
  | 'allSettings___generalSettingsUrl'
  | 'allSettings___readingSettingsPostsPerPage'
  | 'allSettings___writingSettingsDefaultCategory'
  | 'allSettings___writingSettingsDefaultPostFormat'
  | 'allSettings___writingSettingsUseSmilies'
  | 'discussionSettings___defaultCommentStatus'
  | 'discussionSettings___defaultPingStatus'
  | 'generalSettings___dateFormat'
  | 'generalSettings___description'
  | 'generalSettings___email'
  | 'generalSettings___language'
  | 'generalSettings___startOfWeek'
  | 'generalSettings___timeFormat'
  | 'generalSettings___timezone'
  | 'generalSettings___title'
  | 'generalSettings___url'
  | 'readingSettings___postsPerPage'
  | 'writingSettings___defaultCategory'
  | 'writingSettings___defaultPostFormat'
  | 'writingSettings___useSmilies'
  | 'nodeType'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpFilterInput = {
  allSettings?: Maybe<WpSettingsFilterInput>;
  discussionSettings?: Maybe<WpDiscussionSettingsFilterInput>;
  generalSettings?: Maybe<WpGeneralSettingsFilterInput>;
  readingSettings?: Maybe<WpReadingSettingsFilterInput>;
  writingSettings?: Maybe<WpWritingSettingsFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpGeneralSettings = {
  dateFormat?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  startOfWeek?: Maybe<Scalars['Int']>;
  timeFormat?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpGeneralSettingsFilterInput = {
  dateFormat?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  startOfWeek?: Maybe<IntQueryOperatorInput>;
  timeFormat?: Maybe<StringQueryOperatorInput>;
  timezone?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type WpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpEdge>;
  nodes: Array<Wp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpHierarchicalContentNode = {
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeConnection>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeConnection>;
  wpParent?: Maybe<WpHierarchicalContentNodeToContentNodeConnectionEdge>;
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
};

export type WpHierarchicalContentNodeToContentNodeConnection = {
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpHierarchicalContentNodeToContentNodeConnectionEdge = {
  node?: Maybe<WpContentNode>;
};

export type WpHierarchicalContentNodeToContentNodeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentNodeFilterInput>;
};

export type WpHierarchicalContentNodeToContentNodeConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

export type WpHierarchicalTermNode = {
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
};

export type WpMediaDetails = {
  file?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  meta?: Maybe<WpMediaItemMeta>;
  sizes?: Maybe<Array<Maybe<WpMediaSize>>>;
  width?: Maybe<Scalars['Int']>;
};

export type WpMediaDetailsFilterInput = {
  file?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  meta?: Maybe<WpMediaItemMetaFilterInput>;
  sizes?: Maybe<WpMediaSizeFilterListInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type WpMediaItem = Node & WpNode & WpContentNode & WpUniformResourceIdentifiable & WpDatabaseIdentifier & WpNodeWithTitle & WpNodeWithAuthor & WpNodeWithComments & WpHierarchicalContentNode & {
  altText?: Maybe<Scalars['String']>;
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeConnection>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  authorDatabaseId?: Maybe<Scalars['Int']>;
  authorId?: Maybe<Scalars['ID']>;
  caption?: Maybe<Scalars['String']>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeConnection>;
  commentCount?: Maybe<Scalars['Int']>;
  commentStatus?: Maybe<Scalars['String']>;
  comments?: Maybe<WpMediaItemToCommentConnection>;
  contentType?: Maybe<WpMediaItemToContentTypeConnectionEdge>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['Date']>;
  dateGmt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  desiredSlug?: Maybe<Scalars['String']>;
  enclosure?: Maybe<Scalars['String']>;
  fileSize?: Maybe<Scalars['Int']>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  link?: Maybe<Scalars['String']>;
  mediaDetails?: Maybe<WpMediaDetails>;
  mediaItemUrl?: Maybe<Scalars['String']>;
  mediaType?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['Date']>;
  modifiedGmt?: Maybe<Scalars['Date']>;
  wpParent?: Maybe<WpHierarchicalContentNodeToContentNodeConnectionEdge>;
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
  sizes?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  template?: Maybe<WpContentTemplate>;
  terms?: Maybe<WpContentNodeToTermNodeConnection>;
  title?: Maybe<Scalars['String']>;
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  /** @deprecated MediaItem.remoteFile was renamed to localFile */
  remoteFile?: Maybe<File>;
  localFile?: Maybe<File>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type WpMediaItemDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpMediaItemDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpMediaItemModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpMediaItemModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpMediaItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMediaItemEdge>;
  nodes: Array<WpMediaItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpMediaItemGroupConnection>;
};


export type WpMediaItemConnectionDistinctArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpMediaItemFieldsEnum;
};

export type WpMediaItemEdge = {
  next?: Maybe<WpMediaItem>;
  node: WpMediaItem;
  previous?: Maybe<WpMediaItem>;
};

export type WpMediaItemFieldsEnum = 
  | 'altText'
  | 'ancestors___nodes'
  | 'ancestors___nodes___databaseId'
  | 'ancestors___nodes___date'
  | 'ancestors___nodes___dateGmt'
  | 'ancestors___nodes___desiredSlug'
  | 'ancestors___nodes___enclosure'
  | 'ancestors___nodes___guid'
  | 'ancestors___nodes___id'
  | 'ancestors___nodes___link'
  | 'ancestors___nodes___modified'
  | 'ancestors___nodes___modifiedGmt'
  | 'ancestors___nodes___slug'
  | 'ancestors___nodes___status'
  | 'ancestors___nodes___terms___nodes'
  | 'ancestors___nodes___uri'
  | 'ancestors___nodes___nodeType'
  | 'author___node___avatar___default'
  | 'author___node___avatar___extraAttr'
  | 'author___node___avatar___forceDefault'
  | 'author___node___avatar___foundAvatar'
  | 'author___node___avatar___height'
  | 'author___node___avatar___rating'
  | 'author___node___avatar___scheme'
  | 'author___node___avatar___size'
  | 'author___node___avatar___url'
  | 'author___node___avatar___width'
  | 'author___node___capKey'
  | 'author___node___capabilities'
  | 'author___node___comments___nodes'
  | 'author___node___databaseId'
  | 'author___node___description'
  | 'author___node___email'
  | 'author___node___extraCapabilities'
  | 'author___node___firstName'
  | 'author___node___id'
  | 'author___node___lastName'
  | 'author___node___locale'
  | 'author___node___name'
  | 'author___node___nicename'
  | 'author___node___nickname'
  | 'author___node___pages___nodes'
  | 'author___node___posts___nodes'
  | 'author___node___registeredDate'
  | 'author___node___roles___nodes'
  | 'author___node___slug'
  | 'author___node___uri'
  | 'author___node___url'
  | 'author___node___username'
  | 'author___node___nodeType'
  | 'author___node___parent___id'
  | 'author___node___parent___children'
  | 'author___node___children'
  | 'author___node___children___id'
  | 'author___node___children___children'
  | 'author___node___internal___content'
  | 'author___node___internal___contentDigest'
  | 'author___node___internal___description'
  | 'author___node___internal___fieldOwners'
  | 'author___node___internal___ignoreType'
  | 'author___node___internal___mediaType'
  | 'author___node___internal___owner'
  | 'author___node___internal___type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'caption'
  | 'wpChildren___nodes'
  | 'wpChildren___nodes___databaseId'
  | 'wpChildren___nodes___date'
  | 'wpChildren___nodes___dateGmt'
  | 'wpChildren___nodes___desiredSlug'
  | 'wpChildren___nodes___enclosure'
  | 'wpChildren___nodes___guid'
  | 'wpChildren___nodes___id'
  | 'wpChildren___nodes___link'
  | 'wpChildren___nodes___modified'
  | 'wpChildren___nodes___modifiedGmt'
  | 'wpChildren___nodes___slug'
  | 'wpChildren___nodes___status'
  | 'wpChildren___nodes___terms___nodes'
  | 'wpChildren___nodes___uri'
  | 'wpChildren___nodes___nodeType'
  | 'commentCount'
  | 'commentStatus'
  | 'comments___nodes'
  | 'comments___nodes___agent'
  | 'comments___nodes___approved'
  | 'comments___nodes___authorIp'
  | 'comments___nodes___content'
  | 'comments___nodes___databaseId'
  | 'comments___nodes___date'
  | 'comments___nodes___dateGmt'
  | 'comments___nodes___id'
  | 'comments___nodes___karma'
  | 'comments___nodes___replies___nodes'
  | 'comments___nodes___type'
  | 'comments___nodes___nodeType'
  | 'comments___nodes___parent___id'
  | 'comments___nodes___parent___children'
  | 'comments___nodes___children'
  | 'comments___nodes___children___id'
  | 'comments___nodes___children___children'
  | 'comments___nodes___internal___content'
  | 'comments___nodes___internal___contentDigest'
  | 'comments___nodes___internal___description'
  | 'comments___nodes___internal___fieldOwners'
  | 'comments___nodes___internal___ignoreType'
  | 'comments___nodes___internal___mediaType'
  | 'comments___nodes___internal___owner'
  | 'comments___nodes___internal___type'
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'description'
  | 'desiredSlug'
  | 'enclosure'
  | 'fileSize'
  | 'guid'
  | 'id'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'mediaDetails___file'
  | 'mediaDetails___height'
  | 'mediaDetails___meta___aperture'
  | 'mediaDetails___meta___camera'
  | 'mediaDetails___meta___caption'
  | 'mediaDetails___meta___copyright'
  | 'mediaDetails___meta___createdTimestamp'
  | 'mediaDetails___meta___credit'
  | 'mediaDetails___meta___focalLength'
  | 'mediaDetails___meta___iso'
  | 'mediaDetails___meta___keywords'
  | 'mediaDetails___meta___orientation'
  | 'mediaDetails___meta___shutterSpeed'
  | 'mediaDetails___meta___title'
  | 'mediaDetails___sizes'
  | 'mediaDetails___sizes___file'
  | 'mediaDetails___sizes___fileSize'
  | 'mediaDetails___sizes___height'
  | 'mediaDetails___sizes___mimeType'
  | 'mediaDetails___sizes___name'
  | 'mediaDetails___sizes___sourceUrl'
  | 'mediaDetails___sizes___width'
  | 'mediaDetails___width'
  | 'mediaItemUrl'
  | 'mediaType'
  | 'mimeType'
  | 'modified'
  | 'modifiedGmt'
  | 'wpParent___node___databaseId'
  | 'wpParent___node___date'
  | 'wpParent___node___dateGmt'
  | 'wpParent___node___desiredSlug'
  | 'wpParent___node___enclosure'
  | 'wpParent___node___guid'
  | 'wpParent___node___id'
  | 'wpParent___node___link'
  | 'wpParent___node___modified'
  | 'wpParent___node___modifiedGmt'
  | 'wpParent___node___slug'
  | 'wpParent___node___status'
  | 'wpParent___node___terms___nodes'
  | 'wpParent___node___uri'
  | 'wpParent___node___nodeType'
  | 'parentDatabaseId'
  | 'parentId'
  | 'sizes'
  | 'slug'
  | 'sourceUrl'
  | 'srcSet'
  | 'status'
  | 'template___templateFile'
  | 'template___templateName'
  | 'terms___nodes'
  | 'terms___nodes___count'
  | 'terms___nodes___databaseId'
  | 'terms___nodes___description'
  | 'terms___nodes___id'
  | 'terms___nodes___link'
  | 'terms___nodes___name'
  | 'terms___nodes___slug'
  | 'terms___nodes___termGroupId'
  | 'terms___nodes___termTaxonomyId'
  | 'terms___nodes___uri'
  | 'terms___nodes___nodeType'
  | 'title'
  | 'uri'
  | 'nodeType'
  | 'remoteFile___sourceInstanceName'
  | 'remoteFile___absolutePath'
  | 'remoteFile___relativePath'
  | 'remoteFile___extension'
  | 'remoteFile___size'
  | 'remoteFile___prettySize'
  | 'remoteFile___modifiedTime'
  | 'remoteFile___accessTime'
  | 'remoteFile___changeTime'
  | 'remoteFile___birthTime'
  | 'remoteFile___root'
  | 'remoteFile___dir'
  | 'remoteFile___base'
  | 'remoteFile___ext'
  | 'remoteFile___name'
  | 'remoteFile___relativeDirectory'
  | 'remoteFile___dev'
  | 'remoteFile___mode'
  | 'remoteFile___nlink'
  | 'remoteFile___uid'
  | 'remoteFile___gid'
  | 'remoteFile___rdev'
  | 'remoteFile___ino'
  | 'remoteFile___atimeMs'
  | 'remoteFile___mtimeMs'
  | 'remoteFile___ctimeMs'
  | 'remoteFile___atime'
  | 'remoteFile___mtime'
  | 'remoteFile___ctime'
  | 'remoteFile___birthtime'
  | 'remoteFile___birthtimeMs'
  | 'remoteFile___blksize'
  | 'remoteFile___blocks'
  | 'remoteFile___url'
  | 'remoteFile___publicURL'
  | 'remoteFile___childImageSharp___fixed___base64'
  | 'remoteFile___childImageSharp___fixed___tracedSVG'
  | 'remoteFile___childImageSharp___fixed___aspectRatio'
  | 'remoteFile___childImageSharp___fixed___width'
  | 'remoteFile___childImageSharp___fixed___height'
  | 'remoteFile___childImageSharp___fixed___src'
  | 'remoteFile___childImageSharp___fixed___srcSet'
  | 'remoteFile___childImageSharp___fixed___srcWebp'
  | 'remoteFile___childImageSharp___fixed___srcSetWebp'
  | 'remoteFile___childImageSharp___fixed___originalName'
  | 'remoteFile___childImageSharp___resolutions___base64'
  | 'remoteFile___childImageSharp___resolutions___tracedSVG'
  | 'remoteFile___childImageSharp___resolutions___aspectRatio'
  | 'remoteFile___childImageSharp___resolutions___width'
  | 'remoteFile___childImageSharp___resolutions___height'
  | 'remoteFile___childImageSharp___resolutions___src'
  | 'remoteFile___childImageSharp___resolutions___srcSet'
  | 'remoteFile___childImageSharp___resolutions___srcWebp'
  | 'remoteFile___childImageSharp___resolutions___srcSetWebp'
  | 'remoteFile___childImageSharp___resolutions___originalName'
  | 'remoteFile___childImageSharp___fluid___base64'
  | 'remoteFile___childImageSharp___fluid___tracedSVG'
  | 'remoteFile___childImageSharp___fluid___aspectRatio'
  | 'remoteFile___childImageSharp___fluid___src'
  | 'remoteFile___childImageSharp___fluid___srcSet'
  | 'remoteFile___childImageSharp___fluid___srcWebp'
  | 'remoteFile___childImageSharp___fluid___srcSetWebp'
  | 'remoteFile___childImageSharp___fluid___sizes'
  | 'remoteFile___childImageSharp___fluid___originalImg'
  | 'remoteFile___childImageSharp___fluid___originalName'
  | 'remoteFile___childImageSharp___fluid___presentationWidth'
  | 'remoteFile___childImageSharp___fluid___presentationHeight'
  | 'remoteFile___childImageSharp___sizes___base64'
  | 'remoteFile___childImageSharp___sizes___tracedSVG'
  | 'remoteFile___childImageSharp___sizes___aspectRatio'
  | 'remoteFile___childImageSharp___sizes___src'
  | 'remoteFile___childImageSharp___sizes___srcSet'
  | 'remoteFile___childImageSharp___sizes___srcWebp'
  | 'remoteFile___childImageSharp___sizes___srcSetWebp'
  | 'remoteFile___childImageSharp___sizes___sizes'
  | 'remoteFile___childImageSharp___sizes___originalImg'
  | 'remoteFile___childImageSharp___sizes___originalName'
  | 'remoteFile___childImageSharp___sizes___presentationWidth'
  | 'remoteFile___childImageSharp___sizes___presentationHeight'
  | 'remoteFile___childImageSharp___original___width'
  | 'remoteFile___childImageSharp___original___height'
  | 'remoteFile___childImageSharp___original___src'
  | 'remoteFile___childImageSharp___resize___src'
  | 'remoteFile___childImageSharp___resize___tracedSVG'
  | 'remoteFile___childImageSharp___resize___width'
  | 'remoteFile___childImageSharp___resize___height'
  | 'remoteFile___childImageSharp___resize___aspectRatio'
  | 'remoteFile___childImageSharp___resize___originalName'
  | 'remoteFile___childImageSharp___id'
  | 'remoteFile___childImageSharp___parent___id'
  | 'remoteFile___childImageSharp___parent___children'
  | 'remoteFile___childImageSharp___children'
  | 'remoteFile___childImageSharp___children___id'
  | 'remoteFile___childImageSharp___children___children'
  | 'remoteFile___childImageSharp___internal___content'
  | 'remoteFile___childImageSharp___internal___contentDigest'
  | 'remoteFile___childImageSharp___internal___description'
  | 'remoteFile___childImageSharp___internal___fieldOwners'
  | 'remoteFile___childImageSharp___internal___ignoreType'
  | 'remoteFile___childImageSharp___internal___mediaType'
  | 'remoteFile___childImageSharp___internal___owner'
  | 'remoteFile___childImageSharp___internal___type'
  | 'remoteFile___id'
  | 'remoteFile___parent___id'
  | 'remoteFile___parent___parent___id'
  | 'remoteFile___parent___parent___children'
  | 'remoteFile___parent___children'
  | 'remoteFile___parent___children___id'
  | 'remoteFile___parent___children___children'
  | 'remoteFile___parent___internal___content'
  | 'remoteFile___parent___internal___contentDigest'
  | 'remoteFile___parent___internal___description'
  | 'remoteFile___parent___internal___fieldOwners'
  | 'remoteFile___parent___internal___ignoreType'
  | 'remoteFile___parent___internal___mediaType'
  | 'remoteFile___parent___internal___owner'
  | 'remoteFile___parent___internal___type'
  | 'remoteFile___children'
  | 'remoteFile___children___id'
  | 'remoteFile___children___parent___id'
  | 'remoteFile___children___parent___children'
  | 'remoteFile___children___children'
  | 'remoteFile___children___children___id'
  | 'remoteFile___children___children___children'
  | 'remoteFile___children___internal___content'
  | 'remoteFile___children___internal___contentDigest'
  | 'remoteFile___children___internal___description'
  | 'remoteFile___children___internal___fieldOwners'
  | 'remoteFile___children___internal___ignoreType'
  | 'remoteFile___children___internal___mediaType'
  | 'remoteFile___children___internal___owner'
  | 'remoteFile___children___internal___type'
  | 'remoteFile___internal___content'
  | 'remoteFile___internal___contentDigest'
  | 'remoteFile___internal___description'
  | 'remoteFile___internal___fieldOwners'
  | 'remoteFile___internal___ignoreType'
  | 'remoteFile___internal___mediaType'
  | 'remoteFile___internal___owner'
  | 'remoteFile___internal___type'
  | 'localFile___sourceInstanceName'
  | 'localFile___absolutePath'
  | 'localFile___relativePath'
  | 'localFile___extension'
  | 'localFile___size'
  | 'localFile___prettySize'
  | 'localFile___modifiedTime'
  | 'localFile___accessTime'
  | 'localFile___changeTime'
  | 'localFile___birthTime'
  | 'localFile___root'
  | 'localFile___dir'
  | 'localFile___base'
  | 'localFile___ext'
  | 'localFile___name'
  | 'localFile___relativeDirectory'
  | 'localFile___dev'
  | 'localFile___mode'
  | 'localFile___nlink'
  | 'localFile___uid'
  | 'localFile___gid'
  | 'localFile___rdev'
  | 'localFile___ino'
  | 'localFile___atimeMs'
  | 'localFile___mtimeMs'
  | 'localFile___ctimeMs'
  | 'localFile___atime'
  | 'localFile___mtime'
  | 'localFile___ctime'
  | 'localFile___birthtime'
  | 'localFile___birthtimeMs'
  | 'localFile___blksize'
  | 'localFile___blocks'
  | 'localFile___url'
  | 'localFile___publicURL'
  | 'localFile___childImageSharp___fixed___base64'
  | 'localFile___childImageSharp___fixed___tracedSVG'
  | 'localFile___childImageSharp___fixed___aspectRatio'
  | 'localFile___childImageSharp___fixed___width'
  | 'localFile___childImageSharp___fixed___height'
  | 'localFile___childImageSharp___fixed___src'
  | 'localFile___childImageSharp___fixed___srcSet'
  | 'localFile___childImageSharp___fixed___srcWebp'
  | 'localFile___childImageSharp___fixed___srcSetWebp'
  | 'localFile___childImageSharp___fixed___originalName'
  | 'localFile___childImageSharp___resolutions___base64'
  | 'localFile___childImageSharp___resolutions___tracedSVG'
  | 'localFile___childImageSharp___resolutions___aspectRatio'
  | 'localFile___childImageSharp___resolutions___width'
  | 'localFile___childImageSharp___resolutions___height'
  | 'localFile___childImageSharp___resolutions___src'
  | 'localFile___childImageSharp___resolutions___srcSet'
  | 'localFile___childImageSharp___resolutions___srcWebp'
  | 'localFile___childImageSharp___resolutions___srcSetWebp'
  | 'localFile___childImageSharp___resolutions___originalName'
  | 'localFile___childImageSharp___fluid___base64'
  | 'localFile___childImageSharp___fluid___tracedSVG'
  | 'localFile___childImageSharp___fluid___aspectRatio'
  | 'localFile___childImageSharp___fluid___src'
  | 'localFile___childImageSharp___fluid___srcSet'
  | 'localFile___childImageSharp___fluid___srcWebp'
  | 'localFile___childImageSharp___fluid___srcSetWebp'
  | 'localFile___childImageSharp___fluid___sizes'
  | 'localFile___childImageSharp___fluid___originalImg'
  | 'localFile___childImageSharp___fluid___originalName'
  | 'localFile___childImageSharp___fluid___presentationWidth'
  | 'localFile___childImageSharp___fluid___presentationHeight'
  | 'localFile___childImageSharp___sizes___base64'
  | 'localFile___childImageSharp___sizes___tracedSVG'
  | 'localFile___childImageSharp___sizes___aspectRatio'
  | 'localFile___childImageSharp___sizes___src'
  | 'localFile___childImageSharp___sizes___srcSet'
  | 'localFile___childImageSharp___sizes___srcWebp'
  | 'localFile___childImageSharp___sizes___srcSetWebp'
  | 'localFile___childImageSharp___sizes___sizes'
  | 'localFile___childImageSharp___sizes___originalImg'
  | 'localFile___childImageSharp___sizes___originalName'
  | 'localFile___childImageSharp___sizes___presentationWidth'
  | 'localFile___childImageSharp___sizes___presentationHeight'
  | 'localFile___childImageSharp___original___width'
  | 'localFile___childImageSharp___original___height'
  | 'localFile___childImageSharp___original___src'
  | 'localFile___childImageSharp___resize___src'
  | 'localFile___childImageSharp___resize___tracedSVG'
  | 'localFile___childImageSharp___resize___width'
  | 'localFile___childImageSharp___resize___height'
  | 'localFile___childImageSharp___resize___aspectRatio'
  | 'localFile___childImageSharp___resize___originalName'
  | 'localFile___childImageSharp___id'
  | 'localFile___childImageSharp___parent___id'
  | 'localFile___childImageSharp___parent___children'
  | 'localFile___childImageSharp___children'
  | 'localFile___childImageSharp___children___id'
  | 'localFile___childImageSharp___children___children'
  | 'localFile___childImageSharp___internal___content'
  | 'localFile___childImageSharp___internal___contentDigest'
  | 'localFile___childImageSharp___internal___description'
  | 'localFile___childImageSharp___internal___fieldOwners'
  | 'localFile___childImageSharp___internal___ignoreType'
  | 'localFile___childImageSharp___internal___mediaType'
  | 'localFile___childImageSharp___internal___owner'
  | 'localFile___childImageSharp___internal___type'
  | 'localFile___id'
  | 'localFile___parent___id'
  | 'localFile___parent___parent___id'
  | 'localFile___parent___parent___children'
  | 'localFile___parent___children'
  | 'localFile___parent___children___id'
  | 'localFile___parent___children___children'
  | 'localFile___parent___internal___content'
  | 'localFile___parent___internal___contentDigest'
  | 'localFile___parent___internal___description'
  | 'localFile___parent___internal___fieldOwners'
  | 'localFile___parent___internal___ignoreType'
  | 'localFile___parent___internal___mediaType'
  | 'localFile___parent___internal___owner'
  | 'localFile___parent___internal___type'
  | 'localFile___children'
  | 'localFile___children___id'
  | 'localFile___children___parent___id'
  | 'localFile___children___parent___children'
  | 'localFile___children___children'
  | 'localFile___children___children___id'
  | 'localFile___children___children___children'
  | 'localFile___children___internal___content'
  | 'localFile___children___internal___contentDigest'
  | 'localFile___children___internal___description'
  | 'localFile___children___internal___fieldOwners'
  | 'localFile___children___internal___ignoreType'
  | 'localFile___children___internal___mediaType'
  | 'localFile___children___internal___owner'
  | 'localFile___children___internal___type'
  | 'localFile___internal___content'
  | 'localFile___internal___contentDigest'
  | 'localFile___internal___description'
  | 'localFile___internal___fieldOwners'
  | 'localFile___internal___ignoreType'
  | 'localFile___internal___mediaType'
  | 'localFile___internal___owner'
  | 'localFile___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpMediaItemFilterInput = {
  altText?: Maybe<StringQueryOperatorInput>;
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeConnectionFilterInput>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpMediaItemToCommentConnectionFilterInput>;
  contentType?: Maybe<WpMediaItemToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  fileSize?: Maybe<IntQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  mediaDetails?: Maybe<WpMediaDetailsFilterInput>;
  mediaItemUrl?: Maybe<StringQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  wpParent?: Maybe<WpHierarchicalContentNodeToContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  terms?: Maybe<WpContentNodeToTermNodeConnectionFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  remoteFile?: Maybe<FileFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpMediaItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMediaItemEdge>;
  nodes: Array<WpMediaItem>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpMediaItemMeta = {
  aperture?: Maybe<Scalars['Float']>;
  camera?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  createdTimestamp?: Maybe<Scalars['Int']>;
  credit?: Maybe<Scalars['String']>;
  focalLength?: Maybe<Scalars['Float']>;
  iso?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  orientation?: Maybe<Scalars['String']>;
  shutterSpeed?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type WpMediaItemMetaFilterInput = {
  aperture?: Maybe<FloatQueryOperatorInput>;
  camera?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  createdTimestamp?: Maybe<IntQueryOperatorInput>;
  credit?: Maybe<StringQueryOperatorInput>;
  focalLength?: Maybe<FloatQueryOperatorInput>;
  iso?: Maybe<IntQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  orientation?: Maybe<StringQueryOperatorInput>;
  shutterSpeed?: Maybe<FloatQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type WpMediaItemSortInput = {
  fields?: Maybe<Array<Maybe<WpMediaItemFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpMediaItemToCommentConnection = {
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpMediaItemToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

export type WpMediaItemToContentTypeConnectionEdge = {
  node?: Maybe<WpContentType>;
};

export type WpMediaItemToContentTypeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentTypeFilterInput>;
};

export type WpMediaSize = {
  file?: Maybe<Scalars['String']>;
  fileSize?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

export type WpMediaSizeFilterInput = {
  file?: Maybe<StringQueryOperatorInput>;
  fileSize?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<StringQueryOperatorInput>;
};

export type WpMediaSizeFilterListInput = {
  elemMatch?: Maybe<WpMediaSizeFilterInput>;
};

export type WpMenu = Node & WpNode & WpDatabaseIdentifier & {
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  locations?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  menuItems?: Maybe<WpMenuToMenuItemConnection>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpMenuConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMenuEdge>;
  nodes: Array<WpMenu>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpMenuGroupConnection>;
};


export type WpMenuConnectionDistinctArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpMenuFieldsEnum;
};

export type WpMenuEdge = {
  next?: Maybe<WpMenu>;
  node: WpMenu;
  previous?: Maybe<WpMenu>;
};

export type WpMenuFieldsEnum = 
  | 'count'
  | 'databaseId'
  | 'id'
  | 'locations'
  | 'menuItems___nodes'
  | 'menuItems___nodes___childItems___nodes'
  | 'menuItems___nodes___cssClasses'
  | 'menuItems___nodes___databaseId'
  | 'menuItems___nodes___description'
  | 'menuItems___nodes___id'
  | 'menuItems___nodes___label'
  | 'menuItems___nodes___linkRelationship'
  | 'menuItems___nodes___locations'
  | 'menuItems___nodes___order'
  | 'menuItems___nodes___parentDatabaseId'
  | 'menuItems___nodes___parentId'
  | 'menuItems___nodes___path'
  | 'menuItems___nodes___target'
  | 'menuItems___nodes___title'
  | 'menuItems___nodes___url'
  | 'menuItems___nodes___nodeType'
  | 'menuItems___nodes___parent___id'
  | 'menuItems___nodes___parent___children'
  | 'menuItems___nodes___children'
  | 'menuItems___nodes___children___id'
  | 'menuItems___nodes___children___children'
  | 'menuItems___nodes___internal___content'
  | 'menuItems___nodes___internal___contentDigest'
  | 'menuItems___nodes___internal___description'
  | 'menuItems___nodes___internal___fieldOwners'
  | 'menuItems___nodes___internal___ignoreType'
  | 'menuItems___nodes___internal___mediaType'
  | 'menuItems___nodes___internal___owner'
  | 'menuItems___nodes___internal___type'
  | 'name'
  | 'slug'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpMenuFilterInput = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menuItems?: Maybe<WpMenuToMenuItemConnectionFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpMenuGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMenuEdge>;
  nodes: Array<WpMenu>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpMenuItem = Node & WpNode & WpDatabaseIdentifier & {
  childItems?: Maybe<WpMenuItemToMenuItemConnection>;
  connectedNode?: Maybe<WpMenuItemToMenuItemLinkableConnectionEdge>;
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  linkRelationship?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  menu?: Maybe<WpMenuItemToMenuConnectionEdge>;
  order?: Maybe<Scalars['Int']>;
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
  path: Scalars['String'];
  target?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpMenuItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMenuItemEdge>;
  nodes: Array<WpMenuItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpMenuItemGroupConnection>;
};


export type WpMenuItemConnectionDistinctArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpMenuItemFieldsEnum;
};

export type WpMenuItemEdge = {
  next?: Maybe<WpMenuItem>;
  node: WpMenuItem;
  previous?: Maybe<WpMenuItem>;
};

export type WpMenuItemFieldsEnum = 
  | 'childItems___nodes'
  | 'childItems___nodes___childItems___nodes'
  | 'childItems___nodes___cssClasses'
  | 'childItems___nodes___databaseId'
  | 'childItems___nodes___description'
  | 'childItems___nodes___id'
  | 'childItems___nodes___label'
  | 'childItems___nodes___linkRelationship'
  | 'childItems___nodes___locations'
  | 'childItems___nodes___order'
  | 'childItems___nodes___parentDatabaseId'
  | 'childItems___nodes___parentId'
  | 'childItems___nodes___path'
  | 'childItems___nodes___target'
  | 'childItems___nodes___title'
  | 'childItems___nodes___url'
  | 'childItems___nodes___nodeType'
  | 'childItems___nodes___parent___id'
  | 'childItems___nodes___parent___children'
  | 'childItems___nodes___children'
  | 'childItems___nodes___children___id'
  | 'childItems___nodes___children___children'
  | 'childItems___nodes___internal___content'
  | 'childItems___nodes___internal___contentDigest'
  | 'childItems___nodes___internal___description'
  | 'childItems___nodes___internal___fieldOwners'
  | 'childItems___nodes___internal___ignoreType'
  | 'childItems___nodes___internal___mediaType'
  | 'childItems___nodes___internal___owner'
  | 'childItems___nodes___internal___type'
  | 'connectedNode___node___databaseId'
  | 'connectedNode___node___id'
  | 'connectedNode___node___uri'
  | 'cssClasses'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'label'
  | 'linkRelationship'
  | 'locations'
  | 'menu___node___count'
  | 'menu___node___databaseId'
  | 'menu___node___id'
  | 'menu___node___locations'
  | 'menu___node___menuItems___nodes'
  | 'menu___node___name'
  | 'menu___node___slug'
  | 'menu___node___nodeType'
  | 'menu___node___parent___id'
  | 'menu___node___parent___children'
  | 'menu___node___children'
  | 'menu___node___children___id'
  | 'menu___node___children___children'
  | 'menu___node___internal___content'
  | 'menu___node___internal___contentDigest'
  | 'menu___node___internal___description'
  | 'menu___node___internal___fieldOwners'
  | 'menu___node___internal___ignoreType'
  | 'menu___node___internal___mediaType'
  | 'menu___node___internal___owner'
  | 'menu___node___internal___type'
  | 'order'
  | 'parentDatabaseId'
  | 'parentId'
  | 'path'
  | 'target'
  | 'title'
  | 'url'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpMenuItemFilterInput = {
  childItems?: Maybe<WpMenuItemToMenuItemConnectionFilterInput>;
  connectedNode?: Maybe<WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput>;
  cssClasses?: Maybe<StringQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  linkRelationship?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menu?: Maybe<WpMenuItemToMenuConnectionEdgeFilterInput>;
  order?: Maybe<IntQueryOperatorInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpMenuItemFilterListInput = {
  elemMatch?: Maybe<WpMenuItemFilterInput>;
};

export type WpMenuItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMenuItemEdge>;
  nodes: Array<WpMenuItem>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpMenuItemLinkable = {
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  uri: Scalars['String'];
};

export type WpMenuItemLinkableFilterInput = {
  databaseId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<IdQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type WpMenuItemSortInput = {
  fields?: Maybe<Array<Maybe<WpMenuItemFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpMenuItemToMenuConnectionEdge = {
  node?: Maybe<WpMenu>;
};

export type WpMenuItemToMenuConnectionEdgeFilterInput = {
  node?: Maybe<WpMenuFilterInput>;
};

export type WpMenuItemToMenuItemConnection = {
  nodes?: Maybe<Array<Maybe<WpMenuItem>>>;
};

export type WpMenuItemToMenuItemConnectionFilterInput = {
  nodes?: Maybe<WpMenuItemFilterListInput>;
};

export type WpMenuItemToMenuItemLinkableConnectionEdge = {
  node?: Maybe<WpMenuItemLinkable>;
};

export type WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput = {
  node?: Maybe<WpMenuItemLinkableFilterInput>;
};

/** Registered menu locations */
export type WpMenuLocationEnum = 
  | 'FOOTER_NAVIGATION'
  | 'GLOBAL_NAVIGATION'
  | 'SMAFO_NAVIGATION';

export type WpMenuLocationEnumQueryOperatorInput = {
  eq?: Maybe<WpMenuLocationEnum>;
  ne?: Maybe<WpMenuLocationEnum>;
  in?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  nin?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
};

export type WpMenuSortInput = {
  fields?: Maybe<Array<Maybe<WpMenuFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpMenuToMenuItemConnection = {
  nodes?: Maybe<Array<Maybe<WpMenuItem>>>;
};

export type WpMenuToMenuItemConnectionFilterInput = {
  nodes?: Maybe<WpMenuItemFilterListInput>;
};

export type WpNode = {
  id: Scalars['ID'];
};

export type WpNodeWithAuthor = {
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  authorDatabaseId?: Maybe<Scalars['Int']>;
  authorId?: Maybe<Scalars['ID']>;
};

export type WpNodeWithAuthorToUserConnectionEdge = {
  node?: Maybe<WpUser>;
};

export type WpNodeWithAuthorToUserConnectionEdgeFilterInput = {
  node?: Maybe<WpUserFilterInput>;
};

export type WpNodeWithComments = {
  commentCount?: Maybe<Scalars['Int']>;
  commentStatus?: Maybe<Scalars['String']>;
};

export type WpNodeWithContentEditor = {
  content?: Maybe<Scalars['String']>;
};

export type WpNodeWithExcerpt = {
  excerpt?: Maybe<Scalars['String']>;
};

export type WpNodeWithFeaturedImage = {
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  featuredImageId?: Maybe<Scalars['ID']>;
};

export type WpNodeWithFeaturedImageToMediaItemConnectionEdge = {
  node?: Maybe<WpMediaItem>;
};

export type WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput = {
  node?: Maybe<WpMediaItemFilterInput>;
};

export type WpNodeWithPageAttributes = {
  menuOrder?: Maybe<Scalars['Int']>;
};

export type WpNodeWithRevisions = {
  isRevision?: Maybe<Scalars['Boolean']>;
};

export type WpNodeWithRevisionsToContentNodeConnectionEdge = {
  node?: Maybe<WpContentNode>;
};

export type WpNodeWithTitle = {
  title?: Maybe<Scalars['String']>;
};

export type WpNodeWithTrackbacks = {
  pingStatus?: Maybe<Scalars['String']>;
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WpPage = Node & WpNode & WpContentNode & WpUniformResourceIdentifiable & WpDatabaseIdentifier & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithAuthor & WpNodeWithFeaturedImage & WpNodeWithComments & WpNodeWithRevisions & WpNodeWithPageAttributes & WpHierarchicalContentNode & WpMenuItemLinkable & {
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeConnection>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  authorDatabaseId?: Maybe<Scalars['Int']>;
  authorId?: Maybe<Scalars['ID']>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeConnection>;
  commentCount?: Maybe<Scalars['Int']>;
  commentStatus?: Maybe<Scalars['String']>;
  comments?: Maybe<WpPageToCommentConnection>;
  content?: Maybe<Scalars['String']>;
  contentType?: Maybe<WpPageToContentTypeConnectionEdge>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['Date']>;
  dateGmt?: Maybe<Scalars['Date']>;
  desiredSlug?: Maybe<Scalars['String']>;
  enclosure?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  featuredImageId?: Maybe<Scalars['ID']>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isFrontPage: Scalars['Boolean'];
  isPostsPage: Scalars['Boolean'];
  isRevision?: Maybe<Scalars['Boolean']>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  link?: Maybe<Scalars['String']>;
  menuOrder?: Maybe<Scalars['Int']>;
  modified?: Maybe<Scalars['Date']>;
  modifiedGmt?: Maybe<Scalars['Date']>;
  wpParent?: Maybe<WpHierarchicalContentNodeToContentNodeConnectionEdge>;
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  template?: Maybe<WpContentTemplate>;
  terms?: Maybe<WpContentNodeToTermNodeConnection>;
  title?: Maybe<Scalars['String']>;
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type WpPageDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpPageDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpPageModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpPageModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPageEdge>;
  nodes: Array<WpPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpPageGroupConnection>;
};


export type WpPageConnectionDistinctArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpPageFieldsEnum;
};

export type WpPageEdge = {
  next?: Maybe<WpPage>;
  node: WpPage;
  previous?: Maybe<WpPage>;
};

export type WpPageFieldsEnum = 
  | 'ancestors___nodes'
  | 'ancestors___nodes___databaseId'
  | 'ancestors___nodes___date'
  | 'ancestors___nodes___dateGmt'
  | 'ancestors___nodes___desiredSlug'
  | 'ancestors___nodes___enclosure'
  | 'ancestors___nodes___guid'
  | 'ancestors___nodes___id'
  | 'ancestors___nodes___link'
  | 'ancestors___nodes___modified'
  | 'ancestors___nodes___modifiedGmt'
  | 'ancestors___nodes___slug'
  | 'ancestors___nodes___status'
  | 'ancestors___nodes___terms___nodes'
  | 'ancestors___nodes___uri'
  | 'ancestors___nodes___nodeType'
  | 'author___node___avatar___default'
  | 'author___node___avatar___extraAttr'
  | 'author___node___avatar___forceDefault'
  | 'author___node___avatar___foundAvatar'
  | 'author___node___avatar___height'
  | 'author___node___avatar___rating'
  | 'author___node___avatar___scheme'
  | 'author___node___avatar___size'
  | 'author___node___avatar___url'
  | 'author___node___avatar___width'
  | 'author___node___capKey'
  | 'author___node___capabilities'
  | 'author___node___comments___nodes'
  | 'author___node___databaseId'
  | 'author___node___description'
  | 'author___node___email'
  | 'author___node___extraCapabilities'
  | 'author___node___firstName'
  | 'author___node___id'
  | 'author___node___lastName'
  | 'author___node___locale'
  | 'author___node___name'
  | 'author___node___nicename'
  | 'author___node___nickname'
  | 'author___node___pages___nodes'
  | 'author___node___posts___nodes'
  | 'author___node___registeredDate'
  | 'author___node___roles___nodes'
  | 'author___node___slug'
  | 'author___node___uri'
  | 'author___node___url'
  | 'author___node___username'
  | 'author___node___nodeType'
  | 'author___node___parent___id'
  | 'author___node___parent___children'
  | 'author___node___children'
  | 'author___node___children___id'
  | 'author___node___children___children'
  | 'author___node___internal___content'
  | 'author___node___internal___contentDigest'
  | 'author___node___internal___description'
  | 'author___node___internal___fieldOwners'
  | 'author___node___internal___ignoreType'
  | 'author___node___internal___mediaType'
  | 'author___node___internal___owner'
  | 'author___node___internal___type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'wpChildren___nodes'
  | 'wpChildren___nodes___databaseId'
  | 'wpChildren___nodes___date'
  | 'wpChildren___nodes___dateGmt'
  | 'wpChildren___nodes___desiredSlug'
  | 'wpChildren___nodes___enclosure'
  | 'wpChildren___nodes___guid'
  | 'wpChildren___nodes___id'
  | 'wpChildren___nodes___link'
  | 'wpChildren___nodes___modified'
  | 'wpChildren___nodes___modifiedGmt'
  | 'wpChildren___nodes___slug'
  | 'wpChildren___nodes___status'
  | 'wpChildren___nodes___terms___nodes'
  | 'wpChildren___nodes___uri'
  | 'wpChildren___nodes___nodeType'
  | 'commentCount'
  | 'commentStatus'
  | 'comments___nodes'
  | 'comments___nodes___agent'
  | 'comments___nodes___approved'
  | 'comments___nodes___authorIp'
  | 'comments___nodes___content'
  | 'comments___nodes___databaseId'
  | 'comments___nodes___date'
  | 'comments___nodes___dateGmt'
  | 'comments___nodes___id'
  | 'comments___nodes___karma'
  | 'comments___nodes___replies___nodes'
  | 'comments___nodes___type'
  | 'comments___nodes___nodeType'
  | 'comments___nodes___parent___id'
  | 'comments___nodes___parent___children'
  | 'comments___nodes___children'
  | 'comments___nodes___children___id'
  | 'comments___nodes___children___children'
  | 'comments___nodes___internal___content'
  | 'comments___nodes___internal___contentDigest'
  | 'comments___nodes___internal___description'
  | 'comments___nodes___internal___fieldOwners'
  | 'comments___nodes___internal___ignoreType'
  | 'comments___nodes___internal___mediaType'
  | 'comments___nodes___internal___owner'
  | 'comments___nodes___internal___type'
  | 'content'
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'featuredImage___node___altText'
  | 'featuredImage___node___ancestors___nodes'
  | 'featuredImage___node___authorDatabaseId'
  | 'featuredImage___node___authorId'
  | 'featuredImage___node___caption'
  | 'featuredImage___node___wpChildren___nodes'
  | 'featuredImage___node___commentCount'
  | 'featuredImage___node___commentStatus'
  | 'featuredImage___node___comments___nodes'
  | 'featuredImage___node___databaseId'
  | 'featuredImage___node___date'
  | 'featuredImage___node___dateGmt'
  | 'featuredImage___node___description'
  | 'featuredImage___node___desiredSlug'
  | 'featuredImage___node___enclosure'
  | 'featuredImage___node___fileSize'
  | 'featuredImage___node___guid'
  | 'featuredImage___node___id'
  | 'featuredImage___node___link'
  | 'featuredImage___node___mediaDetails___file'
  | 'featuredImage___node___mediaDetails___height'
  | 'featuredImage___node___mediaDetails___sizes'
  | 'featuredImage___node___mediaDetails___width'
  | 'featuredImage___node___mediaItemUrl'
  | 'featuredImage___node___mediaType'
  | 'featuredImage___node___mimeType'
  | 'featuredImage___node___modified'
  | 'featuredImage___node___modifiedGmt'
  | 'featuredImage___node___parentDatabaseId'
  | 'featuredImage___node___parentId'
  | 'featuredImage___node___sizes'
  | 'featuredImage___node___slug'
  | 'featuredImage___node___sourceUrl'
  | 'featuredImage___node___srcSet'
  | 'featuredImage___node___status'
  | 'featuredImage___node___template___templateFile'
  | 'featuredImage___node___template___templateName'
  | 'featuredImage___node___terms___nodes'
  | 'featuredImage___node___title'
  | 'featuredImage___node___uri'
  | 'featuredImage___node___nodeType'
  | 'featuredImage___node___remoteFile___sourceInstanceName'
  | 'featuredImage___node___remoteFile___absolutePath'
  | 'featuredImage___node___remoteFile___relativePath'
  | 'featuredImage___node___remoteFile___extension'
  | 'featuredImage___node___remoteFile___size'
  | 'featuredImage___node___remoteFile___prettySize'
  | 'featuredImage___node___remoteFile___modifiedTime'
  | 'featuredImage___node___remoteFile___accessTime'
  | 'featuredImage___node___remoteFile___changeTime'
  | 'featuredImage___node___remoteFile___birthTime'
  | 'featuredImage___node___remoteFile___root'
  | 'featuredImage___node___remoteFile___dir'
  | 'featuredImage___node___remoteFile___base'
  | 'featuredImage___node___remoteFile___ext'
  | 'featuredImage___node___remoteFile___name'
  | 'featuredImage___node___remoteFile___relativeDirectory'
  | 'featuredImage___node___remoteFile___dev'
  | 'featuredImage___node___remoteFile___mode'
  | 'featuredImage___node___remoteFile___nlink'
  | 'featuredImage___node___remoteFile___uid'
  | 'featuredImage___node___remoteFile___gid'
  | 'featuredImage___node___remoteFile___rdev'
  | 'featuredImage___node___remoteFile___ino'
  | 'featuredImage___node___remoteFile___atimeMs'
  | 'featuredImage___node___remoteFile___mtimeMs'
  | 'featuredImage___node___remoteFile___ctimeMs'
  | 'featuredImage___node___remoteFile___atime'
  | 'featuredImage___node___remoteFile___mtime'
  | 'featuredImage___node___remoteFile___ctime'
  | 'featuredImage___node___remoteFile___birthtime'
  | 'featuredImage___node___remoteFile___birthtimeMs'
  | 'featuredImage___node___remoteFile___blksize'
  | 'featuredImage___node___remoteFile___blocks'
  | 'featuredImage___node___remoteFile___url'
  | 'featuredImage___node___remoteFile___publicURL'
  | 'featuredImage___node___remoteFile___id'
  | 'featuredImage___node___remoteFile___children'
  | 'featuredImage___node___localFile___sourceInstanceName'
  | 'featuredImage___node___localFile___absolutePath'
  | 'featuredImage___node___localFile___relativePath'
  | 'featuredImage___node___localFile___extension'
  | 'featuredImage___node___localFile___size'
  | 'featuredImage___node___localFile___prettySize'
  | 'featuredImage___node___localFile___modifiedTime'
  | 'featuredImage___node___localFile___accessTime'
  | 'featuredImage___node___localFile___changeTime'
  | 'featuredImage___node___localFile___birthTime'
  | 'featuredImage___node___localFile___root'
  | 'featuredImage___node___localFile___dir'
  | 'featuredImage___node___localFile___base'
  | 'featuredImage___node___localFile___ext'
  | 'featuredImage___node___localFile___name'
  | 'featuredImage___node___localFile___relativeDirectory'
  | 'featuredImage___node___localFile___dev'
  | 'featuredImage___node___localFile___mode'
  | 'featuredImage___node___localFile___nlink'
  | 'featuredImage___node___localFile___uid'
  | 'featuredImage___node___localFile___gid'
  | 'featuredImage___node___localFile___rdev'
  | 'featuredImage___node___localFile___ino'
  | 'featuredImage___node___localFile___atimeMs'
  | 'featuredImage___node___localFile___mtimeMs'
  | 'featuredImage___node___localFile___ctimeMs'
  | 'featuredImage___node___localFile___atime'
  | 'featuredImage___node___localFile___mtime'
  | 'featuredImage___node___localFile___ctime'
  | 'featuredImage___node___localFile___birthtime'
  | 'featuredImage___node___localFile___birthtimeMs'
  | 'featuredImage___node___localFile___blksize'
  | 'featuredImage___node___localFile___blocks'
  | 'featuredImage___node___localFile___url'
  | 'featuredImage___node___localFile___publicURL'
  | 'featuredImage___node___localFile___id'
  | 'featuredImage___node___localFile___children'
  | 'featuredImage___node___parent___id'
  | 'featuredImage___node___parent___children'
  | 'featuredImage___node___children'
  | 'featuredImage___node___children___id'
  | 'featuredImage___node___children___children'
  | 'featuredImage___node___internal___content'
  | 'featuredImage___node___internal___contentDigest'
  | 'featuredImage___node___internal___description'
  | 'featuredImage___node___internal___fieldOwners'
  | 'featuredImage___node___internal___ignoreType'
  | 'featuredImage___node___internal___mediaType'
  | 'featuredImage___node___internal___owner'
  | 'featuredImage___node___internal___type'
  | 'featuredImageDatabaseId'
  | 'featuredImageId'
  | 'guid'
  | 'id'
  | 'isFrontPage'
  | 'isPostsPage'
  | 'isRevision'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'menuOrder'
  | 'modified'
  | 'modifiedGmt'
  | 'wpParent___node___databaseId'
  | 'wpParent___node___date'
  | 'wpParent___node___dateGmt'
  | 'wpParent___node___desiredSlug'
  | 'wpParent___node___enclosure'
  | 'wpParent___node___guid'
  | 'wpParent___node___id'
  | 'wpParent___node___link'
  | 'wpParent___node___modified'
  | 'wpParent___node___modifiedGmt'
  | 'wpParent___node___slug'
  | 'wpParent___node___status'
  | 'wpParent___node___terms___nodes'
  | 'wpParent___node___uri'
  | 'wpParent___node___nodeType'
  | 'parentDatabaseId'
  | 'parentId'
  | 'slug'
  | 'status'
  | 'template___templateFile'
  | 'template___templateName'
  | 'terms___nodes'
  | 'terms___nodes___count'
  | 'terms___nodes___databaseId'
  | 'terms___nodes___description'
  | 'terms___nodes___id'
  | 'terms___nodes___link'
  | 'terms___nodes___name'
  | 'terms___nodes___slug'
  | 'terms___nodes___termGroupId'
  | 'terms___nodes___termTaxonomyId'
  | 'terms___nodes___uri'
  | 'terms___nodes___nodeType'
  | 'title'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpPageFilterInput = {
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeConnectionFilterInput>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpPageToCommentConnectionFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpPageToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: Maybe<IntQueryOperatorInput>;
  featuredImageId?: Maybe<IdQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isFrontPage?: Maybe<BooleanQueryOperatorInput>;
  isPostsPage?: Maybe<BooleanQueryOperatorInput>;
  isRevision?: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  menuOrder?: Maybe<IntQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  wpParent?: Maybe<WpHierarchicalContentNodeToContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  terms?: Maybe<WpContentNodeToTermNodeConnectionFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpPageFilterListInput = {
  elemMatch?: Maybe<WpPageFilterInput>;
};

export type WpPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPageEdge>;
  nodes: Array<WpPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpPageSortInput = {
  fields?: Maybe<Array<Maybe<WpPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpPageToCommentConnection = {
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpPageToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

export type WpPageToContentTypeConnectionEdge = {
  node?: Maybe<WpContentType>;
};

export type WpPageToContentTypeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentTypeFilterInput>;
};

export type WpPost = Node & WpNode & WpContentNode & WpUniformResourceIdentifiable & WpDatabaseIdentifier & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithAuthor & WpNodeWithFeaturedImage & WpNodeWithExcerpt & WpNodeWithComments & WpNodeWithTrackbacks & WpNodeWithRevisions & WpMenuItemLinkable & {
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  authorDatabaseId?: Maybe<Scalars['Int']>;
  authorId?: Maybe<Scalars['ID']>;
  categories?: Maybe<WpPostToCategoryConnection>;
  commentCount?: Maybe<Scalars['Int']>;
  commentStatus?: Maybe<Scalars['String']>;
  comments?: Maybe<WpPostToCommentConnection>;
  content?: Maybe<Scalars['String']>;
  contentType?: Maybe<WpPostToContentTypeConnectionEdge>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['Date']>;
  dateGmt?: Maybe<Scalars['Date']>;
  desiredSlug?: Maybe<Scalars['String']>;
  enclosure?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  featuredImageId?: Maybe<Scalars['ID']>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRevision?: Maybe<Scalars['Boolean']>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  link?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['Date']>;
  modifiedGmt?: Maybe<Scalars['Date']>;
  pingStatus?: Maybe<Scalars['String']>;
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  postFormats?: Maybe<WpPostToPostFormatConnection>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<WpPostToTagConnection>;
  template?: Maybe<WpContentTemplate>;
  terms?: Maybe<WpContentNodeToTermNodeConnection>;
  title?: Maybe<Scalars['String']>;
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type WpPostDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpPostDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpPostModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpPostModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPostEdge>;
  nodes: Array<WpPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpPostGroupConnection>;
};


export type WpPostConnectionDistinctArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpPostFieldsEnum;
};

export type WpPostEdge = {
  next?: Maybe<WpPost>;
  node: WpPost;
  previous?: Maybe<WpPost>;
};

export type WpPostFieldsEnum = 
  | 'author___node___avatar___default'
  | 'author___node___avatar___extraAttr'
  | 'author___node___avatar___forceDefault'
  | 'author___node___avatar___foundAvatar'
  | 'author___node___avatar___height'
  | 'author___node___avatar___rating'
  | 'author___node___avatar___scheme'
  | 'author___node___avatar___size'
  | 'author___node___avatar___url'
  | 'author___node___avatar___width'
  | 'author___node___capKey'
  | 'author___node___capabilities'
  | 'author___node___comments___nodes'
  | 'author___node___databaseId'
  | 'author___node___description'
  | 'author___node___email'
  | 'author___node___extraCapabilities'
  | 'author___node___firstName'
  | 'author___node___id'
  | 'author___node___lastName'
  | 'author___node___locale'
  | 'author___node___name'
  | 'author___node___nicename'
  | 'author___node___nickname'
  | 'author___node___pages___nodes'
  | 'author___node___posts___nodes'
  | 'author___node___registeredDate'
  | 'author___node___roles___nodes'
  | 'author___node___slug'
  | 'author___node___uri'
  | 'author___node___url'
  | 'author___node___username'
  | 'author___node___nodeType'
  | 'author___node___parent___id'
  | 'author___node___parent___children'
  | 'author___node___children'
  | 'author___node___children___id'
  | 'author___node___children___children'
  | 'author___node___internal___content'
  | 'author___node___internal___contentDigest'
  | 'author___node___internal___description'
  | 'author___node___internal___fieldOwners'
  | 'author___node___internal___ignoreType'
  | 'author___node___internal___mediaType'
  | 'author___node___internal___owner'
  | 'author___node___internal___type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'categories___nodes'
  | 'categories___nodes___ancestors___nodes'
  | 'categories___nodes___wpChildren___nodes'
  | 'categories___nodes___count'
  | 'categories___nodes___databaseId'
  | 'categories___nodes___description'
  | 'categories___nodes___id'
  | 'categories___nodes___link'
  | 'categories___nodes___name'
  | 'categories___nodes___parentDatabaseId'
  | 'categories___nodes___parentId'
  | 'categories___nodes___posts___nodes'
  | 'categories___nodes___slug'
  | 'categories___nodes___termGroupId'
  | 'categories___nodes___termTaxonomyId'
  | 'categories___nodes___uri'
  | 'categories___nodes___nodeType'
  | 'categories___nodes___parent___id'
  | 'categories___nodes___parent___children'
  | 'categories___nodes___children'
  | 'categories___nodes___children___id'
  | 'categories___nodes___children___children'
  | 'categories___nodes___internal___content'
  | 'categories___nodes___internal___contentDigest'
  | 'categories___nodes___internal___description'
  | 'categories___nodes___internal___fieldOwners'
  | 'categories___nodes___internal___ignoreType'
  | 'categories___nodes___internal___mediaType'
  | 'categories___nodes___internal___owner'
  | 'categories___nodes___internal___type'
  | 'commentCount'
  | 'commentStatus'
  | 'comments___nodes'
  | 'comments___nodes___agent'
  | 'comments___nodes___approved'
  | 'comments___nodes___authorIp'
  | 'comments___nodes___content'
  | 'comments___nodes___databaseId'
  | 'comments___nodes___date'
  | 'comments___nodes___dateGmt'
  | 'comments___nodes___id'
  | 'comments___nodes___karma'
  | 'comments___nodes___replies___nodes'
  | 'comments___nodes___type'
  | 'comments___nodes___nodeType'
  | 'comments___nodes___parent___id'
  | 'comments___nodes___parent___children'
  | 'comments___nodes___children'
  | 'comments___nodes___children___id'
  | 'comments___nodes___children___children'
  | 'comments___nodes___internal___content'
  | 'comments___nodes___internal___contentDigest'
  | 'comments___nodes___internal___description'
  | 'comments___nodes___internal___fieldOwners'
  | 'comments___nodes___internal___ignoreType'
  | 'comments___nodes___internal___mediaType'
  | 'comments___nodes___internal___owner'
  | 'comments___nodes___internal___type'
  | 'content'
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'excerpt'
  | 'featuredImage___node___altText'
  | 'featuredImage___node___ancestors___nodes'
  | 'featuredImage___node___authorDatabaseId'
  | 'featuredImage___node___authorId'
  | 'featuredImage___node___caption'
  | 'featuredImage___node___wpChildren___nodes'
  | 'featuredImage___node___commentCount'
  | 'featuredImage___node___commentStatus'
  | 'featuredImage___node___comments___nodes'
  | 'featuredImage___node___databaseId'
  | 'featuredImage___node___date'
  | 'featuredImage___node___dateGmt'
  | 'featuredImage___node___description'
  | 'featuredImage___node___desiredSlug'
  | 'featuredImage___node___enclosure'
  | 'featuredImage___node___fileSize'
  | 'featuredImage___node___guid'
  | 'featuredImage___node___id'
  | 'featuredImage___node___link'
  | 'featuredImage___node___mediaDetails___file'
  | 'featuredImage___node___mediaDetails___height'
  | 'featuredImage___node___mediaDetails___sizes'
  | 'featuredImage___node___mediaDetails___width'
  | 'featuredImage___node___mediaItemUrl'
  | 'featuredImage___node___mediaType'
  | 'featuredImage___node___mimeType'
  | 'featuredImage___node___modified'
  | 'featuredImage___node___modifiedGmt'
  | 'featuredImage___node___parentDatabaseId'
  | 'featuredImage___node___parentId'
  | 'featuredImage___node___sizes'
  | 'featuredImage___node___slug'
  | 'featuredImage___node___sourceUrl'
  | 'featuredImage___node___srcSet'
  | 'featuredImage___node___status'
  | 'featuredImage___node___template___templateFile'
  | 'featuredImage___node___template___templateName'
  | 'featuredImage___node___terms___nodes'
  | 'featuredImage___node___title'
  | 'featuredImage___node___uri'
  | 'featuredImage___node___nodeType'
  | 'featuredImage___node___remoteFile___sourceInstanceName'
  | 'featuredImage___node___remoteFile___absolutePath'
  | 'featuredImage___node___remoteFile___relativePath'
  | 'featuredImage___node___remoteFile___extension'
  | 'featuredImage___node___remoteFile___size'
  | 'featuredImage___node___remoteFile___prettySize'
  | 'featuredImage___node___remoteFile___modifiedTime'
  | 'featuredImage___node___remoteFile___accessTime'
  | 'featuredImage___node___remoteFile___changeTime'
  | 'featuredImage___node___remoteFile___birthTime'
  | 'featuredImage___node___remoteFile___root'
  | 'featuredImage___node___remoteFile___dir'
  | 'featuredImage___node___remoteFile___base'
  | 'featuredImage___node___remoteFile___ext'
  | 'featuredImage___node___remoteFile___name'
  | 'featuredImage___node___remoteFile___relativeDirectory'
  | 'featuredImage___node___remoteFile___dev'
  | 'featuredImage___node___remoteFile___mode'
  | 'featuredImage___node___remoteFile___nlink'
  | 'featuredImage___node___remoteFile___uid'
  | 'featuredImage___node___remoteFile___gid'
  | 'featuredImage___node___remoteFile___rdev'
  | 'featuredImage___node___remoteFile___ino'
  | 'featuredImage___node___remoteFile___atimeMs'
  | 'featuredImage___node___remoteFile___mtimeMs'
  | 'featuredImage___node___remoteFile___ctimeMs'
  | 'featuredImage___node___remoteFile___atime'
  | 'featuredImage___node___remoteFile___mtime'
  | 'featuredImage___node___remoteFile___ctime'
  | 'featuredImage___node___remoteFile___birthtime'
  | 'featuredImage___node___remoteFile___birthtimeMs'
  | 'featuredImage___node___remoteFile___blksize'
  | 'featuredImage___node___remoteFile___blocks'
  | 'featuredImage___node___remoteFile___url'
  | 'featuredImage___node___remoteFile___publicURL'
  | 'featuredImage___node___remoteFile___id'
  | 'featuredImage___node___remoteFile___children'
  | 'featuredImage___node___localFile___sourceInstanceName'
  | 'featuredImage___node___localFile___absolutePath'
  | 'featuredImage___node___localFile___relativePath'
  | 'featuredImage___node___localFile___extension'
  | 'featuredImage___node___localFile___size'
  | 'featuredImage___node___localFile___prettySize'
  | 'featuredImage___node___localFile___modifiedTime'
  | 'featuredImage___node___localFile___accessTime'
  | 'featuredImage___node___localFile___changeTime'
  | 'featuredImage___node___localFile___birthTime'
  | 'featuredImage___node___localFile___root'
  | 'featuredImage___node___localFile___dir'
  | 'featuredImage___node___localFile___base'
  | 'featuredImage___node___localFile___ext'
  | 'featuredImage___node___localFile___name'
  | 'featuredImage___node___localFile___relativeDirectory'
  | 'featuredImage___node___localFile___dev'
  | 'featuredImage___node___localFile___mode'
  | 'featuredImage___node___localFile___nlink'
  | 'featuredImage___node___localFile___uid'
  | 'featuredImage___node___localFile___gid'
  | 'featuredImage___node___localFile___rdev'
  | 'featuredImage___node___localFile___ino'
  | 'featuredImage___node___localFile___atimeMs'
  | 'featuredImage___node___localFile___mtimeMs'
  | 'featuredImage___node___localFile___ctimeMs'
  | 'featuredImage___node___localFile___atime'
  | 'featuredImage___node___localFile___mtime'
  | 'featuredImage___node___localFile___ctime'
  | 'featuredImage___node___localFile___birthtime'
  | 'featuredImage___node___localFile___birthtimeMs'
  | 'featuredImage___node___localFile___blksize'
  | 'featuredImage___node___localFile___blocks'
  | 'featuredImage___node___localFile___url'
  | 'featuredImage___node___localFile___publicURL'
  | 'featuredImage___node___localFile___id'
  | 'featuredImage___node___localFile___children'
  | 'featuredImage___node___parent___id'
  | 'featuredImage___node___parent___children'
  | 'featuredImage___node___children'
  | 'featuredImage___node___children___id'
  | 'featuredImage___node___children___children'
  | 'featuredImage___node___internal___content'
  | 'featuredImage___node___internal___contentDigest'
  | 'featuredImage___node___internal___description'
  | 'featuredImage___node___internal___fieldOwners'
  | 'featuredImage___node___internal___ignoreType'
  | 'featuredImage___node___internal___mediaType'
  | 'featuredImage___node___internal___owner'
  | 'featuredImage___node___internal___type'
  | 'featuredImageDatabaseId'
  | 'featuredImageId'
  | 'guid'
  | 'id'
  | 'isRevision'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'modified'
  | 'modifiedGmt'
  | 'pingStatus'
  | 'pinged'
  | 'postFormats___nodes'
  | 'postFormats___nodes___count'
  | 'postFormats___nodes___databaseId'
  | 'postFormats___nodes___description'
  | 'postFormats___nodes___id'
  | 'postFormats___nodes___link'
  | 'postFormats___nodes___name'
  | 'postFormats___nodes___posts___nodes'
  | 'postFormats___nodes___slug'
  | 'postFormats___nodes___termGroupId'
  | 'postFormats___nodes___termTaxonomyId'
  | 'postFormats___nodes___uri'
  | 'postFormats___nodes___nodeType'
  | 'postFormats___nodes___parent___id'
  | 'postFormats___nodes___parent___children'
  | 'postFormats___nodes___children'
  | 'postFormats___nodes___children___id'
  | 'postFormats___nodes___children___children'
  | 'postFormats___nodes___internal___content'
  | 'postFormats___nodes___internal___contentDigest'
  | 'postFormats___nodes___internal___description'
  | 'postFormats___nodes___internal___fieldOwners'
  | 'postFormats___nodes___internal___ignoreType'
  | 'postFormats___nodes___internal___mediaType'
  | 'postFormats___nodes___internal___owner'
  | 'postFormats___nodes___internal___type'
  | 'slug'
  | 'status'
  | 'tags___nodes'
  | 'tags___nodes___count'
  | 'tags___nodes___databaseId'
  | 'tags___nodes___description'
  | 'tags___nodes___id'
  | 'tags___nodes___link'
  | 'tags___nodes___name'
  | 'tags___nodes___posts___nodes'
  | 'tags___nodes___slug'
  | 'tags___nodes___termGroupId'
  | 'tags___nodes___termTaxonomyId'
  | 'tags___nodes___uri'
  | 'tags___nodes___nodeType'
  | 'tags___nodes___parent___id'
  | 'tags___nodes___parent___children'
  | 'tags___nodes___children'
  | 'tags___nodes___children___id'
  | 'tags___nodes___children___children'
  | 'tags___nodes___internal___content'
  | 'tags___nodes___internal___contentDigest'
  | 'tags___nodes___internal___description'
  | 'tags___nodes___internal___fieldOwners'
  | 'tags___nodes___internal___ignoreType'
  | 'tags___nodes___internal___mediaType'
  | 'tags___nodes___internal___owner'
  | 'tags___nodes___internal___type'
  | 'template___templateFile'
  | 'template___templateName'
  | 'terms___nodes'
  | 'terms___nodes___count'
  | 'terms___nodes___databaseId'
  | 'terms___nodes___description'
  | 'terms___nodes___id'
  | 'terms___nodes___link'
  | 'terms___nodes___name'
  | 'terms___nodes___slug'
  | 'terms___nodes___termGroupId'
  | 'terms___nodes___termTaxonomyId'
  | 'terms___nodes___uri'
  | 'terms___nodes___nodeType'
  | 'title'
  | 'toPing'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpPostFilterInput = {
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  categories?: Maybe<WpPostToCategoryConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpPostToCommentConnectionFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpPostToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: Maybe<IntQueryOperatorInput>;
  featuredImageId?: Maybe<IdQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isRevision?: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  pingStatus?: Maybe<StringQueryOperatorInput>;
  pinged?: Maybe<StringQueryOperatorInput>;
  postFormats?: Maybe<WpPostToPostFormatConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<WpPostToTagConnectionFilterInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  terms?: Maybe<WpContentNodeToTermNodeConnectionFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  toPing?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpPostFilterListInput = {
  elemMatch?: Maybe<WpPostFilterInput>;
};

export type WpPostFormat = Node & WpNode & WpTermNode & WpUniformResourceIdentifiable & WpDatabaseIdentifier & WpMenuItemLinkable & {
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<WpPostFormatToPostConnection>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<WpPostFormatToTaxonomyConnectionEdge>;
  termGroupId?: Maybe<Scalars['Int']>;
  termTaxonomyId?: Maybe<Scalars['Int']>;
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpPostFormatConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPostFormatEdge>;
  nodes: Array<WpPostFormat>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpPostFormatGroupConnection>;
};


export type WpPostFormatConnectionDistinctArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpPostFormatFieldsEnum;
};

export type WpPostFormatEdge = {
  next?: Maybe<WpPostFormat>;
  node: WpPostFormat;
  previous?: Maybe<WpPostFormat>;
};

export type WpPostFormatFieldsEnum = 
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'link'
  | 'name'
  | 'posts___nodes'
  | 'posts___nodes___authorDatabaseId'
  | 'posts___nodes___authorId'
  | 'posts___nodes___categories___nodes'
  | 'posts___nodes___commentCount'
  | 'posts___nodes___commentStatus'
  | 'posts___nodes___comments___nodes'
  | 'posts___nodes___content'
  | 'posts___nodes___databaseId'
  | 'posts___nodes___date'
  | 'posts___nodes___dateGmt'
  | 'posts___nodes___desiredSlug'
  | 'posts___nodes___enclosure'
  | 'posts___nodes___excerpt'
  | 'posts___nodes___featuredImageDatabaseId'
  | 'posts___nodes___featuredImageId'
  | 'posts___nodes___guid'
  | 'posts___nodes___id'
  | 'posts___nodes___isRevision'
  | 'posts___nodes___link'
  | 'posts___nodes___modified'
  | 'posts___nodes___modifiedGmt'
  | 'posts___nodes___pingStatus'
  | 'posts___nodes___pinged'
  | 'posts___nodes___postFormats___nodes'
  | 'posts___nodes___slug'
  | 'posts___nodes___status'
  | 'posts___nodes___tags___nodes'
  | 'posts___nodes___template___templateFile'
  | 'posts___nodes___template___templateName'
  | 'posts___nodes___terms___nodes'
  | 'posts___nodes___title'
  | 'posts___nodes___toPing'
  | 'posts___nodes___uri'
  | 'posts___nodes___nodeType'
  | 'posts___nodes___parent___id'
  | 'posts___nodes___parent___children'
  | 'posts___nodes___children'
  | 'posts___nodes___children___id'
  | 'posts___nodes___children___children'
  | 'posts___nodes___internal___content'
  | 'posts___nodes___internal___contentDigest'
  | 'posts___nodes___internal___description'
  | 'posts___nodes___internal___fieldOwners'
  | 'posts___nodes___internal___ignoreType'
  | 'posts___nodes___internal___mediaType'
  | 'posts___nodes___internal___owner'
  | 'posts___nodes___internal___type'
  | 'slug'
  | 'taxonomy___node___archivePath'
  | 'taxonomy___node___connectedContentTypes___nodes'
  | 'taxonomy___node___description'
  | 'taxonomy___node___graphqlPluralName'
  | 'taxonomy___node___graphqlSingleName'
  | 'taxonomy___node___hierarchical'
  | 'taxonomy___node___id'
  | 'taxonomy___node___label'
  | 'taxonomy___node___name'
  | 'taxonomy___node___public'
  | 'taxonomy___node___restBase'
  | 'taxonomy___node___restControllerClass'
  | 'taxonomy___node___showCloud'
  | 'taxonomy___node___showInAdminColumn'
  | 'taxonomy___node___showInGraphql'
  | 'taxonomy___node___showInMenu'
  | 'taxonomy___node___showInNavMenus'
  | 'taxonomy___node___showInQuickEdit'
  | 'taxonomy___node___showInRest'
  | 'taxonomy___node___showUi'
  | 'taxonomy___node___nodeType'
  | 'taxonomy___node___parent___id'
  | 'taxonomy___node___parent___children'
  | 'taxonomy___node___children'
  | 'taxonomy___node___children___id'
  | 'taxonomy___node___children___children'
  | 'taxonomy___node___internal___content'
  | 'taxonomy___node___internal___contentDigest'
  | 'taxonomy___node___internal___description'
  | 'taxonomy___node___internal___fieldOwners'
  | 'taxonomy___node___internal___ignoreType'
  | 'taxonomy___node___internal___mediaType'
  | 'taxonomy___node___internal___owner'
  | 'taxonomy___node___internal___type'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpPostFormatFilterInput = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<WpPostFormatToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpPostFormatToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpPostFormatFilterListInput = {
  elemMatch?: Maybe<WpPostFormatFilterInput>;
};

export type WpPostFormatGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPostFormatEdge>;
  nodes: Array<WpPostFormat>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpPostFormatSortInput = {
  fields?: Maybe<Array<Maybe<WpPostFormatFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpPostFormatToPostConnection = {
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpPostFormatToPostConnectionFilterInput = {
  nodes?: Maybe<WpPostFilterListInput>;
};

export type WpPostFormatToTaxonomyConnectionEdge = {
  node?: Maybe<WpTaxonomy>;
};

export type WpPostFormatToTaxonomyConnectionEdgeFilterInput = {
  node?: Maybe<WpTaxonomyFilterInput>;
};

export type WpPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPostEdge>;
  nodes: Array<WpPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpPostSortInput = {
  fields?: Maybe<Array<Maybe<WpPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpPostToCategoryConnection = {
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

export type WpPostToCategoryConnectionFilterInput = {
  nodes?: Maybe<WpCategoryFilterListInput>;
};

export type WpPostToCommentConnection = {
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpPostToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

export type WpPostToContentTypeConnectionEdge = {
  node?: Maybe<WpContentType>;
};

export type WpPostToContentTypeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentTypeFilterInput>;
};

export type WpPostToPostFormatConnection = {
  nodes?: Maybe<Array<Maybe<WpPostFormat>>>;
};

export type WpPostToPostFormatConnectionFilterInput = {
  nodes?: Maybe<WpPostFormatFilterListInput>;
};

export type WpPostToTagConnection = {
  nodes?: Maybe<Array<Maybe<WpTag>>>;
};

export type WpPostToTagConnectionFilterInput = {
  nodes?: Maybe<WpTagFilterListInput>;
};

export type WpPostTypeLabelDetails = {
  addNew?: Maybe<Scalars['String']>;
  addNewItem?: Maybe<Scalars['String']>;
  allItems?: Maybe<Scalars['String']>;
  archives?: Maybe<Scalars['String']>;
  attributes?: Maybe<Scalars['String']>;
  editItem?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<Scalars['String']>;
  filterItemsList?: Maybe<Scalars['String']>;
  insertIntoItem?: Maybe<Scalars['String']>;
  itemsList?: Maybe<Scalars['String']>;
  itemsListNavigation?: Maybe<Scalars['String']>;
  menuName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  newItem?: Maybe<Scalars['String']>;
  notFound?: Maybe<Scalars['String']>;
  notFoundInTrash?: Maybe<Scalars['String']>;
  parentItemColon?: Maybe<Scalars['String']>;
  removeFeaturedImage?: Maybe<Scalars['String']>;
  searchItems?: Maybe<Scalars['String']>;
  setFeaturedImage?: Maybe<Scalars['String']>;
  singularName?: Maybe<Scalars['String']>;
  uploadedToThisItem?: Maybe<Scalars['String']>;
  useFeaturedImage?: Maybe<Scalars['String']>;
  viewItem?: Maybe<Scalars['String']>;
  viewItems?: Maybe<Scalars['String']>;
};

export type WpPostTypeLabelDetailsFilterInput = {
  addNew?: Maybe<StringQueryOperatorInput>;
  addNewItem?: Maybe<StringQueryOperatorInput>;
  allItems?: Maybe<StringQueryOperatorInput>;
  archives?: Maybe<StringQueryOperatorInput>;
  attributes?: Maybe<StringQueryOperatorInput>;
  editItem?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<StringQueryOperatorInput>;
  filterItemsList?: Maybe<StringQueryOperatorInput>;
  insertIntoItem?: Maybe<StringQueryOperatorInput>;
  itemsList?: Maybe<StringQueryOperatorInput>;
  itemsListNavigation?: Maybe<StringQueryOperatorInput>;
  menuName?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  newItem?: Maybe<StringQueryOperatorInput>;
  notFound?: Maybe<StringQueryOperatorInput>;
  notFoundInTrash?: Maybe<StringQueryOperatorInput>;
  parentItemColon?: Maybe<StringQueryOperatorInput>;
  removeFeaturedImage?: Maybe<StringQueryOperatorInput>;
  searchItems?: Maybe<StringQueryOperatorInput>;
  setFeaturedImage?: Maybe<StringQueryOperatorInput>;
  singularName?: Maybe<StringQueryOperatorInput>;
  uploadedToThisItem?: Maybe<StringQueryOperatorInput>;
  useFeaturedImage?: Maybe<StringQueryOperatorInput>;
  viewItem?: Maybe<StringQueryOperatorInput>;
  viewItems?: Maybe<StringQueryOperatorInput>;
};

export type WpReadingSettings = {
  postsPerPage?: Maybe<Scalars['Int']>;
};

export type WpReadingSettingsFilterInput = {
  postsPerPage?: Maybe<IntQueryOperatorInput>;
};

export type WpSettings = {
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  generalSettingsDescription?: Maybe<Scalars['String']>;
  generalSettingsEmail?: Maybe<Scalars['String']>;
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  generalSettingsTitle?: Maybe<Scalars['String']>;
  generalSettingsUrl?: Maybe<Scalars['String']>;
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

export type WpSettingsFilterInput = {
  discussionSettingsDefaultCommentStatus?: Maybe<StringQueryOperatorInput>;
  discussionSettingsDefaultPingStatus?: Maybe<StringQueryOperatorInput>;
  generalSettingsDateFormat?: Maybe<StringQueryOperatorInput>;
  generalSettingsDescription?: Maybe<StringQueryOperatorInput>;
  generalSettingsEmail?: Maybe<StringQueryOperatorInput>;
  generalSettingsLanguage?: Maybe<StringQueryOperatorInput>;
  generalSettingsStartOfWeek?: Maybe<IntQueryOperatorInput>;
  generalSettingsTimeFormat?: Maybe<StringQueryOperatorInput>;
  generalSettingsTimezone?: Maybe<StringQueryOperatorInput>;
  generalSettingsTitle?: Maybe<StringQueryOperatorInput>;
  generalSettingsUrl?: Maybe<StringQueryOperatorInput>;
  readingSettingsPostsPerPage?: Maybe<IntQueryOperatorInput>;
  writingSettingsDefaultCategory?: Maybe<IntQueryOperatorInput>;
  writingSettingsDefaultPostFormat?: Maybe<StringQueryOperatorInput>;
  writingSettingsUseSmilies?: Maybe<BooleanQueryOperatorInput>;
};

export type WpSortInput = {
  fields?: Maybe<Array<Maybe<WpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpTag = Node & WpNode & WpTermNode & WpUniformResourceIdentifiable & WpDatabaseIdentifier & WpMenuItemLinkable & {
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<WpTagToPostConnection>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<WpTagToTaxonomyConnectionEdge>;
  termGroupId?: Maybe<Scalars['Int']>;
  termTaxonomyId?: Maybe<Scalars['Int']>;
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpTagConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTagEdge>;
  nodes: Array<WpTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpTagGroupConnection>;
};


export type WpTagConnectionDistinctArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpTagFieldsEnum;
};

export type WpTagEdge = {
  next?: Maybe<WpTag>;
  node: WpTag;
  previous?: Maybe<WpTag>;
};

export type WpTagFieldsEnum = 
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'link'
  | 'name'
  | 'posts___nodes'
  | 'posts___nodes___authorDatabaseId'
  | 'posts___nodes___authorId'
  | 'posts___nodes___categories___nodes'
  | 'posts___nodes___commentCount'
  | 'posts___nodes___commentStatus'
  | 'posts___nodes___comments___nodes'
  | 'posts___nodes___content'
  | 'posts___nodes___databaseId'
  | 'posts___nodes___date'
  | 'posts___nodes___dateGmt'
  | 'posts___nodes___desiredSlug'
  | 'posts___nodes___enclosure'
  | 'posts___nodes___excerpt'
  | 'posts___nodes___featuredImageDatabaseId'
  | 'posts___nodes___featuredImageId'
  | 'posts___nodes___guid'
  | 'posts___nodes___id'
  | 'posts___nodes___isRevision'
  | 'posts___nodes___link'
  | 'posts___nodes___modified'
  | 'posts___nodes___modifiedGmt'
  | 'posts___nodes___pingStatus'
  | 'posts___nodes___pinged'
  | 'posts___nodes___postFormats___nodes'
  | 'posts___nodes___slug'
  | 'posts___nodes___status'
  | 'posts___nodes___tags___nodes'
  | 'posts___nodes___template___templateFile'
  | 'posts___nodes___template___templateName'
  | 'posts___nodes___terms___nodes'
  | 'posts___nodes___title'
  | 'posts___nodes___toPing'
  | 'posts___nodes___uri'
  | 'posts___nodes___nodeType'
  | 'posts___nodes___parent___id'
  | 'posts___nodes___parent___children'
  | 'posts___nodes___children'
  | 'posts___nodes___children___id'
  | 'posts___nodes___children___children'
  | 'posts___nodes___internal___content'
  | 'posts___nodes___internal___contentDigest'
  | 'posts___nodes___internal___description'
  | 'posts___nodes___internal___fieldOwners'
  | 'posts___nodes___internal___ignoreType'
  | 'posts___nodes___internal___mediaType'
  | 'posts___nodes___internal___owner'
  | 'posts___nodes___internal___type'
  | 'slug'
  | 'taxonomy___node___archivePath'
  | 'taxonomy___node___connectedContentTypes___nodes'
  | 'taxonomy___node___description'
  | 'taxonomy___node___graphqlPluralName'
  | 'taxonomy___node___graphqlSingleName'
  | 'taxonomy___node___hierarchical'
  | 'taxonomy___node___id'
  | 'taxonomy___node___label'
  | 'taxonomy___node___name'
  | 'taxonomy___node___public'
  | 'taxonomy___node___restBase'
  | 'taxonomy___node___restControllerClass'
  | 'taxonomy___node___showCloud'
  | 'taxonomy___node___showInAdminColumn'
  | 'taxonomy___node___showInGraphql'
  | 'taxonomy___node___showInMenu'
  | 'taxonomy___node___showInNavMenus'
  | 'taxonomy___node___showInQuickEdit'
  | 'taxonomy___node___showInRest'
  | 'taxonomy___node___showUi'
  | 'taxonomy___node___nodeType'
  | 'taxonomy___node___parent___id'
  | 'taxonomy___node___parent___children'
  | 'taxonomy___node___children'
  | 'taxonomy___node___children___id'
  | 'taxonomy___node___children___children'
  | 'taxonomy___node___internal___content'
  | 'taxonomy___node___internal___contentDigest'
  | 'taxonomy___node___internal___description'
  | 'taxonomy___node___internal___fieldOwners'
  | 'taxonomy___node___internal___ignoreType'
  | 'taxonomy___node___internal___mediaType'
  | 'taxonomy___node___internal___owner'
  | 'taxonomy___node___internal___type'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpTagFilterInput = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<WpTagToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpTagToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpTagFilterListInput = {
  elemMatch?: Maybe<WpTagFilterInput>;
};

export type WpTagGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTagEdge>;
  nodes: Array<WpTag>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpTagSortInput = {
  fields?: Maybe<Array<Maybe<WpTagFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpTagToPostConnection = {
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpTagToPostConnectionFilterInput = {
  nodes?: Maybe<WpPostFilterListInput>;
};

export type WpTagToTaxonomyConnectionEdge = {
  node?: Maybe<WpTaxonomy>;
};

export type WpTagToTaxonomyConnectionEdgeFilterInput = {
  node?: Maybe<WpTaxonomyFilterInput>;
};

export type WpTaxonomy = Node & WpNode & {
  archivePath?: Maybe<Scalars['String']>;
  connectedContentTypes?: Maybe<WpTaxonomyToContentTypeConnection>;
  description?: Maybe<Scalars['String']>;
  graphqlPluralName?: Maybe<Scalars['String']>;
  graphqlSingleName?: Maybe<Scalars['String']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  restBase?: Maybe<Scalars['String']>;
  restControllerClass?: Maybe<Scalars['String']>;
  showCloud?: Maybe<Scalars['Boolean']>;
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  showInGraphql?: Maybe<Scalars['Boolean']>;
  showInMenu?: Maybe<Scalars['Boolean']>;
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  showInRest?: Maybe<Scalars['Boolean']>;
  showUi?: Maybe<Scalars['Boolean']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpTaxonomyConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTaxonomyEdge>;
  nodes: Array<WpTaxonomy>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpTaxonomyGroupConnection>;
};


export type WpTaxonomyConnectionDistinctArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpTaxonomyFieldsEnum;
};

export type WpTaxonomyEdge = {
  next?: Maybe<WpTaxonomy>;
  node: WpTaxonomy;
  previous?: Maybe<WpTaxonomy>;
};

export type WpTaxonomyFieldsEnum = 
  | 'archivePath'
  | 'connectedContentTypes___nodes'
  | 'connectedContentTypes___nodes___archivePath'
  | 'connectedContentTypes___nodes___canExport'
  | 'connectedContentTypes___nodes___connectedTaxonomies___nodes'
  | 'connectedContentTypes___nodes___contentNodes___nodes'
  | 'connectedContentTypes___nodes___deleteWithUser'
  | 'connectedContentTypes___nodes___description'
  | 'connectedContentTypes___nodes___excludeFromSearch'
  | 'connectedContentTypes___nodes___graphqlPluralName'
  | 'connectedContentTypes___nodes___graphqlSingleName'
  | 'connectedContentTypes___nodes___hasArchive'
  | 'connectedContentTypes___nodes___hierarchical'
  | 'connectedContentTypes___nodes___id'
  | 'connectedContentTypes___nodes___isFrontPage'
  | 'connectedContentTypes___nodes___isPostsPage'
  | 'connectedContentTypes___nodes___label'
  | 'connectedContentTypes___nodes___labels___addNew'
  | 'connectedContentTypes___nodes___labels___addNewItem'
  | 'connectedContentTypes___nodes___labels___allItems'
  | 'connectedContentTypes___nodes___labels___archives'
  | 'connectedContentTypes___nodes___labels___attributes'
  | 'connectedContentTypes___nodes___labels___editItem'
  | 'connectedContentTypes___nodes___labels___featuredImage'
  | 'connectedContentTypes___nodes___labels___filterItemsList'
  | 'connectedContentTypes___nodes___labels___insertIntoItem'
  | 'connectedContentTypes___nodes___labels___itemsList'
  | 'connectedContentTypes___nodes___labels___itemsListNavigation'
  | 'connectedContentTypes___nodes___labels___menuName'
  | 'connectedContentTypes___nodes___labels___name'
  | 'connectedContentTypes___nodes___labels___newItem'
  | 'connectedContentTypes___nodes___labels___notFound'
  | 'connectedContentTypes___nodes___labels___notFoundInTrash'
  | 'connectedContentTypes___nodes___labels___parentItemColon'
  | 'connectedContentTypes___nodes___labels___removeFeaturedImage'
  | 'connectedContentTypes___nodes___labels___searchItems'
  | 'connectedContentTypes___nodes___labels___setFeaturedImage'
  | 'connectedContentTypes___nodes___labels___singularName'
  | 'connectedContentTypes___nodes___labels___uploadedToThisItem'
  | 'connectedContentTypes___nodes___labels___useFeaturedImage'
  | 'connectedContentTypes___nodes___labels___viewItem'
  | 'connectedContentTypes___nodes___labels___viewItems'
  | 'connectedContentTypes___nodes___menuIcon'
  | 'connectedContentTypes___nodes___menuPosition'
  | 'connectedContentTypes___nodes___name'
  | 'connectedContentTypes___nodes___public'
  | 'connectedContentTypes___nodes___publiclyQueryable'
  | 'connectedContentTypes___nodes___restBase'
  | 'connectedContentTypes___nodes___restControllerClass'
  | 'connectedContentTypes___nodes___showInAdminBar'
  | 'connectedContentTypes___nodes___showInGraphql'
  | 'connectedContentTypes___nodes___showInMenu'
  | 'connectedContentTypes___nodes___showInNavMenus'
  | 'connectedContentTypes___nodes___showInRest'
  | 'connectedContentTypes___nodes___showUi'
  | 'connectedContentTypes___nodes___uri'
  | 'connectedContentTypes___nodes___nodeType'
  | 'connectedContentTypes___nodes___parent___id'
  | 'connectedContentTypes___nodes___parent___children'
  | 'connectedContentTypes___nodes___children'
  | 'connectedContentTypes___nodes___children___id'
  | 'connectedContentTypes___nodes___children___children'
  | 'connectedContentTypes___nodes___internal___content'
  | 'connectedContentTypes___nodes___internal___contentDigest'
  | 'connectedContentTypes___nodes___internal___description'
  | 'connectedContentTypes___nodes___internal___fieldOwners'
  | 'connectedContentTypes___nodes___internal___ignoreType'
  | 'connectedContentTypes___nodes___internal___mediaType'
  | 'connectedContentTypes___nodes___internal___owner'
  | 'connectedContentTypes___nodes___internal___type'
  | 'description'
  | 'graphqlPluralName'
  | 'graphqlSingleName'
  | 'hierarchical'
  | 'id'
  | 'label'
  | 'name'
  | 'public'
  | 'restBase'
  | 'restControllerClass'
  | 'showCloud'
  | 'showInAdminColumn'
  | 'showInGraphql'
  | 'showInMenu'
  | 'showInNavMenus'
  | 'showInQuickEdit'
  | 'showInRest'
  | 'showUi'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpTaxonomyFilterInput = {
  archivePath?: Maybe<StringQueryOperatorInput>;
  connectedContentTypes?: Maybe<WpTaxonomyToContentTypeConnectionFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  graphqlPluralName?: Maybe<StringQueryOperatorInput>;
  graphqlSingleName?: Maybe<StringQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  restBase?: Maybe<StringQueryOperatorInput>;
  restControllerClass?: Maybe<StringQueryOperatorInput>;
  showCloud?: Maybe<BooleanQueryOperatorInput>;
  showInAdminColumn?: Maybe<BooleanQueryOperatorInput>;
  showInGraphql?: Maybe<BooleanQueryOperatorInput>;
  showInMenu?: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus?: Maybe<BooleanQueryOperatorInput>;
  showInQuickEdit?: Maybe<BooleanQueryOperatorInput>;
  showInRest?: Maybe<BooleanQueryOperatorInput>;
  showUi?: Maybe<BooleanQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpTaxonomyFilterListInput = {
  elemMatch?: Maybe<WpTaxonomyFilterInput>;
};

export type WpTaxonomyGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTaxonomyEdge>;
  nodes: Array<WpTaxonomy>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpTaxonomySortInput = {
  fields?: Maybe<Array<Maybe<WpTaxonomyFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpTaxonomyToContentTypeConnection = {
  nodes?: Maybe<Array<Maybe<WpContentType>>>;
};

export type WpTaxonomyToContentTypeConnectionFilterInput = {
  nodes?: Maybe<WpContentTypeFilterListInput>;
};

export type WpTermNode = {
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  termGroupId?: Maybe<Scalars['Int']>;
  termTaxonomyId?: Maybe<Scalars['Int']>;
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
};

export type WpTermNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTermNodeEdge>;
  nodes: Array<WpTermNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpTermNodeGroupConnection>;
};


export type WpTermNodeConnectionDistinctArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpTermNodeFieldsEnum;
};

export type WpTermNodeEdge = {
  next?: Maybe<WpTermNode>;
  node: WpTermNode;
  previous?: Maybe<WpTermNode>;
};

export type WpTermNodeFieldsEnum = 
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'link'
  | 'name'
  | 'slug'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType';

export type WpTermNodeFilterInput = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type WpTermNodeFilterListInput = {
  elemMatch?: Maybe<WpTermNodeFilterInput>;
};

export type WpTermNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTermNodeEdge>;
  nodes: Array<WpTermNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpTermNodeSortInput = {
  fields?: Maybe<Array<Maybe<WpTermNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpUniformResourceIdentifiable = {
  id: Scalars['ID'];
  uri?: Maybe<Scalars['String']>;
};

export type WpUser = Node & WpNode & WpUniformResourceIdentifiable & WpCommenter & WpDatabaseIdentifier & {
  avatar?: Maybe<WpAvatar>;
  capKey?: Maybe<Scalars['String']>;
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  comments?: Maybe<WpUserToCommentConnection>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nicename?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  pages?: Maybe<WpUserToPageConnection>;
  posts?: Maybe<WpUserToPostConnection>;
  registeredDate?: Maybe<Scalars['String']>;
  roles?: Maybe<WpUserToUserRoleConnection>;
  slug?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpUserConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpUserEdge>;
  nodes: Array<WpUser>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpUserGroupConnection>;
};


export type WpUserConnectionDistinctArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpUserFieldsEnum;
};

export type WpUserEdge = {
  next?: Maybe<WpUser>;
  node: WpUser;
  previous?: Maybe<WpUser>;
};

export type WpUserFieldsEnum = 
  | 'avatar___default'
  | 'avatar___extraAttr'
  | 'avatar___forceDefault'
  | 'avatar___foundAvatar'
  | 'avatar___height'
  | 'avatar___rating'
  | 'avatar___scheme'
  | 'avatar___size'
  | 'avatar___url'
  | 'avatar___width'
  | 'capKey'
  | 'capabilities'
  | 'comments___nodes'
  | 'comments___nodes___agent'
  | 'comments___nodes___approved'
  | 'comments___nodes___authorIp'
  | 'comments___nodes___content'
  | 'comments___nodes___databaseId'
  | 'comments___nodes___date'
  | 'comments___nodes___dateGmt'
  | 'comments___nodes___id'
  | 'comments___nodes___karma'
  | 'comments___nodes___replies___nodes'
  | 'comments___nodes___type'
  | 'comments___nodes___nodeType'
  | 'comments___nodes___parent___id'
  | 'comments___nodes___parent___children'
  | 'comments___nodes___children'
  | 'comments___nodes___children___id'
  | 'comments___nodes___children___children'
  | 'comments___nodes___internal___content'
  | 'comments___nodes___internal___contentDigest'
  | 'comments___nodes___internal___description'
  | 'comments___nodes___internal___fieldOwners'
  | 'comments___nodes___internal___ignoreType'
  | 'comments___nodes___internal___mediaType'
  | 'comments___nodes___internal___owner'
  | 'comments___nodes___internal___type'
  | 'databaseId'
  | 'description'
  | 'email'
  | 'extraCapabilities'
  | 'firstName'
  | 'id'
  | 'lastName'
  | 'locale'
  | 'name'
  | 'nicename'
  | 'nickname'
  | 'pages___nodes'
  | 'pages___nodes___ancestors___nodes'
  | 'pages___nodes___authorDatabaseId'
  | 'pages___nodes___authorId'
  | 'pages___nodes___wpChildren___nodes'
  | 'pages___nodes___commentCount'
  | 'pages___nodes___commentStatus'
  | 'pages___nodes___comments___nodes'
  | 'pages___nodes___content'
  | 'pages___nodes___databaseId'
  | 'pages___nodes___date'
  | 'pages___nodes___dateGmt'
  | 'pages___nodes___desiredSlug'
  | 'pages___nodes___enclosure'
  | 'pages___nodes___featuredImageDatabaseId'
  | 'pages___nodes___featuredImageId'
  | 'pages___nodes___guid'
  | 'pages___nodes___id'
  | 'pages___nodes___isFrontPage'
  | 'pages___nodes___isPostsPage'
  | 'pages___nodes___isRevision'
  | 'pages___nodes___link'
  | 'pages___nodes___menuOrder'
  | 'pages___nodes___modified'
  | 'pages___nodes___modifiedGmt'
  | 'pages___nodes___parentDatabaseId'
  | 'pages___nodes___parentId'
  | 'pages___nodes___slug'
  | 'pages___nodes___status'
  | 'pages___nodes___template___templateFile'
  | 'pages___nodes___template___templateName'
  | 'pages___nodes___terms___nodes'
  | 'pages___nodes___title'
  | 'pages___nodes___uri'
  | 'pages___nodes___nodeType'
  | 'pages___nodes___parent___id'
  | 'pages___nodes___parent___children'
  | 'pages___nodes___children'
  | 'pages___nodes___children___id'
  | 'pages___nodes___children___children'
  | 'pages___nodes___internal___content'
  | 'pages___nodes___internal___contentDigest'
  | 'pages___nodes___internal___description'
  | 'pages___nodes___internal___fieldOwners'
  | 'pages___nodes___internal___ignoreType'
  | 'pages___nodes___internal___mediaType'
  | 'pages___nodes___internal___owner'
  | 'pages___nodes___internal___type'
  | 'posts___nodes'
  | 'posts___nodes___authorDatabaseId'
  | 'posts___nodes___authorId'
  | 'posts___nodes___categories___nodes'
  | 'posts___nodes___commentCount'
  | 'posts___nodes___commentStatus'
  | 'posts___nodes___comments___nodes'
  | 'posts___nodes___content'
  | 'posts___nodes___databaseId'
  | 'posts___nodes___date'
  | 'posts___nodes___dateGmt'
  | 'posts___nodes___desiredSlug'
  | 'posts___nodes___enclosure'
  | 'posts___nodes___excerpt'
  | 'posts___nodes___featuredImageDatabaseId'
  | 'posts___nodes___featuredImageId'
  | 'posts___nodes___guid'
  | 'posts___nodes___id'
  | 'posts___nodes___isRevision'
  | 'posts___nodes___link'
  | 'posts___nodes___modified'
  | 'posts___nodes___modifiedGmt'
  | 'posts___nodes___pingStatus'
  | 'posts___nodes___pinged'
  | 'posts___nodes___postFormats___nodes'
  | 'posts___nodes___slug'
  | 'posts___nodes___status'
  | 'posts___nodes___tags___nodes'
  | 'posts___nodes___template___templateFile'
  | 'posts___nodes___template___templateName'
  | 'posts___nodes___terms___nodes'
  | 'posts___nodes___title'
  | 'posts___nodes___toPing'
  | 'posts___nodes___uri'
  | 'posts___nodes___nodeType'
  | 'posts___nodes___parent___id'
  | 'posts___nodes___parent___children'
  | 'posts___nodes___children'
  | 'posts___nodes___children___id'
  | 'posts___nodes___children___children'
  | 'posts___nodes___internal___content'
  | 'posts___nodes___internal___contentDigest'
  | 'posts___nodes___internal___description'
  | 'posts___nodes___internal___fieldOwners'
  | 'posts___nodes___internal___ignoreType'
  | 'posts___nodes___internal___mediaType'
  | 'posts___nodes___internal___owner'
  | 'posts___nodes___internal___type'
  | 'registeredDate'
  | 'roles___nodes'
  | 'roles___nodes___capabilities'
  | 'roles___nodes___displayName'
  | 'roles___nodes___id'
  | 'roles___nodes___name'
  | 'roles___nodes___nodeType'
  | 'roles___nodes___parent___id'
  | 'roles___nodes___parent___children'
  | 'roles___nodes___children'
  | 'roles___nodes___children___id'
  | 'roles___nodes___children___children'
  | 'roles___nodes___internal___content'
  | 'roles___nodes___internal___contentDigest'
  | 'roles___nodes___internal___description'
  | 'roles___nodes___internal___fieldOwners'
  | 'roles___nodes___internal___ignoreType'
  | 'roles___nodes___internal___mediaType'
  | 'roles___nodes___internal___owner'
  | 'roles___nodes___internal___type'
  | 'slug'
  | 'uri'
  | 'url'
  | 'username'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpUserFilterInput = {
  avatar?: Maybe<WpAvatarFilterInput>;
  capKey?: Maybe<StringQueryOperatorInput>;
  capabilities?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpUserToCommentConnectionFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  extraCapabilities?: Maybe<StringQueryOperatorInput>;
  firstName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastName?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nicename?: Maybe<StringQueryOperatorInput>;
  nickname?: Maybe<StringQueryOperatorInput>;
  pages?: Maybe<WpUserToPageConnectionFilterInput>;
  posts?: Maybe<WpUserToPostConnectionFilterInput>;
  registeredDate?: Maybe<StringQueryOperatorInput>;
  roles?: Maybe<WpUserToUserRoleConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpUserGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpUserEdge>;
  nodes: Array<WpUser>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpUserRole = Node & WpNode & {
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpUserRoleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpUserRoleEdge>;
  nodes: Array<WpUserRole>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpUserRoleGroupConnection>;
};


export type WpUserRoleConnectionDistinctArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpUserRoleFieldsEnum;
};

export type WpUserRoleEdge = {
  next?: Maybe<WpUserRole>;
  node: WpUserRole;
  previous?: Maybe<WpUserRole>;
};

export type WpUserRoleFieldsEnum = 
  | 'capabilities'
  | 'displayName'
  | 'id'
  | 'name'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpUserRoleFilterInput = {
  capabilities?: Maybe<StringQueryOperatorInput>;
  displayName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpUserRoleFilterListInput = {
  elemMatch?: Maybe<WpUserRoleFilterInput>;
};

export type WpUserRoleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpUserRoleEdge>;
  nodes: Array<WpUserRole>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpUserRoleSortInput = {
  fields?: Maybe<Array<Maybe<WpUserRoleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpUserSortInput = {
  fields?: Maybe<Array<Maybe<WpUserFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpUserToCommentConnection = {
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpUserToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

export type WpUserToPageConnection = {
  nodes?: Maybe<Array<Maybe<WpPage>>>;
};

export type WpUserToPageConnectionFilterInput = {
  nodes?: Maybe<WpPageFilterListInput>;
};

export type WpUserToPostConnection = {
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpUserToPostConnectionFilterInput = {
  nodes?: Maybe<WpPostFilterListInput>;
};

export type WpUserToUserRoleConnection = {
  nodes?: Maybe<Array<Maybe<WpUserRole>>>;
};

export type WpUserToUserRoleConnectionFilterInput = {
  nodes?: Maybe<WpUserRoleFilterListInput>;
};

export type WpWritingSettings = {
  defaultCategory?: Maybe<Scalars['Int']>;
  defaultPostFormat?: Maybe<Scalars['String']>;
  useSmilies?: Maybe<Scalars['Boolean']>;
};

export type WpWritingSettingsFilterInput = {
  defaultCategory?: Maybe<IntQueryOperatorInput>;
  defaultPostFormat?: Maybe<StringQueryOperatorInput>;
  useSmilies?: Maybe<BooleanQueryOperatorInput>;
};

export type SiteTitleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteTitleQueryQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

export type GetAllPostQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostQuery = { allWpPost: { nodes: Array<(
      Pick<WpPost, 'title' | 'excerpt' | 'slug'>
      & { featuredImage?: Maybe<{ node?: Maybe<{ localFile?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<Pick<ImageSharpFixed, 'src' | 'height' | 'width' | 'base64'>> }> }> }> }> }
    )> } };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { site?: Maybe<Pick<Site, 'buildTime'>> };

export type Unnamed_3_QueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type Unnamed_3_Query = { allWpPost: { nodes: Array<Pick<WpPost, 'title' | 'content' | 'date'>> } };

export type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_4_Query = { allWpPost: { nodes: Array<Pick<WpPost, 'title' | 'excerpt' | 'content' | 'slug' | 'date'>> } };
