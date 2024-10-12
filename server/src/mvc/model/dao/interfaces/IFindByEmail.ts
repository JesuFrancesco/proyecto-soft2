export interface IFindByEmail<T> {
  findByEmail: (email: string) => Promise<T>;
}
