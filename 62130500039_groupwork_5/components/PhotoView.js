app.component('photo-view',{
    props:['img'],
    template:
    /*hmtl*/
    ` <button @click="closeImg">
    <span class="material-icons absolute top-0 right-0 text-5xl text-white">
      close
    </span>
  </button>
  <div class="md:py-40">
    <img v-bind:src="img" class="item-center" width="400" height="600">
  </div>`,
  data(){
      return{
        img: '',
      }
  },
  methods:{
    closeImg(){
        this.$emit('close-img')
    }
  }
})