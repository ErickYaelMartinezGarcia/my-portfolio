
import { createApp } from 'vue';
// importaciones desde las carpetas abajo
import AppComponent from './components/AppComponent.js';
import HeaderComponent from './components/HeaderComponent.js';
import PresentationComponent from './components/PresentationComponent.js';
import JobCardComponent from './components/JobCardComponent.js';
import EducationCardComponent from './components/EducationCardComponent.js';
import ProyectComponentCard from './components/ProyectComponentCard.vue';


const app = createApp({data() {return {}},methods: {},mounted() {},watch: {}});

//importaciones com kebap-case abajo 
app.component('app-component', AppComponent);
app.component('header-component', HeaderComponent);
app.component('presentation-component', PresentationComponent);
app.component('job-card-component', JobCardComponent);
app.component('education-card-component', EducationCardComponent);
app.component('proyect-component-card', ProyectComponentCard);

app.mount('#app');