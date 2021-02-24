app.component('photo-search', {
    template: 
    /*html*/
    `
    <div class="flex space-x-2">
    <div>
        <input @keyup="$emit('search-member')" type="text" placeholder="Enter member name..."
            v-model="searchText" class="px-2 rounded bg-white">
    </div>
    <div class="space-x-1">
        <button @click="$emit('show-search')" class="rounded text-white bg-red-500 w-16 h-6">
        Cancel
        </button>
    </div>
    </div>
    `,
    data(){
        return{
            clicked: false,
            searchText: '',
            notFound: false,
        }
    },
    methods:{
        showSearch(){
            let click = this.clicked
            this.$emit('show-search',click)
            click = false
        },
        searchMember(){
            let text = this.searchText
            this.$emit('search-member',text)
            text = ''
        },
        showMember(){
            this.$emit('show-member',this.notFound)
            this.notFound = false
        }
    },
    computed:{
        countLiked(){
            this.$emit('count-like')
        }
    }

})