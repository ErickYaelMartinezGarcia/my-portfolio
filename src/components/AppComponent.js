
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
            <div class="col-lg-5 col-md-6 mx-lg-5 mt-5 mt-lg-0 me-auto rounded-5">
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
                
                
              </section>

               <section id="Educacion" style="min-height:100vh">
                <h1 class="text-white text-center mb-5 pb-5">Educaci&oacuten</h1>
                    <div class="row mx-auto">
                     <education-card-component class="col-lg-4 mx-auto" :info-job="infoCertification"/>
                      <education-card-component class="col-lg-4 mx-auto" :info-job="infoTecnico" />
                      <education-card-component class="col-lg-4 mx-auto" :info-job="infoBachiller" />
                    </div>
                     
              </section>


               <section id="Proyectos" style="min-height:100vh">
                <h1 class="text-white text-center mb-5 pb-5">Proyectos</h1>
              
              </section>

              <footer id="Contacto" class="mx-auto p-5 m-3 rounded-4" style="background-color: rgba(70,170,130); height:50vh">
              <div class="row col-12">
                  <div class="col-lg-4 text-center">
                   <h4 class="fw-bold" style="color:rgb(0,4,18)"> Erick Yael Martinez Garcia</h4>

                   <div class="d-flex mx-auto text-center mt-5 col-lg-10">
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

                      <div>
                        <a class="btn-lg btn btn-primary" href="/documents/cvErickYaelMartinezGarcia.pdf" download="CV_ErickYaelMartinezGarcia.pdf">Descarga mi cv</a>
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
            description:`--Desarrolle y actualize modulos para el cliente y de uso interno, creados con Vue.js 3,
             bootstrap y  de Laravel. Utilize mySQL, axios entre otras integraciones de servicios mediante APIs`,
          },
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
          

        };
      },
      methods: {
        openLink:function(link){
          link && window.open(link)
       },
       copyText:function(text){
          navigator.clipboard.writeText(text).then(()=>console.log('Texto copiado')).catch(error=>console.log('algo salio mal',error))
       },
      },
      mounted() {},
      watch: {}
    
}
export default AppComponent;

  

