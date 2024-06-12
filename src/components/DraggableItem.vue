<template>
  <div
    :draggable="isDraggable"
    @transitionStart="transitionStart"
    @transitionEnd="transitionEnd"
    @dragover.prevent.stop="onDragOver"
    @dragstart.stop="onDragStart"
    @dragend.stop="onDragEnd"
    @dragenter.prevent
    ref="draggableItemEl"
    :class="(isDragging ? 'isDragging ' : '') + (!isDraggable? 'prevent-select' : '')"
    >
    <slot></slot>
  </div>
</template>

<script>
import { toRefs } from "vue";
import { useDraggableItem } from "../composables/draggable";

export default {
  name: "DraggableItem",
  props: {
    item: Object,
    position: Number,
    containerId: Number,
    isDraggable: Boolean
  },
  setup(props, context) {
    const { item, position, containerId, isDraggable } = toRefs(props);
    const {
      draggableItemEl,
      isDragging,
      onDragStart,
      onDragOver,
      onDragEnd,
      transitionStart,
      transitionEnd
    } = useDraggableItem(item, position, containerId, context, isDraggable);

    return {
      draggableItemEl,
      isDragging,
      onDragStart,
      onDragOver,
      onDragEnd,
      transitionStart,
      transitionEnd
    };
  }
};
</script>

<style scoped>
.isDragging {
  opacity: 0.4;
}

.prevent-select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  cursor: not-allowed;
}
</style>
