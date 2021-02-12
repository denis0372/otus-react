// Задание второго уровня 2
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = any;

type defaultProps<T> = T extends { defaultProps: infer U } ? U : never;

// Hint: infer
export const getDefaultProps = <T>(
  component: React.ComponentType<T>
): defaultProps<T> => {
  return component.defaultProps as defaultProps<T>;
};
