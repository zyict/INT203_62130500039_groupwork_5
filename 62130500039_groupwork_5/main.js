class Member {
    constructor(text) {
        this.text = text;
    }
}

const app = Vue.createApp({
    data() {
        return {
            memberList: [{
                image: './images/miyeon.jpg',
                text: 'MIYEON',
                like: false,
                unlike: true,
                show: true

            },
            {
                image: './images/minnie.jpg',
                text: 'MINNIE',
                like: false,
                unlike: true,
                show: true
            },
            {
                image: './images/soojin.jpg',
                text: 'SOOJIN',
                like: false,
                unlike: true,
                show: true
            },
            {
                image: './images/soyeon.jpg',
                text: 'SOYEON',
                like: false,
                unlike: true,
                show: true
            },
            {
                image: './images/yuqi.jpg',
                text: 'YUQI',
                like: false,
                unlike: true,
                show: true
            },
            {
                image: './images/shuhua.jpg',
                text: 'SHUHUA',
                like: false,
                unlike: true,
                show: true
            }
            ],
            search: { clicked: false, notclick: true },
            searchText: '',
            notFound: false,
            img: '',
            imgShow: false

        }
    },
    methods: {
        toggleLike(index) {
            this.memberList[index].like = !this.memberList[index].like
            this.memberList[index].unlike = !this.memberList[index].unlike
        },
        showSearch() {
            this.search.clicked = !this.search.clicked
            this.search.notclick = !this.search.notclick
            this.searchText = ''
            this.showMember();
        },
        showImg(index) {
            this.img = this.memberList[index].image
            this.imgShow = true
        },
        closeImg(){
            this.imgShow = false
        },
        searchMember(){
            if(this.searchText){
                for (let index = 0; index < this.memberList.length; index++) {
                    const element = this.memberList[index];
                    if(element.text !== this.searchText.toUpperCase()){
                        element.show = false
                        this.notFound = false
                    }
                    if(element.text.includes(this.searchText.toUpperCase())){
                        element.show = true
                        this.notFound = false
                    }
                    if(this.memberList.every(element => !element.show)){
                        this.notFound = true
                    }
                }
            }else{
                this.showMember();
            }
        },
        showMember(){
            for (let index = 0; index < this.memberList.length; index++) {
                this.memberList[index].show = true
                this.notFound = false
                
            }
        }

    },
    computed: {
        countLiked() {
            return this.memberList.filter(t => t.like).length
        },
        totalPhoto(){
            return this.memberList.length
        }
    }
})