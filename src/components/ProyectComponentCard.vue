<template>
<div class="article-wrapper" @click="openNewWindow(link)">
  <div class="rounded-lg container-project">
    <img class="img-fluid rounded-3 h-100" :src="img" alt="ProyectImage">
    </div>
    <div class="px-3 pt-3">
      <div class="flex-pr">
        <!-- name proyect v-text="proyectName" -->
        <h3 class="text-nowrap" v-text="title"></h3>
          <div class="project-hover d-flex justify-content-center">
            <svg style="color: black;" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </div>

          <!-- skills used  -->
          <div class="d-flex mx-auto py-2 pt-2">
           <template v-for="icon in icons">
                <div class="col-lg-2 my-auto mx-auto">
                    <div class="img-fluid col-9" v-html="icon"></div>
                 </div>

            
           </template>
        </div>
            
    </div>
</div>
 </template>
 
 <script>
 export default {
    props:{icons: Object,
            img:String,
            link:{
                type: String,
                required: false,
            },
            title: String,
    },
    data () {
        return {

        }
    },
    methods: {
        openNewWindow(link){
          link && window.open(link)
        }
    },
    watch:{

    },
    mounted() {
        
    },
 }
 </script>
 
 <style lang="css" scoped>
 .article-wrapper {
  -webkit-transition: 0.15s all ease-in-out;
  transition: 0.15s all ease-in-out;
  border-radius: 10px;
  border: 4px solid transparent;
  cursor: pointer;
  background-color: white;
}

.article-wrapper:hover {
  -webkit-box-shadow: 10px 10px 0 #4e84ff, 20px 20px 0 #4444bd;
  box-shadow: 10px 10px 0 #4e84ff, 20px 20px 0 #4444bd;
  border-color: #0578c5;
  -webkit-transform: translate(-15px, -15px);
  -ms-transform: translate(-15px, -15px);
  transform: translate(-15px, -15px);
}

.article-wrapper:active {
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
}
.rounded-lg {
 /* class tailwind */
  border-radius: 10px;
}

.article-wrapper:hover .project-hover {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background-color: #a6c2f0;
}

.flex-pr {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.project-hover {
  border-radius: 50%;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.container-project {
  width: 100%;
  height: 170px;
  background: gray;
}

 </style>
 