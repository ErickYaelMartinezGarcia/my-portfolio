
const EducationCardComponent = {
    props:{
            infoJob:{
                required:true,
                type:Object,
            },
    },
    template:`
    <div class="rounded-5 pt-3 ps-2 my-auto"
       @click="openLink(infoJob.link)"
    @mouseenter="changeBg(true)" @mouseleave="changeBg(false)">
 
            <div class="d-flex text-white">
                <div class=" mx-auto">
                    <!-- img -->
                    <img class="img-fluid p-2" :src="infoJob.img" alt="Imagen de empresa" />
                </div>
                    <div class="col-7 ms-auto text-center">
                        <!-- Title job-->
                            <h3 class="mb-3"
                                v-text="infoJob.title"></h3>
                            <h4 class="my-3"
                                v-text="infoJob.role"></h4>
                            <h6 class="my-3"
                                v-text="infoJob.date"></h6>
                    </div>
            </div>
        
    </div>    
`,
    
data() {
    return {

    };
  },
  methods: {
    openLink:function(link){
       link && window.open(link)
    },
    changeBg:function(inside ){
           let card = event.currentTarget;
    
        (inside)? card.classList.add('gradientBg'): card.classList.remove('gradientBg');
    },
  },
  mounted() {},
  watch: {}

}
export default EducationCardComponent;

