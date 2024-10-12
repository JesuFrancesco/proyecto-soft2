import { Prisma } from "@prisma/client";

export interface IEduyachaDAO<T> {
  create: (arg0: T) => Promise<T>;
  createMany?: (arg0: T[]) => Promise<Prisma.BatchPayload>;

  findByPk: (arg0: number) => Promise<T | null>;
  findAll: () => Promise<T[]>;

  update: (arg0: number, arg1: Partial<T>) => Promise<T | null>;

  deleteByPk: (arg0: number) => Promise<T | null>;
}
