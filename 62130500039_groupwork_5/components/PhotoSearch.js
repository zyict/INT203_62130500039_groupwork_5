app.component('photo-search', {
    template: 
    /*html*/
    `
    <div>
        <input @keyup="searchMember" v-show="search.clicked" type="text" placeholder="Enter member name..."
            v-model="searchText" class="px-2 rounded bg-white">
    </div>
    <div class="space-x-1">
        <button @click="showSearch" v-show="search.notclick">
        <span class="material-icons" style="color: white;">
            search
        </span>
        </button>
        <button @click="showSearch" v-show="search.clicked" class="rounded text-white bg-red-500 w-16 h-6">
        Cancel
        </button>
    </div>
    `,
    data(){
        return{
            search: { clicked: false, notclick: true },
            searchText: '',
            notFound: false,
        }
    },
    methods:{
        showSearch(){
            this.$emit('show-search')
        },
        searchMember(){
            this.$emit('search-member')
        },
        showMember(){
            this.$emit('show-member')
        }
    },
    computed:{
        countLiked(){
            this.$emit('count-like')
        }
    }

})