// A Mapped Type allow us to create a new Type from existing Type and we can transform
// the existing type if we want to.

//Docs: Bacis Syntax for using Mapped Type
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

type Student = {
  id: number;
  name: string;
  department: string;
  level: number;
};

type CloneUser = {
  [K in keyof User]: User[K];
};

const NewUser1: CloneUser = {
  id: 1,
  name: "james",
  isAdmin: false,
};

//Docs: Creating new Type from existing type but also transforming the new type being created
type OptionalType<T> = {
  [K in keyof T]?: T[K];
};

type PartialUser = OptionalType<User>;
type PartialStudent = OptionalType<Student>;

const NewUser2: PartialUser = {
  id: 2,
  name: "James",
  isAdmin: true,
};

const NewStudent1: PartialStudent = {
  id: 1,
  name: "abdo",
  department: "SOftware Engineering",
  level: 4,
};

//Docs: Making all properties ReadOnly

type ReadOnlyProperties<T> = {
  readonly [K in keyof T]: T[K];
};

type ImmutableUser = ReadOnlyProperties<User>;
type ImmutableStudent = ReadOnlyProperties<Student>;

const NewUser3: ImmutableUser = {
  id: 2,
  name: "James",
  isAdmin: true,
};

// NewUser3.id = 4;

//Docs: making type Mutable
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};
