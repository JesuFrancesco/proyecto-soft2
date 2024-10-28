export function zodGetDirtyValues<
  DirtyFields extends Record<string, unknown>,
  Values extends Record<keyof DirtyFields, unknown>
>(dirtyFields: DirtyFields, values: Values): Partial<typeof values> {
  const dirtyValues = Object.keys(dirtyFields).reduce((prev, key) => {
    if (!dirtyFields[key]) return prev;

    return {
      ...prev,
      [key]:
        typeof dirtyFields[key] === "object"
          ? zodGetDirtyValues(
              dirtyFields[key] as DirtyFields,
              values[key] as Values
            )
          : values[key],
    };
  }, {});

  return dirtyValues;
}

export function capitalizeFirstLetter(cadena: string) {
  return String(cadena).charAt(0).toUpperCase() + String(cadena).slice(1);
}
