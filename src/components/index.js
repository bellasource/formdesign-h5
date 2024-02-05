import AForm from "./aform/form.vue";


const components = [
  AForm
]

export default {
  install: function(Vue) {
    for (let comp of components) {
      Vue.component(comp.name, comp)
    }
  }
}