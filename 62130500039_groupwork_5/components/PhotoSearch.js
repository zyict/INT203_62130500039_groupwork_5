app.component('photo-search', {
    template:
        /*html*/
        `
    <div class="flex space-x-2">
    <div>
        <input type="text" placeholder="Enter member name..."
            v-model="searchText" @input="search_Text" class="px-2 rounded bg-white">
    </div>
    <div class="space-x-1">
        <button @click="showSearch" class="rounded text-white bg-red-500 w-16 h-6">
        Cancel
        </button>
    </div>
    </div>
    `,
    data() {
        return {
            clicked: false,
            searchText: '',
            notFound: false,
        }
    },
    methods: {
        showSearch() {
            this.clicked = !this.clicked
            if (this.clicked) {
                this.searchText = ''
            }
            this.$emit('show-search', this.click)
        },
        search_Text() {
            let tmpText = this.searchText
            this.$emit('search-text', tmpText)
            tmpText = ''
        }
    }

})