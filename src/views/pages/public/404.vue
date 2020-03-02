<template lang="pug">
  #e-not-found.not-found
    .not-found-container.e-text-center
      .not-found-content
        h1.not-found-title 404
        .not-found-tips 找不到这个页面
      router-link.not-found-btn.e-btn-l(
        :to="{name: 'index'}"
        replace
      ) 回到首页
    .not-found-icon
      .not-found-icon-content
        .arraw.left
          .arraw-item
          .arraw-item
        .switch
          .switch-line
          .switch-off
          .switch-x
        .circle
        .arraw.right.rotate
          .arraw-item
          .arraw-item
        .triangle
      .not-found-icon-line
</template>

<style lang="sass" scoped>
.not-found
  width: 100%
  height: 100%
  position: fixed
  top: 0
  left: 0
  background-color: #161243

  &-container
    width: 300px
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

  &-content
    margin-bottom: 210px

  &-title
    font-size: 54px
    color: #fff
  
  &-tips
    font-size: 18px
    color: #d6d5e3

  &-btn
    width: 120px
    background-color: #fff
    margin: 0 auto

  &-icon
    position: fixed
    top: 50%
    left: 0
    transform: translateY(-50%)
    width: 100%
    height: 20px
    z-index: 100

    &-content
      width: 200px
      height: 100%
      position: absolute
      left: 50%
      margin-left: -100px
      z-index: 100

      .arraw
        width: 10px
        height: 20px
        position: absolute
        top: 50%
        margin-top: -10px

        &-item
          position: absolute
          width: 6px
          height: 20px
          left: 0
          background-color: #161243

          &::before,
          &::after
            content: ""
            position: absolute
            top: 50%
            left: 0
            margin-top: -1px
            width: 12px
            height: 2px
            background-color: #d6d5e3
            transform-origin: center left

          &::before
            transform: rotate(-60deg)

          &::after
            transform: rotate(60deg)

          &:nth-child(2)
            left: 6px
            background-color: transparent

        &.left
          left: 0

        &.right
          right: 30px

        &.rotate
          transform: rotate(180deg)

      .switch
        width: 105px
        height: 20px
        position: absolute
        left: 7px

        &-line
          width: 100%
          height: 2px
          background-color: #faad14
          position: absolute
          top: 50%
          left: 0
          margin-top: -1px

        &-off
          width: 40px
          height: 20px
          position: absolute
          background-color: #161243
          left: 30px

          &::after
            content: ""
            position: absolute
            width: 34px
            height: 2px
            background-color: #faad14
            transform: rotate(-24deg)
            transform-origin: center left
            top: 50%
            left: 0
            margin-top: -1px

        &-x
          width: 16px
          height: 16px
          position: absolute
          top: 50%
          left: 60px
          margin-top: -8px

          &::before,
          &::after
            content: ""
            position: absolute
            width: 16px
            height: 2px
            background-color: #faad14
            top: 50%
            left: 0
            margin-top: -1px

          &::before
            transform: rotate(-45deg)

          &::after
            transform: rotate(45deg)

      .circle
        width: 20px
        height: 20px
        border: 2px solid #d6d5e3
        border-radius: 50%
        position: absolute
        right: 70px

      .triangle
        position: absolute
        top: 50%
        right: 0
        width: 0
        height: 0
        border-top: 4px solid transparent
        border-right: none
        border-bottom: 4px solid transparent
        border-left: 7px solid #d6d5e3
        transform: translateY(-50%)

    &-line
      width: 100%
      height: 2px
      background-color: #d6d5e3
      position: absolute
      top: 50%
      margin-top: -1px
</style>

