
const HeaderComponent = {
    props:{

    },
    template:`

    <nav class="navbar navbar-expand-lg col-lg-10 mx-auto fs-4 fw-normal" data-bs-theme="dark">
      <div class="container-fluid text-white">
        <a class="navbar-brand fs-2 fw-medium font-monospace" href="#Inicio" 
        style="color:rgb(6,182,212)"
        v-text="'< Erick/>'"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse me-auto" id="navbarNav">
          <ul class="navbar-nav col-lg-9 ms-auto">
          <template v-for="(title,key) in titles" :key="key">
            <li :id="key + 1" class="nav-item mx-auto">
              <a class="nav-link active" aria-current="page" :href="'#'+title" 
              :style="{ color: (parseInt(key) + 1 == titleSelected) ? 'rgb(6,182,212)' : 'rgb(255,255,255)' }"
                v-text="title" @mouseenter="hoveredTitle(key)" @mouseout="titleSelected = 0">
              </a>
            </li>
               </template>
          </ul>
        </div>
      </div>
  </nav>
`,
    
data() {
    return {
        titles:['Inicio','Experiencia','Educación','Proyectos','Contacto','Skills'],
        titleSelected: 0,
    };
  },
  methods: {
    hoveredTitle:function(llave) {
        this.titleSelected = parseInt(llave) + 1
    },
  },
  mounted() {},
  watch: {}

}
export default HeaderComponent;

