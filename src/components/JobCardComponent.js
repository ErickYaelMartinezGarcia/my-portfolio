
const JobCardComponent = {
    props:{
            infoJob:{
                required:true,
                type:Object,
            },
    },
    template:`
    <div class=" rounded-5 ">
        <div class="d-flex text-white">
            <div class=" mx-auto">
                <!-- img -->
                <img class="img-fluid p-2" :src="infoJob.img" alt="Imagen de empresa" />
            </div>
                <div class="col-7 ms-auto">
                    <!-- Title job-->
                        <h3 class="mb-3"
                            v-text="infoJob.title"></h3>
                        <h4 class="my-3"
                            v-text="infoJob.role"></h4>
                        <h6 class="my-3"
                            v-text="infoJob.date"></h6>
                </div>
        </div>
        <!---->
        <p class="text-white col-10 mx-auto text-center"
        v-text="infoJob.description">
        </p>
    </div>    
`,
    
data() {
    return {

    };
  },
  methods: {

    
  },
  mounted() {},
  watch: {}

}
export default JobCardComponent;

