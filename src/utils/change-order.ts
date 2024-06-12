import { DraggableItem } from "../types/draggable-item.interface";
import { Ref } from "vue";

export const changeArrayOrder = (
  arr: Array<DraggableItem>,
  target: DraggableItem,
  newIndexOfTarget: number,
  isDraggable: Ref<boolean>
): Array<DraggableItem> => {
  if (!isDraggable.value) {
    return arr;
  }
  let newArr = arr.filter((e) => e.id !== target.id);
  newArr.splice(newIndexOfTarget, 0, { ...target });
  return newArr;
};
