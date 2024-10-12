import { Prisma } from "@prisma/client";

export interface ICreatable<T> {
  create: (arg0: T) => Promise<T>;
  createMany?: (arg0: T[]) => Promise<Prisma.BatchPayload>;
}

export interface IReadable<T> {
  findAll: () => Promise<T[]>;
  findByPk: (arg0: number | string) => Promise<T | null>;
}

export interface IUpdatable<T> {
  update: (arg0: number, arg1: Partial<T>) => Promise<T | null>;
}

export interface IDeletable<T> {
  deleteByPk: (arg0: number) => Promise<T | null>;
}

export interface ICrud<T>
  extends ICreatable<T>,
    IReadable<T>,
    IUpdatable<T>,
    IDeletable<T> {}
