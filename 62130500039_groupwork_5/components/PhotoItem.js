app.component('photo-item',{
    props:
        ['member'],
    template:
    /*html*/
        `
        <img v-bind:src="member.image" class="h-72 w-48" :alt="member.text" @click="showImg(index)">
        <p class="text-lg font-bold"> {{ member.text }} </p>
        <div class="flex flex-row justify-start space-x-1">
            <p>
                <button @click="toggleLike(index)">
                    <span class="material-icons" v-show="member.unlike">favorite_border</span>
                </button>

                <button @click="toggleLike(index)">
                    <span class="material-icons" v-show="member.like">favorite</span>
                </button>

            </p>
         </div>
        `,
        data(){
            return{
                img: '',
                imgShow: false
            }
        },
        methods:{
            toggleLike(index) {
                this.$emit('toggle-like',index)
            },
            showImg(index){
                this.$emit('show-img',index)
            }
        }
})
