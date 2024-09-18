
const AppComponent = {
    props:{

    },
    template:`
    <div id="app_components">
    <!-- Home-->
    <section id="Inicio" class="mx-auto" style="height:min-10vh">
      <header-component class="mt-4"></header-component>
    </section>
        <section class="d-lg-flex align-items-center" style="min-height:85vh">
          <presentation-component></presentation-component>
            <div class="col-lg-5 col-md-6 mx-lg-5 mx-md-auto mt-5 mt-lg-0 me-auto rounded-5">
              <div class="px-lg-3 pt-0 rounded-5" style="background-color:rgb(0,4,14)">
                  <div class="px-lg-4 rounded-5 rounded-top-0" style="background-color:rgb(0,4,20)">
                    <div class="d-flex justify-content-center">
                          <img class="img-fluid w-75 mx-auto"
                              src="/img/empresas-logos/erick.png" alt="" />
                    </div>
                  </div>
              </div>
            </div>
        </section>
      
            <section id="Experiencia" class="mx-auto h-100">
              <h1 class="text-white text-center my-5 pb-5">Experiencia</h1>
              <div class="my-auto row justify-content-center align-items-center mb-5 pb-5">
                <job-card-component class="col-lg-3 mx-auto my-auto" :info-job="infoJob"/>
              </div>
            </section>
              <section class="mb-5 pt-5" id="Skills" style="min-height:100vh">
                <h1 class="text-white text-center mt-5 mb-5 pb-5 rounded-5">Habilidades</h1>
                <div class="row mx-auto">
                          <div v-for="icon in iconsLenguage"
                            class="col-4 mx-auto mb-5">
                              <div class="rounded-4  mx-auto col-lg-3 col-sm-4 h-100">
                                <span class="h-100 text-center img-fluid" v-html="icon"></span>
                              </div>
                          </div>
                </div>
              </section>
               <section id="Educacion" style="min-height:95vh">
                <h1 class="text-white text-center mb-5 pb-5">Educaci&oacuten</h1>
                    <div class="row mx-auto">
                    <template v-for="(info,i) in infoEducation">
                          <div class="col-lg-5 mx-auto my-auto">
                             <education-card-component class="col-lg-9 mx-auto mb-2" :info-job="info"/>
                         </div>
                     </template>
                    </div>
              </section>
               <section id="Proyectos" style="min-height:100vh">
                <h1 class="text-white text-center mb-5 pb-5">Proyectos</h1>
                
                <div class="row mx-auto my-auto ">
                
                
                  <proyect-component-card class="col-lg-3 col-md-5 mx-auto my-auto  "
                  :title="'Portafolio personal'"
                  :img="'/img/empresas-logos/proyecto.jpg'"
                  :link="'https://my-portfolio-git-main-erick-yael-martinez-garcias-projects.vercel.app/'"
                  :icons="{
                  'html':iconsLenguage.html,
                  'css':iconsLenguage.css,
                  'js': iconsLenguage.js,
                  'vue': iconsLenguage.vue,
                  'vite': iconsLenguage.vite,
                  }"/> 
                  
                  <proyect-component-card id="GatoGameProyect" class="col-lg-3 col-md-5 my-lg-0 my-5 mx-auto"
                  :title="'Juego del gato'"
                  :img="'/img/empresas-logos/gato.webp'"
                  :link="'https://tictactoe-seven-sooty.vercel.app/'"
                  :icons="{
                  'html':iconsLenguage.html,
                  'js': iconsLenguage.js,
                  'vue': iconsLenguage.vue,
                  'vite': iconsLenguage.vite,
                  }"/>    

                   <proyect-component-card id="mercadoFalseProyect" class="col-lg-3 col-md-5 mx-auto"
                  :title="'Proximamente'"
                  :img="'/img/empresas-logos/proximamente.jpg'"
                  :link="'https://mercadofalso.vercel.app/'"
                  :icons="{
                  'html':iconsLenguage.html,
                  'react': iconsLenguage.react,
                  'vite': iconsLenguage.vite,

                  }"/>   


              </div>

              </section>
            

              <!-- start T O A S T -->
                            <div id="liveToast" class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="d-flex">
                                  <div class="toast-body">
                                    Email copiado en el portapapeles
                                  </div>
                                  <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                              </div>
              <!-- end TOAST -->

              <footer id="Contacto" class="mx-auto p-4 p-lg-5 m-3 rounded-4" style="background-color: rgba(70,170,130)">
              <div>
                  <div class="col-lg-12 d-lg-flex text-center mx-auto my-auto">
                   <h4 class="fw-bold col-lg-4 my-2" style="color:rgb(0,4,18)"> Erick Yael Martinez Garcia</h4>
                   <div class="d-flex mx-auto my-4 my-lg-auto text-center col-lg-4">
                      <div class="mx-auto text-white text-center" 
                      type="button" @click="copyText('erickmartinez2f4101@gmail.com')">
                      <i class="bi bi-envelope-at fs-2"></i>
                      </div>
                      <div class="mx-auto text-white text-center" 
                      type="button" @click="openLink('https://api.whatsapp.com/send?phone=5215653935168')">
                        <i class="bi bi-whatsapp fs-2"></i>  
                      </div>
                      <div class="mx-auto text-white text-center" 
                      type="button" @click="openLink('https://github.com/ErickYaelMartinezGarcia')">
                         <i class="bi bi-github fs-2"></i>
                      </div>
                      <div class="mx-auto text-white text-center" 
                      type="button" @click="openLink('https://www.instagram.com/erick.yael_/')">
                        <i class="bi bi-instagram fs-2"></i>
                      </div>
                   </div>
                      <div class="my-auto mx-auto mt-2 mt-lg-0">
                        <a class="btn-lg btn btn-primary rounded-4 live" href="/documents/cvErickYaelMartinezGarcia.pdf" download="CV_ErickYaelMartinezGarcia.pdf">Descarga mi cv</a>
                      </div>
                  </div>
              </div>
              </footer>
     </div>
    `,
    
    data() {
        return {
          infoJob:{
            img:'/img/empresas-logos/egam-logo.png',
            title:"E-gam Digital",
            role:"Desarrollador Front End",
            date:"Nov/2022 - Jun/2024",
            description:`Desarrollé y actualicé módulos para clientes y uso interno, creados con Vue.js 3, bootstrap y Laravel.
             Utilicé MySQL, Axios y otras integraciones de servicios mediante APIs.`,
          },
          infoEducation:{
            infoCertification:{
              img:'https://www.freecodecamp.org/espanol/news/content/images/2020/11/fcc_puck_600_social-1.jpg',
              title:"Certificacion",
              role:"Legacy JavaScript Algorithms and Data Structures",
              date:"Free Code Camp",
              link: `https://www.freecodecamp.org/espanol/certification/Erick_Yael_Mtz_G/javascript-algorithms-and-data-structures`
            },
            infoTecnico:{
              img:'/img/empresas-logos/cetecLogo.png',
              title:"Tecnico",
              role:"En Sistemas y web master",
              date:"Cetec Sta Clara S.C",
            },
            infoBachiller:{
              img:'/img/empresas-logos/bachiller.jpg',
              title:"Bachillerato tecnico",
              role:"",
              date:"Centro de estudios administrativos Quetzalcoatl",
            },
          },
          iconsLenguage: {
              html: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="html">
                      <polygon fill="#E44D26" points="3.345 21.601 1.419 0 22.581 0 20.653 21.598 11.987 24 3.345 21.601"></polygon>
                      <polygon fill="#F16529" points="12 22.164 19.002 20.222 20.65 1.766 12 1.766"></polygon>
                      <path fill="#EBEBEB" d="M12,9.778H8.495L8.252,7.065H12v-2.65H5.357l0.063,0.711l0.651,7.3H12V9.778L12,9.778z M12,16.658l-0.012,0.003l-2.95-0.797l-0.189-2.113H6.19l0.371,4.16l5.427,1.507L12,19.414V16.658L12,16.658z"></path>
                      <path fill="#FFF" d="M11.991,9.778v2.649h3.263l-0.308,3.436l-2.955,0.797v2.756l5.431-1.505l0.04-0.448l0.623-6.974l0.064-0.712h-0.714H11.991L11.991,9.778z M11.991,4.415v2.65h6.399l0.053-0.596l0.121-1.343l0.063-0.711H11.991L11.991,4.415z"></path>
                      <polygon fill="#DEDEDE" points="12 23.996 11.987 24 12 24 12 23.996"></polygon>
                      <path fill="#C64321" d="M12,7.065L12,7.065H8.252l0.242,2.713h3.496H12V7.065L12,7.065z M12,0H1.419l1.926,21.601L11.987,24L12,23.996v-4.582v0l-0.012,0.004l-5.427-1.507l-0.371-4.16h2.659l0.189,2.113l2.95,0.797l0.003-0.001v0L12,16.658v-4.231H6.071l-0.651-7.3L5.357,4.415h6.634H12V0L12,0z"></path>
                      <path fill="#CDCDCD" d="M8.849,13.751H6.19l0.371,4.16l5.427,1.507L12,19.414v0l-0.009,0.002v-2.756l-0.003,0.001l-2.95-0.797L8.849,13.751L8.849,13.751z M11.991,4.415H5.357l0.063,0.711l0.651,7.3H12h-0.009V9.778H8.495L8.252,7.065H12h-0.009V4.415L11.991,4.415z"></path>
                      <path fill="#DEDEDE" d="M12,16.658l-0.009,0.002v0v2.756L12,19.414V16.658L12,16.658z M12,9.778h-0.009v2.649H12V9.778L12,9.778z M12,4.415h-0.009v2.65H12V4.415L12,4.415z"></path>
                      </svg>`,
              css: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />`,
              js: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="javascript">
  <rect width="22.5" height="22.5" x=".75" y=".75" fill="#F0D91F"></rect>
  <path d="M23.25,24H0.75C0.336,24,0,23.664,0,23.25V0.75C0,0.336,0.336,0,0.75,0h22.5C23.664,0,24,0.336,24,0.75v22.5C24,23.664,23.664,24,23.25,24z M1.5,22.5h21v-21h-21V22.5z"></path>
  <path d="M9.5 22c-1.538 0-2.876-1.092-3.184-2.596C6.272 19.189 6.25 18.97 6.25 18.75 6.25 18.336 6.586 18 7 18s.75.336.75.75c0 .119.012.238.036.354C7.951 19.913 8.672 20.5 9.5 20.5c.965 0 1.75-.785 1.75-1.75v-7c0-.414.336-.75.75-.75s.75.336.75.75v7C12.75 20.542 11.292 22 9.5 22zM18.25 22c-1.93 0-3.5-1.346-3.5-3 0-.414.336-.75.75-.75s.75.336.75.75c0 .813.916 1.5 2 1.5s2-.687 2-1.5c0-.736-.746-1.336-2.218-1.782C15.916 16.575 14.75 15.433 14.75 14c0-1.654 1.57-3 3.5-3s3.5 1.346 3.5 3c0 .414-.336.75-.75.75s-.75-.336-.75-.75c0-.813-.916-1.5-2-1.5s-2 .687-2 1.5c0 .965 1.39 1.531 2.218 1.782 2.713.823 3.282 2.204 3.282 3.218C21.75 20.654 20.18 22 18.25 22z"></path>
                    </svg>`,
              bootstrap: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />`,
              vue: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" /> `,
              github: `<svg viewBox="0 0 128 128">
                         <g fill="#ffffff"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                      </svg> `,
              vite: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />`,
              mySql: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />`,
              laravel: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />`,
              axios:` <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" />`,
              react: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />`,
          },
        };
      },
      methods: {
        showToast:function(){
          //toast
          const toastLiveExample = document.getElementById('liveToast')
            //instance of the toast
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
            //show from the instance
              toastBootstrap.show()
        },
        openLink:function(link){
          link && window.open(link)
       },
       copyText:function(text){
          navigator.clipboard.writeText(text).then(()=>console.log('Hola copiaste mi email. Excelente dia')).catch(error=>console.log('algo salio mal',error))
          this.showToast()
        },
      },
      mounted() {},
      watch: {}
    
}
export default AppComponent;

  

