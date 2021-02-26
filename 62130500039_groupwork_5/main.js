class Member {
    constructor(text) {
        this.text = text;
    }
}

const app = Vue.createApp({
    data() {
        return {
            memberList: [{
                id: 0,
                image: './images/miyeon.jpg',
                text: 'MIYEON',
                like: false,

            },
            {
                id: 1,
                image: './images/minnie.jpg',
                text: 'MINNIE',
                like: false,
            },
            {
                id: 2,
                image: './images/soojin.jpg',
                text: 'SOOJIN',
                like: false,
            },
            {
                id: 3,
                image: './images/soyeon.jpg',
                text: 'SOYEON',
                like: false,
            },
            {
                id: 4,
                image: './images/yuqi.jpg',
                text: 'YUQI',
                like: false,
            },
            {
                id: 5,
                image: './images/shuhua.jpg',
                text: 'SHUHUA',
                like: false,
            }
            ],
            clicked: false,
            searchText: '',
            notFound: false,
            img: '',
            imgShow: false,

        }
    },
    methods: {
        search_Text(text) {
            this.searchText = text
        },
        toggleLike(id) {
            this.memberList[id].like = !this.memberList[id].like
        },
        showSearch() {
            this.clicked = !this.clicked
            this.searchText = ''

        },
        showImg(id) {
            this.img = this.memberList[id].image
            this.imgShow = true
        },
        closeImg() {
            this.imgShow = false
        }

    },
    computed: {
        countLiked() {
            return this.memberList.filter(t => t.like).length
        },
        totalPhoto() {
            return this.memberList.length
        },
        searchMember() {
            if (this.searchText) {
                if (this.memberList.filter(member => member.text.includes(this.searchText.toUpperCase())) == '') {
                    this.notFound = true
                }
                else {
                    this.notFound = false
                    return this.memberList.filter(member => member.text.includes(this.searchText.toUpperCase()))
                }
            }
            else {
                this.notFound = false
                return this.memberList
            }

        }
    }
})