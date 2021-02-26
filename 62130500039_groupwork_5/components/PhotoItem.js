app.component('photo-item',{
    props:
        ['member'],
    template:
    /*html*/
        `
        <img v-bind:src="member.image" class="h-72 w-48" :alt="member.text" @click="$emit('show-img')">
        <p class="text-lg font-bold"> {{ member.text }} </p>
        <div class="flex flex-row justify-start space-x-1">
            <p>
                <button @click="toggleLike(member.id)">
                    <span class="material-icons" v-show="!member.like">favorite_border</span>
                </button>

                <button @click="toggleLike(member.id)">
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
            toggleLike(id) {
                this.$emit('toggle-like',id)
            },
            showImg(id){
                let tmpimg = this.img
                this.$emit('show-img',id,tmpimg)
                tmpimg =''
            }
        }
})
