import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.findAll('lead');
  },
  setupController(controller, model){
    this._super(...arguments);
    controller.set('filteredList', model);
  },
  actions:{
    search(searchName){
      if(Ember.isEmpty(searchName)){
          this.controller.set('filteredList', this.controller.get('model'));
          return;
      }
      let leadFound =  this.controller.get('model').filter((lead) => {
        return lead.get("firstName").toLowerCase() == searchName.toLowerCase();
      });
      if(leadFound){
        this.controller.set('filteredList', leadFound);
      }
    }
  }
});
