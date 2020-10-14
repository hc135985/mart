<template>
    <div class="app-toast info" v-if="isShow">
            {{text}}
           <button @click="del">取消</button>
           <button @click="onOk">确定</button>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.app-toast {
  position: fixed;
  left: 50%;
  top: 50%;
  background: #ccc;
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #fff;
}
.info {
  background: #00aaee;
}
</style>