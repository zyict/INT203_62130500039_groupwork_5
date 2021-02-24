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
                show: true

            },
            {
                image: './images/minnie.jpg',
                text: 'MINNIE',
                like: false,
                show: true
            },
            {
                image: './images/soojin.jpg',
                text: 'SOOJIN',
                like: false,
                show: true
            },
            {
                image: './images/soyeon.jpg',
                text: 'SOYEON',
                like: false,
                show: true
            },
            {
                image: './images/yuqi.jpg',
                text: 'YUQI',
                like: false,
                show: true
            },
            {
                image: './images/shuhua.jpg',
                text: 'SHUHUA',
                like: false,
                show: true
            }
            ],
            clicked: false,
            searchText: '',
            notFound: false,
            img: '',
            imgShow: false

        }
    },
    methods: {
        toggleLike(index) {
            this.memberList[index].like = !this.memberList[index].like  
        },
        showSearch() {
            this.clicked = !this.clicked
            this.searchText = ''
            this.showMember();
        },
        showImg(index) {
            this.img = this.memberList[index].image
            this.imgShow = true
            console.log(this.img)
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