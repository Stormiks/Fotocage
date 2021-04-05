<template>
  <div
    class="card-control_box"
    :class="{ 'control-show': show }"
    tabindex="0"
  >
    <div class="card-control__group px-3 py-2">
      <button
        class="m-0.5"
        type="button"
        @click.stop="$emit('open-modal-file', $event)"
        title="Просмотр"
      >
        <svg
          viewBox="0 0 510 510"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m255 180c-41.355 0-75 33.645-75 75 4.12 99.498 145.895 99.469 150-.001 0-41.354-33.645-74.999-75-74.999zm0 120c-24.813 0-45-20.187-45-45 2.472-59.699 87.537-59.681 90 0 0 24.813-20.187 45-45 45z" />
          <path d="m405 0v30h75v75h30v-105z" />
          <path d="m480 480h-75v30h105v-105h-30z" />
          <path d="m30 405h-30v105h105v-30h-75z" />
          <path d="m30 30h75v-30h-105v105h30z" />
          <path d="m501.213 255-53.107-53.106c-101.653-105.946-284.562-105.941-386.213 0l-53.106 53.106 53.107 53.106c101.653 105.946 284.562 105.941 386.213 0zm-450 0 31.893-31.894c8.905-8.905 18.335-16.972 28.19-24.203-8.374 36.128-8.374 76.065 0 112.193-9.855-7.231-19.285-15.298-28.19-24.203zm98.589 79.151c-19.657-48.139-19.657-110.163 0-158.303 66.295-31.749 144.101-31.749 210.397 0 19.656 48.14 19.656 110.164 0 158.303-66.296 31.749-144.102 31.749-210.397 0zm248.902-23.054c8.374-36.128 8.374-76.065 0-112.193 9.855 7.231 19.285 15.298 28.19 24.203l31.893 31.893-31.893 31.894c-8.905 8.904-18.335 16.972-28.19 24.203z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardControlGroup',
    props: {
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="less" scoped>
  .card-control {
    &__group {
      pointer-events: none;
    }

    &_box {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      transition: all .2s ease-in .1s;
      opacity: 0;

      &::before {
        content: '';
        position: absolute;
        background-color: rgba(#000, 57%);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        transition: all .15s ease 0s;
        opacity: 0;
      }

      &:hover,
      &:focus,
      &.control-show {
        opacity: 1;

        &::before {
          opacity: 1;
        }

        > * {
          pointer-events: initial;
        }
      }
    }

    &__group {
      background-color: rgba(#ff7700, 88%);
      border-radius: 18px;

      button {
        display: flex;
        justify-content: center;
        height: 24px;
        width: 24px;
        transition: all .33s;

        &:hover {
          box-shadow: 0 0 5px 0 rgba(#000, 25%);
        }

        * {
          cursor: pointer;
        }

        svg {
          height: inherit;
          fill: @color-white;
          stroke: #000;
          stroke-width: 3px;
        }
      }
    }
  }
</style>
